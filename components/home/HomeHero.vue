<template>
  <section class="relative h-[800px] w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroBackgroundImage"
        alt="Hero Background"
        class="w-full h-full object-cover"
        @error="handleImageError"
      />
      <!-- Gradient Overlay for Text Readability -->
      <div
        class="absolute inset-0"
        :style="{
          background: 'linear-gradient(90deg, rgba(11, 39, 71, 0.9) 0%, rgba(11, 39, 71, 0.4) 60%, rgba(11, 39, 71, 0) 100%)'
        }"
      />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 h-full max-w-[1200px] mx-auto px-4 flex flex-col justify-center items-start">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="max-w-[800px] text-white text-left"
      >
        <h1
          class="text-5xl md:text-[56px] font-bold leading-tight mb-6 text-white"
          style="text-shadow: 0 4px 10px rgba(0,0,0,0.2)"
        >
          智能汽车物流生态平台
        </h1>
        <p class="text-[18px] md:text-[20px] text-[#E5E7EB] mb-8 font-normal max-w-[600px]">
          连接运力、货主与救援服务的综合性数字平台。自研 AI 智能调度系统，连接 70万+ 运力，已安全交付 2500万+ 台次。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button
            @click="handleQuoteClick"
            class="bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-full h-[56px] px-12 shadow-[0_10px_20px_-5px_rgba(255,107,0,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 text-lg font-bold"
          >
            <Zap class="w-5 h-5 fill-current" />
            立即获取报价
          </button>
          <button
            @click="handleDemoClick"
            class="flex items-center text-white hover:text-[#FF6B00] transition-colors group bg-transparent border-none cursor-pointer"
          >
            <PlayCircle class="w-6 h-6 mr-2" />
            <span class="border-b border-transparent group-hover:border-[#FF6B00] pb-1 font-medium">观看 5 秒极速接单演示</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Trust Bar (Bottom) -->
    <div class="absolute bottom-0 left-0 right-0 bg-[#0B2747]/80 backdrop-blur-md border-t border-white/10">
      <div class="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between text-gray-300 text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div class="flex items-center gap-2">
          <ShieldCheck class="w-5 h-5 text-[#FF6B00]" />
          <span>太平洋/东海保险承保</span>
        </div>
        <div class="w-[1px] h-6 bg-white/20 mx-4 hidden sm:block" />
        <div class="flex items-center gap-2">
          <Lock class="w-5 h-5 text-[#FF6B00]" />
          <span>国家等保三级认证</span>
        </div>
        <div class="w-[1px] h-6 bg-white/20 mx-4 hidden sm:block" />
        <div class="flex items-center gap-2">
          <Factory class="w-5 h-5 text-[#FF6B00]" />
          <span>年产1500台自营工厂</span>
        </div>
      </div>
    </div>

    <!-- Mini Program Modal (Desktop Only) -->
    <Dialog v-model="isMiniProgramModalOpen">
      <div class="w-full max-w-[400px] bg-white rounded-2xl overflow-hidden shadow-2xl">
        <div class="p-8 flex flex-col items-center text-center">
          <DialogHeader class="mb-2 p-0 space-y-0">
            <DialogTitle class="text-[22px] font-bold text-[#0B2747] text-center">微信扫码 · 观看演示与报价</DialogTitle>
          </DialogHeader>
          <p class="text-[14px] text-gray-500 mb-8 max-w-[260px] leading-relaxed">
            扫码进入小程序，体验 5 秒极速接单演示，或直接获取精准报价。
          </p>

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
            <button class="text-[14px] text-[#0B2747] hover:text-[#006EFF] font-medium transition-colors cursor-pointer">
              我是企业用户？<span class="text-[#006EFF] font-bold"> [ 切换至企业版 ]</span>
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ShieldCheck, Lock, Factory, Zap, MessageCircle, PlayCircle } from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'

const props = defineProps<{}>()

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)
const heroBackgroundImage = ref('https://images.unsplash.com/photo-1644442076205-627648a62844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNlbWklMjB0cnVjayUyMGhpZ2h3YXklMjBzdW5ueXxlbnwxfHx8fDE3NzAwMDQ3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleImageError = () => {
  // Fallback image handling
  heroBackgroundImage.value = 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=1080'
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

const handleDemoClick = (e: Event) => {
  e.preventDefault()
  // In a real app, this would open a video modal.
  // For now, let's open the mini program modal as a conversion action.
  isMiniProgramModalOpen.value = true
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
