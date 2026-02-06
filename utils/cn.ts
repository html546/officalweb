import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 Tailwind CSS 类名的工具函数
 * 
 * @function cn
 * 
 * @description
 * 结合 clsx 和 tailwind-merge，提供智能的 CSS 类名合并功能：
 * - 支持条件类名（对象、数组、字符串）
 * - 自动解决 Tailwind 类名冲突（后者覆盖前者）
 * - 自动过滤 falsy 值（false, null, undefined, 0, ''）
 * - 智能合并 Tailwind 的变体类名（如 px-4 和 px-6）
 * 
 * **工作原理**：
 * 1. `clsx` 负责处理条件逻辑和数组/对象格式
 * 2. `tailwind-merge` 负责解决 Tailwind 类名冲突
 * 
 * @param {...ClassValue[]} inputs - 要合并的类名，支持多种格式：
 *   - 字符串：`'px-4 py-2'`
 *   - 数组：`['px-4', 'py-2']`
 *   - 对象：`{ 'bg-red-500': isError, 'bg-blue-500': !isError }`
 *   - 条件值：`isActive && 'active'`
 *   - falsy 值会被自动过滤
 * 
 * @returns {string} 合并后的类名字符串，已解决冲突并过滤无效值
 * 
 * @example
 * ```typescript
 * // 基础用法：合并多个字符串
 * cn('px-4', 'py-2', 'bg-blue-500')
 * // => "px-4 py-2 bg-blue-500"
 * 
 * // 条件类名：根据状态动态添加类
 * const isError = true
 * cn('px-4', { 'bg-red-500': isError, 'bg-blue-500': !isError })
 * // => "px-4 bg-red-500"
 * 
 * // 自动处理冲突：后者覆盖前者
 * cn('px-4', 'px-6')
 * // => "px-6" (px-4 被 px-6 覆盖)
 * 
 * // 数组格式：支持嵌套数组
 * cn(['px-4', 'py-2'], 'rounded')
 * // => "px-4 py-2 rounded"
 * 
 * // 过滤 falsy 值：自动忽略 false, null, undefined
 * cn('px-4', false, null, undefined, 'py-2')
 * // => "px-4 py-2"
 * 
 * // 复杂条件组合
 * const isActive = true
 * const isDisabled = false
 * cn(
 *   'base-class',
 *   isActive && 'active-class',
 *   isDisabled && 'disabled-class',
 *   { 'hover:bg-blue-500': !isDisabled }
 * )
 * // => "base-class active-class hover:bg-blue-500"
 * 
 * // Vue 组件中的实际使用
 * ```vue
 * <script setup>
 * import { cn } from '@/utils/cn'
 * const isError = ref(false)
 * const isLarge = ref(true)
 * </script>
 * 
 * <template>
 *   <div :class="cn(
 *     'px-4 py-2 rounded',
 *     { 'bg-red-500': isError, 'bg-blue-500': !isError },
 *     isLarge && 'text-lg'
 *   )">
 *     Content
 *   </div>
 * </template>
 * ```
 * ```
 * 
 * @see {@link https://github.com/lukeed/clsx | clsx - 条件类名工具}
 * @see {@link https://github.com/dcastil/tailwind-merge | tailwind-merge - Tailwind 类名合并}
 * 
 * @performance
 * - 函数执行速度极快，适合在渲染循环中使用
 * - tailwind-merge 使用缓存机制优化性能
 * - 建议：对于频繁变化的类名，考虑使用 computed 缓存结果
 * 
 * @best-practices
 * - 优先使用对象语法处理条件类名，比三元运算符更清晰
 * - 将静态类名放在前面，动态类名放在后面
 * - 避免在循环中重复调用，使用 computed 或 memo 缓存
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
