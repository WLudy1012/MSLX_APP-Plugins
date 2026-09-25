# MSLX.Plugin.Extras —— 统一增强插件（扫码配对 + 服务端图标）

MSLX Daemon 插件：把原先两个独立插件（`MSLX.Plugin.Pairing` 扫码配对、`MSLX.Plugin.ServerIcon`
服务端图标）合并进**单个 DLL**，由一个 `IPlugin` 入口（`ExtrasPlugin`，Id `mslx-plugin-extras`）同时挂载
两组端点。插件图标为内嵌的硫磺史莱姆 PNG（运行时转 data URI，无需公网地址）。

> Daemon 的 PluginManager 对每个程序集只识别第一个 `IPlugin` 实现，因此合并采用单一入口，
> 两组端点前缀互不冲突：`/api/plugins/pair`、`/api/plugins/icon`。

## 安装

1. 运行 `pack.ps1`（需 .NET 10 SDK；`MSLX.SDK` 自动探测：仓库内 `MSLX-dev`、
   平级 `MSLX-dev`、平级 `MSLX-Android/MSLX-dev`，也可用 `-SdkDir` 或
   `-p:MSLX_SDK_DIR=<SDK 目录>` 指定）得到 `dist/MSLX.Plugin.Extras.dll`；
2. 将 `MSLX.Plugin.Extras.dll` 复制到 Daemon 数据目录的 `Plugins/` 子目录：
   - Windows：`%APPDATA%\MSLX\MSLXData\DaemonData\Plugins\`
   - macOS：`~/Library/Application Support/MSLX/MSLXData/DaemonData/Plugins/`
3. 重启 Daemon，或在面板插件管理中热加载；
4. 日志出现 `[Extras] 增强插件已挂载 /api/plugins/pair 与 /api/plugins/icon` 即成功。

> 若此前安装过旧的 `MSLX.Plugin.Pairing.dll` / `MSLX.Plugin.ServerIcon.dll`，请先删除，避免端点重复注册。

---

## 一、扫码配对（`/api/plugins/pair`）

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

## 二、服务端图标（`/api/plugins/icon`）

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
