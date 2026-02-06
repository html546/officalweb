<template>
  <div class="relative w-[280px] h-[580px] bg-[#2a2d34] rounded-[52px] border-[10px] border-[#3c3f46] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />
    <div class="absolute inset-0 bg-white">
      <div class="pt-10 pb-4 px-6 bg-[#006EFF] text-white">
        <div class="text-[16px] font-bold">价格查询</div>
      </div>
      <div class="p-4 space-y-4">
        <div class="flex bg-gray-100 p-1 rounded-xl">
          <button
            :class="[
              'flex-1 py-1.5 rounded-lg text-[12px] font-bold transition-all',
              tab === 'small' ? 'bg-white shadow-sm text-[#006EFF]' : 'text-gray-400'
            ]"
            @click="tab = 'small'"
          >
            小板车
          </button>
          <button
            :class="[
              'flex-1 py-1.5 rounded-lg text-[12px] font-bold transition-all',
              tab === 'big' ? 'bg-white shadow-sm text-[#006EFF]' : 'text-gray-400'
            ]"
            @click="tab = 'big'"
          >
            大板车
          </button>
        </div>

        <div class="space-y-3">
          <div class="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div class="text-[9px] text-gray-400 mb-0.5">
              我的车辆
            </div>
            <div class="text-[13px] font-bold text-[#0B2747]">
              奥迪 A6L · 轿车
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div class="text-[9px] text-gray-400 mb-0.5">
                出发地
              </div>
              <div class="text-[13px] font-bold text-[#0B2747]">
                北京
              </div>
            </div>
            <div class="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div class="text-[9px] text-gray-400 mb-0.5">
                目的地
              </div>
              <div class="text-[13px] font-bold text-[#0B2747]">
                广州
              </div>
            </div>
          </div>
        </div>

        <div
          v-motion
          :key="tab"
          :initial="{ opacity: 0, scale: 0.98 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="mt-4 p-5 bg-white rounded-3xl border-2 border-[#006EFF] shadow-xl text-center"
        >
          <div class="text-[11px] text-gray-400 mb-1">
            {{ tab === 'small' ? '专车直达 · 极速送达' : '批量集运 · 性价比之选' }}
          </div>
          <div class="text-[32px] font-black text-[#0B2747] mb-4">
            <span class="text-[16px] mr-1">¥</span>
            {{ tab === 'small' ? '3,200' : '1,550' }}
          </div>
          <Button class="w-full h-11 bg-[#006EFF] text-white rounded-2xl font-bold border-none shadow-lg shadow-blue-200">
            一键发单
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '@/components/ui/Button.vue'

const tab = ref<'small' | 'big'>('small')

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    tab.value = tab.value === 'small' ? 'big' : 'small'
  }, 3000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
