<script setup lang="ts">
// 开发壳说明页：真实页面由宿主面板通过 pluginConfig.routes 挂载
</script>

<template>
  <div style="padding: 24px; font-family: system-ui, sans-serif">
    <h2>扫码配对与服务端图标 — 开发壳</h2>
    <p>本工程以 WebPanel 插件形式运行：执行 <code>pnpm build</code> 后由 Daemon 从插件 DLL 内嵌资源加载 entry。</p>
    <p>本地联调可在宿主插件管理器中临时加载 <code>http://localhost:5001/mslx-plugin-entry.js</code>（配合 <code>pnpm build:watch</code> + <code>pnpm preview</code>）。</p>
  </div>
</template>
