<template>
  <input
    :class="cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      $attrs.class
    )"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
/**
 * 输入框组件
 * 
 * @component Input
 * @description
 * 提供标准化的输入框组件，支持：
 * - 所有原生 input 元素类型（text、email、password、number 等）
 * - 完整的样式系统（边框、焦点、禁用状态）
 * - 占位符文本支持
 * - 文件上传支持（file 类型）
 * - 无障碍访问支持（键盘导航、焦点管理）
 * - 继承所有原生 input 元素属性
 * 
 * @example
 * 基础用法：
 * - 文本输入：v-model="email" type="email"
 * - 密码输入：v-model="password" type="password"
 * - 禁用状态：disabled
 * - 文件上传：type="file"
 * - 自定义样式：class="custom-class"
 * 
 * @design-notes
 * - 使用 Tailwind CSS 实现样式
 * - 高度固定为 40px（h-10）
 * - 支持 focus-visible 状态，提升键盘导航体验
 * - 禁用时自动降低透明度并显示禁止光标
 * - 文件输入框自动隐藏默认样式（file:border-0、file:bg-transparent）
 * - 占位符文本使用 muted-foreground 颜色
 */

import { cn } from '@/utils/cn'

defineOptions({
  inheritAttrs: false
})
</script>
