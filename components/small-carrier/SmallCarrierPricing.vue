<template>
  <section id="small-carrier-pricing" class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-[36px] font-bold text-[#0B2747]">
          小板车专车托运参考报价
        </h2>
        <p class="text-[16px] text-[#4B5563] mt-4 max-w-2xl mx-auto">
          价格因距离、车型、车况等因素浮动，以下为平台实时统计的热门路线参考价格。
        </p>
      </div>

      <!-- Table Container -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden"
      >
        <!-- Table Header -->
        <div class="bg-[#006EFF] h-16 flex items-center text-white font-bold text-sm tracking-wide">
          <div class="w-[35%] pl-8 text-left">起始地 → 目的地</div>
          <div class="w-[15%] text-center">车型</div>
          <div class="w-[15%] text-center">参考时效</div>
          <div class="w-[15%] text-center">运输方式</div>
          <div class="w-[20%] pr-8 text-right">参考价格</div>
        </div>

        <!-- Table Rows -->
        <ul class="divide-y divide-gray-100 p-0 m-0 list-none">
          <li
            v-for="(row, index) in pricingData"
            :key="index"
            class="h-20 flex items-center hover:bg-blue-50 transition-colors duration-200"
          >
            <!-- Route Column -->
            <div class="w-[35%] pl-8 flex items-center gap-3">
              <div class="flex items-center gap-2 text-[#0B2747] font-bold">
                <span>{{ row.from }}</span>
                <ArrowRight :size="14" class="text-gray-400" />
                <span>{{ row.to }}</span>
              </div>
              <span
                v-if="row.badge"
                :class="[
                  row.badge.color,
                  'text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase'
                ]"
              >
                {{ row.badge.text }}
              </span>
            </div>

            <!-- Vehicle Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.vehicle }}
            </div>

            <!-- Time Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.time }}
            </div>

            <!-- Method Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.method }}
            </div>

            <!-- Price Column -->
            <div class="w-[20%] pr-8 text-right">
              <span class="text-[#006EFF] text-lg font-bold">
                {{ row.price }} 元起
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Footer / CTA Area -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        class="flex flex-col items-center mt-12"
      >
        <button
          v-motion
          :while-hover="{ scale: 1.02 }"
          :while-tap="{ scale: 0.98 }"
          class="px-10 py-4 bg-[#006EFF] hover:bg-[#0056CC] text-white rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 border-none cursor-pointer"
        >
          <Calculator :size="20" />
          <span>AI智能报价 - 3秒获取精准价格</span>
        </button>
        <p class="mt-4 text-sm text-gray-400">
          * 以上价格为参考区间，实际价格以系统智能测算为准
        </p>
      </div>

      <!-- Trust Badges -->
      <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <ShieldCheck :size="18" class="text-[#006EFF]" />
          <span>全额保险保障</span>
        </div>
        <div class="flex items-center gap-2">
          <Zap :size="18" class="text-[#006EFF]" />
          <span>15分钟极速响应</span>
        </div>
        <div class="flex items-center gap-2">
          <Clock :size="18" class="text-[#006EFF]" />
          <span>实时GPS追踪</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Calculator, ShieldCheck, Zap, Clock } from 'lucide-vue-next'

const pricingData = [
  {
    from: '北京',
    to: '上海',
    vehicle: '轿车/SUV',
    time: '1-2天',
    method: '平板/厢式',
    price: '2800',
    badge: { text: 'HOT', color: 'bg-[#FF6B00]' }
  },
  {
    from: '广州',
    to: '北京',
    vehicle: '轿车/SUV',
    time: '2-3天',
    method: '平板/厢式',
    price: '3500'
  },
  {
    from: '上海',
    to: '深圳',
    vehicle: '轿车/SUV',
    time: '1-2天',
    method: '平板/厢式',
    price: '2600'
  },
  {
    from: '成都',
    to: '北京',
    vehicle: '轿车/SUV',
    time: '2-3天',
    method: '平板/厢式',
    price: '3200'
  },
  {
    from: '杭州',
    to: '三亚',
    vehicle: '轿车/SUV',
    time: '2-3天',
    method: '平板/厢式',
    price: '3800',
    badge: { text: 'NEW', color: 'bg-[#006EFF]' }
  },
  {
    from: '西安',
    to: '上海',
    vehicle: '轿车/SUV',
    time: '2天',
    method: '平板/厢式',
    price: '2900'
  },
  {
    from: '深圳',
    to: '成都',
    vehicle: '轿车/SUV',
    time: '2-3天',
    method: '平板/厢式',
    price: '3100'
  },
  {
    from: '北京',
    to: '海口',
    vehicle: '豪车',
    time: '3-4天',
    method: '厢式',
    price: '5500',
    badge: { text: 'VIP', color: 'bg-purple-500' }
  }
]
</script>
