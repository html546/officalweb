<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC'] overflow-x-hidden w-full">
    <div class="w-full max-w-[1200px] mx-auto px-4 box-border">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
          class="text-2xl sm:text-[36px] font-bold text-[#0B2747]"
        >
          真实救援场景
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          :visibleOnce="true"
          class="text-[16px] text-gray-500 mt-4 max-w-2xl mx-auto"
        >
          从地库亏电启动到事故车专业背拖，我们处理过各种复杂路况。
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in cases"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :visibleOnce="true"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          <!-- Image Area -->
          <div class="relative h-[260px]">
            <ImageWithFallback
              :src="item.image"
              :alt="item.title"
              class="w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Tag -->
            <div class="absolute top-0 left-0 bg-[#FF6B00] text-white px-3 py-1 text-xs font-bold rounded-br-lg shadow-md z-10">
              {{ item.tag }}
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-[#0B2747] mb-2 leading-snug">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const cases = [
  {
    tag: '地库救援',
    title: '解决 2.2米 限高地库难题',
    desc: '王先生的车辆在地下三层亏电无法启动。车拖车调度低姿态专用板车进入地库，通过搭电辅助+软连接牵引，成功将车辆移出并装车托运。',
    image: 'https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?q=80&w=1080',
  },
  {
    tag: '托运接驳',
    title: '僵尸车激活与发运',
    desc: '一辆闲置半年的轿车需从北京运往三亚。因轮胎瘪气且无法启动，救援团队携带充气泵与辅助轮上门，完成车辆整备后直接装上大板车发运。',
    image: 'https://images.unsplash.com/photo-1619924363773-1f9ed4a54fe1?q=80&w=1080',
  },
  {
    tag: '高速救援',
    title: '高速故障 20分钟响应',
    desc: 'G4高速某路段车辆抛锚。系统自动匹配最近网点，救援车 18分钟 抵达现场。设置安全警示后，规范背车驶离，避免了二次事故风险。',
    image: 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=500',
  },
]
</script>
