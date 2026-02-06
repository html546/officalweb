<template>
  <div class="relative w-[280px] h-[580px] bg-[#2a2d34] rounded-[52px] border-[10px] border-[#3c3f46] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
    <!-- Notch/Dynamic Island -->
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />
    <div class="absolute inset-0 bg-white">
      <div class="pt-10 pb-4 px-4 bg-white border-b flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
          <Bot class="w-5 h-5 text-[#006EFF]" />
        </div>
        <div>
          <div class="text-[13px] font-bold text-[#0B2747]">
            车拖车 AI 智能助手
          </div>
          <div class="text-[9px] text-green-500 flex items-center gap-1 font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            实时在线
          </div>
        </div>
      </div>
      <div class="flex-1 p-4 space-y-4 bg-gray-50/30 overflow-y-auto">
        <div class="flex justify-end">
          <div class="bg-[#006EFF] text-white p-3 rounded-2xl rounded-tr-none text-[12px] max-w-[85%] shadow-sm leading-relaxed font-medium">
            我想把宝马5系从北京运到上海
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          class="flex justify-start"
        >
          <div class="bg-white text-gray-700 p-3 rounded-2xl rounded-tl-none text-[12px] max-w-[85%] shadow-sm border border-gray-100 leading-relaxed font-medium">
            收到，为您推荐
            <span class="text-[#006EFF] font-bold">
              小板车专线
            </span>
            ，预估
            <span class="text-[#FF6B00] font-bold">
              ¥1500
            </span>
            ，全程 1200km，支持门到门交付。
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 1000 } }"
          class="bg-white rounded-2xl p-4 shadow-xl border border-blue-50 space-y-4"
        >
          <div class="flex justify-between items-center pb-2 border-b border-gray-50">
            <span class="text-[11px] font-bold text-[#0B2747]">
              智选方案：小板专车
            </span>
            <span class="text-[15px] font-black text-[#FF6B00]">
              ¥1,500
            </span>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-[11px] text-[#4B5563]">
              <div class="w-2 h-2 rounded-full bg-green-500" />
              北京 · 朝阳网点
            </div>
            <div class="flex items-center gap-2 text-[11px] text-[#4B5563]">
              <div class="w-2 h-2 rounded-full bg-orange-500" />
              上海 · 浦东网点
            </div>
          </div>
          <Button class="w-full h-10 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-xl text-[13px] font-bold border-none shadow-md shadow-orange-100">
            立即下单
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bot } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>
