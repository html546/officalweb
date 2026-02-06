<template>
  <section id="section-jiuyuan" class="bg-gray-50 py-24 px-4 overflow-hidden">
    <div class="max-w-[1200px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <!-- Right Column: Visual -->
        <div class="lg:col-span-5 order-2">
          <div class="relative group">
            <!-- Image Container -->
            <div class="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                :src="sectionImage"
                alt="24小时道路救援"
                class="w-full h-full object-cover aspect-[4/5] lg:aspect-auto min-h-[480px] transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-[#0B2747]/20 to-transparent pointer-events-none" />
            </div>

            <!-- Floating Glassmorphism Badge -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
              class="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md border border-white/40 shadow-2xl p-6 rounded-2xl flex items-center gap-4 z-10"
            >
              <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                <Phone class="w-6 h-6 fill-current" />
              </div>
              <div>
                <p class="text-[12px] text-[#4B5563] font-medium uppercase tracking-wider">24/7 应急</p>
                <p class="text-[20px] font-bold text-[#0B2747]">随时救援</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Left Column: Content -->
        <div class="lg:col-span-7 order-1">
          <h2 class="text-[36px] font-bold text-[#0B2747] mb-6 leading-tight">
            道路救援：您的应急保障专家
          </h2>
          
          <p class="text-[16px] text-[#4B5563] leading-relaxed mb-8">
            24小时全天候道路救援服务，覆盖拖车、搭电、换胎、送油等全场景应急需求。无论何时何地遇到车辆故障，我们都能第一时间响应，让您的出行更有保障。
          </p>

          <!-- Key Selling Points -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <Clock class="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 class="text-[16px] font-bold text-[#0B2747] mb-1">24/7 全天候 (24/7 Service)</h4>
                <p class="text-[14px] text-[#6B7280]">全年无休，随时待命，夜间同价。</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <MapPin class="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 class="text-[16px] font-bold text-[#0B2747] mb-1">快速响应 (Rapid Response)</h4>
                <p class="text-[14px] text-[#6B7280]">平均响应时间 < 15分钟，就近调度。</p>
              </div>
            </div>
          </div>

          <!-- Platform Tech Highlight -->
          <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <span class="inline-block text-[12px] font-bold text-red-500 uppercase tracking-widest mb-2">
              救援网络 (RESCUE NETWORK)
            </span>
            <p class="text-[15px] text-[#4B5563] leading-relaxed">
              平台整合全国<span class="font-bold text-red-500 mx-1">15000+ 救援网点</span>，通过LBS智能调度系统，自动匹配距您最近的救援车辆，确保最快速度到达现场。
            </p>
          </div>

          <button 
            @click="handleQuoteClick"
            class="mt-8 px-10 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-500/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            立即呼叫救援
            <Phone class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mini Program Modal -->
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

          <div class="w-full border-t border-gray-100 pt-6">
            <button class="text-[14px] text-[#0B2747] hover:text-[#006EFF] font-medium transition-colors">
              我是企业用户？<span class="text-[#006EFF] font-bold"> [ 切换至企业版 ]</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

const sectionImage = EXTERNAL_ASSETS.RESCUE_TRUCK

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleQuoteClick = () => {
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
