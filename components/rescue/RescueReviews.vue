<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
          class="text-3xl font-bold text-[#0B2747]"
        >
          用户真实救援反馈
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          :visibleOnce="true"
          class="text-base text-[#4B5563] mt-4"
        >
          累计服务超过 240,000 次救援任务，平均好评率 4.9/5.0
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :visibleOnce="true"
          class="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Header: User Info -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                <ImageWithFallback
                  :src="review.avatar"
                  :alt="review.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="font-bold text-[#0B2747]">{{ review.name }}</div>
                <div class="text-xs text-gray-400">{{ review.city }}</div>
              </div>
            </div>
            <div class="flex gap-0.5">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]"
              />
            </div>
          </div>

          <!-- Tag -->
          <div :class="`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${review.tagStyle}`">
            #{{ review.tag }}
          </div>

          <!-- Review Content -->
          <p class="text-[#4B5563] text-[15px] leading-relaxed mb-8 min-h-[96px]">
            "{{ review.content }}"
          </p>

          <!-- Footer: Service Info -->
          <div class="pt-6 border-t border-dashed border-gray-100">
            <div class="text-xs text-gray-400">
              服务类型：{{ review.service }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

// EXTERNAL_ASSETS for avatars
const reviews = [
  {
    name: '李女士',
    city: '杭州',
    avatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?q=80&w=500',
    content: '之前叫救援被黑过，这次车拖车真的很规范。APP上显示170元起步就是170元，没有任何隐形消费，司机也没有乱要小费，这种透明度必须好评！',
    tag: '价格透明',
    tagStyle: 'bg-orange-50 text-orange-600',
    service: '拖车救援 (15km)',
  },
  {
    name: '张先生',
    city: '上海',
    avatar: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=500',
    content: '半夜在地库车坏了，大车进不来。车拖车派了低姿态板车，师傅技术很好，几分钟就弄出来了，直接拖到4S店，效率太高了。',
    tag: '地库救援',
    tagStyle: 'bg-blue-50 text-blue-600',
    service: '地库专项救援',
  },
  {
    name: '王先生',
    city: '北京',
    avatar: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?q=80&w=500',
    content: '在五环上抛锚，心里很慌。下单后18分钟司机就到了，穿反光背心很专业，帮我摆好警示牌，背车动作非常利索。',
    tag: '极速响应',
    tagStyle: 'bg-green-50 text-green-600',
    service: '高速应急救援',
  },
]
</script>
