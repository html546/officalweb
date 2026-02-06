<template>
  <section class="py-24 bg-[#0B2747] font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h2 class="text-[32px] font-bold text-white">服务场景覆盖</h2>
        <div class="w-16 h-1 bg-[#006EFF] mx-auto mt-4" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          v-for="(item, idx) in gallery"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: idx * 100 } }"
          class="group cursor-pointer"
        >
          <div class="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-2xl">
            <ImageWithFallback 
              :src="item.src" 
              :alt="item.title" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 class="text-[22px] font-bold text-white mb-3 group-hover:text-[#006EFF] transition-colors">{{ item.title }}</h3>
          <p class="text-white/70 leading-relaxed text-[15px]">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

const gallery = [
  {
    src: EXTERNAL_ASSETS.LUXURY_SHOW,
    title: "顶级车展支持",
    desc: "为国际 A 类车展提供概念车从 VDC 到展台的全流程入场服务。"
  },
  {
    src: EXTERNAL_ASSETS.LUXURY_TOUR,
    title: "品牌全国巡演",
    desc: "助力品牌方实现跨城市快闪店及封闭式私享品鉴会车辆轮动。"
  },
  {
    src: EXTERNAL_ASSETS.LUXURY_TRACK,
    title: "赛道日与性能测试",
    desc: "针对改装车、性能车提供往返赛车场的高速直达特种托运服务。"
  }
]
</script>
