<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
          构建全方位的司机服务生态
        </h2>
        <div class="w-20 h-1.5 bg-[#FF6B00] mx-auto rounded-full" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, idx) in services"
          :key="idx"
          v-motion
          :hovered="{ y: -10 }"
          class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/20 group transition-all"
        >
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
               :class="item.iconBg">
            <component :is="item.icon" class="w-7 h-7" :class="item.iconColor" />
          </div>
          <h3 class="text-[22px] font-bold text-[#0B2747] mb-6">
            {{ item.title }}
          </h3>
          <p class="text-[15px] text-gray-500 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Wallet, Truck, Globe } from 'lucide-vue-next'

const services = [
  {
    icon: Wallet,
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#FF6B00]',
    title: "极速结算",
    desc: "告别传统物流的账期拖欠。车拖车建立极速结算体系，客户确认收车后，运费直接进入司机账户，支持微信/支付宝随时提现，账目清晰透明。",
  },
  {
    icon: Truck,
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#006EFF]',
    title: "买卖板车",
    desc: "行业独有的板车交易平台。司机可在 APP 内发布或浏览二手板车（清障车）的买卖信息，无论是更新装备还是转让闲置车辆，都能在平台生态内快速成交。",
  },
  {
    icon: Globe,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    title: "司机之家",
    desc: '连接全国线下服务网点。通过"司机之家"地图，快速查找附近的休息站、维修点与餐饮服务，让长途奔波的卡友在运输途中也能找到温暖的落脚点。',
  },
]
</script>
