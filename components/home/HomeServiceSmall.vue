<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image Left -->
        <div class="w-full lg:w-1/2 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img
              :src="serviceImage"
              alt="Small Carrier Luxury Transport"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              @error="handleImageError"
            />
            <!-- Decorative Element -->
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF6B00] rounded-full opacity-10 blur-2xl" />
          </div>
        </div>

        <!-- Text Right -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0B2747] mb-6 leading-tight">
            小板车尊享托运：<br />
            <span class="text-[#FF6B00]">5秒接单</span>，门到门专车直送
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            主打极致效率。依托 AI LBS 智能调度，实现 15分钟上门。采用"一对一"门到门模式，零中转降低车损风险，适合豪车交付与紧急运输。
          </p>

          <div class="flex flex-wrap gap-4 mb-8">
            <div
              v-for="tag in tags"
              :key="tag"
              class="flex items-center gap-2 bg-[#FFF5EB] text-[#FF6B00] px-4 py-2 rounded-full text-sm font-medium"
            >
              <CheckCircle2 class="w-4 h-4" />
              {{ tag }}
            </div>
          </div>

          <button
            @click="handleQuoteClick"
            class="group bg-transparent hover:bg-[#FFF5EB] text-[#FF6B00] border-2 border-[#FF6B00] rounded-full px-8 py-6 text-lg font-bold transition-all"
          >
            小板车精准估价
            <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
          </button>
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
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://chetuoche.com/miniprogram"
              alt="WeChat Mini Program QR"
              class="w-full h-full p-2"
            />
            <!-- Center Icon Overlay -->
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
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import { SERVICE_SMALL_CARRIER, EXTERNAL_ASSETS } from '@/utils/images'

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)
const tags = ['5秒极速接单', '38万+ 运力覆盖', '全程保险']
const serviceImage = ref(SERVICE_SMALL_CARRIER || EXTERNAL_ASSETS.LUXURY_SHOW)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleImageError = () => {
  serviceImage.value = EXTERNAL_ASSETS.LUXURY_SHOW
}

const handleQuoteClick = () => {
  if (isMobile.value) {
    // Mobile: Deep Link (WeChat)
    window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
  } else {
    // Desktop: Open Modal
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
