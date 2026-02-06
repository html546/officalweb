<template>
  <div class="relative group">
    <div class="absolute -inset-10 bg-blue-400/10 blur-[80px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700" />
    <div class="relative w-[300px] h-[600px] bg-[#1a1c20] rounded-[55px] border-[8px] border-[#3a3d45] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden">
      <!-- Notch -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
      
      <!-- Screen Content -->
      <div class="absolute inset-0 bg-white">
        <div class="p-6 pt-12">
          <!-- Mock Header -->
          <div class="flex justify-between items-center mb-6">
            <span class="text-[18px] font-bold text-[#0B2747]">实时追踪</span>
            <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <MapPin class="w-4 h-4 text-blue-600" />
            </div>
          </div>

          <!-- Map Simulation -->
          <div class="h-[280px] bg-blue-50/50 rounded-2xl mb-4 relative overflow-hidden border border-blue-100">
            <!-- Map Grid Lines -->
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#006EFF 1px, transparent 0); background-size: 24px 24px;" />
            
            <!-- Route Path -->
            <svg class="absolute inset-0 w-full h-full">
              <path 
                d="M 60 200 Q 150 150 240 50" 
                fill="none" 
                stroke="#006EFF" 
                stroke-width="3" 
                stroke-dasharray="8 4"
                class="animate-dash"
              />
            </svg>

            <!-- Moving Truck -->
            <div 
              v-motion
              :animate="{ 
                x: [0, 180, 0],
                y: [0, -150, 0],
                transition: { duration: 10, repeat: Infinity, ease: 'linear' }
              }"
              class="absolute left-[60px] top-[200px] z-10"
            >
              <div class="bg-white p-1 rounded shadow-md border border-blue-100">
                <span class="text-[14px]">🚚</span>
              </div>
            </div>

            <!-- Start/End Points -->
            <div class="absolute left-[50px] top-[210px] flex flex-col items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm" />
              <span class="text-[9px] font-bold text-gray-500 mt-1">北京</span>
            </div>
            <div class="absolute right-[50px] top-[40px] flex flex-col items-center">
              <div class="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm" />
              <span class="text-[9px] font-bold text-gray-500 mt-1">上海</span>
            </div>
          </div>

          <!-- Floating Info Card -->
          <div class="bg-white shadow-xl shadow-blue-100 border border-blue-50 rounded-xl p-4 mb-4">
            <div class="flex justify-between mb-3">
              <span class="text-[10px] text-gray-400">运输状态</span>
              <span class="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">运输中</span>
            </div>
            <p class="text-[14px] font-bold text-[#0B2747] mb-1">距离终点 500km</p>
            <p class="text-[11px] text-gray-400">预计明日 14:00 到达</p>
          </div>

          <div class="w-full h-10 bg-[#006EFF] rounded-lg flex items-center justify-center text-white text-[13px] font-bold">
            查看详细轨迹
          </div>
        </div>
      </div>

      <!-- Play Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
        <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-2xl">
          <Play class="w-8 h-8 text-white fill-current translate-x-0.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Play } from 'lucide-vue-next'
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: -100;
  }
}
.animate-dash {
  animation: dash 5s linear infinite;
}
</style>
