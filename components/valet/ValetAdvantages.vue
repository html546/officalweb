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
          车拖车代驾核心优势
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[16px] text-gray-500 mt-4"
        >
          专人专车点火即走，第一检测人机制保障交付安全。
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
            borderColor: hoveredIndex === index ? '#FF6B00' : undefined,
            boxShadow: hoveredIndex === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : undefined
          }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
        >
          <!-- Icon Area -->
          <div
            :class="[
              'w-16 h-16 rounded-full flex items-center justify-center transition-colors',
              hoveredIndex === index ? 'bg-[#FF6B00] text-white' : 'bg-[#FFF7ED] text-[#FF6B00]'
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
import { UserCheck, MapPin, Zap, Route, Satellite, TrendingDown } from 'lucide-vue-next'

const hoveredIndex = ref(-1)

const advantages = [
  {
    icon: UserCheck,
    title: '"第一检测人"机制',
    description: '代驾员不仅是司机，更是专业的验车员。在取送环节执行标准化验车（外观、物品、动态检测），确保车辆交付状态透明可查。'
  },
  {
    icon: MapPin,
    title: '真正"门到门"无缝衔接',
    description: '彻底打破物流场站限制，直接从家门口/4S店取车，送达至地下车库车位。零距离交接，解决大板车无法进城的最后一公里难题。'
  },
  {
    icon: Zap,
    title: '点火即走，拒绝等待',
    description: '专人专车直达模式，无任何中转停留或仓储等待。跨省长途朝发夕至，是所有托运方式中时间确定性最高的选择。'
  },
  {
    icon: Route,
    title: '随停随走，路线由你',
    description: '用户主导路线规划。可根据需求随时调整路径，支持中途办事、接送乘客或服务区取物，打破了传统物流点对点的僵化限制。'
  },
  {
    icon: Satellite,
    title: 'GPS+北斗双模定位',
    description: '构建全透明数字安全网。通过 APP 实时查看车速、轨迹及位置，杜绝私用车辆或绕路隐患，让每一次托付都安心无忧。'
  },
  {
    icon: TrendingDown,
    title: '比传统代驾低 30%',
    description: '长途代驾价格极具竞争力，较传统商业代驾降低 30%。短途接驳费用也往往低于雇佣板车的起步价，兼顾经济与效率。'
  }
]
</script>
