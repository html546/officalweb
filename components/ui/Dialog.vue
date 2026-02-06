<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="handleOverlayClick"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/50" @click="handleOverlayClick" />
        
        <!-- Dialog Content -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="modelValue"
            class="relative z-50 mx-auto"
            :class="contentClass"
          >
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
/**
 * 对话框组件
 * 
 * @component Dialog
 * @description
 * 提供模态对话框功能，支持：
 * - 通过 v-model 控制显示/隐藏
 * - 点击遮罩层关闭（可配置）
 * - 按 Escape 键关闭
 * - 打开时自动禁止 body 滚动
 * - 淡入淡出动画效果
 * - 使用 Teleport 渲染到 body，避免 z-index 问题
 * 
 * @example
 * 基础用法：
 * - 受控模式：v-model="isOpen"
 * - 禁止点击遮罩关闭：close-on-overlay-click="false"
 * - 自定义样式：content-class="max-w-2xl"
 * - 按 Escape 键可关闭
 * - 打开时自动禁止 body 滚动
 * 
 * @design-notes
 * - 使用 Teleport 渲染到 body，确保对话框在最顶层
 * - 遮罩层使用半透明黑色背景（bg-black/50）
 * - 内容区域支持自定义样式类（contentClass）
 * - 打开时自动禁止 body 滚动，关闭时恢复
 * - 支持键盘导航（Escape 键关闭）
 * - 动画使用 Vue Transition 组件实现
 */

import { watch, onUnmounted } from 'vue'

/**
 * 对话框组件属性定义
 * 
 * @interface Props
 */
interface Props {
  /**
   * 对话框显示状态
   * 
   * 使用 v-model 双向绑定控制对话框的显示和隐藏
   * - true: 显示对话框
   * - false: 隐藏对话框
   */
  modelValue: boolean
  
  /**
   * 对话框内容容器的自定义 CSS 类名
   * 
   * 用于自定义对话框内容的样式，如宽度、内边距等
   * 示例：content-class="max-w-2xl p-8"
   */
  contentClass?: string
  
  /**
   * 是否允许点击遮罩层关闭对话框
   * 
   * @default true
   * 
   * - true: 点击遮罩层或对话框外部区域会关闭对话框
   * - false: 只能通过代码或关闭按钮关闭对话框
   */
  closeOnOverlayClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closeOnOverlayClick: true
})

/**
 * 对话框事件定义
 */
const emit = defineEmits<{
  /**
   * 当对话框显示状态改变时触发
   * 
   * @param value - 新的显示状态（true/false）
   * 
   * 用于 v-model 双向绑定，当用户关闭对话框时自动触发
   */
  'update:modelValue': [value: boolean]
}>()

/**
 * 处理遮罩层点击事件
 * 
 * @description
 * 当用户点击遮罩层或对话框外部区域时调用
 * 根据 closeOnOverlayClick 属性决定是否关闭对话框
 */
const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    emit('update:modelValue', false)
  }
}

/**
 * 处理键盘事件（Escape 键）
 * 
 * @param event - 键盘事件对象
 * 
 * @description
 * 监听键盘事件，当按下 Escape 键且对话框处于打开状态时关闭对话框
 * 提供键盘无障碍访问支持
 */
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    emit('update:modelValue', false)
  }
}

/**
 * 监听对话框显示状态变化
 * 
 * @description
 * 当对话框打开时：
 * 1. 添加 Escape 键监听器
 * 2. 禁止 body 滚动（防止背景页面滚动）
 * 
 * 当对话框关闭时：
 * 1. 移除 Escape 键监听器
 * 2. 恢复 body 滚动
 * 
 * @param newValue - 新的显示状态
 */
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscapeKey)
    // 禁止body滚动
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscapeKey)
    // 恢复body滚动
    document.body.style.overflow = ''
  }
})

/**
 * 组件卸载时的清理工作
 * 
 * @description
 * 确保在组件卸载时：
 * 1. 移除 Escape 键监听器（防止内存泄漏）
 * 2. 恢复 body 滚动（防止页面被锁定）
 */
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = ''
})
</script>
