<template>
  <section class="relative w-full h-[448px] overflow-hidden font-['Noto_Sans_SC']">
    <!-- Background with Navy Blue Gradient Overlay - No pure black used -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="EXTERNAL_ASSETS.TRAVEL_HERO" 
        alt="个人旅游托运 - 亚洲家庭自驾游" 
        class="w-full h-full object-cover"
      />
      <!-- Navy Blue Gradient Overlay - Strict compliance with #0B2747 -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/90 via-[#0B2747]/50 to-transparent" />
    </div>

    <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
      <!-- Breadcrumb - Correctly positioned inside Hero area -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
        <NuxtLink to="/" class="hover:text-white transition-colors">首页</NuxtLink>
        <ChevronRight class="w-4 h-4" />
        <NuxtLink to="/solutions" class="hover:text-white transition-colors">解决方案</NuxtLink>
        <ChevronRight class="w-4 h-4" />
        <span class="text-white">个人旅游托运</span>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="max-w-[650px] mt-16 px-4 lg:px-0"
      >
        <!-- Badge - Tech Blue (#006EFF) and 8px grid (py-2 = 8px) -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006EFF]/20 border border-[#006EFF]/30 text-[#006EFF] text-[14px] font-bold mb-6">
          <span class="w-2 h-2 rounded-full bg-[#006EFF] animate-pulse" />
          人机分离 · 专业异地运车服务
        </div>

        <!-- Heading - SEO optimized with keywords "托运", "运车" -->
        <h1 class="text-[40px] font-bold text-white leading-[1.2] mb-6">
          个人旅游托运：<br />
          让远方触手可及
        </h1>

        <p class="text-[18px] text-white/90 leading-relaxed mb-10">
          告别数千公里的长途驾驶疲劳，车拖车为您将座驾精准送达。无论是西藏转山、三亚度假还是洱海环游，专业运车团队让您的自驾旅程只需负责享受。
        </p>

        <div class="flex flex-col sm:flex-row flex-wrap gap-4">
          <!-- Safety Orange (#FF6B00) Button -->
          <button 
            class="h-14 px-10 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] border-none shadow-lg shadow-orange-500/20 cursor-pointer transition-all"
          >
            立即计算运费
          </button>
          
          <div class="flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div class="flex items-center gap-2 text-white/90 text-[13px] sm:text-[14px]">
              <ShieldCheck class="w-4 h-4 text-[#006EFF]" /> 200万车主商业险
            </div>
            <div class="flex items-center gap-2 text-white/90 text-[13px] sm:text-[14px]">
              <Clock class="w-4 h-4 text-[#006EFF]" /> 48小时极速交付
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight, ShieldCheck, Clock } from 'lucide-vue-next'
import { EXTERNAL_ASSETS } from '@/utils/images'
</script>
