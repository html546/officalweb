/**
 * 容联七陌客服系统类型声明
 * 
 * @description
 * 为七陌客服 JavaScript SDK 提供 TypeScript 类型定义
 */

/**
 * 七陌客服全局对象接口
 */
export interface QimoorSDK {
  /**
   * 打开客服聊天窗口
   */
  qimoChatClick: () => void

  /**
   * 关闭客服聊天窗口
   */
  closeChat: () => void

  /**
   * 显示客服按钮
   */
  showButton: () => void

  /**
   * 隐藏客服按钮
   */
  hideButton: () => void
}

/**
 * 七陌客服插件接口
 */
export interface QimoorPlugin {
  /**
   * 打开客服窗口
   */
  qimoChatClick: () => void

  /**
   * 关闭客服窗口
   */
  closeChat: () => void

  /**
   * 显示客服按钮
   */
  showButton: () => void

  /**
   * 隐藏客服按钮
   */
  hideButton: () => void

  /**
   * 检查 SDK 是否已加载
   */
  isLoaded: () => boolean
}

/**
 * 扩展 Window 全局对象
 */
declare global {
  interface Window {
    /**
     * 七陌客服全局对象（可能的多种形式）
     */
    Qimoor?: any
    lcc_im?: any
    _7moor?: any
    requestIdleCallback?: (callback: () => void) => void
    qimoChatClick?: () => void
  }
}

/**
 * 扩展 Nuxt 应用实例
 */
declare module '#app' {
  interface NuxtApp {
    $qimoor: QimoorPlugin
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $qimoor: QimoorPlugin
  }
}

export { }
