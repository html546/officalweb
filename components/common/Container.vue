<template>
  <div class="max-w-[1200px] mx-auto px-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * 通用容器组件
 * 
 * @component Container
 * @description
 * 提供统一的页面内容容器样式，包含最大宽度限制、水平居中和内边距。
 * 避免在每个组件中重复编写 `max-w-[1200px] mx-auto px-4`。
 * 
 * @example
 * 基础用法：
 * - 包裹页面内容：<Container>内容</Container>
 * - 嵌套在 Section 中使用
 */
</script>
