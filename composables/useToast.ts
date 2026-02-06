/**
 * Toast 通知 Composable
 * 
 * @composable useToast
 * 
 * @description
 * 提供简单的 Toast 通知功能，用于向用户显示临时消息。
 * 
 * **当前实现**：
 * - 使用 `console.log` 作为临时实现
 * - 可在生产环境中替换为专业的 Toast 库（如 vue-sonner）
 * 
 * **功能特性**：
 * - 支持三种消息类型：success（成功）、error（错误）、info（信息）
 * - 提供便捷的快捷方法：`success()`, `error()`, `info()`
 * - 统一的 API 接口，便于后续替换实现
 * 
 * @returns {Object} Toast 通知相关的函数
 * @returns {Function} returns.toast - 通用 Toast 函数
 * @returns {Function} returns.success - 显示成功消息的快捷方法
 * @returns {Function} returns.error - 显示错误消息的快捷方法
 * @returns {Function} returns.info - 显示信息消息的快捷方法
 * 
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useToast } from '@/composables/useToast'
 * 
 * const { toast, success, error, info } = useToast()
 * 
 * // 使用通用方法
 * const handleSave = async () => {
 *   try {
 *     await saveData()
 *     toast('保存成功！', 'success')
 *   } catch (err) {
 *     toast('保存失败：' + err.message, 'error')
 *   }
 * }
 * 
 * // 使用快捷方法（推荐）
 * const handleSubmit = async () => {
 *   try {
 *     await submitForm()
 *     success('表单提交成功！')
 *   } catch (err) {
 *     error('提交失败，请重试')
 *   }
 * }
 * 
 * // 显示信息提示
 * const showHint = () => {
 *   info('提示：请确保所有字段都已填写')
 * }
 * </script>
 * 
 * <template>
 *   <button @click="handleSubmit">提交</button>
 *   <button @click="showHint">显示提示</button>
 * </template>
 * ```
 * 
 * @example
 * ```typescript
 * // 在组合式函数中使用
 * export const useForm = () => {
 *   const { success, error } = useToast()
 *   
 *   const submit = async (data: FormData) => {
 *     try {
 *       const result = await api.submit(data)
 *       success('操作成功')
 *       return result
 *     } catch (err) {
 *       error('操作失败')
 *       throw err
 *     }
 *   }
 *   
 *   return { submit }
 * }
 * ```
 * 
 * @todo
 * - [ ] 替换为 vue-sonner 或类似的 Toast 库
 * - [ ] 添加自动关闭时间配置
 * - [ ] 支持自定义位置（top, bottom, left, right）
 * - [ ] 支持自定义样式和图标
 * - [ ] 添加队列管理，避免同时显示过多 Toast
 * 
 * @see {@link https://github.com/nuxt-modules/sonner | vue-sonner - Vue 3 Toast 库}
 * @see {@link https://sonner.emilkowal.ski/ | Sonner 官方文档}
 * 
 * @note
 * **迁移计划**：
 * 当前使用 console.log 作为临时实现，计划在后续版本中替换为 vue-sonner：
 * 
 * ```typescript
 * // 未来实现示例
 * import { toast as sonnerToast } from 'vue-sonner'
 * import type { ToastType } from '@/types'
 * 
 * export const useToast = () => {
 *   return {
 *     toast: (message: string, type: ToastType) => {
 *       sonnerToast[type](message)
 *     },
 *     success: (message: string) => sonnerToast.success(message),
 *     error: (message: string) => sonnerToast.error(message),
 *     info: (message: string) => sonnerToast.info(message),
 *   }
 * }
 * ```
 */
import type { ToastType } from '@/types'

export const useToast = () => {
  /**
   * 显示 Toast 通知
   * 
   * @param {string} message - 要显示的消息内容
   * @param {ToastType} [type='info'] - 消息类型
   *   - `success`: 成功消息（绿色）
   *   - `error`: 错误消息（红色）
   *   - `info`: 信息消息（蓝色）
   * 
   * @description
   * 通用 Toast 函数，支持指定消息类型。
   * 当前实现使用 console.log 输出，可在生产环境替换为 UI 组件。
   * 
   * @see types/index.ts - ToastType
   */
  const toast = (message: string, type: ToastType = 'info') => {
    console.log(`[Toast ${type}]:`, message)
    // In production, you might want to use a proper toast library like vue-sonner
    // For now, we'll use console.log
  }

  return {
    /** 通用 Toast 函数 */
    toast,
    /** 显示成功消息的快捷方法 */
    success: (message: string) => toast(message, 'success'),
    /** 显示错误消息的快捷方法 */
    error: (message: string) => toast(message, 'error'),
    /** 显示信息消息的快捷方法 */
    info: (message: string) => toast(message, 'info'),
  }
}
