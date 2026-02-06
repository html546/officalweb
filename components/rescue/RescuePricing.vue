<template>
  <section id="rescue-pricing" aria-label="Calculator" class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          拒绝隐形消费，救援明码标价
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          :visibleOnce="true"
          class="text-[16px] text-[#4B5563] mt-4"
        >
          下单前系统自动计算确切费用，电子对账单全程留痕。
        </p>
      </div>

      <!-- Pricing Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left Column: The Standard Price Card -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -32 }"
          :visible="{ opacity: 1, x: 0 }"
          :visibleOnce="true"
          class="lg:col-span-7"
        >
          <div class="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-[#FF6B00] h-full flex flex-col justify-center">
            <div>
              <p class="text-[#4B5563] font-medium mb-4">拖车起步价 (含10公里)</p>
              <div class="flex items-baseline gap-2">
                <span class="text-6xl font-bold text-[#FF6B00] tracking-tight">¥170</span>
                <span class="text-2xl font-bold text-[#FF6B00]">起</span>
              </div>
            </div>

            <!-- Formula Visual -->
            <div class="mt-8 p-8 bg-orange-50 rounded-xl">
              <p class="text-[#006EFF] font-bold text-lg">
                总费用 = 起步价 170元 + 超里程费 8元/km
              </p>
              <p class="text-[12px] text-gray-400 mt-2">
                注：夜间（22:00-06:00）可能产生夜间服务费。
              </p>
            </div>

            <button class="w-full mt-8 bg-[#006EFF] hover:bg-[#005cd6] text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer">
              在线计算救援费
              <ChevronRight :size="20" />
            </button>
          </div>
        </div>

        <!-- Right Column: Additional Services List -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 32 }"
          :visible="{ opacity: 1, x: 0 }"
          :visibleOnce="true"
          class="lg:col-span-5"
        >
          <div class="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 h-full flex flex-col">
            <h3 class="font-bold text-lg text-[#0B2747] mb-8">特殊作业收费标准</h3>
            
            <ul class="space-y-6 flex-grow">
              <li
                v-for="(service, index) in additionalServices"
                :key="index"
                class="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0 last:pb-0"
              >
                <span class="text-[#4B5563] font-medium">{{ service.name }}</span>
                <span class="text-[#006EFF] font-bold">{{ service.price }}</span>
              </li>
            </ul>

            <div class="mt-8 pt-8 border-t border-gray-100">
              <div class="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                <FileCheck :size="20" />
                <span class="text-sm font-bold">所有费用均开具正规发票</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileCheck, ChevronRight } from 'lucide-vue-next'

const additionalServices = [
  { name: '地库牵引 (低姿态板车)', price: '¥200/次' },
  { name: '辅助轮 (轮胎抱死)', price: '¥100/个' },
  { name: '困境吊装 (滑出路基)', price: '按实际难度报价' },
  { name: '搭电启动', price: '¥100/次' },
]
</script>
