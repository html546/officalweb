<template>
  <header
    role="banner"
    class="relative w-full h-[520px] overflow-hidden font-['Noto_Sans_SC'] bg-[#0B2747]"
  >
    <!-- Background Image with Optimized Brand Navy Overlay -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        :src="heroBg"
        alt="大板车干线集运"
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
          class="hover:text-white transition-colors cursor-pointer border-none bg-transparent p-0"
        >
          首页
        </button>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white/60">汽车托运</span>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white font-medium">
          大板车托运
        </span>
      </div>

      <div class="max-w-[752px] pt-16 px-4 lg:px-0">
        <!-- Main Title (H1) -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-[42px] font-bold text-white leading-tight tracking-tight drop-shadow-lg"
        >
          大板车干线集运：覆盖全国
          <span class="text-[#FF6B00]">
            30,000 条线路
          </span>
          <br />的
          <span class="text-[#FF6B00]">高性价比</span>
          托运方案
        </h1>

        <!-- Subtitle -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-[18px] font-medium leading-relaxed text-gray-100 mt-6 drop-shadow-md"
        >
          1000+
          网点遍布全国，批量运输大幅降低成本，实时交通局系统定位保障车辆轨迹透明。
        </p>

        <!-- Call to Action (CTA Group) -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          class="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            @click="handleQuoteClick"
            class="h-[56px] px-8 rounded-full bg-[#FF6B00] text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer border-none"
          >
            <span>获取干线报价</span>
            <Calculator :size="20" />
          </button>

          <button
            @click="handleViewRoutesClick"
            class="h-[56px] px-8 rounded-full border-2 border-white text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-white hover:text-[#006EFF] cursor-pointer bg-transparent"
          >
            <span>查看热门专线</span>
            <Map :size="20" />
          </button>
        </div>

        <!-- Trust Indicators Bar -->
        <div class="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
          <div class="flex items-center gap-2 text-white/90">
            <Truck :size="18" class="text-[#FF6B00]" />
            <span class="text-[14px]">
              GB1589合规笼车
            </span>
          </div>
          <div class="w-[1px] h-4 bg-white/20 hidden sm:block" />
          <div class="flex items-center gap-2 text-white/90">
            <Satellite :size="18" class="text-[#006EFF]" />
            <span class="text-[14px]">
              交通局系统实时定位
            </span>
          </div>
          <div class="w-[1px] h-4 bg-white/20 hidden sm:block" />
          <div class="flex items-center gap-2 text-white/90">
            <ShieldCheck
              :size="18"
              class="text-[#FF6B00]"
            />
            <span class="text-[14px]">
              太平洋｜东海保险承保
            </span>
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
              微信扫码 · 3秒获取报价
            </DialogTitle>
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
import {
  Calculator,
  Map,
  Truck,
  Satellite,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
} from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
  navigateToPricing?: (tab: string) => void
}

const props = defineProps<Props>()

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

// Replace figma:asset with EXTERNAL_ASSETS URL
const heroBg = EXTERNAL_ASSETS.BRANDED_TRUCK

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

const handleViewRoutesClick = () => {
  document
    .getElementById('hot-routes')
    ?.scrollIntoView({ behavior: 'smooth' })
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
