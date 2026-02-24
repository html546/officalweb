<template>
  <Section :bg="bg">
    <Container>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <!-- Stars (optional) -->
        <div v-if="showStars" class="flex items-center justify-center gap-1 mb-4">
          <Star
            v-for="s in 5"
            :key="s"
            :size="20"
            class="fill-[#FFB800] text-[#FFB800]"
          />
        </div>
        
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-2xl sm:text-[36px] font-bold text-[#0B2747]"
        >
          {{ title }}
        </h2>
        
        <div
          v-if="subtitle || rating"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mt-4 flex flex-col items-center gap-2"
        >
          <p v-if="subtitle" class="text-[16px] text-gray-500">
            {{ subtitle }}
          </p>
          <div v-if="rating && !showStars" class="flex items-center gap-2 mt-2">
            <div class="flex">
              <Star
                v-for="i in 5"
                :key="i"
                :size="18"
                class="fill-yellow-400 text-yellow-400"
              />
            </div>
            <span class="text-[15px] font-bold text-[#0B2747]">{{ rating }}</span>
          </div>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group"
          :class="cardClass"
        >
          <Quote class="absolute top-6 right-8 text-gray-100 group-hover:text-gray-200 transition-colors" :size="40" />
          
          <!-- User Info -->
          <div class="flex items-center gap-4 mb-6 relative">
            <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
              <ClientOnly>
                <ImageWithFallback
                  :src="item.avatar"
                  :alt="item.user"
                  class="w-full h-full object-cover"
                />
              </ClientOnly>
            </div>
            <div>
              <h4 class="text-[18px] font-bold text-[#0B2747]">
                {{ item.user }} <span class="text-sm font-normal text-gray-400 ml-1">({{ item.location }})</span>
              </h4>
              <p :class="['text-xs font-medium px-2 py-0.5 rounded inline-block mt-0.5', roleClass]">
                {{ item.role }}
              </p>
            </div>
          </div>

          <!-- Scenario or Route Badge -->
          <div v-if="item.scenario" class="mb-4 inline-flex items-center text-[13px] font-medium text-gray-400">
            <span :class="['w-1 h-1 rounded-full mr-2', badgeDotClass]" />
            {{ item.scenario }}
          </div>
          <div v-if="item.route" class="mb-4">
            <span class="text-xs font-bold text-[#0B2747] bg-gray-100 px-2 py-0.5 rounded">
              {{ item.route }}
            </span>
          </div>

          <!-- Car Info (optional) -->
          <p v-if="item.car" class="text-xs font-medium mb-4" :class="carClass">
            {{ item.car }}
          </p>

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
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Star, Quote } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import type { ReviewItem, ThemeColor } from '@/types'

/**
 * 通用用户评价区块组件
 * 
 * @component ReviewsSection
 * @description
 * 统一的用户评价展示组件，支持多主题配色、星级评分展示、
 * 用户头像、场景标签和评价内容。
 * 
 * @example
 * 基础用法：
 * <ReviewsSection
 *   title="用户真实评价"
 *   subtitle="听听车主们的真实体验"
 *   rating="4.9/5.0 平均评分"
 *   :items="reviews"
 *   theme="blue"
 * />
 */

interface Props {
  /**
   * 区块标题
   */
  title: string
  /**
   * 区块副标题
   */
  subtitle?: string
  /**
   * 评分文本（如："4.9/5.0 平均评分"）
   */
  rating?: string
  /**
   * 评价数据列表
   */
  items: ReviewItem[]
  /**
   * 主题颜色
   * @default 'blue'
   */
  theme?: ThemeColor
  /**
   * 背景颜色
   * @default 'white'
   */
  bg?: 'white' | 'gray'
  /**
   * 是否在标题上方显示星星
   * @default false
   */
  showStars?: boolean
  /**
   * 卡片额外类名
   */
  cardClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'blue',
  bg: 'white',
  showStars: false,
  cardClass: ''
})

/**
 * 角色标签样式
 */
const roleClass = computed(() => {
  const colors = {
    blue: 'text-[#006EFF] bg-blue-50',
    orange: 'text-[#FF6B00] bg-orange-50',
    green: 'text-[#10B981] bg-green-50'
  }
  return colors[props.theme]
})

/**
 * 场景徽章点样式
 */
const badgeDotClass = computed(() => {
  const colors = {
    blue: 'bg-blue-400',
    orange: 'bg-orange-400',
    green: 'bg-green-400'
  }
  return colors[props.theme]
})

/**
 * 车型信息样式
 */
const carClass = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    orange: 'text-orange-600',
    green: 'text-green-600'
  }
  return colors[props.theme]
})
</script>
