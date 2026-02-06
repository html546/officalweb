<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-[1200px] mx-auto">
      <!-- Part A: Redesigned SEO Opening Statement (Expert Insight Style) -->
      <div class="relative mb-20 overflow-hidden">
        <div class="relative bg-[#F0F7FF] border-l-4 border-[#006EFF] rounded-r-xl p-10">
          <!-- Decorative Icon -->
          <Quote class="absolute -top-2 -left-2 w-24 h-24 text-[#006EFF] opacity-[0.05] pointer-events-none" />
          
          <div class="relative z-10">
            <!-- Part 1: The Hook (Headline Style) -->
            <h3 class="text-[22px] font-bold text-[#0B2747] leading-snug">
              面对车辆异地流转需求，车主往往在"
              <span class="text-[#FF6B00]">价格</span>"与"
              <span class="text-[#006EFF]">时效</span>"之间犹豫。
            </h3>
            
            <!-- Part 2: The Solution (Body Text) -->
            <div class="mt-6">
              <p class="text-[16px] text-[#4B5563] leading-[1.8] font-normal">
                车拖车（CheTuoChe）平台作为智能物流调度专家，为您构建了包含大板车干线集运、小板车专车托运、专业代驾接驳及道路救援在内的全链路服务体系。无论您是追求高性价比的长途迁徙，还是需要极致呵护的豪车运输，这里都有最优解。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Part B: Decision Matrix Table Section -->
      <div class="text-center mb-10">
        <h2 class="text-[36px] font-bold text-[#0B2747]">
          一图看懂：大板车集运与小板车专运的区别
        </h2>
      </div>

      <!-- The Table Architecture -->
      <div class="overflow-hidden rounded-xl border border-[#E5E7EB] shadow-md bg-white">
        <div class="grid grid-cols-[1.2fr_2fr_2fr_2fr] bg-[#F8F9FB] border-b border-[#E5E7EB]">
          <div class="px-6 py-6 font-bold text-[#0B2747] text-[16px] flex items-center">
            维度
          </div>
          <div class="px-6 py-6 font-bold text-[#0B2747] text-[16px] flex items-center gap-2">
            <Truck class="w-5 h-5 text-[#006EFF]" />
            大板车干线集运
          </div>
          <div class="px-6 py-6 font-bold text-[#0B2747] text-[16px] flex items-center gap-2">
            <Car class="w-5 h-5 text-[#FF6B00]" />
            小板车尊享托运
          </div>
          <div class="px-6 py-6 font-bold text-[#0B2747] text-[16px] flex items-center gap-2">
            <User class="w-5 h-5 text-[#006EFF]" />
            代驾
          </div>
        </div>

        <div class="divide-y divide-[#E5E7EB]">
          <div
            v-for="(row, index) in rows"
            :key="index"
            class="grid grid-cols-[1.2fr_2fr_2fr_2fr] transition-colors hover:bg-gray-50/30"
          >
            <div class="px-6 py-5 font-bold text-[#0B2747] bg-[#F8F9FB]/50 flex items-center border-r border-[#E5E7EB]">
              {{ row.dimension }}
            </div>
            <div class="px-6 py-5 text-[#4B5563] text-[15px] leading-relaxed flex items-center border-r border-[#E5E7EB]">
              <span v-html="row.large" />
            </div>
            <div class="px-6 py-5 text-[#4B5563] text-[15px] leading-relaxed flex items-center border-r border-[#E5E7EB]">
              <span v-html="row.small" />
            </div>
            <div class="px-6 py-5 text-[#4B5563] text-[15px] leading-relaxed flex items-center">
              {{ row.driving }}
            </div>
          </div>
        </div>
      </div>

      <!-- Visual Confirmation icons/badges footer -->
      <div class="mt-12 flex justify-center gap-12">
        <div class="flex items-center gap-2 text-[#006EFF] font-medium">
          <Check class="w-5 h-5" />
          <span>全国网点覆盖</span>
        </div>
        <div class="flex items-center gap-2 text-[#FF6B00] font-medium">
          <Check class="w-5 h-5" />
          <span>实时物流追踪</span>
        </div>
        <div class="flex items-center gap-2 text-[#006EFF] font-medium">
          <Check class="w-5 h-5" />
          <span>全额保险保障</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, Car, User, Check, Quote } from 'lucide-vue-next'

const rows = [
  {
    dimension: "运输工具",
    large: "6-12位专业商品车运输笼车（双层）",
    small: "单车位救援车或平板拖车",
    driving: "专业司机直接驾驶（专人专车）",
  },
  {
    dimension: "核心优势",
    large: '<strong class="text-[#FF6B00]">高性价比</strong>，路线成熟，均摊成本低',
    small: '<strong class="text-[#006EFF]">极速响应</strong>，无需拼车，私密性强',
    driving: "路线灵活，随停随走，第一检测人验车",
  },
  {
    dimension: "服务模式",
    large: "点到点（通常需在物流基地集散）",
    small: "门对门（专车直送）",
    driving: '门到门（解决"最后一公里"接驳）',
  },
  {
    dimension: "时效性",
    large: "需等待固定发车班次及满载，时效适中",
    small: "即刻出发，专车直达，速度最快",
    driving: "点火即走，无中转等待，时间确定性最高",
  },
  {
    dimension: "推荐场景",
    large: "家用车长途搬迁、二手车商调车、自驾游返程",
    small: "豪车交付、紧急救援、短途故障拖车",
    driving: "大板车末端取送、短途调车、定制化行程",
  },
]

</script>
