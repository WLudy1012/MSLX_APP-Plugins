// 独立开发壳：pnpm dev 时用于本地调试（正式运行由宿主面板加载 dist/mslx-plugin-entry.js）
import { createApp } from 'vue';

import App from './App.vue';

createApp(App).mount('#app');
