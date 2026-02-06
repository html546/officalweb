<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image Left -->
        <div class="w-full lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img
              :src="serviceImage"
              alt="Professional Valet Service"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              @error="handleImageError"
            />
          </div>
        </div>

        <!-- Text Right -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0B2747] mb-6 leading-tight">
            专业代驾服务：<br />
            打通物流"最后一公里"的<span class="text-[#FF6B00]">检测专家</span>
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            解决大板车无法进城的接驳难题。代驾员充当"第一检测人"执行标准化验车。支持点火即走的长途直送，提供随停随走的定制化路线。
          </p>

          <div class="flex flex-wrap gap-4 mb-8">
            <div
              v-for="tag in tags"
              :key="tag"
              class="flex items-center gap-2 bg-[#FFF5EB] text-[#FF6B00] px-4 py-2 rounded-full text-sm font-medium"
            >
              <CheckCircle2 class="w-4 h-4" />
              {{ tag }}
            </div>
          </div>

          <button
            @click="handleBookValet"
            class="group bg-transparent hover:bg-[#FFF5EB] text-[#FF6B00] border-2 border-[#FF6B00] rounded-full px-8 py-6 text-lg font-bold transition-all"
          >
            预约代驾接驳
            <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
// Import image from images mapping (Agent B's work)
import { SERVICE_DRIVER, EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const tags = ['第一检测人', '随停随走', '无中转等待']
const serviceImage = ref(SERVICE_DRIVER || EXTERNAL_ASSETS.VALET_HANDOVER)

const handleImageError = () => {
  serviceImage.value = EXTERNAL_ASSETS.VALET_HANDOVER
}

const handleBookValet = () => {
  props.setActiveId?.('driver')
}
</script>
