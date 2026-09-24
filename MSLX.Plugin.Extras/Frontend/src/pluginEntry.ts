import './style.css';

import PairingPage from './views/PairingPage.vue';

/**
 * MSLX WebPanel 插件入口约定：
 * 宿主 pluginManager.ts 动态 import 本文件（由插件 DLL 内嵌资源 Frontend/dist 提供），
 * 读取导出的 pluginConfig 并注册路由 / UI 扩展。
 * 依赖（vue / tdesign-vue-next / mslx-request 等）已外部化到宿主 window 全局，构建产物为单文件 ESM。
 */
export const pluginConfig = {
  name: 'mslx-extras',
  version: '1.1.0',

  // 注入路由：挂到宿主「设置」分组（settingsBase）下，与「插件管理」同级
  routes: [
    {
      parentName: 'settingsBase',
      path: 'pairing',
      name: 'extrasPairing',
      component: PairingPage,
      meta: { title: '扫码配对', icon: 'qrcode', roleCode: ['admin'] },
    },
  ],
};
