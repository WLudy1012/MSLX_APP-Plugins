using Microsoft.AspNetCore.Routing;
using MSLX.Plugin.Pairing;
using MSLX.Plugin.ServerIcon;
using MSLX.SDK;

namespace MSLX.Plugin.AndroidExtensions;

/// <summary>
/// MSLX Android 扩展插件：为 MSLX Android 提供统一服务端扩展能力的第三方插件。
///
/// Daemon 的 PluginManager 对每个程序集只识别第一个 IPlugin 实现，因此这里用单一入口，
/// 在 OnRegisterEndpoints 中按插件 ID 挂载两组端点，同时保留旧版 App 的兼容入口。
/// 两组服务各自保持原有鉴权口径与生命周期。
///
/// 插件图标为硫磺史莱姆 PNG（Frontend/dist/icon.png，随前端产物内嵌）；Icon 返回相对文件名，
/// Daemon 插件列表接口会拼成 <c>/plugins/{id}/{version}/icon.png</c> 由静态资源管线匿名下发。
/// </summary>
public sealed class AndroidExtensionsPlugin : IPlugin
{
    /// <summary>
    /// 插件唯一标识须与前端 package.json.name 和 pluginConfig.name 一致。
    /// DLL 文件名是程序集名称，不要求等于 ID；旧插件须先卸载，避免重复注册端点。
    /// </summary>
    public const string PluginId = "mslx-plugin-android-thirdparty-addons";

    // 按官方规范将公开 API 放在 /api/plugin/{plugin-id}/ 下，防止插件之间路由冲突。
    public const string ApiPrefix = "/api/plugin/" + PluginId;

    public string Id => PluginId;

    public string Name => "MSLX Android 扩展插件";

    public string Description =>
        "MSLX Android 配套的第三方扩展插件，提供统一的服务端增强能力。" +
        "当前包含扫码配对、设备授权管理和服务端图标，并内置面板扫码配对页面。";

    public string Version => "1.1.3";

    public string MinSDKVersion => "1.5.10.2";

    public string Developer => "WLudy1012";

    public string AuthorUrl => "https://github.com/WLudy1012";

    public string PluginUrl => "https://github.com/WLudy1012/MSLX_APP-Plugins";

    /// <summary>插件图标：相对文件名（Daemon 会拼成 /plugins/{id}/{version}/icon.png 下发 Frontend/dist/icon.png）。</summary>
    public string Icon => "icon.png";

    private PairingService? _pairing;
    private ServerIconService? _serverIcon;
    private bool _pairingInitialized;

    public void OnLoad()
    {
        // 配对：安装密钥准备 + 过期清理定时器（幂等，热加载多次仅初始化一次）
        _pairing ??= new PairingService();
        if (!_pairingInitialized)
        {
            _pairingInitialized = true;
            _pairing.Initialize();
        }

        // 图标：无状态，仅准备实例
        _serverIcon ??= new ServerIconService();
    }

    public void OnUnload()
    {
        _pairing?.Shutdown();
        _pairingInitialized = false;
    }

    public void OnRegisterEndpoints(IEndpointRouteBuilder endpoints)
    {
        _pairing ??= new PairingService();
        _serverIcon ??= new ServerIconService();

        PairingEndpoints.Map(endpoints, _pairing, ApiPrefix + "/pair");
        ServerIconEndpoints.Map(endpoints, _serverIcon, ApiPrefix + "/icon");

        // 兼容 1.1.1 已发布的路径，避免升级期间仍加载旧入口的面板请求失败。
        // 三组路径共用服务实例，配对码、限流和权限校验保持一致。
        const string previousApiPrefix = "/api/plugin/mslx-plugin-pairing-server-icon";
        PairingEndpoints.Map(endpoints, _pairing, previousApiPrefix + "/pair");
        ServerIconEndpoints.Map(endpoints, _serverIcon, previousApiPrefix + "/icon");

        // 旧版 Android App 仍调用这些地址；共用服务和鉴权处理，保留已有配对与图标功能。
        PairingEndpoints.Map(endpoints, _pairing, "/api/plugins/pair");
        ServerIconEndpoints.Map(endpoints, _serverIcon, "/api/plugins/icon");

        global::MSLX.SDK.MSLX.Logger.Info($"[{PluginId}] MSLX Android 扩展插件已挂载 {ApiPrefix}/pair 与 {ApiPrefix}/icon（含旧版 App 兼容入口）");
    }
}
