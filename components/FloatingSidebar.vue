<template>
  <div class="fixed right-5 bottom-[100px] z-[9999] flex flex-col gap-2 font-['Noto_Sans_SC']">
    
    <!-- Button 1: Emergency Rescue -->
    <div class="relative">
      <Transition
        enter-active-class="transition-all duration-200"
        leave-active-class="transition-all duration-200"
        enter-from-class="opacity-0 translate-x-2"
        enter-to-class="opacity-1 translate-x-0"
        leave-from-class="opacity-1 translate-x-0"
        leave-to-class="opacity-0 translate-x-2"
      >
        <div
          v-if="hoveredButton === 'rescue'"
          class="absolute right-[64px] top-0 h-[56px] flex items-center whitespace-nowrap bg-[#FF6B00] text-white px-4 rounded-lg shadow-lg pointer-events-none"
        >
          <Phone class="w-4 h-4 mr-2" />
          <span class="text-[14px] font-bold">24h 救援热线: 400-075-1117</span>
        </div>
      </Transition>
      
      <button
        @mouseenter="hoveredButton = 'rescue'"
        @mouseleave="hoveredButton = null"
        @click="emit('open-order-modal')"
        class="w-14 h-14 bg-[#FF6B00] rounded-lg shadow-[0_4px_12px_rgba(255,107,0,0.3)] flex flex-col items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
      >
        <BellRing class="w-6 h-6" />
        <span class="text-[10px] mt-0.5 font-bold">救援</span>
      </button>
    </div>

    <!-- Button 2: Online Customer Service -->
    <div class="relative">
      <Transition
        enter-active-class="transition-all duration-200"
        leave-active-class="transition-all duration-200"
        enter-from-class="opacity-0 translate-x-5 scale-95"
        enter-to-class="opacity-1 translate-x-0 scale-100"
        leave-from-class="opacity-1 translate-x-0 scale-100"
        leave-to-class="opacity-0 translate-x-5 scale-95"
      >
        <div
          v-if="hoveredButton === 'service'"
          class="absolute right-[64px] bottom-0 w-[200px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100"
        >
          <div class="p-5 flex flex-col items-center">
            <div class="w-32 h-32 bg-gray-50 rounded-lg p-2 mb-4 border border-gray-100">
              <img
                :src="qrCodeUrl"
                alt="WeChat QR"
                class="w-full h-full object-cover rounded"
                @error="handleQRError"
              />
            </div>
            <p class="text-[#0B2747] text-[14px] font-bold mb-1">微信扫码咨询</p>
            <p class="text-gray-400 text-[12px] mb-4">人工/AI客服在线</p>
            <div class="w-full h-[1px] bg-gray-100 mb-4" />
            <div class="flex items-center gap-2 text-[#006EFF] font-bold text-[15px]">
              <Phone class="w-4 h-4" />
              400-075-1117
            </div>
          </div>
        </div>
      </Transition>

      <button
        @mouseenter="hoveredButton = 'service'"
        @mouseleave="hoveredButton = null"
        @click="emit('open-order-modal')"
        class="w-14 h-14 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-[#006EFF] transition-all hover:bg-gray-50 active:scale-95 cursor-pointer border-none"
      >
        <Headset class="w-6 h-6" />
        <span class="text-[10px] mt-0.5 font-bold text-[#0B2747]">客服</span>
      </button>
    </div>

    <!-- Button 3: Back to Top -->
    <Transition
      enter-active-class="transition-all duration-200"
      leave-active-class="transition-all duration-200"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-1 translate-y-0"
      leave-from-class="opacity-1 translate-y-0"
      leave-to-class="opacity-0 translate-y-5"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="w-14 h-14 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-400 transition-all hover:bg-gray-50 hover:text-[#006EFF] active:scale-95 cursor-pointer border-none"
      >
        <ChevronUp class="w-7 h-7" />
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  BellRing, 
  Headset, 
  ChevronUp, 
  Phone
} from 'lucide-vue-next'

const emit = defineEmits<{
  'open-order-modal': []
}>()

const showBackToTop = ref(false)
const hoveredButton = ref<string | null>(null)
const qrCodeUrl = ref('https://images.unsplash.com/photo-1704363449624-4f695106de5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWNoYXQlMjBxciUyMGNvZGUlMjBncmVlbnxlbnwxfHx8fDE3Njk3NjkyODF8MA&ixlib=rb-4.1.0&q=80&w=1080')

const handleScroll = () => {
  // Show back to top button after scrolling 1 full screen (window height)
  if (window.scrollY > window.innerHeight) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleQRError = () => {
  qrCodeUrl.value = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chetuoche.com'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
