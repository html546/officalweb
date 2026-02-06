<template>
  <section class="relative w-full h-[450px] overflow-hidden font-['Noto_Sans_SC']">
    <!-- Background with Premium Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="EXTERNAL_ASSETS.LUXURY_HERO" 
        alt="Premium Luxury Enclosed Transport" 
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#0B2747]/80 via-[#0B2747]/40 to-[#0B2747]/80" />
    </div>

    <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
      <!-- Breadcrumb -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
        <a href="#" class="hover:text-white transition-colors">首页</a>
        <ChevronRight class="w-4 h-4" :stroke-width="1.5" />
        <a href="#" class="hover:text-white transition-colors">解决方案</a>
        <ChevronRight class="w-4 h-4" :stroke-width="1.5" />
        <span class="text-white">商业活动物流</span>
      </div>

      <!-- Content - Center Aligned for Premium Feel -->
      <div class="text-center max-w-[900px] mx-auto mt-16">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-[40px] leading-[1.2] font-bold text-white mb-6"
        >
          商业活动特种托运方案：<br />
          针对车展与巡演的高端定制服务
        </h1>
        
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
          class="text-[18px] text-white/90 leading-relaxed mb-10 max-w-[700px] mx-auto"
        >
          专为概念车、超跑及老爷车打造。全封闭厢式运输，配备气囊减震与保密协议。
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
        >
          <Button class="h-14 px-12 rounded-full bg-[#006EFF] hover:bg-[#0056D6] text-white font-bold text-[18px] border-none cursor-pointer shadow-lg shadow-[#006EFF]/20">
            预约特种运输
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'
</script>
