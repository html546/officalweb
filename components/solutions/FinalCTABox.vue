<template>
  <section class="py-20 bg-white font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.98 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
        class="bg-[#0B2747] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden"
      >
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#006EFF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#006EFF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div class="relative z-10 max-w-[700px] mx-auto">
          <h2 class="text-[36px] md:text-[48px] font-bold text-white mb-6">开启您的智能托运方案</h2>
          <p class="text-[18px] text-white/80 mb-10 leading-relaxed">
            加入车拖车数字化物流网络，体验安全、高效、透明的汽车托运服务。专业团队 24 小时在线，为您定制专属物流方案。
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              @click="handlePricingClick"
              class="h-14 px-10 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] transition-all hover:-translate-y-1 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              获取实时报价
            </Button>
            <Button 
              variant="outline"
              @click="handleContactClick"
              class="h-14 px-10 rounded-full border-white text-white bg-transparent hover:bg-white hover:text-[#0B2747] transition-all font-bold text-[18px] cursor-pointer"
            >
              立即咨询专家
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const handlePricingClick = () => {
  props.setActiveId?.('pricing')
}

const handleContactClick = () => {
  props.setActiveId?.('contact')
}
</script>
