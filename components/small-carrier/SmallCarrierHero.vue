<template>
  <header role="banner" class="relative w-full h-[520px] overflow-hidden font-['Noto_Sans_SC'] bg-[#0B2747]">
    <!-- Background Image with Optimized Brand Navy Overlay -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        :src="heroBg"
        alt="车拖车小板车托运"
        class="w-full h-full object-cover"
      />
      <!-- Brand Mask: Left to Right Navy Gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/90 via-[#0B2747]/60 to-[#0B2747]/30" />
    </div>

    <!-- Content Container (1200px centered) -->
    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-0 h-full flex flex-col justify-center">
      <!-- Breadcrumb Navigation - Absolute Positioned -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
        <button 
          @click="handleHomeClick"
          class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          首页
        </button>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <button class="text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0">
          汽车托运
        </button>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white font-medium">
          小板车托运
        </span>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="max-w-[752px] pt-16 px-4 lg:px-0"
      >
        <!-- Main Title (H1) - White with Brand Orange highlights -->
        <h1 class="text-[42px] font-bold text-white leading-tight mb-4 drop-shadow-lg">
          小板车尊享托运：
          <span class="text-[#FF6B00]">5 秒接单</span>
          <br class="hidden md:block" />
          门到门专车直送的时效标杆
        </h1>

        <!-- Subtitle - Gray-100 for readability on dark BG -->
        <p class="text-[18px] text-gray-100 font-normal mb-8 leading-relaxed drop-shadow-md max-w-[640px]">
          即刻出发、无需拼车、零中转风险，依托自研 AI 智能 LBS
          调度系统，实现 15 分钟极速响应。
        </p>

        <!-- CTA Buttons - Strict Brand Colors -->
        <div class="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-10 w-full sm:w-auto">
          <Button 
            @click="handleOrderClick"
            class="w-full sm:w-auto rounded-full bg-[#FF6B00] text-white px-8 py-4 h-14 text-lg font-bold flex items-center justify-center transition-all duration-300 hover:bg-[#E56000] hover:shadow-lg border-none cursor-pointer"
          >
            立即下单
          </Button>

          <button
            @click="scrollToCalculator"
            class="w-full sm:w-auto rounded-full bg-transparent border-2 border-white text-white px-8 py-4 h-14 text-lg font-bold transition-all duration-300 hover:bg-white hover:text-[#006EFF] cursor-pointer"
          >
            价格查询
          </button>
        </div>

        <div class="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
          <div class="flex items-center gap-2 text-white/90">
            <ShieldCheck class="w-5 h-5 text-[#FF6B00]" />
            <span class="text-[14px]">
              太平洋/东海保险
            </span>
          </div>
          <div class="w-[1px] h-4 bg-white/20 hidden sm:block" />
          <div class="flex items-center gap-2 text-white/90">
            <Users class="w-5 h-5 text-[#006EFF]" />
            <span class="text-[14px]">认证司机 38w+</span>
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
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ShieldCheck, Users, ChevronRight, MessageCircle } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

const heroBg = EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleOrderClick = () => {
  if (isMobile.value) {
    window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
  } else {
    isMiniProgramModalOpen.value = true
  }
}

const scrollToCalculator = () => {
  const element = document.getElementById('price-calculator')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleHomeClick = () => {
  props.setActiveId?.('home')
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
