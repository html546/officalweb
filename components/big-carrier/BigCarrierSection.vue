<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column: Content Narrative -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span class="text-sm font-bold uppercase tracking-widest text-[#006EFF]">
            SERVICE DEFINITION
          </span>
          <h2 class="text-[36px] font-bold text-[#0B2747] mt-2 leading-tight">
            大板车汽车托运：长途流转的性价比之选
          </h2>
          
          <p class="text-base text-gray-600 leading-relaxed mt-6">
            大板车（笼车）采用符合 <span class="font-bold text-gray-900">GB1589 标准</span> 的特制双层结构，单次可装载 <span class="font-bold text-gray-900">6-12 台私家车</span>。这与主机厂（如奔驰、丰田）向 4S 店发车的物流模式一致。
          </p>
          
          <p class="text-base text-gray-600 leading-relaxed mt-4">
            车拖车平台在全国拥有 1000+ 核心集散节点，整合了 30,000+ 条成熟运输线路。通过"固定干线+枢纽中转"的规模效应，大幅降低空驶率，为用户提供极具竞争力的低费率保险与高性价比报价。
          </p>
          
          <ul class="mt-8 space-y-3">
            <li class="flex items-center gap-3">
              <CheckCircle2 :size="20" class="text-[#006EFF]" />
              <span class="text-gray-700 font-medium">每日发车的高频专线 (广东/上海/北京)</span>
            </li>
            <li class="flex items-center gap-3">
              <CheckCircle2 :size="20" class="text-[#006EFF]" />
              <span class="text-gray-700 font-medium">符合主机厂物流标准 (OEM Standard)</span>
            </li>
          </ul>
        </div>

        <!-- Right Column: Visual Representation -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
          class="relative"
        >
          <div class="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
            <ImageWithFallback
              :src="definitionImg"
              alt="大板车装载实景"
              class="w-full aspect-[4/3] object-cover"
            />
            
            <!-- Data Badge Overlay -->
            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p class="text-xs text-gray-500 mb-1 font-medium">单车装载量</p>
              <p class="text-xl font-bold text-[#0B2747]">6-12 辆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

// Replace figma:asset with EXTERNAL_ASSETS URL
const definitionImg = EXTERNAL_ASSETS.TRUCK_FLATBED_FULL
</script>
