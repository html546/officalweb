<template>
  <section class="py-24 bg-[#FFFFFF] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          小板车托运核心优势
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[16px] text-gray-500 mt-4"
        >
          专车专送，极致效率，为追求时效与安全的用户量身打造。
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in advantages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :hovered="{ y: -4 }"
          class="bg-white p-8 rounded-xl border border-[#E5E7EB] transition-all duration-300 group"
          :style="{
            borderColor: hoveredIndex === index ? '#006EFF' : undefined,
            boxShadow: hoveredIndex === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : undefined
          }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
        >
          <!-- Icon Area -->
          <div
            :class="[
              'w-16 h-16 rounded-full flex items-center justify-center transition-colors',
              hoveredIndex === index ? 'bg-[#006EFF] text-white' : 'bg-[#F0F7FF] text-[#006EFF]'
            ]"
          >
            <component :is="item.icon" :size="32" />
          </div>

          <!-- Content Area -->
          <h3 class="mt-6 text-xl font-bold text-[#0B2747]">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-[#4B5563]">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Zap, ShieldCheck, Clock, TrendingUp, MapPin, Lock } from 'lucide-vue-next'

const hoveredIndex = ref(-1)

const advantages = [
  {
    icon: Zap,
    title: '极速响应 15分钟上门',
    description: '依托AI智能LBS调度系统，精准匹配距您最近的优质运力。平均5秒接单，最快15分钟司机到达，刷新汽车托运行业响应速度。'
  },
  {
    icon: ShieldCheck,
    title: '零中转，零车损',
    description: '专车专送，全程无需装卸车辆。杜绝大板车集运中的多次搬运风险，特别适合豪车、新车或对车况要求极高的用户。'
  },
  {
    icon: Clock,
    title: '时效确定性最高',
    description: '即刻出发，无需等待拼车凑单。跨省长途朝发夕至，是所有汽车托运方式中时间最确定、最可控的选择。'
  },
  {
    icon: TrendingUp,
    title: '门到门无缝交付',
    description: '真正的点对点服务，从您家车位到目的地车位。无需前往物流场站，节省您的时间和搬运成本。'
  },
  {
    icon: MapPin,
    title: '全程GPS实时追踪',
    description: 'APP实时查看车辆位置、行驶轨迹和司机信息。每一公里都透明可见，让您随时掌握爱车动态，安心无忧。'
  },
  {
    icon: Lock,
    title: '私密性强，隐私保障',
    description: '采用全密封厢式车或独立平板运输，避免集运时的公开展示。适合商务用车、隐私需求高或贵重物品托运。'
  }
]
</script>
