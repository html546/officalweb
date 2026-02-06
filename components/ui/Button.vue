<template>
  <button
    :class="cn(buttonClasses, $attrs.class)"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
/**
 * 按钮组件
 * 
 * @component Button
 * @description
 * 提供多种样式和尺寸的按钮组件，支持：
 * - 6种样式变体（default、destructive、outline、secondary、ghost、link）
 * - 4种尺寸规格（default、sm、lg、icon）
 * - 完整的无障碍支持（键盘导航、焦点管理）
 * - 禁用状态和加载状态支持
 * - 继承所有原生 button 元素属性
 * 
 * @example
 * ```vue
 * <!-- 基础用法 -->
 * <Button>点击我</Button>
 * 
 * <!-- 不同样式 -->
 * <Button variant="destructive">删除</Button>
 * <Button variant="outline">取消</Button>
 * <Button variant="ghost">更多</Button>
 * 
 * <!-- 不同尺寸 -->
 * <Button size="sm">小按钮</Button>
 * <Button size="lg">大按钮</Button>
 * <Button size="icon">
 *   <Icon name="search" />
 * </Button>
 * 
 * <!-- 禁用状态 -->
 * <Button disabled>禁用按钮</Button>
 * 
 * <!-- 事件处理 -->
 * <Button @click="handleClick">点击事件</Button>
 * ```
 * 
 * @design-notes
 * - 使用 Tailwind CSS 实现样式
 * - 支持 focus-visible 状态，提升键盘导航体验
 * - 禁用时自动降低透明度并阻止指针事件
 * - 所有变体都支持 hover 和 active 状态
 */

import { computed } from 'vue'
import { cn } from '@/utils/cn'
import type { ButtonVariant, ButtonSize } from '@/types'

/**
 * 按钮组件属性定义
 * 
 * @interface Props
 * @extends HTMLButtonElement - 支持所有原生 button 元素属性（type、disabled、aria-* 等）
 */
interface Props {
  /**
   * 按钮样式变体
   * 
   * @default 'default'
   * 
   * **可选值**：
   * - `default`: 蓝色实心按钮（bg-primary），用于主要操作
   * - `destructive`: 红色实心按钮（bg-destructive），用于危险操作（删除、确认等）
   * - `outline`: 边框按钮，透明背景，用于次要操作
   * - `secondary`: 灰色实心按钮（bg-secondary），用于辅助操作
   * - `ghost`: 透明按钮，hover 时显示背景，用于不重要的操作
   * - `link`: 链接样式按钮，带下划线，用于导航类操作
   * 
   * @see types/index.ts - ButtonVariant
   */
  variant?: ButtonVariant
  
  /**
   * 按钮尺寸
   * 
   * @default 'default'
   * 
   * **尺寸规格**：
   * - `default`: 高度 36px（h-9），水平内边距 16px（px-4），用于常规场景
   * - `sm`: 高度 32px（h-8），水平内边距 12px（px-3），用于表格、卡片等紧凑场景
   * - `lg`: 高度 40px（h-10），水平内边距 24px（px-6），用于 Hero 区域、重要操作
   * - `icon`: 正方形按钮，尺寸 36x36px（size-9），仅用于图标按钮
   * 
   * @see types/index.ts - ButtonSize
   */
  size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default'
})

defineOptions({
  inheritAttrs: false
})

/**
 * 按钮基础样式类
 * 
 * @constant
 * @type {string}
 * 
 * 包含：
 * - 布局：inline-flex、items-center、justify-center、gap-2
 * - 文本：whitespace-nowrap、text-sm、font-medium
 * - 交互：transition-all、disabled:pointer-events-none、disabled:opacity-50
 * - 焦点：outline-none、focus-visible:ring-2、focus-visible:ring-ring
 * - 形状：rounded
 */
const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring'

/**
 * 按钮样式变体类映射
 * 
 * @constant
 * @type {Record<string, string>}
 */
const variantClasses = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-white hover:bg-destructive/90',
  outline: 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-input',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}

/**
 * 按钮尺寸类映射
 * 
 * @constant
 * @type {Record<string, string>}
 */
const sizeClasses = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 gap-1.5 px-3',
  lg: 'h-10 px-6',
  icon: 'size-9',
}

/**
 * 计算按钮的完整样式类名
 * 
 * @computed buttonClasses
 * @returns {string} 合并后的 CSS 类名字符串
 * 
 * @description
 * 根据 props.variant 和 props.size 动态组合样式类：
 * 1. 基础样式（baseClasses）
 * 2. 变体样式（variantClasses[props.variant]）
 * 3. 尺寸样式（sizeClasses[props.size]）
 * 
 * 使用 cn 工具函数智能合并类名，自动处理冲突。
 */
const buttonClasses = computed(() => {
  return cn(
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size]
  )
})
</script>
