<template>
  <div class="fixed right-2 bottom-20 sm:right-5 sm:bottom-[100px] z-[9999] flex flex-col gap-2 font-['Noto_Sans_SC']">
    
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
          class="absolute right-[56px] top-0 h-[48px] sm:h-[56px] flex items-center max-w-[min(calc(100vw-8rem),280px)] sm:max-w-none bg-[#FF6B00] text-white px-3 sm:px-4 rounded-lg shadow-lg pointer-events-none"
        >
          <Phone class="w-4 h-4 mr-2 flex-shrink-0" />
          <span class="text-xs sm:text-[14px] font-bold truncate">24h 救援热线: 400-075-1117</span>
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

    <!-- Button 2: Customer Service -->
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
          v-if="hoveredButton === 'service'"
          class="absolute right-[56px] top-0 h-[48px] sm:h-[56px] flex items-center max-w-[min(calc(100vw-8rem),280px)] sm:max-w-none bg-[#006EFF] text-white px-3 sm:px-4 rounded-lg shadow-lg pointer-events-none"
        >
          <MessageCircle class="w-4 h-4 mr-2 flex-shrink-0" />
          <span class="text-xs sm:text-[14px] font-bold truncate">在线客服</span>
        </div>
      </Transition>
      
      <button
        @mouseenter="hoveredButton = 'service'"
        @mouseleave="hoveredButton = null"
        @click="openCustomerService"
        class="w-14 h-14 bg-[#006EFF] rounded-lg shadow-[0_4px_12px_rgba(0,110,255,0.3)] flex flex-col items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
      >
        <MessageCircle class="w-6 h-6" />
        <span class="text-[10px] mt-0.5 font-bold">客服</span>
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
  ChevronUp, 
  Phone,
  MessageCircle
} from 'lucide-vue-next'

const emit = defineEmits<{
  'open-order-modal': []
}>()

const showBackToTop = ref(false)
const hoveredButton = ref<string | null>(null)

const handleScroll = () => {
  if (window.scrollY > window.innerHeight) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openCustomerService = () => {
  window?.qimoChatClick?.()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
