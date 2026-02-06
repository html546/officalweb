<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-[36px] font-bold text-[#0B2747]">
          大板车托运核心优势
        </h2>
        <p class="text-[16px] text-gray-500 mt-4">
          国家交通局系统直连定位，30,000+ 干线网络，为您的车辆提供工业级物流保障。
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in advantages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group bg-white border border-[#E5E7EB] rounded-xl p-8 text-center hover:border-[#006EFF] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Icon Area -->
          <div class="w-16 h-16 bg-[#E6F2FF] rounded-full flex items-center justify-center mx-auto transition-colors group-hover:bg-[#006EFF]/10">
            <component :is="item.icon" :size="32" class="text-[#006EFF]" />
          </div>

          <!-- Content Area -->
          <h3 class="mt-6 text-xl font-bold text-[#0B2747]">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-[#4B5563]">
            <span v-html="item.description"></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  TrendingDown,
  Satellite,
  Network,
  Zap,
  FileText,
  Headphones,
} from 'lucide-vue-next'

const advantages = [
  {
    icon: TrendingDown,
    title: '批量运输价格更低',
    description: '利用干线拼车均摊成本，距离越远越划算。每辆大板车可同时装载 <span class="font-bold text-gray-900">8-12辆</span> 轿车，相比单车托运成本降低 <span class="font-bold text-gray-900">40% 以上</span>。',
  },
  {
    icon: Satellite,
    title: '国家交通局系统定位',
    description: '区别于普通 GPS，直接接入 <span class="font-bold text-gray-900">国家交通局运输系统</span> 数据。数据权威、轨迹透明，让您随时通过 APP 查看车辆真实位置。',
  },
  {
    icon: Network,
    title: '30,000+ 运输线路',
    description: '拥有 <span class="font-bold text-gray-900">1000+ 接车卸车网点</span>，覆盖全国 <span class="font-bold text-gray-900">90% 以上</span> 地区。无论是核心城市还是偏远县镇，强大的运力网络皆可触达。',
  },
  {
    icon: Zap,
    title: '热门城市专线直达',
    description: '针对高频城市开通 <span class="font-bold text-gray-900">城际点对点</span> 运输路线。中途无中转、不停留，运输密度大，实现更快速、更低廉的物流体验。',
  },
  {
    icon: FileText,
    title: '正规税务发票',
    description: '支持开具增值税专用发票。与 <span class="font-bold text-gray-900">圆通快递</span> 达成独家合作，纸质发票安全寄送，满足企业财务合规需求。',
  },
  {
    icon: Headphones,
    title: '调度专员全程服务',
    description: '每单配备专属调度专员，提供从询价、发车指导到接车安排的 <span class="font-bold text-gray-900">全流程人工支持</span>，解决大板车进城难等复杂问题。',
  },
]
</script>
