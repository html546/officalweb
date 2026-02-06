<template>
  <section class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <!-- Left Column: Help Center -->
        <div class="lg:col-span-4">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
            class="lg:sticky lg:top-24"
          >
            <h2 class="text-[36px] font-bold text-[#0B2747] leading-tight">
              常见问题解答
            </h2>
            <p class="text-[16px] text-[#4B5563] mt-4 mb-8">
              关于时效、价格、车损保障及特殊车型托运的疑问。
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
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { delay: 200 } }"
            class="space-y-4"
          >
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
    question: '小板车托运比大板车贵多少？什么情况下值得选择？',
    answer: '小板车价格通常是大板车的 2-3 倍。但对于以下场景强烈推荐：①紧急送车（当天/次日必达）②豪车/新车（避免装卸风险）③短途运输（200km内性价比高）④隐私需求（不想公开展示）。时效性、安全性是小板车的核心价值。'
  },
  {
    question: '15分钟上门是怎么做到的？',
    answer: '车拖车自研的AI智能LBS调度系统，实时追踪全国70万+运力位置。下单瞬间，系统自动匹配距您最近且空闲的运力。司机平均5秒接单，若在10公里范围内，最快15分钟即可上门。'
  },
  {
    question: '车辆运输过程中发生损伤怎么办？',
    answer: '每笔小板车订单均包含全额运输保险，最高赔付可达车辆评估价。若发生车损：①司机取车前会完整拍照验车，建立基准②运输途中如有损伤，交付时立即拍照留证③平台介入保险理赔，3-5个工作日赔付到账。零中转的小板车模式，车损率极低。'
  },
  {
    question: '能运输改装车、超跑或特殊车型吗？',
    answer: '可以。小板车支持绝大多数车型，包括：①低趴改装车（液压平板0°装卸）②超跑/跑车（全密封厢式运输）③皮卡/房车（定制化方案）④新能源车（配备专业固定装置）。下单时请备注车型特殊性，系统会匹配专业运力。'
  },
  {
    question: '可以指定取车和送车的具体时间吗？',
    answer: '可以。小板车专车专送模式支持预约时间窗口。您可以在下单时选择：①取车时间（如"明天上午10点"）②送达时间（如"后天下午3点前"）。司机会提前15分钟电话通知，确保无缝对接。'
  },
  {
    question: '小板车托运适合跨省长途吗？',
    answer: '非常适合。小板车专车直达，无需等待拼车或中转卸货，是所有托运方式中时效最确定的。跨省长途（如北京-上海 1200km）通常1-2天送达，朝发夕至。若预算充足且追求效率，小板车是长途托运的最佳选择。'
  }
]
</script>
