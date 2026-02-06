/**
 * 动画预设 Composable
 * 
 * @composable useMotionPresets
 * 
 * @description
 * 提供常用的动画预设配置，用于快速创建一致的动画效果。
 * 基于 @vueuse/motion 的 v-motion directive，提供预定义的动画配置对象。
 * 
 * **功能特性**：
 * - 提供多种常用动画预设（淡入、滑入、缩放等）
 * - 支持自定义延迟和持续时间
 * - 支持滚动进入视图动画
 * - 类型安全，完整的 TypeScript 支持
 * 
 * **使用场景**：
 * - Hero 区域标题动画
 * - 列表项依次出现动画
 * - 卡片悬停效果
 * - 页面滚动触发动画
 * 
 * @returns {Object} 动画预设函数集合
 * @returns {Function} returns.fadeIn - 淡入动画预设
 * @returns {Function} returns.slideUp - 向上滑入动画预设
 * @returns {Function} returns.slideDown - 向下滑入动画预设
 * @returns {Function} returns.slideLeft - 向左滑入动画预设
 * @returns {Function} returns.slideRight - 向右滑入动画预设
 * @returns {Function} returns.scaleIn - 缩放进入动画预设
 * @returns {Function} returns.fadeInUp - 淡入并向上移动动画预设
 * @returns {Function} returns.fadeInDown - 淡入并向下移动动画预设
 * @returns {Function} returns.fadeInLeft - 淡入并向左移动动画预设
 * @returns {Function} returns.fadeInRight - 淡入并向右移动动画预设
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMotionPresets } from '@/composables/useMotionPresets'
 * 
 * const { fadeIn, slideUp, fadeInUp } = useMotionPresets()
 * </script>
 * 
 * <template>
 *   <!-- 基础淡入动画 -->
 *   <div
 *     v-motion
 *     v-bind="fadeIn()"
 *   >
 *     Content
 *   </div>
 *   
 *   <!-- 带延迟的向上滑入 -->
 *   <div
 *     v-motion
 *     v-bind="slideUp({ delay: 200 })"
 *   >
 *     Content
 *   </div>
 *   
 *   <!-- 滚动进入视图动画 -->
 *   <div
 *     v-motion
 *     v-bind="fadeInUp({ visibleOnce: true })"
 *   >
 *     Content
 *   </div>
 * </template>
 * ```
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMotionPresets } from '@/composables/useMotionPresets'
 * 
 * const { fadeInUp } = useMotionPresets()
 * 
 * // 列表项依次出现
 * const items = ['Item 1', 'Item 2', 'Item 3']
 * </script>
 * 
 * <template>
 *   <div
 *     v-for="(item, index) in items"
 *     :key="index"
 *     v-motion
 *     v-bind="fadeInUp({ delay: index * 100 })"
 *   >
 *     {{ item }}
 *   </div>
 * </template>
 * ```
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMotionPresets } from '@/composables/useMotionPresets'
 * 
 * const { scaleIn, fadeIn } = useMotionPresets()
 * </script>
 * 
 * <template>
 *   <!-- Hero 标题：快速淡入 -->
 *   <h1
 *     v-motion
 *     v-bind="fadeIn({ duration: 400 })"
 *   >
 *     Welcome
 *   </h1>
 *   
 *   <!-- Hero 副标题：延迟缩放进入 -->
 *   <p
 *     v-motion
 *     v-bind="scaleIn({ delay: 300, duration: 500 })"
 *   >
 *     Subtitle
 *   </p>
 * </template>
 * ```
 * 
 * @see {@link https://motion.vueuse.org/ | VueUse Motion 官方文档}
 * 
 * @note
 * **动画配置说明**：
 * - `initial`: 初始状态（元素进入前的样式）
 * - `enter`: 进入动画（元素挂载时的动画）
 * - `visible`: 滚动进入视图时的动画
 * - `transition`: 动画过渡配置（duration, delay, easing 等）
 * 
 * **性能建议**：
 * - 使用 `visibleOnce: true` 避免重复触发动画
 * - 合理设置延迟，避免所有元素同时动画
 * - 对于复杂动画，考虑使用 CSS 动画替代
 */

/**
 * 动画配置选项
 * 
 * @interface MotionOptions
 * @property {number} [delay=0] - 动画延迟时间（毫秒）
 * @property {number} [duration=600] - 动画持续时间（毫秒）
 * @property {boolean} [visibleOnce=false] - 是否只在首次进入视图时触发动画
 * @property {string} [easing='ease-out'] - 缓动函数
 */
interface MotionOptions {
  delay?: number
  duration?: number
  visibleOnce?: boolean
  easing?: string
}

/**
 * 动画预设配置对象
 */
interface MotionPreset {
  initial: Record<string, any>
  enter: Record<string, any>
  visible?: Record<string, any>
  visibleOnce?: boolean
  transition: {
    delay?: number
    duration?: number
    easing?: string
  }
}

export const useMotionPresets = () => {
  /**
   * 淡入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * @param {number} [options.delay=0] - 延迟时间（毫秒）
   * @param {number} [options.duration=600] - 持续时间（毫秒）
   * @param {boolean} [options.visibleOnce=false] - 是否只在首次进入视图时触发
   * 
   * @returns {MotionPreset} 淡入动画配置对象
   * 
   * @description
   * 元素从完全透明淡入到完全不透明。
   * 适用于：文本内容、图片、卡片等需要柔和出现的元素。
   * 
   * @example
   * ```vue
   * <div v-motion v-bind="fadeIn()">Content</div>
   * <div v-motion v-bind="fadeIn({ delay: 200 })">Delayed Content</div>
   * ```
   */
  const fadeIn = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    visible: options.visibleOnce ? { opacity: 1 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 向上滑入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * @param {number} [options.delay=0] - 延迟时间（毫秒）
   * @param {number} [options.duration=600] - 持续时间（毫秒）
   * @param {boolean} [options.visibleOnce=false] - 是否只在首次进入视图时触发
   * 
   * @returns {MotionPreset} 向上滑入动画配置对象
   * 
   * @description
   * 元素从下方滑入并淡入。
   * 适用于：列表项、卡片、按钮等需要从下往上出现的元素。
   * 
   * @example
   * ```vue
   * <div v-motion v-bind="slideUp()">Content</div>
   * ```
   */
  const slideUp = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
    visible: options.visibleOnce ? { opacity: 1, y: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 向下滑入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 向下滑入动画配置对象
   * 
   * @description
   * 元素从上方滑入并淡入。
   * 适用于：下拉菜单、模态框等需要从上往下出现的元素。
   */
  const slideDown = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, y: -30 },
    enter: { opacity: 1, y: 0 },
    visible: options.visibleOnce ? { opacity: 1, y: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 向左滑入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 向左滑入动画配置对象
   * 
   * @description
   * 元素从右侧滑入并淡入。
   * 适用于：侧边栏、导航菜单等需要从右往左出现的元素。
   */
  const slideLeft = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, x: 30 },
    enter: { opacity: 1, x: 0 },
    visible: options.visibleOnce ? { opacity: 1, x: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 向右滑入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 向右滑入动画配置对象
   * 
   * @description
   * 元素从左侧滑入并淡入。
   * 适用于：内容区域、卡片等需要从左往右出现的元素。
   */
  const slideRight = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, x: -30 },
    enter: { opacity: 1, x: 0 },
    visible: options.visibleOnce ? { opacity: 1, x: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 缩放进入动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 缩放进入动画配置对象
   * 
   * @description
   * 元素从小到大的缩放并淡入。
   * 适用于：图标、按钮、重要提示等需要强调的元素。
   */
  const scaleIn = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    visible: options.visibleOnce ? { opacity: 1, scale: 1 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 淡入并向上移动动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 淡入并向上移动动画配置对象
   * 
   * @description
   * 结合淡入和向上移动的动画效果。
   * 适用于：Hero 区域标题、主要内容区域等。
   * 
   * @example
   * ```vue
   * <!-- 滚动进入视图时触发 -->
   * <div v-motion v-bind="fadeInUp({ visibleOnce: true })">
   *   Content
   * </div>
   * ```
   */
  const fadeInUp = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    visible: options.visibleOnce ? { opacity: 1, y: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 淡入并向下移动动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 淡入并向下移动动画配置对象
   */
  const fadeInDown = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    visible: options.visibleOnce ? { opacity: 1, y: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 淡入并向左移动动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 淡入并向左移动动画配置对象
   */
  const fadeInLeft = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0 },
    visible: options.visibleOnce ? { opacity: 1, x: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  /**
   * 淡入并向右移动动画预设
   * 
   * @param {MotionOptions} [options={}] - 动画配置选项
   * 
   * @returns {MotionPreset} 淡入并向右移动动画配置对象
   */
  const fadeInRight = (options: MotionOptions = {}): MotionPreset => ({
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    visible: options.visibleOnce ? { opacity: 1, x: 0 } : undefined,
    visibleOnce: options.visibleOnce,
    transition: {
      delay: options.delay ?? 0,
      duration: options.duration ?? 600,
      easing: options.easing ?? 'ease-out',
    },
  })

  return {
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scaleIn,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
  }
}
