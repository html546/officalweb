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
          小板车托运服务流程
        </h2>
        <p class="text-[16px] text-gray-500 mt-4">
          从下单到交付，全程透明可视，让您安心托付每一次
        </p>
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
                  ? 'bg-[#006EFF] text-white'
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
                    step.highlight ? 'text-[#006EFF]' : 'text-gray-600'
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
        class="mt-20 p-6 bg-blue-50 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6 border border-blue-100"
      >
        <div class="flex items-center gap-2 text-[#006EFF] font-bold">
          <ShieldCheck :size="20" />
          <span>全程保险保障</span>
        </div>
        <div class="hidden md:block w-[1px] h-4 bg-blue-300" />
        <p class="text-sm text-gray-600">
          每一单小板车托运均包含全额保险，最高赔付额度可达车辆评估价。安全交付，让您托付无忧。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Smartphone, Zap, Truck, MapPin, ShieldCheck } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: '在线下单',
    desc: '3秒智能报价',
    sub: 'APP/小程序快速下单'
  },
  {
    num: '02',
    icon: Zap,
    title: '极速接单',
    desc: '5秒匹配司机',
    sub: '最快15分钟上门',
    highlight: true
  },
  {
    num: '03',
    icon: Truck,
    title: '专车提取',
    desc: '司机上门取车',
    sub: '标准化验车拍照'
  },
  {
    num: '04',
    icon: MapPin,
    title: '实时追踪',
    desc: 'GPS全程监控',
    sub: 'APP查看实时位置'
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: '安全交付',
    desc: '门到门送达',
    sub: '验车签收完成'
  }
]
</script>
