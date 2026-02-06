<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          为什么选择车拖车救援？
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          :visibleOnce="true"
          class="text-[16px] text-gray-500 mt-4 max-w-2xl mx-auto"
        >
          70万运力极速响应，从地库到高速的全场景覆盖。
        </p>
      </div>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in advantages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :visibleOnce="true"
          class="bg-white border border-[#E5E7EB] rounded-xl p-8 hover:border-[#FF6B00] hover:shadow-lg transition-all duration-300 group"
        >
          <!-- Icon Area -->
          <div class="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
            <component :is="item.icon" :size="32" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-[#0B2747] mb-3">
            {{ item.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Construction,
  Zap,
  Link as LinkIcon,
} from 'lucide-vue-next'

const advantages = [
  {
    icon: Construction,
    title: '全场景复杂作业能力',
    desc: '配备低姿态板车与专业吊臂，支持 地库(限高) 、窄路、事故现场等复杂环境的吊装与背车，无死角覆盖。',
  },
  {
    icon: Zap,
    title: '70万运力极速响应',
    desc: '依托平台 70万 小板车运力池及全国合作伙伴，实现全天候、全区域的分钟级响应，拒绝漫长等待。',
  },
  {
    icon: LinkIcon,
    title: '托运+救援无缝衔接',
    desc: '如果托运是"长途航班"，救援就是"牵引车"。我们确保故障车辆能顺利"滑向跑道"，解决起运前最后一米的移动难题。',
  },
]
</script>
