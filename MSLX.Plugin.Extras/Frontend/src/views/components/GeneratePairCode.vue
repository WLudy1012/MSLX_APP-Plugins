<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { QrcodeIcon, RefreshIcon, CopyIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import QrcodeVue from 'qrcode.vue';

import { getInstanceOptions, postPairCode } from '../../api/pairing';
import type { PairCodeModel } from '../../api/model/pairing';

// 宿主透传的用户状态：仅用于「对外地址」输入框的占位提示
const userStore = (window as any).MSLX_Stores?.getUserStore?.();
const placeholderUrl = computed(() => userStore?.baseUrl || 'https://your-daemon.example.com:1027');

// 表单
const form = reactive({
  scope: 'full' as 'full' | 'limited',
  resources: [] as string[],
  deviceTtlDays: 30,
  publicUrl: '',
});

// 实例选项（limited 模式资源多选，数据源为 Daemon 实例列表）
const instanceOptions = ref<{ label: string; value: string }[]>([]);
const loadingInstances = ref(false);

async function loadInstances() {
  try {
    loadingInstances.value = true;
    instanceOptions.value = await getInstanceOptions();
  } catch (e: any) {
    MessagePlugin.error('加载实例列表失败: ' + (e?.message || e));
  } finally {
    loadingInstances.value = false;
  }
}

// 生成配对码
const generating = ref(false);
const pairCode = ref<PairCodeModel | null>(null);
const remaining = ref(0);
let timer: any = null;

async function handleGenerate() {
  if (generating.value) return;
  if (form.scope === 'limited' && form.resources.length === 0) {
    MessagePlugin.warning('受限范围请至少选择一个实例资源');
    return;
  }
  try {
    generating.value = true;
    const data = await postPairCode({
      scope: form.scope,
      resources: form.scope === 'limited' ? form.resources : [],
      deviceTtlDays: form.deviceTtlDays,
      publicUrl: form.publicUrl.trim() || undefined,
    });
    pairCode.value = data;
    startCountdown(data?.expiresInSeconds || 120);
  } catch (e: any) {
    MessagePlugin.error('生成配对码失败: ' + (e?.message || e));
  } finally {
    generating.value = false;
  }
}

// 本地倒计时：读取 expiresInSeconds，过期后禁用二维码（签名校验仍由服务端 redeem 时完成）
function startCountdown(seconds: number) {
  stopCountdown();
  remaining.value = Math.max(0, seconds);
  timer = setInterval(() => {
    remaining.value = Math.max(0, remaining.value - 1);
    if (remaining.value === 0) stopCountdown();
  }, 1000);
}
function stopCountdown() {
  if (timer) clearInterval(timer);
  timer = null;
}

const expired = computed(() => pairCode.value !== null && remaining.value === 0);

async function copyPayload() {
  if (!pairCode.value) return;
  try {
    await navigator.clipboard.writeText(pairCode.value.payload);
    MessagePlugin.success('二维码原文已复制');
  } catch {
    MessagePlugin.error('复制失败，请手动选择');
  }
}

onMounted(loadInstances);
onUnmounted(stopCountdown);
</script>

<template>
  <div class="extras-card flex flex-col gap-5 p-5">
    <div class="flex flex-col gap-2">
      <h3 class="extras-title text-base font-bold m-0">生成配对二维码</h3>
      <p class="extras-muted text-sm m-0">
        设置授权范围后生成一次性二维码；在另一台设备的 MSLX App「连接」页选择「扫码配对」扫描即可接入。
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- 表单区 -->
      <div class="flex-1 min-w-0 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="extras-title text-xs font-bold">授权范围</label>
          <t-radio-group v-model="form.scope" variant="default-filled">
            <t-radio-button value="full">完整权限（admin）</t-radio-button>
            <t-radio-button value="limited">受限（指定实例）</t-radio-button>
          </t-radio-group>
        </div>

        <div v-if="form.scope === 'limited'" class="flex flex-col gap-2">
          <label class="extras-title text-xs font-bold">授予实例</label>
          <t-select
            v-model="form.resources"
            :options="instanceOptions"
            :loading="loadingInstances"
            multiple
            clearable
            :min-collapsed-num="3"
            placeholder="选择该设备可管理的实例"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="extras-title text-xs font-bold">设备有效期（天，1–365）</label>
          <t-input-number v-model="form.deviceTtlDays" :min="1" :max="365" theme="column" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="extras-title text-xs font-bold">对外地址（可选，覆盖自动识别）</label>
          <t-input v-model="form.publicUrl" clearable :placeholder="placeholderUrl" />
          <span class="extras-placeholder text-xs">
            App 从外网或其它网段扫码时，填写可访问本 Daemon 的地址；留空则由服务端自动识别。
          </span>
        </div>

        <t-button theme="primary" :loading="generating" class="self-start" @click="handleGenerate">
          <template #icon><qrcode-icon /></template>
          生成配对二维码
        </t-button>
      </div>

      <!-- 二维码预览区 -->
      <div class="extras-qr-col shrink-0 flex flex-col items-center gap-3">
        <div class="extras-qr-box extras-card items-center justify-center relative overflow-hidden">
          <template v-if="pairCode">
            <QrcodeVue :value="pairCode.payload" :size="220" :level="'M'" :margin="1" />
            <div v-if="expired" class="extras-qr-mask flex flex-col items-center justify-center gap-2 text-sm font-bold">
              <span>二维码已过期</span>
              <t-button size="small" variant="base" @click="handleGenerate">重新生成</t-button>
            </div>
          </template>
          <span v-else class="extras-placeholder text-sm px-6 text-center">生成后在此显示二维码</span>
        </div>

        <div v-if="pairCode" class="flex flex-col items-center gap-2 text-center">
          <div class="extras-title text-sm font-mono tracking-widest">配对码 {{ pairCode.code }}</div>
          <div class="text-xs" :class="expired ? 'extras-expired' : 'extras-muted'">
            {{
              expired
                ? '已过期，请重新生成'
                : `剩余 ${remaining} 秒 · 单次有效 · ${pairCode.scope === 'full' ? '完整权限' : '受限'}`
            }}
          </div>
          <div class="flex items-center gap-2">
            <t-button size="small" variant="text" @click="copyPayload">
              <template #icon><copy-icon /></template>
              复制原文
            </t-button>
            <t-button size="small" variant="text" @click="handleGenerate">
              <template #icon><refresh-icon /></template>
              刷新
            </t-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@unocss;

.extras-qr-col {
  width: 100%;
}

.extras-qr-box {
  display: flex;
  width: 240px;
  height: 240px;
  background: #fff;
}

.extras-qr-mask {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.extras-expired {
  color: var(--td-error-color);
}

@media (min-width: 768px) {
  .extras-qr-col {
    width: 280px;
  }
}
</style>
