<template>
  <section 
    :class="[
      'py-24 font-[\'Noto_Sans_SC\']',
      bgClass
    ]"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * 通用区块组件
 * 
 * @component Section
 * @description
 * 提供统一的页面区块样式，包含垂直内边距和字体设置。
 * 支持自定义背景色，避免重复编写相同的样式类。
 * 
 * @example
 * 基础用法：
 * - 白色背景：<Section bg="white">...</Section>
 * - 灰色背景：<Section bg="gray">...</Section>
 * - 自定义：<Section bg="custom" bg-class="bg-blue-50">...</Section>
 */

interface Props {
  /**
   * 背景颜色预设
   * @default 'white'
   */
  bg?: 'white' | 'gray' | 'custom'
  /**
   * 自定义背景类名（当 bg="custom" 时使用）
   */
  bgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'white',
  bgClass: ''
})

const bgClass = computed(() => {
  if (props.bg === 'custom') {
    return props.bgClass
  }
  return props.bg === 'white' ? 'bg-white' : 'bg-[#F9FAFB]'
})
</script>
