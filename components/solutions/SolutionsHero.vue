<template>
  <section class="relative w-full h-[450px] overflow-hidden font-['Noto_Sans_SC']">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="EXTERNAL_ASSETS.SOLUTIONS_HERO" 
        alt="Digital Logistics Network" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 to-[#0B2747]/60" />
    </div>

    <div class="container mx-auto max-w-[1200px] h-full relative z-10 px-4 lg:px-0 flex flex-col justify-center">
      <!-- Breadcrumb -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
        <button 
          @click="handleHomeClick" 
          class="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
        >
          首页
        </button>
        <ChevronRight class="w-4 h-4" />
        <span class="text-white">解决方案</span>
      </div>

      <!-- Content -->
      <div class="text-center max-w-[800px] mx-auto">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-[40px] leading-[48px] font-bold text-white mb-6"
        >
          车拖车全场景行业解决方案：<br />
          用数字技术赋能汽车流通生态
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-[18px] text-white/90 leading-relaxed"
        >
          无论是个性化旅游托运、高端车商业活动，还是主机厂数字化供应链，我们均提供全维度物流支撑。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const handleHomeClick = () => {
  props.setActiveId?.('home')
}
</script>
