<template>
  <section class="relative w-full h-[450px] overflow-hidden font-['Noto_Sans_SC']">
    <!-- Background with Dark Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="EXTERNAL_ASSETS.SUPPLY_CHAIN_HERO" 
        alt="Car Distribution Center" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#0B2747]/60" />
    </div>

    <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
      <!-- Breadcrumb -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
        <a href="#" class="hover:text-white transition-colors">首页</a>
        <ChevronRight class="w-4 h-4" />
        <a href="#" class="hover:text-white transition-colors">解决方案</a>
        <ChevronRight class="w-4 h-4" />
        <span class="text-white">汽车供应链</span>
      </div>

      <!-- Content - Left Aligned for B2B -->
      <div class="max-w-[800px] mt-16 px-4 lg:px-0">
        <h1 
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 0.6 } }"
          class="text-[40px] leading-[1.2] font-bold text-white mb-6"
        >
          汽车供应链数字化方案：<br />
          缩短 OTD 周期并实现"零公里"交付
        </h1>
        
        <p 
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }"
          class="text-[18px] text-white/90 leading-relaxed mb-10 max-w-[640px]"
        >
          深度整合智能分拨算法与多式联运，助力主机厂实现高周转、低损耗的数字化铺货。
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }"
        >
          <Button class="h-14 px-10 rounded-full bg-[#006EFF] hover:bg-[#0056D6] text-white font-bold text-[18px] border-none cursor-pointer">
            获取企业版方案
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
