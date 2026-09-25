# MSLX Android 扩展插件

由 **WLudy1012** 开发的 [MSLX Daemon](https://github.com/MSLTeam/MSLX) 第三方插件，为 **MSLX Android** 提供统一的服务端扩展能力，集中承载客户端所需的整合与增强功能。
当前已包含扫码配对、设备授权管理和服务端图标，后续增强功能可继续在此插件中扩展。
插件以单个 DLL 形式分发，放入 Daemon 数据目录的 `Plugins/` 即可安装。

> 本仓库为 [MSLX_APP-Android](https://github.com/WLudy1012/MSLX_APP-Android) 配套插件的独立源码仓库。
> 协议 [AGPL-3.0](LICENSE)。

## 插件列表

| 插件 | Id | 说明 |
| --- | --- | --- |
| [MSLX Android 扩展插件](MSLX.Plugin.Extras/) | `mslx-plugin-android-extensions` | 一次性二维码配对、配对设备管理与服务端图标，单 DLL 分发，自带面板页面 |

### 功能与兼容要求

- 声明的最低 **MSLX Daemon 版本为 1.5.10.2**；这是插件的 `MinSDKVersion`，不是插件自身版本或 .NET SDK 版本。
- 当前插件版本：**1.1.2**。后端 ID、前端 `package.json.name` 与 `pluginConfig.name` 均为 `mslx-plugin-android-extensions`。
- 命名与 API 前缀依据 [MSLX 插件开发规范](https://mslx.mslmc.cn/plugin-dev/init/start/)；源码目录暂沿用 `MSLX.Plugin.Extras/`，发布文件名已改为 `MSLX.Plugin.AndroidExtensions`。

- **扫码配对**：生成一次性配对二维码（120s 有效、可撤销、可过期），App 扫码接入；
  - **面板内置页面**：安装插件后面板「设置 → 扫码配对」自动出现（生成配对码 / 已配对设备双页签，含撤销二次确认）；
  - 页面前端随插件 DLL 内嵌分发（`Frontend/dist/mslx-plugin-entry.js` → Daemon 经 `/plugins/mslx-plugin-android-extensions/{version}/` 下发），无需面板侧改动。
- **服务端图标**：本地 `server-icon.png` 优先，第三方状态 API 回退并 24 小时缓存。
- 插件图标：硫磺史莱姆，源文件 `Frontend/public/icon.png`（`Assets/sulfur.png` 同源），构建时自动拷贝到 `Frontend/dist/icon.png`。按 Daemon 约定 `Icon => "icon.png"`，插件列表接口自动拼成 `/plugins/{id}/{version}/icon.png` 下发。

## 构建

要求：.NET 10 SDK + MSLX.SDK 源码（`MSLTeam/MSLX` 仓库 `dev` 分支的 `MSLX.SDK` 目录）。

```powershell
# SDK 位置自动探测（本仓库内 MSLX-dev / 平级 MSLX-dev / 平级 MSLX-Android 内的 MSLX-dev），
# 也可显式指定：
powershell -ExecutionPolicy Bypass -File MSLX.Plugin.Extras/pack.ps1 -SdkDir D:\MSLX\MSLX-dev\MSLX.SDK
```

产物在 `MSLX.Plugin.Extras/dist/`：`MSLX.Plugin.AndroidExtensions.dll`（安装用）与 `MSLX.Plugin.AndroidExtensions.zip`（DLL + README）。

### 面板页面（前端）开发

面板页面工程在 `MSLX.Plugin.Extras/Frontend/`；构建产物 `Frontend/dist/`（`mslx-plugin-entry.js` + `icon.png`）**已提交入库**，CI 打包无需 Node。静态资源放 `Frontend/public/`（如 `icon.png`），`pnpm build` 会自动拷贝到 `dist/`。

```bash
cd MSLX.Plugin.Extras/Frontend
pnpm install
pnpm build        # 产出 dist/mslx-plugin-entry.js（单文件 ESM，样式经 JS 注入）
```

宿主插件机制约束：

- 只从 `vue` / `vue-router` / `pinia` / `tdesign-vue-next` / `mslx-request` 导入（构建时外部化，运行时取宿主 `window` 全局：`Vue` / `VueRouter` / `Pinia` / `TDesign` / `mslxRequest`）；
- 入口导出 `pluginConfig`：`routes` 通过 `parentName: 'settingsBase'` 挂到面板「设置」分组，`component: 'HOST_LAYOUT'` 可挂一级菜单；
- csproj 将 `Frontend/dist/**` 整体内嵌为程序集资源（`GenerateEmbeddedFilesManifest`），Daemon 用 `ManifestEmbeddedFileProvider(assembly, "Frontend/dist")` 下发。

打包脚本可在构建前自动重建前端：`pack.ps1 -BuildFrontend`（需要 pnpm）。

## 安装

### 从旧插件升级

旧 ID `mslx-extras` / `mslx-plugin-extras` / `mslx-plugin-pairing-server-icon` 与新 ID 不同，不能同时加载。请停止 Daemon，移出旧的 `MSLX.Plugin.Extras.dll` 或 `MSLX.Plugin.PairingServerIcon.dll`（以及更早的 `MSLX.Plugin.Pairing.dll`、`MSLX.Plugin.ServerIcon.dll`），再安装新 DLL 并启动 Daemon、刷新面板。
保留 `PluginsData/mslx-pair/`、`PluginsData/mslx-icon/` 和 Daemon 用户数据，以继续使用已有设备授权与缓存。不要删除这些数据目录。

新接口统一位于 `/api/plugin/mslx-plugin-android-extensions/pair/` 和 `/api/plugin/mslx-plugin-android-extensions/icon/`；1.1.1 的 `/api/plugin/mslx-plugin-pairing-server-icon/` 路径及旧版 Android 客户端使用的 `/api/plugins/pair/`、`/api/plugins/icon/` 仍由相同处理逻辑提供兼容。

### 安装步骤

1. 从 [Releases](../../releases) 下载 `MSLX.Plugin.AndroidExtensions.dll`（或 zip 解压）；
2. 复制到 Daemon 数据目录的 `Plugins/` 子目录：
   - Windows：`%APPDATA%\MSLX\MSLXData\DaemonData\Plugins\`
   - macOS：`~/Library/Application Support/MSLX/MSLXData/DaemonData/Plugins/`
3. 重启 Daemon，或在面板插件管理中热加载（也可经插件管理 API 用公网 URL 安装）。

## 自动发布

推送 `v*` 标签触发 GitHub Actions：检出 `MSLTeam/MSLX`（dev）提供 SDK → 构建打包 → 发布
Release（附 `dll` 与 `zip`）；另行 `workflow_dispatch` 可手动构建产物（不上 Release）。

CNB（cnb.cool）镜像仓库 `WLudy/MSLX_APP-Plugins`（本仓库直推）：`.cnb.yml` 配置 `main` 推送做构建校验、
`v*` 标签构建并发布 CNB Release（同名 `dll` + `zip`）。CNB 下载地址：

```
https://cnb.cool/WLudy/MSLX_APP-Plugins/-/releases/download/{tag}/MSLX.Plugin.AndroidExtensions.dll
```
