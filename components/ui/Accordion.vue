<template>
  <div :class="cn('w-full', $attrs.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * 手风琴组件
 * 
 * @component Accordion
 * @description
 * 提供可折叠内容区域的手风琴组件，支持：
 * - 单选模式（single）：同时只能展开一个项
 * - 多选模式（multiple）：可以同时展开多个项
 * - 可折叠模式（collapsible）：允许关闭当前打开的项
 * - 通过 v-model 控制展开的项
 * - 使用 provide/inject 与子组件通信
 * 
 * @example
 * 基础用法：
 * - 单选模式：v-model="singleValue" (string)
 * - 多选模式：v-model="multipleValue" type="multiple" (string[])
 * - 可折叠：collapsible="true"
 * - 配合 AccordionItem 组件使用
 * 
 * @design-notes
 * - 使用 provide/inject 模式实现父子组件通信
 * - 支持受控和非受控两种模式
 * - 单选模式下，点击已展开的项会根据 collapsible 决定是否关闭
 * - 多选模式下，每个项独立控制展开/收起状态
 */

import { cn } from '@/utils/cn'
import { provide, ref } from 'vue'

/**
 * 手风琴组件属性定义
 * 
 * @interface Props
 */
const props = defineProps<{
  /**
   * 手风琴类型
   * 
   * @default 'single'
   * 
   * **可选值**：
   * - `single`: 单选模式，同时只能展开一个项
   * - `multiple`: 多选模式，可以同时展开多个项
   */
  type?: 'single' | 'multiple'
  
  /**
   * 是否允许折叠（关闭当前打开的项）
   * 
   * @default true
   * 
   * **说明**：
   * - true: 在单选模式下，点击已展开的项可以关闭它
   * - false: 在单选模式下，点击已展开的项不会关闭，必须点击其他项
   * - 多选模式下此属性无效
   */
  collapsible?: boolean
  
  /**
   * 当前展开的项的值
   * 
   * 使用 v-model 双向绑定：
   * - 单选模式：string 类型，表示当前展开的项的值
   * - 多选模式：string[] 类型，表示当前展开的所有项的值数组
   */
  modelValue?: string | string[]
}>()

/**
 * 手风琴组件事件定义
 */
const emit = defineEmits<{
  /**
   * 当展开的项改变时触发
   * 
   * @param value - 新的展开项值
   * - 单选模式：string 类型，当前展开的项的值（空字符串表示全部关闭）
   * - 多选模式：string[] 类型，当前展开的所有项的值数组
   * 
   * 用于 v-model 双向绑定
   */
  'update:modelValue': [value: string | string[]]
}>()

/**
 * 当前激活的项的值
 * 
 * @description
 * 根据 type 属性初始化：
 * - single 模式：初始化为空字符串 '' 或 props.modelValue
 * - multiple 模式：初始化为空数组 [] 或 props.modelValue
 */
const activeValue = ref<string | string[]>(props.modelValue || (props.type === 'multiple' ? [] : ''))

/**
 * 切换指定项的展开/收起状态
 * 
 * @param value - 要切换的项的值
 * 
 * @description
 * 根据手风琴类型执行不同逻辑：
 * 
 * **单选模式（single）**：
 * - 如果点击的是已展开的项且 collapsible 为 true，则关闭它
 * - 否则，展开该项并关闭其他项
 * 
 * **多选模式（multiple）**：
 * - 如果该项已展开，则从数组中移除（关闭）
 * - 如果该项未展开，则添加到数组中（展开）
 * 
 * 最后触发 'update:modelValue' 事件，更新 v-model 绑定的值
 * 
 * @example
 * ```typescript
 * // 单选模式
 * toggleValue('item-1') // 展开 item-1，关闭其他项
 * toggleValue('item-1') // 如果 collapsible=true，关闭 item-1
 * 
 * // 多选模式
 * toggleValue('item-1') // 展开 item-1
 * toggleValue('item-2') // 展开 item-2（item-1 仍然展开）
 * toggleValue('item-1') // 关闭 item-1（item-2 仍然展开）
 * ```
 */
const toggleValue = (value: string) => {
  if (props.type === 'multiple') {
    const current = (activeValue.value as string[]) || []
    const index = current.indexOf(value)
    if (index > -1) {
      activeValue.value = current.filter(v => v !== value)
    } else {
      activeValue.value = [...current, value]
    }
  } else {
    if (activeValue.value === value && props.collapsible) {
      activeValue.value = ''
    } else {
      activeValue.value = value
    }
  }
  emit('update:modelValue', activeValue.value)
}

/**
 * 向子组件提供手风琴上下文
 * 
 * @description
 * 通过 provide 向 AccordionItem 子组件提供：
 * - activeValue: 当前激活的项的值（响应式）
 * - toggleValue: 切换项展开/收起的方法
 * - type: 手风琴类型（single/multiple）
 * - collapsible: 是否允许折叠
 * 
 * 子组件通过 inject('accordion') 获取这些值和方法
 */
provide('accordion', {
  activeValue,
  toggleValue,
  type: props.type || 'single',
  collapsible: props.collapsible !== false
})

defineOptions({
  inheritAttrs: false
})
</script>
