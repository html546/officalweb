<template>
  <section id="valet-pricing" aria-label="Calculator" class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          价格透明，比传统代驾更省钱
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[16px] text-[#4B5563] mt-4"
        >
          专为物流接驳设计的计费模型，长途代驾成本降低 30% 以上。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Pricing Standard Card -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -32 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="lg:col-span-5 bg-white rounded-2xl shadow-lg p-10 border-t-4 border-[#006EFF]"
        >
          <span class="text-sm text-[#4B5563]">起步价 (含20公里)</span>
          <div class="mt-2 flex items-baseline gap-1">
            <span class="text-5xl font-bold text-[#006EFF] tracking-tight">¥75.6</span>
            <span class="text-xl text-[#006EFF] font-bold">起</span>
          </div>

          <div class="mt-10 space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#006EFF]">
                <MapPin :size="20" />
              </div>
              <div>
                <p class="text-[15px] font-bold text-[#0B2747]">包含里程: 20公里</p>
                <p class="text-sm text-[#4B5563]">满足绝大部分城市同城取送需求</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#006EFF]">
                <Plus :size="20" />
              </div>
              <div>
                <p class="text-[15px] font-bold text-[#0B2747]">超里程费: 阶梯计费</p>
                <p class="text-sm text-[#4B5563]">长途代驾更划算，单价随里程递减</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#006EFF]">
                <Clock :size="20" />
              </div>
              <div>
                <p class="text-[15px] font-bold text-[#0B2747]">等候费: 前30分钟免费</p>
                <p class="text-sm text-[#4B5563]">保障现场验车与交接时间充足</p>
              </div>
            </div>
          </div>

          <button
            v-motion
            :hovered="{ scale: 1.02 }"
            :tapped="{ scale: 0.98 }"
            @click="handleCalculateClick"
            class="w-full mt-12 h-14 bg-[#006EFF] text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#0052CC] transition-colors border-none cursor-pointer"
          >
            <Calculator :size="18" />
            <span>在线计算运费</span>
          </button>
        </div>

        <!-- Right Column: Comparison Table -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 32 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="lg:col-span-7 bg-white rounded-2xl shadow-sm overflow-hidden border border-[#E5E7EB]"
        >
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50 h-16 border-b border-[#E5E7EB]">
                <th class="px-8 text-sm font-bold text-[#0B2747]">对比维度</th>
                <th class="px-8 text-sm font-bold text-[#006EFF] text-center">车拖车物流代驾</th>
                <th class="px-8 text-sm font-bold text-[#9CA3AF] text-center">普通商业代驾</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#F3F4F6]">
              <tr
                v-for="(item, idx) in comparisons"
                :key="idx"
                class="h-20 hover:bg-gray-50/50 transition-colors"
              >
                <td class="px-8">
                  <span class="text-[15px] font-medium text-[#4B5563]">{{ item.label }}</span>
                </td>
                <td class="px-8">
                  <div class="flex flex-col items-center gap-2">
                    <CheckCircle2 :size="20" class="text-[#006EFF]" />
                    <span class="text-[14px] font-bold text-[#0B2747] text-center">{{ item.chetuoche }}</span>
                  </div>
                </td>
                <td class="px-8">
                  <div class="flex flex-col items-center gap-2">
                    <Minus :size="20" class="text-gray-300" />
                    <span class="text-[14px] text-[#9CA3AF] text-center">{{ item.traditional }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="bg-blue-50/30 p-6 border-t border-blue-50">
            <p class="text-[12px] text-center text-[#9CA3AF] italic m-0">
              * 以上数据基于平均 300km 运输距离测算，实际费用以实时估价为准。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mini Program Modal (Desktop Only) -->
    <Dialog v-model="isMiniProgramModalOpen">
      <DialogContent class="sm:max-w-[400px] bg-white p-0 overflow-hidden rounded-2xl gap-0">
        <div class="p-8 flex flex-col items-center text-center">
          <DialogHeader class="mb-2 p-0 space-y-0">
            <DialogTitle class="text-[22px] font-bold text-[#0B2747] text-center">微信扫码 · 3秒获取报价</DialogTitle>
          </DialogHeader>
          <DialogDescription class="text-[14px] text-gray-500 mb-8 max-w-[260px] leading-relaxed">
            无需下载，支持小板车、大板车、救援实时测算
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
import { MapPin, Plus, Clock, Calculator, CheckCircle2, Minus, MessageCircle } from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

const comparisons = [
  {
    label: '价格成本',
    chetuoche: '低 30% (物流一口价)',
    traditional: '高 (含返程费/夜间费)'
  },
  {
    label: '验车服务',
    chetuoche: '第一检测人 (专业验车)',
    traditional: '无 (仅负责驾驶)'
  },
  {
    label: '路线灵活性',
    chetuoche: '随停随走 (可定制)',
    traditional: '点对点 (僵化)'
  },
  {
    label: '保险保障',
    chetuoche: '全额物流责任险',
    traditional: '普通代驾险'
  }
]

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleCalculateClick = () => {
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
