import { ref } from 'vue'

/**
 * 悬浮索引管理 Composable
 * 
 * @composable useHoverIndex
 * 
 * @description
 * 提供简单的悬浮索引状态管理，用于跟踪当前悬浮的列表项索引。
 * 常用于卡片列表、菜单项等需要悬浮交互效果的场景。
 * 
 * **功能特性**：
 * - 响应式索引状态：自动追踪当前悬浮项
 * - 简单 API：提供 setHover 和 clearHover 方法
 * - 无副作用：纯状态管理，不影响其他组件
 * 
 * **使用场景**：
 * - 卡片列表的悬浮高亮效果
 * - 菜单项的悬浮状态管理
 * - 图表节点的交互状态
 * - 任何需要追踪"当前悬浮项"的场景
 * 
 * @param {number} [initialIndex=-1] - 初始索引值
 *   - 默认值：`-1`（表示无悬浮项）
 *   - 通常使用 `-1` 或 `null` 表示无选中状态
 * 
 * @returns {Object} 悬浮索引相关的响应式数据和方法
 * @returns {Ref<number>} returns.hoveredIndex - 当前悬浮项的索引
 *   - `-1`: 无悬浮项
 *   - `>= 0`: 当前悬浮项的索引号
 * @returns {Function} returns.setHover - 设置悬浮索引
 *   - 参数：`index: number` - 要设置的索引值
 * @returns {Function} returns.clearHover - 清除悬浮状态（设为 -1）
 * @returns {Function} returns.isHovered - 检查指定索引是否为当前悬浮项
 *   - 参数：`index: number` - 要检查的索引值
 *   - 返回值：`boolean` - 是否为当前悬浮项
 * 
 * @example
 * 基础用法：
 * ```vue
 * <script setup lang="ts">
 * import { useHoverIndex } from '@/composables/useHoverIndex'
 * 
 * const { hoveredIndex, setHover, clearHover } = useHoverIndex()
 * 
 * const items = ['Item 1', 'Item 2', 'Item 3']
 * </script>
 * 
 * <template>
 *   <div
 *     v-for="(item, index) in items"
 *     :key="index"
 *     :class="{ 'highlighted': hoveredIndex === index }"
 *     @mouseenter="setHover(index)"
 *     @mouseleave="clearHover"
 *   >
 *     {{ item }}
 *   </div>
 * </template>
 * ```
 * 
 * @example
 * 使用 isHovered 辅助方法：
 * ```vue
 * <script setup lang="ts">
 * import { useHoverIndex } from '@/composables/useHoverIndex'
 * 
 * const { hoveredIndex, setHover, clearHover, isHovered } = useHoverIndex()
 * 
 * const getCardStyle = (index: number) => {
 *   if (isHovered(index)) {
 *     return {
 *       borderColor: '#FF6B00',
 *       boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
 *     }
 *   }
 *   return {}
 * }
 * </script>
 * 
 * <template>
 *   <div
 *     v-for="(item, index) in items"
 *     :key="index"
 *     :style="getCardStyle(index)"
 *     @mouseenter="setHover(index)"
 *     @mouseleave="clearHover"
 *   >
 *     Content
 *   </div>
 * </template>
 * ```
 * 
 * @example
 * 与动画库结合使用：
 * ```vue
 * <script setup lang="ts">
 * import { useHoverIndex } from '@/composables/useHoverIndex'
 * 
 * const { hoveredIndex, setHover, clearHover } = useHoverIndex()
 * const advantages = [...]
 * 
 * const getIconClasses = (index: number) => {
 *   const isHovered = hoveredIndex.value === index
 *   return [
 *     'w-16 h-16 rounded-full transition-all',
 *     isHovered ? 'bg-blue-500 text-white scale-110' : 'bg-blue-50 text-blue-500'
 *   ]
 * }
 * </script>
 * 
 * <template>
 *   <div
 *     v-for="(item, index) in advantages"
 *     :key="index"
 *     @mouseenter="setHover(index)"
 *     @mouseleave="clearHover"
 *   >
 *     <div :class="getIconClasses(index)">
 *       <component :is="item.icon" />
 *     </div>
 *   </div>
 * </template>
 * ```
 * 
 * @performance
 * **性能说明**：
 * - 轻量级实现，无性能开销
 * - 仅维护一个数字状态，内存占用极小
 * - 适合频繁的 hover 交互场景
 * 
 * @note
 * **设计考虑**：
 * - 使用 `-1` 而非 `null` 作为默认值，便于数值比较
 * - 不包含自动清除逻辑，需手动调用 `clearHover`
 * - 可与 `@mouseenter` 和 `@mouseleave` 事件配合使用
 * 
 * @see composables/useMobile.ts - 移动端检测
 * @see components/common/AdvantagesSection.vue - 使用示例
 */
export const useHoverIndex = (initialIndex: number = -1) => {
  /**
   * 当前悬浮项的索引
   * -1 表示无悬浮项
   */
  const hoveredIndex = ref(initialIndex)

  /**
   * 设置悬浮索引
   * 
   * @param index - 要设置的索引值
   */
  const setHover = (index: number) => {
    hoveredIndex.value = index
  }

  /**
   * 清除悬浮状态
   * 
   * @description
   * 将 hoveredIndex 重置为 -1，表示当前无悬浮项
   */
  const clearHover = () => {
    hoveredIndex.value = -1
  }

  /**
   * 检查指定索引是否为当前悬浮项
   * 
   * @param index - 要检查的索引值
   * @returns 是否为当前悬浮项
   */
  const isHovered = (index: number): boolean => {
    return hoveredIndex.value === index
  }

  return {
    /** 当前悬浮项的索引（-1 表示无悬浮项） */
    hoveredIndex,
    /** 设置悬浮索引 */
    setHover,
    /** 清除悬浮状态（设为 -1） */
    clearHover,
    /** 检查指定索引是否为当前悬浮项 */
    isHovered,
  }
}
