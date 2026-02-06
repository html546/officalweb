<template>
  <header
    role="banner"
    class="relative w-full h-[520px] overflow-hidden font-['Noto_Sans_SC'] bg-[#0B2747]"
  >
    <!-- Background Image with Optimized Brand Navy Overlay -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        :src="heroBg"
        alt="Roadside Rescue Service"
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
          @click="() => setActiveId?.('home')"
          class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          首页
        </button>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white/60">汽车托运</span>
        <ChevronRight class="w-3.5 h-3.5 text-white/40" />
        <span class="text-white font-medium">
          道路救援
        </span>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="max-w-[752px] pt-16 px-4 lg:px-0"
      >
        <!-- Main Title (H1) - White with Brand Orange highlights -->
        <h1 class="text-[40px] font-bold text-white leading-tight mb-4 drop-shadow-lg">
          <span class="text-[#FF6B00]">24 小时</span>
          道路救援：
          <br class="hidden md:block" />
          针对故障与事故车辆的全天候应急保障
        </h1>

        <!-- Subtitle - Gray-100 for readability on dark BG -->
        <p class="text-[18px] text-gray-100 font-normal mb-8 leading-relaxed drop-shadow-md max-w-[640px]">
          作为汽车托运的安全底座，提供起步价
          <span class="font-bold text-[#FF6B00]">
            170 元
          </span>
          的透明救援服务，构建"运输 + 保障"的全状态移动链路。
        </p>

        <!-- CTA Buttons Row - Strict Colors -->
        <div class="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-8 w-full sm:w-auto">
          <Button 
            @click="isDialogOpen = true"
            class="w-full sm:w-auto rounded-full bg-[#FF6B00] text-white px-8 py-4 h-14 text-lg font-bold flex items-center justify-center transition-all duration-300 hover:bg-[#E56000] hover:shadow-lg border-none cursor-pointer group"
          >
            <PhoneCall
              :size="20"
              class="mr-2 group-hover:animate-pulse"
            />
            立即呼叫救援
          </Button>
          
          <Dialog v-model="isDialogOpen">
            <DialogContent class="sm:max-w-md bg-white rounded-2xl">
              <DialogHeader>
                <DialogTitle class="text-2xl font-bold text-[#0B2747] text-center pt-4">
                  24小时紧急救援热线
                </DialogTitle>
              </DialogHeader>
              <DialogDescription class="text-center text-gray-500 pb-2">
                全天候为您提供故障拖车、搭电及事故救援服务
              </DialogDescription>
              <div class="flex flex-col items-center justify-center py-8 gap-6">
                <a
                  href="tel:4008889999"
                  class="text-4xl font-black text-[#FF6B00] hover:text-[#E56000] transition-colors tracking-wider decoration-0"
                >
                  400-888-9999
                </a>
                <p class="text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
                  点击号码直接拨打 · 优先接入人工客服
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            @click="scrollToPricing"
            class="w-full sm:w-auto rounded-full bg-transparent border-2 border-white text-white px-8 py-4 h-14 text-lg font-bold transition-all duration-300 hover:bg-white hover:text-[#006EFF] cursor-pointer"
          >
            查看收费标准
          </Button>
        </div>

        <!-- Trust Indicators Bar -->
        <div class="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
          <div class="flex items-center gap-2 text-white/90">
            <Clock class="w-5 h-5 text-[#FF6B00]" />
            <span class="text-[14px]">
              平均 15 分钟抵达
            </span>
          </div>
          <div class="w-[1px] h-4 bg-white/20 hidden sm:block" />
          <div class="flex items-center gap-2 text-white/90">
            <ShieldCheck class="w-5 h-5 text-[#FF6B00]" />
            <span class="text-[14px]">
              价格透明无隐形消费
            </span>
          </div>
          <div class="w-[1px] h-4 bg-white/20 hidden sm:block" />
          <div class="flex items-center gap-2 text-white/90">
            <Truck class="w-5 h-5 text-[#006EFF]" />
            <span class="text-[14px]">
              70 万台救援车响应
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  PhoneCall,
  Clock,
  ShieldCheck,
  Truck,
  ChevronRight,
} from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'

// EXTERNAL_ASSETS for hero background
const heroBg = 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=2000'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const isDialogOpen = ref(false)

const scrollToPricing = () => {
  document
    .getElementById('rescue-pricing')
    ?.scrollIntoView({ behavior: 'smooth' })
}
</script>
