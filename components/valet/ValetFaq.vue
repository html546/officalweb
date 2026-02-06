<template>
  <section class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <!-- Left Column: Help Center -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-24">
            <h2 class="text-[36px] font-bold text-[#0B2747] leading-tight">
              常见问题解答
            </h2>
            <p class="text-[16px] text-[#4B5563] mt-4 mb-8">
              关于验车标准、保险理赔及计费规则的疑问。
            </p>

            <div class="bg-white rounded-2xl p-10 border border-[#E5E7EB] shadow-sm">
              <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Headset class="text-[#006EFF]" :size="24" />
              </div>
              <h4 class="text-[18px] font-bold text-[#0B2747] mb-3">
                还有其他疑问？
              </h4>
              <p class="text-sm text-[#4B5563] mb-8 leading-relaxed">
                如果您在列表中没找到答案，欢迎随时联系我们的 24 小时在线客服。
              </p>
              <button class="w-full bg-[#006EFF] hover:bg-[#0056CC] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group cursor-pointer border-none">
                <MessageCircle :size="20" class="group-hover:scale-110 transition-transform" />
                联系客服
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Accordion Items -->
        <div class="lg:col-span-8">
          <div class="space-y-4">
            <details 
              v-for="(item, index) in faqData"
              :key="index"
              class="group bg-white rounded-xl overflow-hidden border border-[#E5E7EB] open:border-[#006EFF]/30 open:shadow-md transition-all duration-300"
              :open="index === 0"
            >
              <summary class="list-none cursor-pointer p-6 flex items-start justify-between gap-4 group-hover:bg-gray-50/50 transition-colors">
                <div class="flex items-center">
                  <HelpCircle class="w-5 h-5 mr-3 text-gray-400 group-open:text-[#006EFF] transition-colors" />
                  <span class="text-[18px] font-bold text-[#0B2747] group-open:text-[#006EFF] transition-colors">
                    {{ item.question }}
                  </span>
                </div>
                <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-open:bg-[#006EFF] group-open:text-white group-open:rotate-180">
                  <ChevronDown :size="14" />
                </div>
              </summary>
              <div class="px-6 pb-8 text-[16px] leading-[1.8] text-[#4B5563] border-t border-gray-50 pt-6 ml-8">
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Headset, MessageCircle, ChevronDown, HelpCircle } from 'lucide-vue-next'

const faqData = [
  {
    question: '车拖车代驾和普通代驾（如滴滴/e代驾）有什么区别？',
    answer: '核心区别在于物流属性。普通代驾侧重于把人送回家，车拖车侧重于把车安全送达。我们的司机受过专业商品车物流培训，执行独有的"第一检测人"验车标准（含外观、随车物品及动态检测），且投保的是全额物流责任险而非普通代驾险。',
  },
  {
    question: '代驾费用是如何计算的？',
    answer: '费用由 "起步价 + 里程费" 组成。起步价为 75.6元（含20公里），超出部分按阶梯里程计费。相比大板车，短途接驳更划算；相比传统长途代驾，综合成本低约 30%。下单前输入起终点即可获得一口价。',
  },
  {
    question: '车辆在代驾过程中发生事故怎么办？',
    answer: '请完全放心。每笔订单均包含高额物流责任险。若发生交通事故或车辆剐蹭，由平台对接保险公司进行定损赔付，全程无需车主介入，保障您的资产安全。',
  },
  {
    question: '我可以指定行驶路线吗？',
    answer: '可以。与板车运输不同，代驾服务支持"随停随走"。您可以指定行驶路线，甚至在途中经停办事或接人。全程 GPS+北斗双模监控确保司机按您的指令行驶，杜绝私自绕路。',
  },
  {
    question: '代驾能帮我把车从物流园取回来吗？',
    answer: '当然可以。这是我们的核心场景之一。您只需提供大板车提车单或物流园联系方式，代驾员会作为您的代理人前往园区验车、提车，并直接送至您家楼下。',
  },
]
</script>
