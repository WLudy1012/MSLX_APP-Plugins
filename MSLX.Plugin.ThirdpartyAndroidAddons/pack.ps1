# Build and package the plugin.
param(
    [string]$SdkDir = '',
    [string]$Version = '',
    [switch]$BuildFrontend
)
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$proj = Join-Path $root 'MSLX.Plugin.ThirdpartyAndroidAddons.csproj'
$dist = Join-Path $root 'dist'
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

if (-not (Test-Path $feEntry)) { throw "Frontend output missing: $feEntry" }
if (-not (Test-Path $feIcon)) { throw "Plugin icon missing: $feIcon" }

Write-Host '[1/3] Building plugin (Release; embedded Frontend/dist)...'
$buildArgs = @($proj, '-c', 'Release', '--nologo')
if ($SdkDir) { $buildArgs += "-p:MSLX_SDK_DIR=$SdkDir" }
if ($Version) { $buildArgs += "-p:Version=$Version" }
dotnet build @buildArgs
if ($LASTEXITCODE -ne 0) { throw 'dotnet build failed' }

$bin = Join-Path $root 'bin\Release\net10.0'
$dll = Join-Path $bin 'MSLX.Plugin.ThirdpartyAndroidAddons.dll'
$pdb = Join-Path $bin 'MSLX.Plugin.ThirdpartyAndroidAddons.pdb'
if (-not (Test-Path $dll)) { throw "dll not found: $dll" }

Write-Host '[2/3] Collecting artifacts...'
New-Item -ItemType Directory -Force -Path $dist | Out-Null
$legacyNames = @('MSLX.Plugin.ThirdpartyAndroidAddons.dll', 'MSLX.Plugin.ThirdpartyAndroidAddons.pdb', 'MSLX.Plugin.ThirdpartyAndroidAddons.zip', 'MSLX.Plugin.AndroidThirdpartyAddons.dll', 'MSLX.Plugin.AndroidThirdpartyAddons.pdb', 'MSLX.Plugin.AndroidThirdpartyAddons.zip', 'MSLX.Plugin.Extras.dll', 'MSLX.Plugin.Extras.pdb', 'MSLX.Plugin.Extras.zip', 'MSLX.Plugin.PairingServerIcon.dll', 'MSLX.Plugin.PairingServerIcon.pdb', 'MSLX.Plugin.PairingServerIcon.zip', 'MSLX.Plugin.AndroidExtensions.dll', 'MSLX.Plugin.AndroidExtensions.pdb', 'MSLX.Plugin.AndroidExtensions.zip')
foreach ($legacyName in $legacyNames) {
    $legacyPath = Join-Path $dist $legacyName
    if (Test-Path -LiteralPath $legacyPath) { Remove-Item -LiteralPath $legacyPath -Force }
}
Copy-Item $dll (Join-Path $dist 'MSLX.Plugin.ThirdpartyAndroidAddons.dll') -Force
if (Test-Path $pdb) { Copy-Item $pdb (Join-Path $dist 'MSLX.Plugin.ThirdpartyAndroidAddons.pdb') -Force }
Copy-Item (Join-Path $root 'README.md') (Join-Path $dist 'README.md') -Force

Write-Host '[3/3] Creating zip package...'
$zip = Join-Path $dist 'MSLX.Plugin.ThirdpartyAndroidAddons.zip'
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $dist 'MSLX.Plugin.ThirdpartyAndroidAddons.dll'), (Join-Path $dist 'README.md') -DestinationPath $zip

Write-Host "Done. DLL: $(Join-Path $dist 'MSLX.Plugin.ThirdpartyAndroidAddons.dll')"
Write-Host "ZIP: $zip"
