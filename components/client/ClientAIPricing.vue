<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-12 lg:col-span-6 pr-0 lg:pr-10">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">
              AI 驱动的透明报价与多模式调度
            </h2>

            <p class="text-[16px] text-gray-600 leading-[1.8] mb-10">
              告别传统物流的询价黑盒。车拖车客户端内置了多模态价格计算器，用户只需输入车型与起终点，系统即可在
              5
              秒内基于实时运力供需生成透明的一口价（包含保险与服务费）。针对不同时效需求，APP
              提供灵活的调度方案：小板车实现门到门专车直达，大板车提供高性价比的干线集运，而专业代驾则解决了最后"一公里"的取送难题。
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="tag in tags"
                :key="tag"
                class="px-5 py-2 bg-blue-50 text-[#006EFF] rounded-full text-[14px] font-bold"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 flex justify-center">
          <div class="w-full aspect-[4/3] bg-gray-50 rounded-[40px] flex items-center justify-center border border-gray-100 overflow-hidden relative group">
            <PricingFlowMockup />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PricingFlowMockup from '@/components/client/PricingFlowMockup.vue'

const tags = ["5秒报价", "一口价", "无隐形消费"]
</script>
