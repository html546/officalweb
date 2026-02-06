<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-[36px] font-bold text-[#0B2747]">真实托运案例</h2>
        <p class="text-[16px] text-gray-500 mt-4">
          从紧急救援到豪车交付，见证小板车专车托运的极致效率。
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
import { ArrowRight } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

const cases = [
  {
    tag: '紧急救援托运',
    image: EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX,
    from: '杭州',
    to: '上海',
    title: '车辆故障需紧急维修，15分钟接单拖走',
    desc: '陈先生的保时捷在高速上突发故障，无法继续行驶。通过车拖车小板车托运，15分钟内救援车上门，2小时内安全送达上海指定维修厂，避免了长时间滞留。',
    footer: '车型: 保时捷911 | 里程: 180km | 时效: 2小时'
  },
  {
    tag: '豪车新车交付',
    image: EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX,
    from: '广州',
    to: '深圳',
    title: '百万豪车首次交付，厢式车私密护送',
    desc: '王先生在广州订购了一台劳斯莱斯，要求以最高标准运至深圳。选择小板车全密封厢式运输，专车专送，全程GPS追踪，完美交付无瑕疵。',
    footer: '车型: 劳斯莱斯古思特 | 里程: 140km | 时效: 1天'
  },
  {
    tag: '短途专车直送',
    image: EXTERNAL_ASSETS.TRUCK_FLATBED_FULL,
    from: '北京',
    to: '天津',
    title: '4S店购车，次日送达家门口',
    desc: '刘女士在北京4S店购买了新车，但人在天津工作。通过小板车专车托运，第二天车辆就安全送达天津家中车位，省去了往返取车的麻烦。',
    footer: '车型: 奔驰E级 | 里程: 120km | 时效: 1天'
  }
]
</script>
