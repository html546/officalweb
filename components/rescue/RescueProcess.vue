<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC'] overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-20 text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          救援服务流程
        </h2>
      </div>

      <!-- Process Steps -->
      <div class="relative">
        <!-- Progress Line (Desktop Only) -->
        <div class="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-1 bg-gray-100 z-0">
          <div
            v-motion
            :initial="{ width: 0 }"
            :visible="{ width: '100%', transition: { duration: 1500, ease: 'easeInOut' } }"
            :visibleOnce="true"
            class="h-full bg-orange-500"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-x-4">
          <div
            v-for="(item, index) in steps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            :visibleOnce="true"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Icon Circle Container -->
            <div class="relative z-10 mb-6">
              <div class="w-24 h-24 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-50 transition-all duration-300 shadow-sm">
                <div class="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <component :is="item.icon" :size="32" />
                </div>
              </div>
              <!-- Step Number Badge -->
              <div class="absolute -top-1 -right-1 w-8 h-8 bg-[#006EFF] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md">
                {{ item.step }}
              </div>
            </div>

            <!-- Content Area -->
            <div class="px-2">
              <span class="inline-block text-xs font-bold text-orange-500 mb-2 px-3 py-0.5 bg-orange-50 rounded-full tracking-wider">
                {{ item.label }}
              </span>
              <h3 class="text-lg font-bold text-[#0B2747] mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed max-w-[180px] mx-auto">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhoneCall,
  Radar,
  Truck,
  Receipt,
  Star,
} from 'lucide-vue-next'

const steps = [
  {
    icon: PhoneCall,
    title: '一键呼叫/下单',
    desc: 'APP/小程序/电话多渠道接入',
    step: '01',
    label: '极速呼叫',
  },
  {
    icon: Radar,
    title: '就近匹配运力',
    desc: '70万台救援车分钟级响应',
    step: '02',
    label: '智能派单',
  },
  {
    icon: Truck,
    title: '车辆专业救援',
    desc: '拍照记录，规范作业',
    step: '03',
    label: '救援作业',
  },
  {
    icon: Receipt,
    title: '数字化对账',
    desc: '系统生成账单，拒绝乱收费',
    step: '04',
    label: '电子对账',
  },
  {
    icon: Star,
    title: '服务评价',
    desc: '服务质量全程监控',
    step: '05',
    label: '评价反馈',
  },
]
</script>
