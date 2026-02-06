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
          超过 250 万车主的共同选择，综合评分 <span class="font-bold text-[#0B2747]">4.9/5.0</span>
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
          <span class="text-sm text-gray-400 mb-8">合作品牌主机厂物流标准同步</span>
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
    name: '张先生',
    location: '哈尔滨',
    avatar: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwQ2hpbmVzZSUyMG1hbiUyMDMwcyUyMHBvcnRyYWl0JTIwY2FzdWFsfGVufDF8fHx8MTc2OTQxNTYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    route: '哈尔滨 → 三亚',
    car: '车型：丰田汉兰达',
    content: '每年冬天都去海南，以前最头疼大板车进不了市区。这次用了车拖车，代驾直接到楼下取车，到了三亚也是直接送到酒店，全程不用我操心，太方便了！',
    tags: ['门到门接驳', '老人友好'],
  },
  {
    name: '李经理',
    location: '广州',
    avatar: 'https://images.unsplash.com/photo-1768899819030-ba787d3f0138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDaGluZXNlJTIwYnVzaW5lc3NtYW4lMjAzMHMlMjBzdWl0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NDE1NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    route: '广州 → 成都',
    car: '车型：奥迪 A6L x 6',
    content: '作为车商最看重时效和票据。车拖车的干线发车频率很高，基本不用等。最重要的是能开增值税专票，物流轨迹在国家交通系统能查到，给客户看很放心。',
    tags: ['税务合规', '批量调车'],
  },
  {
    name: '王女士',
    location: '上海',
    avatar: 'https://images.unsplash.com/photo-1676340619040-8688de9fd331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDaGluZXNlJTIwYnVzaW5lc3N3b21hbiUyMDMwcyUyMHNtaWxpbmclMjBvZmZpY2UlMjBibGF6ZXJ8ZW58MXx8fHwxNzY5NDE1NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    route: '乌鲁木齐 → 上海',
    car: '车型：坦克 300',
    content: '新疆自驾玩累了，实在不想开回上海。在大板车和自己开之间犹豫很久，最后看中这里的GPS实时定位。车在笼车上的照片都会发给我，行李也免费随车运回了，省了四千公里油费！',
    tags: ['GPS定位', '可放行李'],
  },
]

const brands = ['Audi', 'BMW', 'Tesla', 'Honda', 'BYD', 'TOYOTA']
</script>
