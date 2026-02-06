<template>
  <div :class="cn('border-none', $attrs.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * 手风琴项组件
 * 
 * @component AccordionItem
 * @description
 * 手风琴组件的子项容器，用于包裹单个可折叠项的内容
 * 必须与 AccordionTrigger 和 AccordionContent 组件配合使用
 * 
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 * 
 * const activeValue = ref('item-1')
 * </script>
 * 
 * <template>
 *   <Accordion v-model="activeValue">
 *     <AccordionItem value="item-1" class="bg-white rounded-lg border">
 *       <AccordionTrigger>
 *         点击展开/收起
 *       </AccordionTrigger>
 *       <AccordionContent>
 *         这是项目 1 的内容
 *       </AccordionContent>
 *     </AccordionItem>
 *     
 *     <AccordionItem value="item-2" class="bg-white rounded-lg border">
 *       <AccordionTrigger>
 *         项目 2
 *       </AccordionTrigger>
 *       <AccordionContent>
 *         这是项目 2 的内容
 *       </AccordionContent>
 *     </AccordionItem>
 *   </Accordion>
 * </template>
 * ```
 * 
 * @design-notes
 * - 作为 Accordion 的直接子组件使用
 * - 通过 value 属性标识每个项的唯一值
 * - 使用 slot 插槽渲染 AccordionTrigger 和 AccordionContent
 * - 支持自定义样式类（通过 class 属性）
 * - 默认无边框（border-none），可通过 class 覆盖
 * 
 * @see {@link Accordion} 父组件
 * @see {@link AccordionTrigger} 触发器组件
 * @see {@link AccordionContent} 内容组件
 */

import { cn } from '@/utils/cn'

/**
 * 手风琴项组件属性定义
 * 
 * @interface Props
 */
defineProps<{
  /**
   * 手风琴项的唯一标识值
   * 
   * 用于：
   * - 标识当前项，用于控制展开/收起状态
   * - 在 v-model 中标识哪些项处于展开状态
   * - 在单选模式下，当此值等于 v-model 值时，该项处于展开状态
   * - 在多选模式下，当此值包含在 v-model 数组中时，该项处于展开状态
   * 
   * @example
   * ```vue
   * <!-- 单选模式 -->
   * <Accordion v-model="activeValue">
   *   <AccordionItem value="faq-1">...</AccordionItem>
   *   <AccordionItem value="faq-2">...</AccordionItem>
   * </Accordion>
   * <!-- 当 activeValue === 'faq-1' 时，第一个项展开 -->
   * 
   * <!-- 多选模式 -->
   * <Accordion v-model="activeValues" type="multiple">
   *   <AccordionItem value="item-1">...</AccordionItem>
   *   <AccordionItem value="item-2">...</AccordionItem>
   * </Accordion>
   * <!-- 当 activeValues.includes('item-1') 时，第一个项展开 -->
   * ```
   */
  value: string
}>()

defineOptions({
  inheritAttrs: false
})
</script>
