// 宿主（MSLX WebPanel）通过 window 暴露给插件的能力声明
declare module 'mslx-request' {
  const request: any;
  export default request;
}

declare global {
  interface Window {
    /** 宿主 Vue / VueRouter / Pinia / TDesign 命名空间（构建时已外部化，等价于 import） */
    Vue: any;
    VueRouter: any;
    Pinia: any;
    TDesign: any;
    /** 宿主 request 实例（VAxios）：url 相对 Daemon，自动注入鉴权头并解包 { code, message, data } */
    mslxRequest: any;
    /** 宿主 Pinia store 集合（getUserStore 等） */
    MSLX_Stores: any;
    MSLX_API: any;
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
