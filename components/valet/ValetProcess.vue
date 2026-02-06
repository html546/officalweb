<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC'] overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          代驾接驳服务流程
        </h2>
      </div>

      <!-- Process Flow -->
      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-100" />

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4">
          <div
            v-for="(step, index) in steps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Icon Container -->
            <div
              :class="[
                'relative z-10 w-[120px] h-[120px] rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-110',
                step.highlight
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-[#006EFF]'
              ]"
            >
              <component :is="step.icon" :size="32" />
              <!-- Step Number Badge -->
              <div class="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#0B2747] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                {{ step.num }}
              </div>
            </div>

            <!-- Text Content -->
            <div class="mt-8">
              <h3 class="text-[18px] font-bold text-[#0B2747]">
                {{ step.title }}
              </h3>
              <div class="mt-2 space-y-1">
                <p
                  :class="[
                    'text-[15px] font-medium',
                    step.highlight ? 'text-[#FF6B00]' : 'text-gray-600'
                  ]"
                >
                  {{ step.desc }}
                </p>
                <p class="text-[13px] text-gray-400">
                  {{ step.sub }}
                </p>
              </div>
            </div>

            <!-- Mobile Connector -->
            <div
              v-if="index < steps.length - 1"
              class="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gray-200"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Trust Tip -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }"
        class="mt-20 p-6 bg-gray-50 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6 border border-gray-100"
      >
        <div class="flex items-center gap-2 text-[#006EFF] font-bold">
          <ClipboardCheck :size="20" />
          <span>严格遵守"第一检测人"标准</span>
        </div>
        <div class="hidden md:block w-[1px] h-4 bg-gray-300" />
        <p class="text-sm text-gray-500">
          每一位代驾员均经过培训，配备专业验车工具包，确保车辆状况在取送前后完全一致。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Smartphone, UserSearch, ClipboardCheck, Map, Key } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: '发布订单',
    desc: '用户线上发布',
    sub: '选择代驾/接驳模式'
  },
  {
    num: '02',
    icon: UserSearch,
    title: '智能匹配',
    desc: '匹配附近司机',
    sub: '系统派单，最快秒接'
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: '验车取车',
    desc: '司机验车取车',
    sub: '第一检测人标准化验车',
    highlight: true
  },
  {
    num: '04',
    icon: Map,
    title: '实时监控',
    desc: '状态实时更新',
    sub: 'GPS+北斗双模轨迹'
  },
  {
    num: '05',
    icon: Key,
    title: '验车收车',
    desc: '用户验车收车',
    sub: '无损交付，确认签收'
  }
]
</script>
