# Build and package the MSLX unified extras plugin (pairing + server-icon) into an installable single-file DLL.
# Usage: powershell -ExecutionPolicy Bypass -File pack.ps1 [-SdkDir <MSLX.SDK dir>] [-Version <x.y.z>]
param(
    [string]$SdkDir = '',   # 覆盖 MSLX.SDK 源码位置（默认自动探测，见 csproj）
    [string]$Version = ''   # 覆盖版本号（发布时由 tag 注入）
)
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$proj = Join-Path $root 'MSLX.Plugin.Extras.csproj'
$dist = Join-Path $root 'dist'

Write-Host '[1/3] Building plugin (Release)...'
$buildArgs = @($proj, '-c', 'Release', '--nologo')
if ($SdkDir) { $buildArgs += "-p:MSLX_SDK_DIR=$SdkDir" }
if ($Version) { $buildArgs += "-p:Version=$Version" }
dotnet build @buildArgs
if ($LASTEXITCODE -ne 0) { throw 'dotnet build failed' }

$bin = Join-Path $root 'bin\Release\net10.0'
$dll = Join-Path $bin 'MSLX.Plugin.Extras.dll'
$pdb = Join-Path $bin 'MSLX.Plugin.Extras.pdb'
if (-not (Test-Path $dll)) { throw "dll not found: $dll" }

Write-Host '[2/3] Collecting artifacts...'
New-Item -ItemType Directory -Force -Path $dist | Out-Null
Copy-Item $dll (Join-Path $dist 'MSLX.Plugin.Extras.dll') -Force
if (Test-Path $pdb) { Copy-Item $pdb (Join-Path $dist 'MSLX.Plugin.Extras.pdb') -Force }
Copy-Item (Join-Path $root 'README.md') (Join-Path $dist 'README.md') -Force

Write-Host '[3/3] Creating zip package...'
$zip = Join-Path $dist 'MSLX.Plugin.Extras.zip'
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $dist 'MSLX.Plugin.Extras.dll'), (Join-Path $dist 'README.md') -DestinationPath $zip

Write-Host ''
Write-Host 'Done. Install artifacts:'
Write-Host "  dll : $(Join-Path $dist 'MSLX.Plugin.Extras.dll')"
Write-Host "  zip : $zip"
Write-Host ''
Write-Host 'Install: copy the dll into <Daemon AppData>/Plugins/ and restart the daemon,'
Write-Host 'or use the plugin manager download/install API with a public URL to the dll.'
