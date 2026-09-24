<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeIcon, UsergroupIcon } from 'tdesign-icons-vue-next';

import GeneratePairCode from './components/GeneratePairCode.vue';
import DeviceList from './components/DeviceList.vue';

// 「生成配对码 / 已配对设备」双页签合并在一个页面内（对应后端同一组 pair 端点）
const activeTab = ref('generate');
</script>

<template>
  <div class="extras-page flex flex-col gap-5">
    <div class="extras-card flex flex-col xl:flex-row xl:items-center justify-between gap-5 p-5">
      <div class="flex flex-col gap-2">
        <h2 class="extras-title text-lg font-bold m-0">扫码配对</h2>
        <p class="extras-muted text-sm m-0">
          生成一次性配对二维码，在另一台设备上用 MSLX App「连接」页扫码即可接入本 Daemon；每台设备独立可撤销、可过期。
        </p>
      </div>

      <t-radio-group v-model="activeTab" variant="default-filled" class="self-start xl:self-auto">
        <t-radio-button value="generate">
          <span class="flex items-center gap-1"><qrcode-icon />生成配对码</span>
        </t-radio-button>
        <t-radio-button value="devices">
          <span class="flex items-center gap-1"><usergroup-icon />已配对设备</span>
        </t-radio-button>
      </t-radio-group>
    </div>

    <transition name="extras-fade" mode="out-in">
      <keep-alive>
        <generate-pair-code v-if="activeTab === 'generate'" />
        <device-list v-else />
      </keep-alive>
    </transition>
  </div>
</template>

<style scoped>
@unocss;

.extras-page {
  color: var(--td-text-color-primary);
  padding-bottom: 8px;
}

.extras-fade-enter-active,
.extras-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.extras-fade-enter-from,
.extras-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
