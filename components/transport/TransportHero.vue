<template>
  <section class="relative w-full h-[450px] overflow-hidden flex flex-col items-center">
    <!-- Background Image with Parallax effect (simulated via scroll-attachment if possible or just fixed) -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback 
        :src="bgImage" 
        alt="Car carrier truck on highway" 
        class="w-full h-full object-cover"
      />
      <!-- Gradient Overlay -->
      <div 
        class="absolute inset-0 bg-gradient-to-b from-[#0B2747]/80 to-[#0B2747]/60"
      />
    </div>

    <!-- Content Container (1200px centered) -->
    <div class="relative z-10 w-full max-w-[1200px] h-full px-4 mx-auto flex flex-col">
      <!-- Breadcrumb Navigation -->
      <nav class="pt-8 flex items-center gap-2 text-[14px] text-white/70">
        <button 
          @click="handleBackToHome"
          class="hover:text-white transition-colors cursor-pointer"
        >
          首页
        </button>
        <ChevronRight class="w-4 h-4" />
        <span class="text-white font-medium">汽车托运</span>
      </nav>

      <!-- Center-Aligned Content -->
      <div class="flex-grow flex flex-col items-center justify-center text-center">
        <h1 class="text-[40px] font-bold text-white mb-6 leading-tight">
          2026 汽车托运全场景服务百科：大板车、小板车、代驾与救援深度解析
        </h1>
        <p class="text-[18px] text-white/90 max-w-[800px] mb-8 leading-relaxed">
          一站式掌握长途集运、专车直送及末端接驳方案，助您在"价格"与"时效"间找到最优解。
        </p>
        
        <!-- Visual Decoration -->
        <div class="w-16 h-1 bg-[#FF6B00] rounded-full" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

interface Props {
  onBackToHome: () => void
}

const props = defineProps<Props>()

const bgImage = "https://images.unsplash.com/photo-1644442076205-627648a62844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjYXJyaWVyJTIwdHJ1Y2slMjBoaWdod2F5JTIwc3VubnklMjBkYXl8ZW58MXx8fHwxNzY5MTM0ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"

const handleBackToHome = () => {
  props.onBackToHome()
}
</script>
