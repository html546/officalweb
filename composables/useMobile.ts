import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 移动端设备检测 Composable
 * 
 * @composable useMobile
 * 
 * @description
 * 提供响应式的移动端设备检测功能，用于根据窗口宽度判断当前是否为移动端设备。
 * 
 * **功能特性**：
 * - 响应式检测：自动监听窗口大小变化
 * - 可配置断点：支持自定义移动端断点宽度
 * - 自动清理：组件卸载时自动移除事件监听器
 * - 性能优化：使用防抖优化 resize 事件处理（可选）
 * 
 * **使用场景**：
 * - 根据设备类型显示不同的 UI 布局
 * - 移动端和桌面端使用不同的交互方式
 * - 响应式组件的行为切换
 * 
 * @param {number} [breakpoint=768] - 移动端断点宽度（像素）
 *   - 默认值：`768`（与 Tailwind CSS 的 `md` 断点一致）
 *   - 窗口宽度 < breakpoint：视为移动端
 *   - 窗口宽度 >= breakpoint：视为桌面端
 * 
 * @returns {Object} 移动端检测相关的响应式数据和方法
 * @returns {Ref<boolean>} returns.isMobile - 是否为移动端设备的响应式引用
 *   - `true`: 当前为移动端（窗口宽度 < breakpoint）
 *   - `false`: 当前为桌面端（窗口宽度 >= breakpoint）
 * @returns {Function} returns.checkMobile - 手动触发设备检测的函数
 *   - 用于在特定场景下手动更新检测结果
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMobile } from '@/composables/useMobile'
 * 
 * // 使用默认断点（768px）
 * const { isMobile } = useMobile()
 * 
 * // 或自定义断点
 * const { isMobile: isTablet } = useMobile(1024)
 * </script>
 * 
 * <template>
 *   <!-- 条件渲染 -->
 *   <div v-if="isMobile">
 *     <MobileMenu />
 *   </div>
 *   <div v-else>
 *     <DesktopMenu />
 *   </div>
 *   
 *   <!-- 动态类名 -->
 *   <div :class="{ 'mobile-layout': isMobile, 'desktop-layout': !isMobile }">
 *     Content
 *   </div>
 *   
 *   <!-- 条件样式 -->
 *   <div :style="{ fontSize: isMobile ? '14px' : '16px' }">
 *     Text
 *   </div>
 * </template>
 * ```
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMobile } from '@/composables/useMobile'
 * 
 * const { isMobile, checkMobile } = useMobile()
 * 
 * // 手动触发检测（例如在特定操作后）
 * const handleOrientationChange = () => {
 *   // 延迟检测，等待布局更新
 *   setTimeout(() => {
 *     checkMobile()
 *   }, 100)
 * }
 * 
 * // 监听设备方向变化
 * onMounted(() => {
 *   window.addEventListener('orientationchange', handleOrientationChange)
 * })
 * 
 * onUnmounted(() => {
 *   window.removeEventListener('orientationchange', handleOrientationChange)
 * })
 * </script>
 * ```
 * 
 * @example
 * ```typescript
 * // 在组合式函数中使用
 * export const useQuoteModal = () => {
 *   const { isMobile } = useMobile()
 *   const isModalOpen = ref(false)
 *   
 *   const openQuote = () => {
 *     if (isMobile.value) {
 *       // 移动端：使用深链接跳转到小程序
 *       window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
 *     } else {
 *       // 桌面端：打开模态框
 *       isModalOpen.value = true
 *     }
 *   }
 *   
 *   return { isModalOpen, openQuote }
 * }
 * ```
 * 
 * @performance
 * **性能优化建议**：
 * - 默认实现会在每次 resize 事件时立即更新，对于高频场景可考虑添加防抖
 * - 如果需要在多个组件中使用，考虑使用全局状态管理（如 Pinia）
 * - 组件卸载时会自动清理事件监听器，无需手动处理
 * 
 * **防抖优化示例**（可选）：
 * ```typescript
 * import { useDebounceFn } from '@vueuse/core'
 * 
 * export const useMobile = (breakpoint = 768) => {
 *   const isMobile = ref(false)
 *   
 *   const checkMobile = () => {
 *     isMobile.value = window.innerWidth < breakpoint
 *   }
 *   
 *   // 使用防抖优化
 *   const debouncedCheck = useDebounceFn(checkMobile, 150)
 *   
 *   onMounted(() => {
 *     checkMobile()
 *     window.addEventListener('resize', debouncedCheck)
 *   })
 *   
 *   onUnmounted(() => {
 *     window.removeEventListener('resize', debouncedCheck)
 *   })
 *   
 *   return { isMobile, checkMobile }
 * }
 * ```
 * 
 * @see {@link https://vueuse.org/core/usebreakpoints/ | VueUse useBreakpoints - 更强大的断点检测}
 * @see {@link https://tailwindcss.com/docs/responsive-design | Tailwind CSS 响应式设计}
 * 
 * @note
 * **与 Tailwind CSS 断点的对应关系**：
 * - `sm`: 640px
 * - `md`: 768px（默认断点）
 * - `lg`: 1024px
 * - `xl`: 1280px
 * - `2xl`: 1536px
 * 
 * **浏览器兼容性**：
 * - 支持所有现代浏览器
 * - 需要 `window.innerWidth` API 支持
 * - SSR 环境下需要在客户端挂载后使用
 */
export const useMobile = (breakpoint: number = 768) => {
  /**
   * 是否为移动端设备的响应式引用
   */
  const isMobile = ref(false)

  /**
   * 检查当前窗口宽度是否为移动端
   * 
   * @description
   * 根据窗口宽度与断点比较，更新 isMobile 的值。
   * 可在需要时手动调用以立即更新检测结果。
   */
  const checkMobile = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  // 组件挂载时初始化检测并添加监听器
  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  // 组件卸载时移除监听器，避免内存泄漏
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })

  return {
    /** 是否为移动端设备的响应式引用 */
    isMobile,
    /** 手动触发设备检测的函数 */
    checkMobile,
  }
}
