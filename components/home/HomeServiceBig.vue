<template>
  <section class="py-24 bg-[#F8F9FB] overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-16">
        <!-- Text Left -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0B2747] mb-6 leading-tight">
            大板车干线集运：<br />
            30,000+ 线路的<span class="text-[#FF6B00]">高性价比</span>之选
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            针对长途搬迁与批量流转的经济型方案。整合全国 1000+ 核心网点，通过规模效应大幅降低成本。支持国家交通局系统实时定位，一口价模式拒绝隐形消费。
          </p>

          <div class="flex flex-wrap gap-4 mb-8">
            <div
              v-for="tag in tags"
              :key="tag"
              class="flex items-center gap-2 bg-white border border-gray-100 text-[#0B2747] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              <CheckCircle2 class="w-4 h-4 text-[#FF6B00]" />
              {{ tag }}
            </div>
          </div>

          <button
            @click="handleViewRoutes"
            class="group bg-transparent hover:bg-white text-[#0B2747] border-2 border-[#0B2747] rounded-full px-8 py-6 text-lg font-bold transition-all"
          >
            查看干线班次
            <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
          </button>
        </div>

        <!-- Image Right -->
        <div class="w-full lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img
              :src="serviceImage"
              alt="Big Carrier Transport"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
// Import image from images mapping (Agent B's work)
import { SERVICE_BIG_CARRIER, EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const tags = ['价格更低', '每日发车', 'GB1589标准车型']
const serviceImage = ref(SERVICE_BIG_CARRIER || EXTERNAL_ASSETS.TRUCK_FLATBED_FULL)

const handleImageError = () => {
  serviceImage.value = EXTERNAL_ASSETS.TRUCK_FLATBED_FULL
}

const handleViewRoutes = () => {
  props.setActiveId?.('big-carrier')
  // Scroll to the pricing section (hot-routes) after navigation
  setTimeout(() => {
    const element = document.getElementById('hot-routes')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}
</script>
