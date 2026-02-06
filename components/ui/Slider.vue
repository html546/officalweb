<template>
  <div :class="cn('relative flex w-full touch-none select-none items-center', $attrs.class)">
    <div
      ref="trackRef"
      class="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
    >
      <div
        class="absolute h-full bg-[#006EFF]"
        :style="{ left: '0%', width: `${(modelValue[0] / max) * 100}%` }"
      />
    </div>
    <div
      ref="thumbRef"
      class="absolute h-5 w-5 rounded-full border-2 border-[#006EFF] bg-white shadow-md transition-colors hover:bg-gray-50"
      :style="{ left: `calc(${(modelValue[0] / max) * 100}% - 10px)` }"
      @mousedown.stop="handleMouseDown"
      @touchstart.stop="handleTouchStart"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * 滑块组件
 * 
 * @component Slider
 * @description
 * 提供数值范围选择的滑块组件，支持：
 * - 通过拖拽或点击轨道设置数值
 * - 支持鼠标和触摸操作
 * - 可配置最小值、最大值和步长
 * - 自动对齐到步长值
 * - 通过 v-model 双向绑定数值
 * - 实时更新数值显示
 * 
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 * 
 * // 基础用法
 * const value = ref([100000])
 * 
 * // 自定义范围
 * const price = ref([50000])
 * </script>
 * 
 * <template>
 *   <!-- 基础用法 -->
 *   <Slider 
 *     v-model="value" 
 *     :max="500000" 
 *     :step="5000"
 *   />
 *   <p>当前值: {{ value[0] }}</p>
 *   
 *   <!-- 自定义范围 -->
 *   <Slider 
 *     v-model="price" 
 *     :min="0" 
 *     :max="1000000" 
 *     :step="10000"
 *   />
 *   <p>价格: ¥{{ price[0].toLocaleString() }}</p>
 *   
 *   <!-- 自定义样式 -->
 *   <Slider 
 *     v-model="value" 
 *     class="w-full"
 *   />
 * </template>
 * ```
 * 
 * @design-notes
 * - 使用数组格式存储值（[number]），便于扩展为范围滑块
 * - 轨道使用灰色背景（bg-gray-200），进度条使用主题蓝色（bg-[#006EFF]）
 * - 滑块手柄使用白色圆形，带蓝色边框和阴影
 * - 支持鼠标和触摸两种交互方式
 * - 拖拽时实时更新值，提供流畅的用户体验
 * - 自动对齐到步长值，确保值的精确性
 */

import { ref, watch } from 'vue'
import { cn } from '@/utils/cn'

/**
 * 滑块组件属性定义
 * 
 * @interface Props
 */
const props = defineProps<{
  /**
   * 滑块的当前值
   * 
   * 使用数组格式（[number]），便于未来扩展为范围滑块
   * 数组的第一个元素表示当前滑块的值
   * 
   * @example
   * ```vue
   * <Slider v-model="value" />
   * <!-- value: [100000] -->
   * ```
   */
  modelValue: number[]
  
  /**
   * 滑块的最大值
   * 
   * @default 500000
   * 
   * 滑块可以设置的最大数值
   * 当用户拖拽到最右侧时，值为 max
   */
  max?: number
  
  /**
   * 滑块的步长
   * 
   * @default 5000
   * 
   * 滑块值的最小增量单位
   * 所有值都会自动对齐到步长的倍数
   * 
   * @example
   * ```vue
   * <!-- 步长为 5000，值会是 0, 5000, 10000, 15000... -->
   * <Slider v-model="value" :step="5000" />
   * ```
   */
  step?: number
  
  /**
   * 滑块的最小值
   * 
   * @default 0
   * 
   * 滑块可以设置的最小数值
   * 当用户拖拽到最左侧时，值为 min
   */
  min?: number
}>()

/**
 * 滑块组件事件定义
 */
const emit = defineEmits<{
  /**
   * 当滑块值改变时触发
   * 
   * @param value - 新的滑块值数组
   * 
   * 用于 v-model 双向绑定，当用户拖拽或点击滑块时自动触发
   */
  'update:modelValue': [value: number[]]
}>()

/**
 * 滑块轨道的 DOM 引用
 * 
 * @ref trackRef
 * @type {Ref<HTMLElement | undefined>}
 */
const trackRef = ref<HTMLElement>()

/**
 * 滑块手柄的 DOM 引用
 * 
 * @ref thumbRef
 * @type {Ref<HTMLElement | undefined>}
 */
const thumbRef = ref<HTMLElement>()

/**
 * 是否正在拖拽滑块
 * 
 * @ref isDragging
 * @type {Ref<boolean>}
 * 
 * 用于跟踪拖拽状态，防止在拖拽过程中触发其他事件
 */
const isDragging = ref(false)

/**
 * 滑块的最大值（带默认值）
 * 
 * @constant
 * @type {number}
 */
const max = props.max || 500000

/**
 * 滑块的步长（带默认值）
 * 
 * @constant
 * @type {number}
 */
const step = props.step || 5000

/**
 * 滑块的最小值（带默认值）
 * 
 * @constant
 * @type {number}
 */
const min = props.min || 0

/**
 * 根据鼠标/触摸位置更新滑块值
 * 
 * @param clientX - 鼠标或触摸点的 X 坐标（相对于视口）
 * 
 * @description
 * 计算流程：
 * 1. 获取轨道元素的位置和宽度
 * 2. 计算点击位置在轨道上的百分比（0-1）
 * 3. 将百分比转换为实际值（考虑 min 和 max）
 * 4. 对齐到步长值（round to step）
 * 5. 限制在 min-max 范围内
 * 6. 触发 'update:modelValue' 事件
 * 
 * @example
 * ```typescript
 * // 用户点击轨道中间位置
 * updateValue(400) // 假设轨道左边界在 200px，宽度 400px
 * // 计算: percentage = (400 - 200) / 400 = 0.5
 * // 值 = 0.5 * (500000 - 0) + 0 = 250000
 * // 对齐到步长: 250000 / 5000 = 50, 50 * 5000 = 250000
 * // 最终值: [250000]
 * ```
 */
const updateValue = (clientX: number) => {
  if (!trackRef.value) return
  
  const rect = trackRef.value.getBoundingClientRect()
  const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  const rawValue = percentage * (max - min) + min
  const steppedValue = Math.round(rawValue / step) * step
  const clampedValue = Math.max(min, Math.min(max, steppedValue))
  
  emit('update:modelValue', [clampedValue])
}

/**
 * 处理鼠标按下事件
 * 
 * @param e - 鼠标事件对象
 * 
 * @description
 * 当用户在滑块上按下鼠标时：
 * 1. 设置拖拽状态为 true
 * 2. 立即更新值到鼠标位置
 * 3. 添加全局鼠标移动和释放事件监听器
 * 4. 在鼠标释放时清理事件监听器
 * 
 * 支持在轨道和手柄上按下鼠标进行拖拽
 */
const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  updateValue(e.clientX)
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.value) {
      updateValue(e.clientX)
    }
  }
  
  const handleMouseUp = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

/**
 * 处理触摸开始事件
 * 
 * @param e - 触摸事件对象
 * 
 * @description
 * 当用户在滑块上触摸时：
 * 1. 设置拖拽状态为 true
 * 2. 立即更新值到触摸位置
 * 3. 添加全局触摸移动和结束事件监听器
 * 4. 在触摸结束时清理事件监听器
 * 
 * 支持移动端触摸操作，提供完整的移动端体验
 */
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true
  const touch = e.touches[0]
  updateValue(touch.clientX)
  
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.value) {
      const touch = e.touches[0]
      updateValue(touch.clientX)
    }
  }
  
  const handleTouchEnd = () => {
    isDragging.value = false
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }
  
  document.addEventListener('touchmove', handleTouchMove)
  document.addEventListener('touchend', handleTouchEnd)
}

defineOptions({
  inheritAttrs: false
})
</script>
