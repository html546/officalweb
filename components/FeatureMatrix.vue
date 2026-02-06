<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          车拖车小板车是如何帮您托运汽车的
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[16px] text-gray-500 mt-4 max-w-2xl mx-auto"
        >
          车拖车平台凭借多年的行业经验，将用户关心的价格、流程、安全、保障问题一一规范化。
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 50 } }"
          class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all h-full"
        >
          <!-- Header Area (Inline Icon + Title) -->
          <div class="flex flex-row items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-[#006EFF] rounded-lg flex items-center justify-center shrink-0">
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-[#0B2747] leading-tight">
              {{ feature.title }}
            </h3>
          </div>

          <!-- Body Area -->
          <div class="mt-4">
            <p class="text-sm leading-relaxed text-[#4B5563] text-justify">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BadgeDollarSign,
  BrainCircuit,
  Zap,
  Video,
  ShieldCheck,
  FileSignature,
  MousePointerClick,
  Wallet,
  Receipt,
  Map,
  UserCheck,
  Headphones,
} from 'lucide-vue-next'

const features = [
  {
    icon: BadgeDollarSign,
    title: '透明的价格',
    description: '两种计费模式：按公里计费（拒绝绕路）或自定义一口价（适合捡漏）。',
  },
  {
    icon: BrainCircuit,
    title: '智能调度',
    description: '自研 AI 系统快速匹配就近运力，精准匹配板车类型与吨位。',
  },
  {
    icon: Zap,
    title: '快速响应',
    description: '下单后最快 5 秒钟接单，司机确认后立即赶往装车地。',
  },
  {
    icon: Video,
    title: '透明运输',
    description: '司机视频记录验车状态，APP 实时查看车辆位置与轨迹。',
  },
  {
    icon: ShieldCheck,
    title: '安全保障',
    description: '联合太平洋/东海保险承保，支持客户端在线理赔运损。',
  },
  {
    icon: FileSignature,
    title: '电子合同',
    description: '自动签署法律效力合同，明确权责，建立信任终极仪式。',
  },
  {
    icon: MousePointerClick,
    title: '多种下单方式',
    description: '支持 AI 智能体、简洁模式、标准模式及人工客服下单。',
  },
  {
    icon: Wallet,
    title: '两种结算方式',
    description: '支持在线全额支付，实名认证用户可开通"到付运费"。',
  },
  {
    icon: Receipt,
    title: '在线申请发票',
    description: '支持个人普票及企业增值税专用发票，财务合规透明。',
  },
  {
    icon: Map,
    title: '运力覆盖',
    description: '70万辆注册板车，覆盖全国 90% 以上地区，偏远城镇皆可达。',
  },
  {
    icon: UserCheck,
    title: '专业司机服务',
    description: '"司机学堂"严格考核，确保从接单到送达操作标准化。',
  },
  {
    icon: Headphones,
    title: '24小时客服',
    description: '人工客服 + AI 大模型智能客服，提供全天候一对一支持。',
  },
]
</script>
