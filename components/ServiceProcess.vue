<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC'] overflow-hidden">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          服务流程
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[16px] text-gray-500 mt-4"
        >
          从下单到交付，全链路数字化标准作业，每一公里都清晰可见。
        </p>
      </div>

      <!-- Process Flow -->
      <div class="relative">
        <!-- Desktop Connection Line -->
        <div class="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-0" />

        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-4 relative z-10">
          <div
            v-for="(step, index) in steps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }"
            class="flex flex-row lg:flex-col items-center flex-1 w-full lg:w-auto group"
          >
            <!-- Mobile vertical line -->
            <div
              v-if="index !== steps.length - 1"
              class="lg:hidden absolute left-[40px] top-[80px] w-0.5 h-[calc(100%-40px)] bg-gray-100 -z-10"
            />

            <!-- Left side/Top side Node -->
            <div class="flex flex-col items-center shrink-0">
              <span class="text-[10px] font-bold text-blue-300 tracking-[0.2em] mb-4 uppercase lg:block hidden">
                {{ step.label }}
              </span>
              <div class="w-20 h-20 rounded-full bg-white border-2 border-dashed border-[#BFDBFE] flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:border-solid group-hover:border-[#006EFF] group-hover:scale-110 shadow-sm">
                <component :is="step.icon" class="w-8 h-8 text-[#006EFF]" />
              </div>
            </div>

            <!-- Content Area -->
            <div class="ml-6 lg:ml-0 lg:mt-6 text-left lg:text-center">
              <span class="text-[10px] font-bold text-blue-300 tracking-[0.2em] mb-1 uppercase lg:hidden block">
                {{ step.label }}
              </span>
              <h4 class="text-[18px] font-bold text-[#0B2747] lg:max-w-[160px] leading-tight">
                {{ step.text }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Smartphone, BrainCircuit, UserCheck, Truck, MapPin, Flag } from 'lucide-vue-next'

const steps = [
  {
    label: 'STEP 01',
    icon: Smartphone,
    text: '用户线上发布订单',
  },
  {
    label: 'STEP 02',
    icon: BrainCircuit,
    text: '平台智能匹配多位司机',
  },
  {
    label: 'STEP 03',
    icon: UserCheck,
    text: '司机接单',
  },
  {
    label: 'STEP 04',
    icon: Truck,
    text: '司机现场验车装车运输',
  },
  {
    label: 'STEP 05',
    icon: MapPin,
    text: '订单状态实时更新',
  },
  {
    label: 'STEP 06',
    icon: Flag,
    text: '抵达目的地用户验车收车',
  },
]
</script>
