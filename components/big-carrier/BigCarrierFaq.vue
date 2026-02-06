<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Left Column: Sticky Header -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-24">
            <h2 class="text-[36px] font-bold text-[#0B2747]">
              常见问题解答
            </h2>
            <p class="text-[16px] text-[#4B5563] mt-4 leading-relaxed">
              关于大板车集运的时效、流程与服务细节，这里有您想知道的一切。
            </p>

            <!-- Support CTA Box -->
            <div class="mt-8 p-8 bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-50 rounded-lg">
                  <Headphones
                    :size="20"
                    class="text-[#006EFF]"
                  />
                </div>
                <span class="font-bold text-[#0B2747]">
                  还有其他疑问？
                </span>
              </div>
              <p class="text-sm text-[#4B5563] mb-6">
                咨询人工客服，1分钟内响应。
              </p>
              <button
                @click="handleContactClick"
                class="flex items-center gap-2 text-[#006EFF] font-bold hover:gap-3 transition-all cursor-pointer bg-transparent border-none p-0"
              >
                <MessageSquare :size="18" />
                <span>联系在线客服</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Accordion List -->
        <div class="lg:col-span-8">
          <div class="space-y-4">
            <details
              v-for="(item, index) in faqData"
              :key="index"
              class="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 open:shadow-md open:border-[#006EFF]/30"
              :open="index === 0"
            >
              <summary class="list-none cursor-pointer p-6 flex items-center justify-between group-hover:bg-gray-50/50 transition-colors">
                <div class="flex items-center">
                  <HelpCircle class="w-5 h-5 mr-3 text-gray-400 group-open:text-[#006EFF] transition-colors" />
                  <span class="text-lg font-bold text-[#0B2747] group-open:text-[#006EFF] transition-colors">
                    {{ item.question }}
                  </span>
                </div>
                <ChevronDown
                  class="text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#006EFF]"
                  :size="20"
                />
              </summary>
              <div class="px-6 pb-6 pl-14 border-t border-gray-50 pt-4">
                <p class="text-base text-[#4B5563] leading-relaxed">
                  {{ item.answer }}
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>

    <!-- Mini Program Modal (Desktop Only) -->
    <Dialog v-model="isMiniProgramModalOpen">
      <DialogContent class="sm:max-w-[400px] bg-white p-0 overflow-hidden rounded-2xl gap-0">
        <div class="p-8 flex flex-col items-center text-center">
          <DialogHeader class="mb-2 p-0 space-y-0">
            <DialogTitle class="text-[22px] font-bold text-[#0B2747] text-center">
              微信扫码 · 咨询人工客服
            </DialogTitle>
          </DialogHeader>
          <DialogDescription class="text-[14px] text-gray-500 mb-8 max-w-[260px] leading-relaxed">
            无需下载，直接对话客服专员
          </DialogDescription>

          <!-- QR Code Container -->
          <div class="relative w-[180px] h-[180px] bg-white border-2 border-[#0B2747]/5 rounded-xl flex items-center justify-center mb-6 shadow-inner">
            <ImageWithFallback
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://chetuoche.com/miniprogram"
              alt="WeChat Mini Program QR"
              class="w-full h-full p-2"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 border border-gray-100">
                <MessageCircle class="w-6 h-6 text-[#07C160] fill-current" />
              </div>
            </div>
          </div>

          <div class="text-[14px] text-gray-400 mb-6 font-medium">
            打开微信 [扫一扫]
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Headphones,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  MessageCircle,
} from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const faqData = [
  {
    question: '大板车托运一般需要几天？',
    answer:
      '时效取决于线路距离。大板车需在集散中心集货，通常省内或邻省 1-2 天，跨省长途（如北京至三亚）约 3-7 天。如需极致时效，建议选择小板车专车服务。',
  },
  {
    question: '大板车进不了市区，怎么实现"门到门"？',
    answer:
      '不用担心。对于大板车限行的区域，车拖车提供 "代驾接驳" 服务。大板车停靠在城市边缘物流园，由专业代驾员负责"最后一公里"的取送，真正实现从家门到家门。',
  },
  {
    question: '托运车内可以放行李吗？',
    answer:
      '可以。大板车托运支持随车携带非贵重、非易燃易爆的个人物品（如衣物、被褥）。',
  },
  {
    question: '运输途中怎么查看我的车在哪里？',
    answer:
      '我们接入了 国家交通局运输系统。您只需在车拖车 APP 或小程序即可实时查看车辆的 GPS 定位轨迹，甚至可以查看车辆在主要中转节点的照片。',
  },
  {
    question: '托运费用包含保险吗？',
    answer:
      '包含。大板车报价为"一口价"，已包含 20万以内的基础运输保险（由 PICC 或东海保险承保）。如您的车辆价值较高，可在下单时按需增加保额。',
  },
]

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleContactClick = () => {
  if (isMobile.value) {
    window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
  } else {
    isMiniProgramModalOpen.value = true
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
