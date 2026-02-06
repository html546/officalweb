<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC'] overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-[36px] font-bold text-[#0B2747]">
          全链路运输流程：从干线集运到末端门到门
        </h2>
        <p class="text-[16px] text-gray-500 mt-4 max-w-3xl mx-auto">
          大板车负责长途干线降本，专业代驾负责最后一公里接驳，无缝衔接直达您家楼下。
        </p>
      </div>

      <!-- Journey Map Layout -->
      <div class="relative">
        <!-- Connector Line Background -->
        <div class="absolute top-12 left-0 w-full h-[2px] z-0 flex px-[10%]">
          <!-- Trunk Segment (Steps 1 to 3) -->
          <div class="flex-1 h-full bg-[#006EFF]" />
          <div class="flex-1 h-full bg-[#006EFF]" />
          <!-- Last Mile Segment (Steps 3 to 5) -->
          <div class="flex-1 h-full border-t-2 border-dashed border-[#FF6B00]" />
          <div class="flex-1 h-full border-t-2 border-dashed border-[#FF6B00]" />
        </div>

        <div class="relative z-10 flex justify-between items-start">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            :class="[
              'flex flex-col items-center text-center px-2 group',
              step.type === 'hub' ? 'w-[24%]' : 'w-[19%]'
            ]"
            @mouseenter="hoveredStep = step.id"
            @mouseleave="hoveredStep = null"
          >
            <!-- Step Icon Node -->
            <div class="relative mb-8">
              <div
                v-motion
                :while-hover="{ scale: 1.1 }"
                :class="[
                  step.type === 'hub' ? 'w-24 h-24' : 'w-20 h-20',
                  step.type === 'last-mile' ? 'bg-[#FFF4ED] border-[#FF6B00]' : 'bg-[#F0F7FF] border-[#006EFF]',
                  step.type === 'hub' ? 'border-solid' : 'border-dashed',
                  'border-2 rounded-full flex items-center justify-center shadow-sm relative transition-all duration-300 group-hover:shadow-md'
                ]"
              >
                <component
                  :is="step.icon"
                  :size="step.type === 'hub' ? 40 : 32"
                  :style="{ color: step.type === 'last-mile' ? '#FF6B00' : '#006EFF' }"
                />
                
                <!-- Tooltip for Step 4 -->
                <Transition
                  enter-active-class="transition-all duration-200"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-200"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <div
                    v-if="step.id === 4 && hoveredStep === 4"
                    class="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#0B2747] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-20 shadow-xl"
                  >
                    {{ step.tooltip }}
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0B2747] rotate-45" />
                  </div>
                </Transition>
              </div>

              <!-- Step Badges -->
              <span
                v-if="step.badge"
                :class="[
                  'absolute -top-3 -right-3 px-2 py-0.5 rounded text-[10px] font-bold',
                  step.type === 'trunk' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                ]"
              >
                {{ step.badge }}
              </span>
              <span
                v-if="step.status"
                class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap"
              >
                {{ step.status }}
              </span>
            </div>

            <!-- Text Content -->
            <div class="space-y-2">
              <h3
                :class="[
                  'text-lg font-bold',
                  hoveredStep === step.id
                    ? (step.type === 'last-mile' ? 'text-[#FF6B00]' : 'text-[#006EFF]')
                    : 'text-[#0B2747]'
                ]"
              >
                {{ step.title }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed px-2">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend / Visual Guide -->
      <div class="mt-20 flex justify-center gap-12 text-sm">
        <div class="flex items-center gap-2">
          <div class="w-8 h-[2px] bg-[#006EFF]" />
          <span class="text-gray-600 font-medium">大板车长途集运阶段 (降本)</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-8 h-[2px] border-t-2 border-dashed border-[#FF6B00]" />
          <span class="text-gray-600 font-medium">末端代驾接驳阶段 (直达)</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  FileText,
  Truck,
  ArrowLeftRight,
  Users,
  CheckCircle,
  HelpCircle,
} from 'lucide-vue-next'

const steps = [
  {
    id: 1,
    title: '定制方案',
    desc: '输入起终点，系统结合干线与接驳方案，生成一口价订单。',
    icon: FileText,
    type: 'trunk',
  },
  {
    id: 2,
    title: '大板车集运',
    desc: '车辆装载至 GB1589 笼车，通过高速干线网络跨省运输。',
    icon: Truck,
    badge: '长途降本',
    type: 'trunk',
  },
  {
    id: 3,
    title: '城市枢纽分拨',
    desc: '大板车抵达城市外围物流园，进行卸车分拨。',
    icon: ArrowLeftRight,
    status: '无缝对接',
    type: 'hub',
  },
  {
    id: 4,
    title: '专业代驾接驳',
    desc: '代驾员作为第一检测人验车，解决进城限行难题，点火即走。',
    icon: Users,
    badge: '末端直达',
    tooltip: '解决大板车无法进城/进小区痛点',
    type: 'last-mile',
  },
  {
    id: 5,
    title: '门到门交付',
    desc: '送车至指定楼下/车库，用户核验车况无误后签收。',
    icon: CheckCircle,
    type: 'last-mile',
  },
]

const hoveredStep = ref<number | null>(null)
</script>
