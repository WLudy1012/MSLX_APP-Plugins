using System.Reflection;
using Microsoft.AspNetCore.Routing;
using MSLX.Plugin.Pairing;
using MSLX.Plugin.ServerIcon;
using MSLX.SDK;

namespace MSLX.Plugin.Extras;

/// <summary>
/// MSLX Daemon 统一增强插件：把「扫码配对」与「服务端图标」两组能力打包进单个 DLL。
///
/// Daemon 的 PluginManager 对每个程序集只识别第一个 IPlugin 实现，因此这里用单一入口，
/// 在 OnRegisterEndpoints 中同时挂载两组端点（路由前缀 <c>/api/plugins/pair</c> 与
/// <c>/api/plugins/icon</c> 互不冲突）。两组服务各自保持原有鉴权口径与生命周期。
///
/// 插件图标为内嵌在程序集内的硫磺史莱姆 PNG，运行时转换为 data URI 供面板 <c>&lt;img&gt;</c> 渲染。
/// </summary>
public sealed class ExtrasPlugin : IPlugin
{
    public string Id => "mslx-extras";

    public string Name => "MSLX 增强插件";

    public string Description =>
        "扫码配对（一次性二维码、设备独立可撤销/可过期）+ 服务端图标（本地 server-icon.png 优先、" +
        "第三方状态 API 回退并 24 小时缓存），两组能力合并在单个插件内提供。";

    public string Version => "1.0.0";

    public string MinSDKVersion => "1.5.10.2";

    public string Developer => "MSLX App";

    public string AuthorUrl => "https://github.com/WLudy1012";

    public string PluginUrl => "https://github.com/WLudy1012/MSLX_APP-Android";

    /// <summary>插件图标：内嵌硫磺史莱姆 PNG 转 data URI（懒加载并缓存）。</summary>
    public string Icon => _icon ??= LoadIconDataUri();

    private PairingService? _pairing;
    private ServerIconService? _serverIcon;
    private bool _pairingInitialized;
    private static string? _icon;

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

        PairingEndpoints.Map(endpoints, _pairing);
        ServerIconEndpoints.Map(endpoints, _serverIcon);

        global::MSLX.SDK.MSLX.Logger.Info("[Extras] 增强插件已挂载 /api/plugins/pair 与 /api/plugins/icon");
    }

    private static string LoadIconDataUri()
    {
        try
        {
            var assembly = Assembly.GetExecutingAssembly();
            // 资源逻辑名形如 MSLX.Plugin.Extras.Assets.sulfur.png，按后缀匹配更稳妥
            var resourceName = Array.Find(assembly.GetManifestResourceNames(),
                n => n.EndsWith("sulfur.png", StringComparison.OrdinalIgnoreCase));
            if (resourceName == null) return DefaultIconUrl;

            using var stream = assembly.GetManifestResourceStream(resourceName);
            if (stream == null) return DefaultIconUrl;

            using var ms = new MemoryStream();
            stream.CopyTo(ms);
            return $"data:image/png;base64,{Convert.ToBase64String(ms.ToArray())}";
        }
        catch
        {
            return DefaultIconUrl;
        }
    }

    private const string DefaultIconUrl = "https://www.mslmc.cn/logo.png";
}
