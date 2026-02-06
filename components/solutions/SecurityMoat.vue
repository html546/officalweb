<template>
  <section class="py-20 bg-[#F0F7FF] font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h2 class="text-[32px] font-bold text-[#0B2747]">平台级网络安全防护方案</h2>
        <div class="w-20 h-1 bg-[#006EFF] mx-auto mt-4" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(card, idx) in securityCards"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: idx * 100 } }"
          :class="`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border ${card.highlight ? 'border-[#006EFF]' : 'border-transparent'}`"
        >
          <div class="w-14 h-14 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-6 text-[#006EFF]">
            <component :is="card.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-[20px] font-bold text-[#0B2747] mb-3">{{ card.title }}</h3>
          <p class="text-[#4B5563] text-[15px] leading-relaxed">{{ card.desc }}</p>
          <div v-if="card.highlight" class="mt-4 inline-flex px-3 py-1 rounded bg-[#006EFF] text-white text-[12px] font-bold">
            核心技术
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, UserCheck, Server, Award } from 'lucide-vue-next'

const securityCards = [
  {
    icon: Shield,
    title: "信息隐私脱敏",
    desc: "全链路数据加密，车主及运力敏感信息实时脱敏处理，确保核心数据安全。"
  },
  {
    icon: UserCheck,
    title: "真实运力风控",
    desc: "多维度背景审查，结合 AI 实人认证与历史评价体系，从源头杜绝运输风险。"
  },
  {
    icon: Server,
    title: "抗 DDoS 与容灾备份",
    desc: "分布式云服务器部署，具备金融级容灾备份能力，保障 7*24 小时服务不中断。"
  },
  {
    icon: Award,
    title: "等保三级认证",
    desc: "通过国家公安部信息安全等级保护三级认证，达到行业顶尖的信息安全标准。",
    highlight: true
  }
]
</script>
