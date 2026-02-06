<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h3 class="text-[24px] font-bold text-[#0B2747] mb-8">
          支持全车型托运
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="vehicle in vehicles"
            :key="vehicle"
            class="px-6 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-[#4B5563] hover:border-[#006EFF] hover:text-[#006EFF] transition-all cursor-default"
          >
            {{ vehicle }}
          </span>
        </div>
      </div>

      <div class="text-center">
        <h3 class="text-[24px] font-bold text-[#0B2747] mt-12 mb-8">
          专业板车调度
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div
            v-for="(carrier, idx) in carriers"
            :key="idx"
            v-motion
            :hovered="{ y: -5 }"
            class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-all"
          >
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Truck class="w-8 h-8 text-[#006EFF]" />
            </div>
            <div class="text-[18px] font-bold text-[#0B2747] mb-1">
              {{ carrier.label }}
            </div>
            <div class="text-[12px] text-gray-400">
              {{ carrier.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck } from 'lucide-vue-next'

const vehicles = [
  "摩托车",
  "轿车",
  "SUV",
  "MPV",
  "皮卡",
  "面包车",
  "跑车",
  "电四轮",
  "餐车",
  "房车",
  "货车",
  "叉车",
  "拖拉机",
  "挖机",
]

const carriers = [
  { label: "斜板", desc: "标准托运" },
  { label: "落地板", desc: "低底盘跑车" },
  { label: "厢式车", desc: "高端私密" },
  { label: "两位板", desc: "灵活小批量" },
  { label: "多位板", desc: "长途集运" },
]
</script>
