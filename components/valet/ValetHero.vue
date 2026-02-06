<template>
  <header role="banner" class="relative w-full h-[520px] overflow-hidden font-['Noto_Sans_SC'] bg-[#0B2747]">
    <!-- Background Image with Optimized Brand Navy Overlay -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        :src="heroBg"
        alt="Professional Valet Service"
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
        <span class="text-white/60">汽车托运</span>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white font-medium">代驾取送车</span>
      </div>

      <div class="max-w-[752px] pt-16 px-4 lg:px-0">
        <!-- Main Title (H1) -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-[42px] font-bold text-white leading-tight tracking-tight drop-shadow-lg"
        >
          专业代驾取送服务：打通汽车托运<br />
          "<span class="text-[#FF6B00]">最后一公里</span>"的数字化桥梁
        </h1>

        <!-- Subtitle -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-[18px] font-medium leading-relaxed text-gray-100 mt-6 max-w-3xl drop-shadow-md"
        >
          不仅是代驾取送，更是大板车末端接驳助手。专业"第一检测人"执行标准化验车，实现随停随走的定制化路线。
        </p>

        <!-- CTA Group -->
        <div class="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            v-motion
            :hovered="{ scale: 1.05 }"
            :tapped="{ scale: 0.95 }"
            @click="handleOrderClick"
            class="h-14 px-8 rounded-full bg-[#FF6B00] text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all border-none"
          >
            <span>预约代驾接驳</span>
            <SteeringWheelIcon />
          </button>
          
          <button
            v-motion
            :hovered="{ scale: 1.05 }"
            :tapped="{ scale: 0.95 }"
            @click="scrollToPricing"
            class="h-14 px-8 rounded-full border-2 border-white text-white font-bold text-lg flex items-center justify-center gap-2 bg-transparent cursor-pointer transition-all hover:bg-white hover:text-[#006EFF]"
          >
            <span>查看接驳费用</span>
            <Calculator class="w-5 h-5" />
          </button>
        </div>

        <!-- Trust Indicators Bar -->
        <div class="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
          <div
            v-for="(item, idx) in trustItems"
            :key="idx"
            class="flex items-center gap-2 text-white/90"
          >
            <div class="text-[#FF6B00]">
              <component :is="item.icon" />
            </div>
            <span class="text-[14px]">{{ item.text }}</span>
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
import { ref, onMounted, onUnmounted, h } from 'vue'
import { Calculator, MapPin, UserCheck, Zap, ChevronRight, MessageCircle } from 'lucide-vue-next'
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

const heroBg = EXTERNAL_ASSETS.VALET_HANDOVER

const SteeringWheelIcon = () => h('svg', {
  width: '20',
  height: '20',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('line', { x1: '12', y1: '2', x2: '12', y2: '12' }),
  h('line', { x1: '12', y1: '12', x2: '21', y2: '16' }),
  h('line', { x1: '12', y1: '12', x2: '3', y2: '16' })
])

const trustItems = [
  { icon: h(UserCheck, { size: 18 }), text: '第一检测人标准验车' },
  { icon: h(MapPin, { size: 18 }), text: 'GPS+北斗全流程监控' },
  { icon: h(Zap, { size: 18 }), text: '点火即走 / 随停随走' }
]

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

const scrollToPricing = () => {
  const element = document.getElementById('valet-pricing')
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
