<template>
  <div class="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[48px] border-[8px] border-[#3a3d45] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden">
    <!-- Dynamic Island -->
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
    <div class="absolute inset-0 bg-[#0B2747]">
      <div class="pt-10 pb-4 px-4 border-b border-white/10 flex items-center justify-between text-white">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Smartphone class="w-5 h-5 text-[#FF6B00]" />
          </div>
          <span class="text-[14px] font-bold">
            听单模式
          </span>
        </div>
        <div class="px-2 py-0.5 bg-green-500/20 rounded text-[10px] text-green-400 font-bold border border-green-500/30">
          运行中
        </div>
      </div>

      <div class="p-4 space-y-4">
        <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div class="text-[10px] text-blue-200/50 mb-1 uppercase tracking-wider">
            常跑路线 (My Route)
          </div>
          <div class="flex items-center gap-3 text-white font-bold">
            <span class="text-[16px]">北京</span>
            <ArrowRight class="w-4 h-4 text-orange-500" />
            <span class="text-[16px]">广州</span>
          </div>
        </div>

        <div class="relative h-[300px] flex items-center justify-center">
          <Transition name="fade" mode="out-in">
            <div v-if="!matching" key="searching" class="text-center">
              <div class="relative mb-4">
                <div class="w-24 h-24 rounded-full border-2 border-orange-500/20 animate-ping absolute inset-0" />
                <div class="w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center relative">
                  <Zap class="w-8 h-8 text-[#FF6B00]" />
                </div>
              </div>
              <div class="text-white text-[13px] font-bold">
                正在为您匹配最优订单...
              </div>
            </div>
            <div v-else key="matched" class="w-full bg-white rounded-2xl p-4 shadow-2xl border border-blue-50">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <div class="text-[10px] text-gray-400">
                    系统精准匹配 (98%)
                  </div>
                  <div class="text-[18px] font-black text-[#0B2747]">
                    ¥3,200.00
                  </div>
                </div>
                <div class="bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] px-2 py-0.5 rounded font-bold">
                  大板拼装
                </div>
              </div>
              <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-[12px] text-gray-600">
                  <Truck class="w-4 h-4 text-blue-500" />
                  SUV 托运 · 2台
                </div>
                <div class="flex items-center gap-2 text-[12px] text-gray-600">
                  <MapPin class="w-4 h-4 text-orange-500" />
                  北京朝阳 → 广州白云
                </div>
              </div>
              <Button class="w-full h-11 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-xl font-bold border-none">
                立即抢单
              </Button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Smartphone, ArrowRight, Zap, Truck, MapPin } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const matching = ref(false)

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    matching.value = !matching.value
  }, 4000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
