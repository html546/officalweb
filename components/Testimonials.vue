<template>
  <section class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          用户真实评价
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[16px] text-gray-500 mt-4"
        >
          来自全国 167 万用户的真实反馈，口碑见证品质。
        </p>

        <!-- Trust Anchor Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { delay: 300 } }"
          class="flex flex-row items-center justify-center mt-8"
        >
          <div class="flex flex-row items-baseline gap-2">
            <span class="text-4xl font-bold text-[#FF6B00]">4.9</span>
            <div class="flex gap-1 mb-1">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]"
              />
            </div>
          </div>
          <div class="h-8 w-[1px] bg-gray-200 mx-6 hidden sm:block" />
          <p class="text-sm text-gray-500 hidden sm:block">
            综合评分 | 基于 2500万+ 次托运服务
          </p>
        </div>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative group overflow-hidden"
        >
          <!-- Decorative Quote Icon -->
          <Quote class="absolute top-6 right-6 w-12 h-12 text-gray-100 rotate-180 opacity-40 group-hover:opacity-60 transition-opacity" />

          <!-- User Profile Area -->
          <div class="flex items-center gap-4 relative z-10">
            <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
              <ImageWithFallback
                :src="review.avatar"
                :alt="review.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-bold text-[#0B2747] leading-none">
                {{ review.name }}
              </h4>
              <span class="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1.5 inline-block">
                {{ review.car }}
              </span>
            </div>
          </div>

          <!-- Rating Area -->
          <div class="mt-4 flex gap-1 relative z-10">
            <Star
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]"
            />
          </div>

          <!-- Content Area -->
          <div class="mt-4 relative z-10">
            <p class="text-base leading-relaxed text-[#4B5563]">
              {{ review.review }}
            </p>
          </div>

          <!-- Footer Area -->
          <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
            <span class="text-[11px] font-bold text-gray-500">
              {{ review.route }}
            </span>
            <span class="text-[11px] text-gray-400">
              {{ review.service }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Quote } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const reviews = [
  {
    avatar: 'https://images.unsplash.com/photo-1758600432264-b8d2a0fd7d83',
    name: '张先生 (杭州)',
    car: '劳斯莱斯 古思特',
    review:
      '第一次用小板车运这么贵的车，本来很担心。但看到司机师傅用视频验车那么仔细，我就放心了。全程GPS能看到车在哪，这种掌控感很好，车子一点划痕都没有。',
    route: '杭州 → 深圳',
    service: '小板车专送',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1761933808230-9a2e78956daa',
    name: '李女士 (成都)',
    car: '坦克 300',
    review:
      '去新疆自驾太远了，选择车拖车把车运过去，人坐飞机。价格比我预期的要透明，没有隐形消费，按公里计费很公道。司机还在服务区帮我拍了照片，服务很棒！',
    route: '成都 → 乌鲁木齐',
    service: '小板车专送',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1700954343841-2134b33d569d',
    name: '赵先生 (武汉)',
    car: '特斯拉 Model Y',
    review:
      '高速上突然趴窝，还好有车拖车的救援服务。下单后1分钟司机就联系我了，来的特别快。直接用小板车把车拖回了4S店，解决了我的大麻烦，效率真的高。',
    route: 'G4高速 → 武汉服务中心',
    service: '救援专项运输',
  },
]
</script>
