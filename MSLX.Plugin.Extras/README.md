# MSLX Android 扩展插件

由 **WLudy1012** 开发的 MSLX Daemon 第三方插件，为 **MSLX Android** 提供统一的服务端扩展能力，集中承载客户端所需的整合与增强功能。
当前包含扫码配对、设备授权管理和服务端图标，以**单个 DLL** 分发；后续增强功能可继续集成在此插件中。
统一入口为 `AndroidExtensionsPlugin`，ID 为 `mslx-plugin-android-thirdparty-addons`，前端包名与此一致。
插件版本 **1.1.3**，声明的最低 **MSLX Daemon 版本为 1.5.10.2**。
插件图标为内嵌的硫磺史莱姆 PNG，由 `/plugins/{id}/{version}/icon.png` 下发。

> Daemon 的 PluginManager 对每个程序集只识别第一个 `IPlugin` 实现，因此合并采用单一入口，
> 两组规范端点前缀为 `/api/plugin/mslx-plugin-android-thirdparty-addons/pair`、`/api/plugin/mslx-plugin-android-thirdparty-addons/icon`。
> 1.1.1 的 `/api/plugin/mslx-plugin-pairing-server-icon/` 路径及旧版 App 的 `/api/plugins/pair`、`/api/plugins/icon` 作为兼容入口，复用相同服务、权限校验与限流。

## 安装

1. 运行 `pack.ps1`（需 .NET 10 SDK；`MSLX.SDK` 自动探测：仓库内 `MSLX-dev`、
   平级 `MSLX-dev`、平级 `MSLX-Android/MSLX-dev`，也可用 `-SdkDir` 或
   `-p:MSLX_SDK_DIR=<SDK 目录>` 指定）得到 `dist/MSLX.Plugin.AndroidExtensions.dll`；
2. 将 `MSLX.Plugin.AndroidExtensions.dll` 复制到 Daemon 数据目录的 `Plugins/` 子目录：
   - Windows：`%APPDATA%\MSLX\MSLXData\DaemonData\Plugins\`
   - macOS：`~/Library/Application Support/MSLX/MSLXData/DaemonData/Plugins/`
3. 重启 Daemon，或在面板插件管理中热加载；
4. 日志出现 `[mslx-plugin-android-thirdparty-addons] MSLX Android 扩展插件已挂载`，再确认面板出现「设置 → 扫码配对」。

### 从旧版本升级

1. 停止 Daemon，用本版 `MSLX.Plugin.AndroidExtensions.dll` 覆盖同名旧 DLL（旧 ID `mslx-plugin-android-extensions`），并移出 `MSLX.Plugin.Extras.dll` 或 `MSLX.Plugin.PairingServerIcon.dll`（旧 ID：`mslx-extras` / `mslx-plugin-extras` / `mslx-plugin-pairing-server-icon`），以及更早的 `MSLX.Plugin.Pairing.dll` / `MSLX.Plugin.ServerIcon.dll`，避免端点重复注册。
2. 保留 `PluginsData/mslx-pair/`、`PluginsData/mslx-icon/` 和 Daemon 用户数据；改名继续读取原数据位置，不要求重新配对。
3. 放入新的 `MSLX.Plugin.AndroidExtensions.dll`，启动 Daemon 并刷新面板。旧版 Android App 可继续使用兼容接口。

---

## 一、扫码配对（`/api/plugin/mslx-plugin-android-thirdparty-addons/pair`）

在已授权的客户端（App / 面板 / curl）生成**一次性配对二维码**，手机 App 扫码后自动换取一枚
**独立受限**的 API Key，免去手输长 Key。每台配对设备对应一个独立的 Daemon 用户：可撤销、可过期
（默认 30 天，可选 1–365 天）、可审计，服务端只保存 API Key 前缀，完整 Key 仅返回给扫码设备一次。

除 `redeem` 外均要求 **admin** 角色鉴权。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | `/codes` | 生成一次性配对码（TTL 120s，仅内存保存）。可带 `scope=full\|limited`、`resources[]`、`deviceTtlDays`、`publicUrl` |
| POST | `/redeem` | 兑换配对码（匿名端点，插件内部强校验：HMAC 签名 / 时效 / 一次性 / IP 限速与失败锁定） |
| GET | `/devices` | 已配对设备列表（脱敏：Key 前缀、指纹前缀、状态、有效期） |
| POST | `/devices/{deviceId}/revoke` | 撤销设备（删除配对用户，Key 立即失效） |

二维码载荷为 `mslxp1:` + Base64Url(JSON)，`payload` 字段即二维码原文；面板与 App 只负责显示/回传，
**不自行拼装或验签**（客户端无安装密钥）。配对码 120 秒过期、单次使用、仅内存保存；同 IP 每分钟
最多 10 次兑换、连续失败 5 次临时锁定 15 分钟。

## 二、服务端图标（`/api/plugin/mslx-plugin-android-thirdparty-addons/icon`）

为实例统一提供图标，供 App / 面板实例卡片展示。**来源优先级**（结果带 24 小时磁盘缓存）：
实例目录 `server-icon.png` → 插件磁盘缓存 → 第三方状态 API（`mcsrvstat.us` → `mcstatus.io`，
仅当 `server.properties` 显式配置了**公网** `server-ip` 才外发）。无可用来源返回 `404 + message`。

逐实例校验 `server:{id}` 资源权限（admin / system-admin 直通）。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/server/{id}` | 返回图标 PNG 字节流（`image/png`）；无图标时返回 `{code,message}` JSON |
| POST | `/server/{id}/refresh` | 清除该实例的第三方图标磁盘缓存，下次请求重新拉取 |

---

## 数据位置

- 配对配置：`<AppData>/PluginsData/mslx-pair/Config.json`（安装密钥 + 设备记录）
- 图标缓存：`<AppData>/PluginsData/mslx-icon/IconCache/<实例 id>.png`（TTL 24 小时）
- 配对设备对应的用户：Daemon `UserList.json` 中用户名形如 `pair_dxxxxxxxxxx`
