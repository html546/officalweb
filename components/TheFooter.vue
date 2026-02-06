<template>
  <footer class="bg-[#0B2747] text-white pt-16 pb-8">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand & Contact -->
        <div>
          <div class="mb-6">
            <img
              src="/logo.png"
              alt="车拖车"
              class="h-10 w-auto brightness-0 invert"
              @error="handleLogoError"
            />
          </div>
          <p class="text-gray-300 text-sm mb-6 leading-relaxed">
            车拖车是国内领先的数字化汽车物流平台，致力于让汽车物流更简单、更高效。
          </p>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-gray-300 text-sm">
              <Phone class="w-4 h-4 text-[#FF6B00]" />
              <span>400-075-1117 (8:00-20:00)</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300 text-sm">
              <Mail class="w-4 h-4 text-[#FF6B00]" />
              <span>support@chetuotuo.com</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin class="w-4 h-4 text-[#FF6B00]" />
              <span>山东省临沂市兰山区应用科学城</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white">
            核心服务
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('small-carrier')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                小板车尊享托运
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('big-carrier')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                大板车干线集运
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('driver')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                专业代驾服务
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('rescue')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                道路救援服务
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('supply-chain')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                企业供应链解决方案
              </a>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white">
            快速链接
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('about')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                关于我们
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('news')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                新闻资讯
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('driver-join')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                司机入驻
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('partner-recruit')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                城市合伙人
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="handleNavClick('guide')"
                class="text-gray-300 hover:text-[#FF6B00] transition-colors text-sm"
              >
                帮助中心
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter/Social -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white">
            关注我们
          </h3>
          <p class="text-gray-300 text-sm mb-4">
            扫描下方二维码，关注官方账号获取最新资讯。
          </p>
          <div class="flex gap-6">
            <!-- WeChat QR -->
            <div class="flex flex-col items-center gap-2">
              <div class="w-24 h-24 bg-white p-1.5 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1681070890678-ff14d17e5825?auto=format&fit=crop&q=80&w=200"
                  alt="微信公众号"
                  class="w-full h-full object-cover"
                />
              </div>
              <span class="text-xs text-gray-400">
                微信公众号
              </span>
            </div>

            <!-- Douyin QR -->
            <div class="flex flex-col items-center gap-2">
              <div class="w-24 h-24 bg-white p-1.5 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1681070890678-ff14d17e5825?auto=format&fit=crop&q=80&w=200"
                  alt="官方抖音"
                  class="w-full h-full object-cover"
                />
              </div>
              <span class="text-xs text-gray-400">
                官方抖音
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © 2026 车拖车物流科技. All rights reserved.
          鲁ICP备2023013196号-2
        </p>
        <div class="flex gap-6">
          <a
            href="#"
            @click.prevent="handleNavClick('about')"
            class="text-gray-400 hover:text-white text-sm"
          >
            隐私政策
          </a>
          <a
            href="#"
            @click.prevent="handleNavClick('about')"
            class="text-gray-400 hover:text-white text-sm"
          >
            服务条款
          </a>
          <a
            href="#"
            @click.prevent="handleNavClick('about')"
            class="text-gray-400 hover:text-white text-sm"
          >
            网站地图
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * 全局页脚组件
 * 
 * @component TheFooter
 * @description
 * 提供网站页脚信息展示和快速导航功能，包括：
 * - 品牌信息和公司简介
 * - 联系方式（电话、邮箱、地址）
 * - 核心服务快速链接
 * - 快速导航链接
 * - 社交媒体二维码（微信公众号、抖音）
 * - 版权信息和法律链接（隐私政策、服务条款、网站地图）
 * 
 * @example
 * ```vue
 * <TheFooter 
 *   :set-active-id="handleNavigation"
 *   @set-active-id="handleNavigation"
 * />
 * ```
 * 
 * @design-notes
 * - 深色背景（#0B2747）与页面主体形成对比
 * - 响应式布局：移动端单列，平板端两列，桌面端四列
 * - Logo 使用亮度反转处理以适应深色背景
 * - 链接悬停时显示品牌橙色（#FF6B00）
 * - 底部版权信息区域使用边框分隔
 */
import { Phone, Mail, MapPin } from 'lucide-vue-next'

/**
 * 组件属性定义
 * 
 * @interface Props
 */
interface Props {
  /**
   * 设置激活页面 ID 的回调函数（可选）
   * 
   * @param id - 要激活的页面 ID
   * 
   * @description
   * 如果提供此 prop，将使用此函数处理导航点击
   * 否则将触发 setActiveId 事件
   * 
   * @example
   * ```vue
   * <TheFooter :set-active-id="(id) => currentPageId = id" />
   * ```
   */
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

/**
 * 组件事件定义
 */
const emit = defineEmits<{
  /**
   * 当用户点击页脚中的导航链接时触发
   * @param id - 被点击的导航项 ID
   */
  setActiveId: [id: string]
}>()

/**
 * 处理页脚导航链接点击事件
 * 
 * @param id - 被点击的导航项 ID
 * 
 * @description
 * 执行以下操作：
 * 1. **更新激活状态**：
 *    - 如果提供了 setActiveId prop，调用该函数
 *    - 否则触发 setActiveId 事件
 * 2. **滚动到页面顶部**：
 *    - 使用平滑滚动动画
 *    - 提供更好的用户体验，确保用户看到新页面内容
 * 
 * @example
 * ```typescript
 * // 用户点击"关于我们"链接
 * handleNavClick('about')
 * // => 更新激活状态，平滑滚动到页面顶部
 * ```
 */
const handleNavClick = (id: string) => {
  if (props.setActiveId) {
    props.setActiveId(id)
  } else {
    emit('setActiveId', id)
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * 处理 Logo 图片加载错误
 * 
 * @param e - 图片加载错误事件
 * 
 * @description
 * 当 Logo 图片加载失败时：
 * - 隐藏图片元素，避免显示破损图标
 * - 提供优雅的降级处理
 * 
 * @example
 * ```vue
 * <img 
 *   src="/logo.png" 
 *   alt="车拖车"
 *   @error="handleLogoError"
 * />
 * ```
 */
const handleLogoError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
}
</script>
