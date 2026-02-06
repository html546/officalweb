<template>
  <section class="py-20 bg-[#FFF7ED] border-y border-[#FFEDD5] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Concept Definition -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0 }"
          :visibleOnce="true"
          class="lg:col-span-7"
        >
          <span class="text-sm font-bold tracking-widest text-[#FF6B00]">
            SERVICE DEFINITION / 服务定义
          </span>
          <h2 class="text-[36px] font-bold text-[#0B2747] mt-4 mb-6 leading-tight">
            汽车托运的"安全底座"：<br />构建全状态移动链路
          </h2>
          <div class="space-y-6">
            <p class="text-[16px] text-gray-600 leading-relaxed">
              车拖车救援不同于传统汽修店的维修服务。我们专注于解决 <span class="text-[#006EFF] font-semibold">车辆无法位移</span> 的难题。无论是起运前因长期闲置导致的亏电、瘪气，还是事故造成的机械故障，我们提供从 <span class="text-[#006EFF] font-semibold">地库拖车</span> 到 <span class="text-[#006EFF] font-semibold">辅助装车</span> 的一站式解决方案。
            </p>
            <p class="text-[16px] text-gray-600 leading-relaxed">
              它是整个物流体系的 <span class="font-bold text-[#006EFF]">最后一道防线</span>，确保您的爱车在任何状态下（故障/事故/僵尸车）都能顺畅接入车拖车的全国物流网络，消除"<span class="font-bold text-[#006EFF]">车在跟前却开不走</span>"的尴尬。
            </p>
          </div>
        </div>

        <!-- Right Column: Visual Metaphor -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1 }"
          :visibleOnce="true"
          class="lg:col-span-5"
        >
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 h-full flex flex-col justify-center">
            <!-- Metaphor Illustration -->
            <div class="flex flex-col items-center space-y-4">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#006EFF]">
                  <Plane :size="32" />
                </div>
                <span class="text-xs font-bold text-[#006EFF] mt-2">托运 = 长途航班</span>
              </div>
              
              <div class="text-orange-200">
                <MoveDown :size="24" class="animate-bounce" />
              </div>

              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B00]">
                  <Tractor :size="32" />
                </div>
                <span class="text-xs font-bold text-[#FF6B00] mt-2">救援 = 机场牵引车</span>
              </div>
            </div>

            <!-- Quote Text -->
            <p class="text-[18px] font-medium text-[#006EFF] italic text-center mt-8 leading-relaxed">
              "如果说汽车托运是跨越山海的'长途航班'，那道路救援就是确保飞机能滑向跑道'牵引车'。"
            </p>

            <!-- Tagline -->
            <div class="mt-6 flex justify-center">
              <span class="text-[14px] font-bold text-[#FF6B00] bg-orange-50 px-4 py-1.5 rounded-full">
                解决起运前最后一米的移动难题
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plane, Tractor, MoveDown } from 'lucide-vue-next'
</script>
