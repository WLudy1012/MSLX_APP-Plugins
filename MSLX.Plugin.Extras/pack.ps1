# Build and package the pairing and server-icon plugin for MSLX (pairing + server-icon) into an installable single-file DLL.
# Usage: powershell -ExecutionPolicy Bypass -File pack.ps1 [-SdkDir <MSLX.SDK dir>] [-Version <x.y.z>]
param(
    [string]$SdkDir = '',      # 覆盖 MSLX.SDK 源码位置（默认自动探测，见 csproj）
    [string]$Version = '',     # 覆盖版本号（发布时由 tag 注入）
    [switch]$BuildFrontend     # 打包前重建面板页面前端（需要 pnpm；dist 已入库，常规发版无需）
)
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$proj = Join-Path $root 'MSLX.Plugin.Extras.csproj'
$dist = Join-Path $root 'dist'

# 面板页面前端产物（随 DLL 内嵌分发）：entry 与插件图标（图标源：Frontend/public/icon.png，构建自动拷贝到 dist）
$feDir = Join-Path $root 'Frontend'
$feEntry = Join-Path $feDir 'dist\mslx-plugin-entry.js'
$feIcon = Join-Path $feDir 'dist\icon.png'

if ($BuildFrontend) {
    Write-Host '[0/3] Building frontend (pnpm install + build)...'
    Push-Location $feDir
    try {
        pnpm install
        if ($LASTEXITCODE -ne 0) { throw 'pnpm install failed' }
        pnpm build
        if ($LASTEXITCODE -ne 0) { throw 'pnpm build failed' }
    }
    finally { Pop-Location }
}

if (-not (Test-Path $feEntry)) {
    throw "前端产物缺失: $feEntry。请先执行: cd Frontend; pnpm install; pnpm build（或以 -BuildFrontend 运行本脚本）"
}
if (-not (Test-Path $feIcon)) {
    throw "插件图标缺失: $feIcon（由 Frontend/public/icon.png 在 pnpm build 时自动拷贝）"
}

Write-Host '[1/3] Building plugin (Release; 内嵌 Frontend/dist)...'
$buildArgs = @($proj, '-c', 'Release', '--nologo')
if ($SdkDir) { $buildArgs += "-p:MSLX_SDK_DIR=$SdkDir" }
if ($Version) { $buildArgs += "-p:Version=$Version" }
dotnet build @buildArgs
if ($LASTEXITCODE -ne 0) { throw 'dotnet build failed' }

$bin = Join-Path $root 'bin\Release\net10.0'
$dll = Join-Path $bin 'MSLX.Plugin.PairingServerIcon.dll'
$pdb = Join-Path $bin 'MSLX.Plugin.PairingServerIcon.pdb'
if (-not (Test-Path $dll)) { throw "dll not found: $dll" }

Write-Host '[2/3] Collecting artifacts...'
New-Item -ItemType Directory -Force -Path $dist | Out-Null
# 仅清理本工程旧名称的构建产物，避免 dist 中同时出现新旧安装包而误装。
foreach ($legacyName in @('MSLX.Plugin.Extras.dll', 'MSLX.Plugin.Extras.pdb', 'MSLX.Plugin.Extras.zip')) {
    $legacyPath = Join-Path $dist $legacyName
    if (Test-Path -LiteralPath $legacyPath) { Remove-Item -LiteralPath $legacyPath -Force }
}
Copy-Item $dll (Join-Path $dist 'MSLX.Plugin.PairingServerIcon.dll') -Force
if (Test-Path $pdb) { Copy-Item $pdb (Join-Path $dist 'MSLX.Plugin.PairingServerIcon.pdb') -Force }
Copy-Item (Join-Path $root 'README.md') (Join-Path $dist 'README.md') -Force

Write-Host '[3/3] Creating zip package...'
$zip = Join-Path $dist 'MSLX.Plugin.PairingServerIcon.zip'
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $dist 'MSLX.Plugin.PairingServerIcon.dll'), (Join-Path $dist 'README.md') -DestinationPath $zip

Write-Host ''
Write-Host 'Done. Install artifacts:'
Write-Host "  dll : $(Join-Path $dist 'MSLX.Plugin.PairingServerIcon.dll')"
Write-Host "  zip : $zip"
Write-Host ''
Write-Host "Embedded frontend: $feEntry"
Write-Host "Embedded icon    : $feIcon"
Write-Host ''
Write-Host 'Install: copy the dll into <Daemon AppData>/Plugins/ and restart the daemon,'
Write-Host 'or use the plugin manager download/install API with a public URL to the dll.'
