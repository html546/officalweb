<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="grid grid-cols-12 gap-12 items-center">
        <div class="col-span-12 lg:col-span-6">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">
              智能听单与多模式接单系统
            </h2>

            <p class="text-[16px] text-gray-600 leading-[1.8] mb-10">
              APP
              内置智能听单系统，支持板车运输、代驾送车、道路救援三种模式。对于救援团队，平台提供专属入驻通道。独特的
              <strong>
                "车贴权益"机制允许司机申请张贴车贴，获得自动接单
              </strong>
              权限与流量倾斜，配合极速结算体系，保障每一公里收益。
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tag, idx) in tags"
                :key="idx"
                class="px-5 py-2 bg-orange-50 text-[#FF6B00] rounded-full text-[14px] font-bold"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 flex justify-center">
          <div class="relative w-full aspect-[4/3] bg-[#F8F9FB] rounded-[40px] border border-gray-100 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 opacity-40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710242078536-fe62a305a86c"
                alt="App Interface"
                class="w-full h-full object-cover"
              />
            </div>
            <OrderDispatchMockup />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import OrderDispatchMockup from '@/components/driver/OrderDispatchMockup.vue'

const tags = [
  '救援团队入驻',
  '车贴权益',
  '自动接单',
  '拒绝空驶',
]
</script>
