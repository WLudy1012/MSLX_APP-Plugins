# MSLX_APP-Plugins

[MSLX Daemon](https://github.com/MSLTeam/MSLX) 的插件集合，配合 **MSLX App（Android 控制台）** 与面板使用。
插件以单个 DLL 形式分发，放入 Daemon 数据目录的 `Plugins/` 即可安装。

> 本仓库为 [MSLX_APP-Android](https://github.com/WLudy1012/MSLX_APP-Android) 配套插件的独立源码仓库。
> 协议 [AGPL-3.0](LICENSE)。

## 插件列表

| 插件 | Id | 说明 |
| --- | --- | --- |
| [MSLX.Plugin.Extras](MSLX.Plugin.Extras/) | `mslx-extras` | 统一增强：扫码配对（`/api/plugins/pair`）+ 服务端图标（`/api/plugins/icon`），单 DLL 双能力 |

## 构建

要求：.NET 10 SDK + MSLX.SDK 源码（`MSLTeam/MSLX` 仓库 `dev` 分支的 `MSLX.SDK` 目录）。

```powershell
# SDK 位置自动探测（本仓库内 MSLX-dev / 平级 MSLX-dev / 平级 MSLX-Android 内的 MSLX-dev），
# 也可显式指定：
powershell -ExecutionPolicy Bypass -File MSLX.Plugin.Extras/pack.ps1 -SdkDir D:\MSLX\MSLX-dev\MSLX.SDK
```

产物在 `MSLX.Plugin.Extras/dist/`：`MSLX.Plugin.Extras.dll`（安装用）与 `MSLX.Plugin.Extras.zip`（DLL + README）。

## 安装

1. 从 [Releases](../../releases) 下载 `MSLX.Plugin.Extras.dll`（或 zip 解压）；
2. 复制到 Daemon 数据目录的 `Plugins/` 子目录：
   - Windows：`%APPDATA%\MSLX\MSLXData\DaemonData\Plugins\`
   - macOS：`~/Library/Application Support/MSLX/MSLXData/DaemonData/Plugins/`
3. 重启 Daemon，或在面板插件管理中热加载（也可经插件管理 API 用公网 URL 安装）。

## 自动发布

推送 `v*` 标签触发 GitHub Actions：检出 `MSLTeam/MSLX`（dev）提供 SDK → 构建打包 → 发布
Release（附 `dll` 与 `zip`）；另行 `workflow_dispatch` 可手动构建产物（不上 Release）。
