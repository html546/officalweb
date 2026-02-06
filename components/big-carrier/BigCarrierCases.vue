<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-[36px] font-bold text-[#0B2747]">真实运输案例</h2>
        <p class="text-[16px] text-gray-500 mt-4">
          从主机厂批量分拨到家庭长途搬迁，见证每一次安全抵达。
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in cases"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
        >
          <!-- Image Area -->
          <div class="relative h-[240px] overflow-hidden">
            <ImageWithFallback
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#006EFF] shadow-sm">
                {{ item.tag }}
              </span>
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-lg font-bold text-[#0B2747]">{{ item.from }}</span>
              <ArrowRight :size="16" class="text-gray-400" />
              <span class="text-lg font-bold text-[#0B2747]">{{ item.to }}</span>
            </div>
            
            <h3 class="text-base font-bold text-[#0B2747] mb-3 leading-tight">
              {{ item.title }}
            </h3>
            
            <p class="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
              {{ item.desc }}
            </p>

            <!-- Footer Data -->
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span class="text-xs text-gray-400 font-medium">
                {{ item.footer }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, MapPin } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

// Replace figma:asset with EXTERNAL_ASSETS URLs
const cases = [
  {
    tag: '家庭长途搬迁',
    image: EXTERNAL_ASSETS.TRUCK_FLATBED_FULL,
    from: '哈尔滨',
    to: '三亚',
    title: '一家三口避寒过冬，车辆提前发运',
    desc: '张先生一家计划去海南过冬，选择大板车将自家汉兰达提前运往三亚。相比自驾3000多公里，托运节省了大量油费和精力，人坐飞机直达。',
    footer: '车型: 丰田汉兰达 | 里程: 3400km',
  },
  {
    tag: 'B2B 批量调拨',
    image: EXTERNAL_ASSETS.TRUCK_FLATBED_FULL,
    from: '广州',
    to: '成都',
    title: '车行批量采购，6台车一次发运',
    desc: '成都某二手车行从广州采购了一批准新车。通过车拖车大板车专线集运，单台运输成本降低了35%，且全程有运输险保障，无损交付。',
    footer: '车型: 混合车型 x 6 | 里程: 1600km',
  },
  {
    tag: '自驾游返程',
    image: EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX,
    from: '乌鲁木齐',
    to: '上海',
    title: '特种兵式旅游结束，人车分离返程',
    desc: '李女士结束了为期两周的新疆自驾游，不想再开几千公里返程。在乌鲁木齐直接将车交运大板车，自己轻松飞回上海复工，不仅省钱更省心。',
    footer: '车型: 坦克300 | 里程: 3900km',
  },
]
</script>
