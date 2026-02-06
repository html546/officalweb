<template>
  <Section :bg="bg">
    <Container>
      <!-- Section Header -->
      <SectionHeader
        :title="title"
        :subtitle="subtitle"
        :container-class="headerClass"
      />

      <!-- Grid Layout -->
      <div :class="gridClass">
        <div
          v-for="(item, index) in items"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :hovered="hoverAnimation ? { y: -4 } : undefined"
          class="bg-white p-8 rounded-xl border border-[#E5E7EB] transition-all duration-300 group"
          :class="cardClass"
          :style="getCardStyle(index)"
          @mouseenter="setHover(index)"
          @mouseleave="clearHover"
        >
          <!-- Icon Area -->
          <div
            :class="getIconClasses(index)"
            :style="getIconStyle(index)"
          >
            <component :is="item.icon" :size="iconSize" />
          </div>

          <!-- Content Area -->
          <h3 class="mt-6 text-xl font-bold text-[#0B2747]">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-[#4B5563]">
            <span v-if="allowHtml" v-html="item.description"></span>
            <template v-else>{{ item.description }}</template>
          </p>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useHoverIndex } from '@/composables/useHoverIndex'
import type { AdvantageItem, ThemeColor } from '@/types'

/**
 * 通用优势展示区块组件
 * 
 * @component AdvantagesSection
 * @description
 * 统一的服务优势展示组件，支持多主题配色、响应式网格布局、
 * 动画效果和交互反馈。替代各业务模块的重复 Advantages 组件。
 * 
 * @example
 * 基础用法：
 * - 蓝色主题：<AdvantagesSection theme="blue" :items="advantages" />
 * - 橙色主题：<AdvantagesSection theme="orange" :items="advantages" />
 * - 3列布局：<AdvantagesSection :items="items" :columns="3" />
 * - 支持HTML：<AdvantagesSection :items="items" allow-html />
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
   * 优势项目数据
   */
  items: AdvantageItem[]
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
   * 网格列数（大屏幕）
   * @default 3
   */
  columns?: 2 | 3
  /**
   * 图标尺寸
   * @default 32
   */
  iconSize?: number
  /**
   * 是否启用悬浮上浮动画
   * @default true
   */
  hoverAnimation?: boolean
  /**
   * 是否允许描述中的 HTML
   * @default false
   */
  allowHtml?: boolean
  /**
   * 标题区域类名
   * @default 'mb-16'
   */
  headerClass?: string
  /**
   * 卡片额外类名
   */
  cardClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'blue',
  bg: 'white',
  columns: 3,
  iconSize: 32,
  hoverAnimation: true,
  allowHtml: false,
  headerClass: 'mb-16',
  cardClass: ''
})

const { hoveredIndex, setHover, clearHover } = useHoverIndex()

/**
 * 主题配置映射
 */
const themeConfig = {
  blue: {
    primary: '#006EFF',
    light: '#F0F7FF',
    lighter: '#E6F2FF'
  },
  orange: {
    primary: '#FF6B00',
    light: '#FFF7ED',
    lighter: '#FFF7ED'
  },
  green: {
    primary: '#10B981',
    light: '#F0FDF4',
    lighter: '#ECFDF5'
  }
}

/**
 * 网格布局类名
 */
const gridClass = computed(() => {
  const cols = props.columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
  return `grid grid-cols-1 md:grid-cols-2 ${cols} gap-8`
})

/**
 * 获取卡片样式（动态边框和阴影）
 */
const getCardStyle = (index: number) => {
  if (hoveredIndex.value !== index) return {}
  
  const color = themeConfig[props.theme].primary
  return {
    borderColor: color,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  }
}

/**
 * 获取图标容器类名（基础类）
 */
const getIconClasses = (index: number) => {
  const isHovered = hoveredIndex.value === index
  return [
    'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300',
    isHovered ? 'text-white' : ''
  ].filter(Boolean).join(' ')
}

/**
 * 获取图标容器样式（动态背景色和文字色）
 */
const getIconStyle = (index: number) => {
  const isHovered = hoveredIndex.value === index
  const config = themeConfig[props.theme]
  
  return {
    backgroundColor: isHovered ? config.primary : config.light,
    color: isHovered ? '#ffffff' : config.primary
  }
}
</script>
