<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { QrcodeIcon, UsergroupIcon } from 'tdesign-icons-vue-next';

import { getPairingConfig } from '../api/pairing';
import type { PairingConfigModel } from '../api/model/pairing';
import GeneratePairCode from './components/GeneratePairCode.vue';
import DeviceList from './components/DeviceList.vue';

const activeTab = ref('generate');
const config = ref<PairingConfigModel | null>(null);
const loading = ref(true);
const loadError = ref('');
const canManageDevices = computed(() => config.value?.canManageDevices === true);

async function loadConfig() {
  try {
    config.value = await getPairingConfig();
    if (!canManageDevices.value) activeTab.value = 'generate';
  } catch (e: any) {
    loadError.value = e?.message || String(e);
  } finally {
    loading.value = false;
  }
}

onMounted(loadConfig);
</script>

<template>
  <div class="rolithax-page flex flex-col gap-5">
    <div class="rolithax-card flex flex-col xl:flex-row xl:items-center justify-between gap-5 p-5">
      <div class="flex flex-col gap-2">
        <h2 class="rolithax-title text-lg font-bold m-0">扫码配对</h2>
        <p class="rolithax-muted text-sm m-0">
          生成一次性配对二维码；设备权限由当前登录账号决定。
        </p>
      </div>

      <t-radio-group v-if="canManageDevices" v-model="activeTab" variant="default-filled" class="self-start xl:self-auto">
        <t-radio-button value="generate">
          <span class="flex items-center gap-1"><qrcode-icon />生成配对码</span>
        </t-radio-button>
        <t-radio-button value="devices">
          <span class="flex items-center gap-1"><usergroup-icon />已配对设备</span>
        </t-radio-button>
      </t-radio-group>
    </div>

    <div v-if="loading" class="rolithax-card p-5 rolithax-muted">正在加载配对配置…</div>
    <div v-else-if="loadError" class="rolithax-card p-5 rolithax-error">加载配对配置失败：{{ loadError }}</div>
    <template v-else-if="config">
      <transition name="rolithax-fade" mode="out-in">
        <keep-alive>
          <generate-pair-code v-if="activeTab === 'generate'" :config="config" />
          <device-list v-else-if="canManageDevices" />
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<style scoped>
@unocss;

.rolithax-page {
  color: var(--td-text-color-primary);
  padding-bottom: 8px;
}

.rolithax-error {
  color: var(--td-error-color);
}

.rolithax-fade-enter-active,
.rolithax-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.rolithax-fade-enter-from,
.rolithax-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
