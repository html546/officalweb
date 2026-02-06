<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          用户真实评价
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mt-4 flex flex-col items-center gap-2"
        >
          <p class="text-[16px] text-gray-500">
            听听车主们如何评价"第一检测人"验车服务与门到门体验。
          </p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex">
              <Star
                v-for="i in 5"
                :key="i"
                :size="18"
                class="fill-yellow-400 text-yellow-400"
              />
            </div>
            <span class="text-[15px] font-bold text-[#0B2747]">4.9/5.0 平均评分</span>
          </div>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in reviews"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group"
        >
          <Quote class="absolute top-6 right-8 text-blue-50/80 group-hover:text-blue-100 transition-colors" :size="48" />
          
          <!-- User Info -->
          <div class="flex items-center gap-4 mb-6 relative">
            <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
              <ImageWithFallback
                :src="item.avatar"
                :alt="item.user"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="text-[18px] font-bold text-[#0B2747]">
                {{ item.user }} <span class="text-sm font-normal text-gray-400 ml-1">({{ item.location }})</span>
              </h4>
              <p class="text-xs text-[#006EFF] font-medium bg-blue-50 px-2 py-0.5 rounded inline-block mt-0.5">
                {{ item.role }}
              </p>
            </div>
          </div>

          <!-- Scenario Badge -->
          <div class="mb-4 inline-flex items-center text-[13px] font-medium text-gray-400">
            <span class="w-1 h-1 rounded-full bg-blue-400 mr-2" />
            {{ item.scenario }}
          </div>

          <!-- Content -->
          <p class="text-[15px] leading-[1.8] text-[#4B5563] mb-6 min-h-[108px]">
            {{ item.content }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
            <span
              v-for="(tag, i) in item.tags"
              :key="i"
              class="text-[12px] text-gray-400 font-medium"
            >
              {{ tag }}
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
import { EXTERNAL_ASSETS } from '@/utils/images'

const reviews = [
  {
    user: '周女士',
    location: '北京',
    role: '私家车主',
    scenario: '大板车进城接驳',
    avatar: EXTERNAL_ASSETS.AVATAR_FEMALE_ASIA,
    content: '以前运车最怕去五环外的物流园取车，打车费劲还耽误时间。这次用了车拖车代驾，司机直接把车送到了我家地库。最让我放心的是验车特别仔细，车身的旧划痕都拍得清清楚楚，比我自己看得还细！',
    tags: ['#验车专业', '#省时省力']
  },
  {
    user: '赵先生',
    location: '上海',
    role: '商务人士',
    scenario: '上海→南京 紧急用车',
    avatar: EXTERNAL_ASSETS.AVATAR_BUSINESS_ASIA,
    content: '因为临时要用车去南京，板车来不及，就试了长途代驾。司机师傅素质很高，穿制服戴白手套，全程没抽烟。APP上能看到车速和位置，3个半小时就到了，确实是时间确定性最高的选择。',
    tags: ['#时效极快', '#服务规范']
  },
  {
    user: '孙经理',
    location: '杭州',
    role: '某品牌4S店',
    scenario: '跨店调车',
    avatar: EXTERNAL_ASSETS.AVATAR_MALE_ASIA,
    content: '必须要夸一下第一检测人机制。之前用其他代驾经常因为验车不清产生纠纷，车拖车的司机每一步都按标准流程走，交车时不仅车况完好，连油量和里程都核对无误，对公结算也很方便。',
    tags: ['#第一检测人', '#对公结算']
  }
]
</script>
