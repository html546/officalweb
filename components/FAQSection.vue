<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
        <!-- Left Column: Expert Support Card -->
        <div class="lg:col-span-4 lg:sticky lg:top-24">
          <div class="bg-[#0B2747] rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <!-- Background Decoration Pattern -->
            <div class="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="faq-circuit-home" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 10 L10 10 L10 0 M20 40 L20 30 L30 30" fill="none" stroke="white" stroke-width="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#faq-circuit-home)" />
              </svg>
            </div>

            <div class="relative z-10">
              <div class="flex flex-row items-center gap-3 mb-6">
                <Headphones class="w-8 h-8 text-[#FF6B00]" />
                <h3 class="text-xl font-bold text-white">还有其他疑问？</h3>
              </div>

              <p class="text-gray-300 text-sm leading-relaxed mb-10">
                我们的物流专家在线为您解答特殊车型或路线的疑问。人工客服 + AI 智能客服全天候支持。
              </p>

              <button
                class="w-full bg-[#006EFF] hover:bg-blue-600 text-white font-bold h-12 rounded-lg transition-all shadow-lg shadow-blue-900/10 cursor-pointer border-none flex items-center justify-center gap-2 mb-8"
              >
                <MessageCircle :size="18" />
                <span>在线客服</span>
              </button>

              <div class="flex flex-col items-center pt-8 border-t border-white/10">
                <div class="flex items-center gap-2 text-white">
                  <Phone class="w-4 h-4 text-[#FF6B00]" />
                  <span class="text-2xl font-bold tracking-tight">400-075-1117</span>
                </div>
                <p class="text-gray-400 text-[10px] mt-2 tracking-widest uppercase">服务时间：8:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: FAQ Accordion List -->
        <div class="lg:col-span-8">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-[#0B2747]">常见问题解答</h2>
            <p class="text-[#4B5563] mt-4">关于车拖车平台、价格与服务标准的详细说明。</p>
          </div>

          <div class="space-y-4">
            <details
              v-for="(faq, index) in faqs"
              :key="index"
              class="group border-b border-gray-100 last:border-none"
              :open="index === 0"
            >
              <summary class="list-none cursor-pointer py-6 flex items-start justify-between gap-4 group-hover:text-[#006EFF] transition-colors">
                <div class="flex items-center">
                  <HelpCircle class="w-5 h-5 mr-3 text-gray-300 group-open:text-[#006EFF] transition-colors" />
                  <span class="text-[18px] font-bold text-[#0B2747] group-open:text-[#006EFF] transition-colors">
                    {{ faq.question }}
                  </span>
                </div>
                <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all bg-gray-50 text-gray-400 group-open:bg-[#006EFF] group-open:text-white group-open:rotate-180">
                  <ChevronDown :size="14" />
                </div>
              </summary>
              <div class="pb-8 text-[#4B5563] text-[16px] leading-[1.8] pl-8">
                {{ faq.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Headphones, Phone, ChevronDown, HelpCircle, MessageCircle } from 'lucide-vue-next'

const faqs = [
  {
    question: '小板车托运怎么收费？',
    answer: '严格执行透明定价。采用"起步价+阶梯里程"计费，或选择"一口价"模式。下单前系统计算确切费用，无隐形消费。',
  },
  {
    question: '托运车内可以放置行李吗？',
    answer: '可以。免费放置 50-100kg 行李，请置于后备箱，严禁携带易燃易爆及贵重物品。',
  },
  {
    question: '运输过程中有保险吗？',
    answer: '有。车拖车联合 太平洋/东海保险 承保，提供物流责任险，支持 APP 在线理赔。',
  },
  {
    question: '下单后多久能来接车？',
    answer: '依托 AI 调度，最快 5秒接单，司机通常在 15-30分钟内 上门，时效性极高。',
  },
  {
    question: '如何查看车辆位置？',
    answer: '全程可视化。通过 APP 实时查看 GPS 轨迹，关键节点（装车/到达）主动推送视频验车记录。',
  },
]
</script>
