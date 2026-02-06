<template>
  <div :class="cn('w-full', $attrs.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * 标签页组件
 * 
 * @component Tabs
 * @description
 * 提供标签页切换功能，支持：
 * - 通过 v-model 控制当前激活的标签页
 * - 支持受控和非受控两种模式
 * - 使用 provide/inject 与子组件通信
 * - 自动同步外部 modelValue 变化
 * 
 * @example
 * 基础用法：
 * - 受控模式：v-model="activeTab"
 * - 非受控模式：default-value="tab-1"
 * - 配合 TabList、TabTrigger、TabContent 组件使用
 * 
 * @design-notes
 * - 使用 provide/inject 模式实现父子组件通信
 * - 支持受控模式（v-model）和非受控模式（defaultValue）
 * - 当使用 v-model 时，会自动同步外部值的变化
 * - 子组件通过 inject('tabs') 获取 activeTab 和 setActiveTab
 * 
 * @see {@link TabList} 标签列表容器组件
 * @see {@link TabTrigger} 标签触发器组件
 * @see {@link TabContent} 标签内容组件
 */

import { cn } from '@/utils/cn'
import { provide, ref, watch } from 'vue'

/**
 * 标签页组件属性定义
 * 
 * @interface Props
 */
const props = defineProps<{
  /**
   * 当前激活的标签页值（受控模式）
   * 
   * 使用 v-model 双向绑定控制当前显示的标签页
   * 当提供此属性时，组件处于受控模式
   */
  modelValue?: string
  
  /**
   * 默认激活的标签页值（非受控模式）
   * 
   * 当未提供 modelValue 时，使用此值作为初始激活的标签页
   * 仅在非受控模式下生效
   */
  defaultValue?: string
}>()

/**
 * 标签页组件事件定义
 */
const emit = defineEmits<{
  /**
   * 当激活的标签页改变时触发
   * 
   * @param value - 新的激活标签页值
   * 
   * 用于 v-model 双向绑定，当用户切换标签页时自动触发
   */
  'update:modelValue': [value: string]
}>()

/**
 * 当前激活的标签页值
 * 
 * @description
 * 初始化优先级：
 * 1. props.modelValue（受控模式）
 * 2. props.defaultValue（非受控模式的默认值）
 * 3. 空字符串 ''（无默认值）
 */
const activeTab = ref(props.modelValue || props.defaultValue || '')

/**
 * 监听外部 modelValue 变化
 * 
 * @description
 * 当使用受控模式（v-model）时，同步外部传入的 modelValue 变化
 * 确保组件状态与外部状态保持一致
 * 
 * @param newValue - 新的 modelValue 值
 */
watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined) {
    activeTab.value = newValue
  }
})

/**
 * 设置当前激活的标签页
 * 
 * @param value - 要激活的标签页值
 * 
 * @description
 * 当用户点击标签触发器时调用此方法：
 * 1. 更新内部 activeTab 状态
 * 2. 触发 'update:modelValue' 事件，更新 v-model 绑定的值
 * 
 * 子组件（TabTrigger）通过 inject 获取此方法并调用
 * 
 * @example
 * ```typescript
 * // 在 TabTrigger 组件中
 * const { setActiveTab } = inject('tabs')
 * setActiveTab('tab-2') // 切换到 tab-2
 * ```
 */
const setActiveTab = (value: string) => {
  activeTab.value = value
  emit('update:modelValue', value)
}

/**
 * 向子组件提供标签页上下文
 * 
 * @description
 * 通过 provide 向 TabTrigger 和 TabContent 子组件提供：
 * - activeTab: 当前激活的标签页值（响应式）
 * - setActiveTab: 切换标签页的方法
 * 
 * 子组件通过 inject('tabs') 获取这些值和方法
 */
provide('tabs', {
  activeTab,
  setActiveTab
})

defineOptions({
  inheritAttrs: false
})
</script>
