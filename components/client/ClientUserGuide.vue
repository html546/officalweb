<template>
  <section class="py-20 bg-[#F8F9FB]">
    <div class="container mx-auto max-w-[1200px] px-4 text-center">
      <h2 class="text-[32px] font-bold text-[#0B2747] mb-16">
        新手托运避坑指南
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(guide, idx) in guides"
          :key="idx"
          :class="[
            'bg-white p-8 rounded-3xl shadow-sm text-left border border-gray-100 group hover:border-blue-100 transition-all',
            idx === 0 ? 'hover:border-blue-100' : idx === 1 ? 'hover:border-orange-100' : 'hover:border-green-100'
          ]"
        >
          <div :class="[
            'w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform',
            idx === 0 ? 'bg-blue-50 text-[#006EFF]' : idx === 1 ? 'bg-orange-50 text-[#FF6B00]' : 'bg-green-50 text-green-600'
          ]">
            <component :is="guide.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-[20px] font-bold text-[#0B2747] mb-4">
            {{ guide.title }}
          </h3>
          <p class="text-[15px] text-gray-500 leading-relaxed">
            {{ guide.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search, Package, ShieldCheck } from 'lucide-vue-next'

const guides = [
  {
    icon: Search,
    title: "验车规范",
    desc: '执行严格的"第一检测人"机制。司机必须配合用户进行 360 度拍照验车，记录里程数与外观状态，确保起运前车况清晰无争议。',
  },
  {
    icon: Package,
    title: "行李规定",
    desc: "支持随车托运个人物品，行李总重量建议控制在 50kg - 100kg 以内。严禁放置易燃易爆品、非法违禁品及现金首饰等贵重资产。",
  },
  {
    icon: ShieldCheck,
    title: "售后理赔",
    desc: "如遇运损，APP 内支持一键发起售后。依托与太平洋保险、东海保险的深度合作，平台将协助用户快速定损理赔，拒绝推诿扯皮。",
  },
]
</script>
