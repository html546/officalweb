<template>
  <div :class="['text-center', containerClass]">
    <h2
      v-if="title"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :class="titleClass"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
      :class="subtitleClass"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
/**
 * 区块标题组件
 * 
 * @component SectionHeader
 * @description
 * 统一的区块标题样式，包含主标题和副标题，支持入场动画。
 * 适用于各个页面区块的标题展示。
 * 
 * @example
 * 基础用法：
 * - 完整标题：<SectionHeader title="主标题" subtitle="副标题说明" />
 * - 只有主标题：<SectionHeader title="主标题" />
 * - 自定义样式：<SectionHeader title="标题" title-class="text-4xl" />
 */

interface Props {
  /**
   * 主标题文本
   */
  title: string
  /**
   * 副标题文本（可选）
   */
  subtitle?: string
  /**
   * 容器类名（控制间距、宽度等）
   * @default 'mb-16'
   */
  containerClass?: string
  /**
   * 主标题类名
   * @default 'text-[36px] font-bold text-[#0B2747]'
   */
  titleClass?: string
  /**
   * 副标题类名
   * @default 'text-[16px] text-gray-500 mt-4'
   */
  subtitleClass?: string
}

withDefaults(defineProps<Props>(), {
  containerClass: 'mb-16',
  titleClass: 'text-[36px] font-bold text-[#0B2747]',
  subtitleClass: 'text-[16px] text-gray-500 mt-4'
})
</script>
