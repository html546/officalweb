/**
 * 容联七陌在线客服插件
 * 
 * @description 使用官方标准方式集成七陌客服系统
 * - 使用 autoShow=true 确保完整初始化
 * - 隐藏七陌默认按钮（样式见 assets/css/qimoor-hide.css）
 * @see https://developer.7moor.com/
 */


export default defineNuxtPlugin(() => {
  const { ssrContext } = useNuxtApp()

  if (ssrContext) return

  const ACCESS_ID = '3c38c910-64d9-11ef-b60c-533c8e6a8982'

  // 添加全局状态标记（使用 __ctc 前缀避免与七陌 SDK 可能使用的 __qimoorReady 回调冲突）
  if (typeof window !== 'undefined') {
    ; (window as any).__ctcQimoorReady = false
      ; (window as any).__ctcQimoorBtnReady = false
  }

  // 使用立即执行函数加载七陌 SDK（官方推荐方式）
  // 关键：使用 autoShow=true 确保完整初始化，然后隐藏窗口和默认按钮
  ; (function () {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://ykf-weixin01.7moor.com/javascripts/7moorInit.js?accessId=${ACCESS_ID}&autoShow=false&language=ZHCN`

    script.onload = () => {
      console.log('✅ 七陌客服 SDK 脚本加载成功')
      console.log('   正在等待 SDK 初始化...')

      // 使用轮询机制等待按钮创建（最多等待10秒）
      let checkCount = 0
      const maxChecks = 20 // 20次 * 500ms = 10秒

      const checkInit = setInterval(() => {
        checkCount++
        const btn = document.getElementById('qimoChatBtn')
        const container = document.getElementById('qimo_chatpup')

        // 如果找到按钮，停止轮询
        if (btn) {
          clearInterval(checkInit)

          console.log('\n=== 七陌初始化完成 ===')
          console.log('触发按钮 (#qimoChatBtn): ✅ 已创建')
          console.log('客服容器 (#qimo_chatpup):', container ? '✅ 已创建' : '❌ 未创建')

          // 隐藏七陌默认按钮
          btn.style.display = 'none'
          console.log('✅ 已隐藏七陌默认按钮')

          // 关闭自动弹出的窗口
          if (container) {
            container.style.display = 'none'
            console.log('✅ 已关闭自动弹出的窗口')
          }

          // 设置全局状态
          if (typeof window !== 'undefined') {
            (window as any).__ctcQimoorReady = true
              (window as any).__ctcQimoorBtnReady = true
          }

          console.log('✅ 客服系统已就绪')
          console.log('====================\n')
          return
        }

        // 超时检查
        if (checkCount >= maxChecks) {
          clearInterval(checkInit)
          console.error('\n=== 七陌初始化超时 ===')
          console.error('触发按钮 (#qimoChatBtn): ❌ 未创建')
          console.error('客服容器 (#qimo_chatpup):', container ? '✅ 已创建' : '❌ 未创建')

          // 即使按钮未创建，如果容器存在，仍然标记为部分就绪
          if (container && typeof window !== 'undefined') {
            (window as any).__ctcQimoorReady = true
              (window as any).__ctcQimoorBtnReady = false
            console.warn('⚠️ 按钮未创建，但容器存在，将使用备用方案')
          }

          console.error('====================\n')
        }
      }, 500)
    }

    script.onerror = () => {
      console.error('❌ 七陌 SDK 加载失败，请检查网络连接')
    }

    const s = document.getElementsByTagName('script')[0]
    s.parentNode!.insertBefore(script, s)
  })()

  // 显式返回 undefined，避免构建后误将赋值等表达式当作返回值被 Nuxt 当作函数调用
  return undefined
})
