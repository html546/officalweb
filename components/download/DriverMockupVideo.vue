<template>
  <div class="relative group">
    <div class="absolute -inset-10 bg-orange-400/10 blur-[80px] rounded-full group-hover:bg-orange-400/20 transition-colors duration-700" />
    <div class="relative w-[300px] h-[600px] bg-[#1a1c20] rounded-[45px] border-[8px] border-[#3a3d45] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden">
      <!-- Notch -->
      <div class="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20" />
      
      <!-- Screen Content -->
      <div class="absolute inset-0 bg-[#0B2747]">
        <div class="p-6 pt-12">
          <!-- Header -->
          <div class="flex justify-between items-center mb-8">
            <div class="flex flex-col">
              <span class="text-[10px] text-blue-200/50">Driver Center</span>
              <span class="text-[18px] font-bold text-white">收益概览</span>
            </div>
            <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Wallet class="w-5 h-5 text-[#FF6B00]" />
            </div>
          </div>

          <!-- Earnings Display -->
          <div class="text-center mb-8">
            <span class="text-[11px] text-blue-200/60 mb-1 block">今日收入 (元)</span>
            <div 
              v-motion
              :animate="{ scale: [1, 1.05, 1], transition: { duration: 3, repeat: Infinity } }"
              class="text-[36px] font-black text-[#FF6B00] leading-none"
            >
              ¥3,500.00
            </div>
          </div>

          <!-- Order List -->
          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-center">
              <span class="text-[12px] font-bold text-white">待接单任务</span>
              <span class="text-[10px] text-blue-200/50">当前匹配 3 个</span>
            </div>

            <div 
              v-for="(order, idx) in orders"
              :key="idx"
              v-motion
              :initial="{ x: 20, opacity: 0 }"
              :enter="{ x: 0, opacity: 1, transition: { delay: idx * 200 } }"
              class="bg-white/5 border border-white/10 rounded-xl p-3"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-[16px] font-bold text-[#FF6B00]">{{ order.price }}</span>
                <div class="px-2 py-0.5 bg-orange-500/20 rounded text-[9px] text-orange-400">智能匹配</div>
              </div>
              <div class="text-[12px] text-white font-medium mb-1">{{ order.route }}</div>
              <div class="text-[10px] text-blue-200/40">{{ order.type }}</div>
            </div>
          </div>

          <button 
            @click="alert('请先下载司机端 APP')"
            class="w-full h-11 bg-[#FF6B00] text-white rounded-xl font-bold text-[14px] shadow-lg shadow-orange-900/40 cursor-pointer"
          >
            开始抢单
          </button>
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
import { Wallet, Play } from 'lucide-vue-next'

const orders = [
  { price: "¥2,800", route: "北京 - 天津", type: "SUV 托运" },
  { price: "¥1,500", route: "北京 - 廊坊", type: "个人轿车" }
]
</script>
