<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-1 mb-4">
          <Star
            v-for="s in 5"
            :key="s"
            :size="20"
            class="fill-[#FFB800] text-[#FFB800]"
          />
        </div>
        <h2 class="text-[36px] font-bold text-[#0B2747]">用户真实评价</h2>
        <p class="text-[16px] text-gray-500 mt-4">
          超过 180 万次小板车专送订单，综合评分 <span class="font-bold text-[#0B2747]">4.9/5.0</span>
        </p>
      </div>

      <!-- Review Cards Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:border-blue-200 transition-colors relative"
        >
          <Quote class="absolute top-6 right-8 text-gray-100" :size="40" />
          
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
              <ImageWithFallback
                :src="review.avatar"
                :alt="review.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#0B2747]">{{ review.name }}</span>
                <span class="text-xs text-gray-400">{{ review.location }}</span>
              </div>
              <div class="mt-1">
                <span class="text-xs font-bold text-[#0B2747] bg-gray-100 px-2 py-0.5 rounded">
                  {{ review.route }}
                </span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-xs text-blue-600 font-medium">
              {{ review.car }}
            </p>
            <p class="text-[15px] text-gray-600 leading-relaxed min-h-[100px]">
              {{ review.content }}
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="tag in review.tags"
                :key="tag"
                class="text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Footer -->
      <div class="pt-12 border-t border-gray-100">
        <div class="flex flex-col items-center">
          <span class="text-sm text-gray-400 mb-8">服务品质获得权威认证</span>
          <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">
            <span
              v-for="brand in brands"
              :key="brand"
              class="text-xl font-black tracking-tighter text-gray-800"
            >
              {{ brand }}
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
    name: '李女士',
    location: '上海',
    route: '北京 → 上海',
    car: '特斯拉 Model S',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: '新车刚提不敢长途开回家，选择小板车专送。司机很专业，验车拍照很仔细，厢式车全密封运输，到家后一点划痕都没有。比大板车贵一些，但完全值得！',
    tags: ['准时送达', '验车仔细', '零损耗']
  },
  {
    name: '王先生',
    location: '广州',
    route: '深圳 → 广州',
    car: '保时捷 Cayenne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: '高速上爆胎动不了，打电话给车拖车，20分钟救援车就到了！专车直送到维修厂，全程GPS能看到位置，服务太专业了。应急救援必备！',
    tags: ['快速响应', '专业救援', '全程追踪']
  },
  {
    name: '陈女士',
    location: '杭州',
    route: '杭州 → 温州',
    car: '宝马 X5',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: '家里有急事需要马上回老家，车开不回去。小板车当天就接单送达，速度比我想象的快太多。司机态度好，全程微信沟通，让人很放心。',
    tags: ['当日送达', '态度专业', '沟通及时']
  }
]

const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Porsche']
</script>
