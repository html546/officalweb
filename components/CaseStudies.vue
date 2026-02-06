<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC']">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          真实运输案例
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[16px] text-gray-500 mt-4 max-w-2xl mx-auto"
        >
          每一程托付，都是对信任的完美交付。从豪车交付到紧急救援，我们使命必达。
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in cases"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <!-- Image Area -->
          <div class="relative h-[240px] overflow-hidden">
            <ImageWithFallback
              :src="item.image"
              :alt="item.car"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-left">
              <span class="text-[10px] font-bold text-blue-600">已完结 (Completed)</span>
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <!-- Route Line -->
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-[#0B2747]">{{ item.from }}</span>
              <div class="flex-1 flex items-center justify-center px-4 relative">
                <div class="h-[1px] bg-gray-200 w-full relative">
                  <Truck class="w-4 h-4 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-0.5" />
                </div>
                <ArrowRight class="w-3 h-3 text-gray-300 absolute right-4" />
              </div>
              <span class="text-lg font-bold text-[#0B2747]">{{ item.to }}</span>
            </div>

            <!-- Car Model Tag -->
            <div class="mt-4">
              <span class="inline-block bg-gray-100 text-gray-600 text-[11px] px-3 py-1 rounded-full font-medium">
                {{ item.car }}
              </span>
            </div>

            <!-- Details Grid (2x2) -->
            <div class="mt-6 grid grid-cols-2 gap-y-4">
              <div>
                <p class="text-[10px] text-gray-400 uppercase tracking-wider">运输里程</p>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <Navigation class="w-3 h-3 text-gray-400" />
                  <p class="text-sm font-semibold text-gray-700">{{ item.distance }}</p>
                </div>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 uppercase tracking-wider">耗时</p>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <Clock class="w-3 h-3 text-gray-400" />
                  <p class="text-sm font-semibold text-gray-700">{{ item.duration }}</p>
                </div>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 uppercase tracking-wider">服务类型</p>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <Truck class="w-3 h-3 text-gray-400" />
                  <p class="text-sm font-semibold text-gray-700">小板车专送</p>
                </div>
              </div>
              <div>
                <p class="text-[10px] text-gray-400 uppercase tracking-wider">保险保障</p>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck class="w-3 h-3 text-gray-400" />
                  <p class="text-sm font-semibold text-gray-700">{{ item.insurance }}</p>
                </div>
              </div>
            </div>

            <!-- Service Highlight -->
            <div class="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                <Video class="w-3 h-3 text-blue-600" />
              </div>
              <p class="text-[11px] text-blue-600 font-medium">
                {{ item.highlight }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, Video, ShieldCheck, Clock, Navigation, ArrowRight } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const cases = [
  {
    image: 'https://images.unsplash.com/photo-1750087252823-91079622a25c',
    from: '杭州',
    to: '三亚',
    car: '保时捷 911 Carrera',
    distance: '2,350km',
    duration: '36小时',
    insurance: 'PICC 500万承保',
    highlight: '车主全程未到场，远程视频验车交付',
  },
  {
    image: 'https://images.unsplash.com/reserve/9JMZhTL8T7ulzIoD2E78_2010_02280041.JPG',
    from: 'G4高速',
    to: '北京4S店',
    car: '宝马 X5 xDrive40i',
    distance: '85km',
    duration: '1.5小时',
    insurance: '救援专项保险',
    highlight: '15分钟极速响应，解决高速抛锚难题',
  },
  {
    image: 'https://images.unsplash.com/photo-1760765865486-0ecdb14275b1',
    from: '广州',
    to: '深圳',
    car: '特斯拉 Model Y',
    distance: '120km',
    duration: '3小时',
    insurance: '全额运损险',
    highlight: '买家异地购车，代驾+小板车门到门',
  },
]
</script>
