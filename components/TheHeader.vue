<template>
  <header class="fixed top-0 left-0 right-0 w-full h-[80px] bg-[#FFFFFF] shadow-sm z-[50] overflow-visible flex items-center font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] flex items-center justify-between px-4 lg:px-0 h-full">
      
      <!-- Left: Brand Identity (Logo) -->
      <a
        href="#home"
        @click.prevent="handleNavClick('home')"
        class="flex items-center hover:opacity-90 transition-opacity flex-shrink-0 pr-10"
      >
        <img :src="brandLogo" alt="车拖车" class="h-10 w-auto" />
      </a>

      <!-- Center: Main Navigation Menu -->
      <nav class="hidden lg:flex items-center gap-8 h-full">
        <div
          v-for="item in menuItems"
          :key="item.label"
          class="relative h-full flex items-center"
          @mouseenter="item.hasDropdown && (activeDropdown = item.id || null)"
          @mouseleave="activeDropdown = null"
        >
          <div class="relative flex items-center h-full">
            <button
              @click="item.id && handleNavClick(item.id)"
              :class="[
                'flex items-center gap-1 text-[16px] transition-colors cursor-pointer outline-none bg-transparent border-none p-0',
                isActive(item) ? 'text-[#006EFF] font-bold' : 'text-[#4B5563] font-normal hover:text-[#006EFF]'
              ]"
            >
              {{ item.label }}
              <ChevronDown
                v-if="item.hasDropdown"
                :class="[
                  'w-4 h-4 transition-transform duration-200',
                  activeDropdown === item.id ? 'rotate-180' : ''
                ]"
              />
              <div
                v-if="isActive(item)"
                class="absolute left-0 right-0 bottom-[24px] h-[2px] bg-[#006EFF] rounded-full"
              />
            </button>
          </div>

          <!-- Dropdown Menu -->
          <Transition
            enter-active-class="transition-all duration-200"
            enter-from-class="opacity-0 translate-y-[-10px]"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-[-10px]"
          >
            <div
              v-if="item.hasDropdown && activeDropdown === item.id"
              :class="[
                'absolute left-0 top-[80px] bg-white flex flex-col z-[100] shadow-xl border-t-2 border-[#006EFF] rounded-b-xl',
                item.id === 'download' ? 'w-[160px]' : 'min-w-[200px]'
              ]"
            >
              <div class="p-2 flex flex-col">
                <a
                  v-for="child in item.children"
                  :key="child.label"
                  :href="child.href"
                  :target="child.href?.startsWith('http') ? '_blank' : undefined"
                  :rel="child.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
                  @click.prevent="handleChildClick(child)"
                  :class="[
                    'text-left text-[14px] px-4 py-2.5 rounded-lg transition-colors cursor-pointer',
                    activeId === child.id ? 'bg-[#F0F7FF] text-[#006EFF] font-bold' : 'text-[#4B5563] hover:bg-[#F0F7FF] hover:text-[#006EFF]'
                  ]"
                >
                  {{ child.label }}
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Right: Call to Action (CTA) -->
      <div class="flex items-center gap-4">
        <Button
          @click="isOrderModalOpen = true"
          class="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[15px] transition-all hover:-translate-y-1 shadow-md hover:shadow-orange-200/50 flex-shrink-0 border-none cursor-pointer"
        >
          立即下单
        </Button>

        <!-- Mobile Menu Toggle -->
        <button
          class="lg:hidden p-2 text-[#4B5563] hover:bg-gray-100 rounded-lg transition-colors border-none bg-transparent cursor-pointer"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in-out"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 top-[80px] bg-white z-[90]"
      >
        <div class="flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          <div
            v-for="item in menuItems"
            :key="item.label"
            class="border-b border-gray-50 last:border-none"
          >
            <div class="flex items-center justify-between py-4">
              <button
                :class="[
                  'text-[16px] font-medium transition-colors cursor-pointer outline-none bg-transparent border-none p-0',
                  activeId === item.id ? 'text-[#006EFF]' : 'text-[#4B5563]'
                ]"
                @click="item.id && handleNavClick(item.id)"
              >
                {{ item.label }}
              </button>
              <ChevronDown
                v-if="item.hasDropdown"
                :class="[
                  'w-4 h-4 transition-colors',
                  activeId === item.id ? 'text-[#006EFF]' : 'text-gray-400'
                ]"
              />
            </div>
            <div v-if="item.hasDropdown" class="pl-4 pb-4 flex flex-col gap-3">
              <a
                v-for="child in item.children"
                :key="child.label"
                :href="child.href"
                :target="child.href?.startsWith('http') ? '_blank' : undefined"
                :rel="child.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="text-left text-[14px] text-[#4B5563] hover:text-[#006EFF] cursor-pointer"
                @click.prevent="handleChildClick(child)"
              >
                {{ child.label }}
              </a>
            </div>
          </div>
          <div class="pt-6">
            <Button
              @click="handleMobileOrderClick"
              class="w-full bg-[#FF6B00] hover:bg-[#E56000] h-12 rounded-full font-bold text-lg text-white border-none cursor-pointer"
            >
              立即下单
            </Button>
          </div>
        </div>
      </div>
    </Transition>

    <OrderModal v-model="isOrderModalOpen" />
  </header>
</template>

<script setup lang="ts">
/**
 * 全局导航头部组件
 * 
 * @component TheHeader
 * @description
 * 提供网站主导航功能，包括：
 * - 桌面端和移动端自适应导航菜单
 * - 多级下拉菜单支持（鼠标悬停/点击展开）
 * - 订单模态框快速触发
 * - 响应式设计，移动端采用全屏侧滑菜单
 * - 导航项激活状态高亮显示
 * - 支持内部导航和外部链接跳转
 * 
 * @example
 * ```vue
 * <TheHeader 
 *   :active-id="currentPageId" 
 *   @update:active-id="handleNavigation"
 * />
 * ```
 * 
 * @design-notes
 * - 移动端菜单采用全屏侧滑设计，从右侧滑入
 * - 支持键盘导航（Tab 键）
 * - 下拉菜单自动关闭当点击外部区域或鼠标移出
 * - 固定定位在页面顶部，z-index: 50
 * - 高度固定为 80px
 */
import { ref } from 'vue'
import { ChevronDown, Menu, X } from 'lucide-vue-next'
import Button from './ui/Button.vue'
import OrderModal from './OrderModal.vue'
import type { MenuItem } from '@/types'

/**
 * 品牌 Logo 路径
 * 
 * @constant brandLogo
 * @type {string}
 * @default '/logo.png'
 * 
 * @todo 替换为实际的品牌 Logo 文件
 * @see public/logo.png
 */
const brandLogo = '/logo.png'

/**
 * 组件属性定义
 * 
 * @interface Props
 */
interface Props {
  /** 
   * 当前激活的页面 ID
   * 用于高亮显示当前所在页面的导航项
   * 如果菜单项或其子项 ID 匹配此值，将显示激活样式
   */
  activeId: string
}

const props = defineProps<Props>()

/**
 * 组件事件定义
 */
const emit = defineEmits<{
  /**
   * 当用户点击导航项时触发
   * @param id - 被点击的导航项 ID
   */
  'update:activeId': [id: string]
}>()

/** 当前激活的下拉菜单 ID（桌面端悬停时） */
const activeDropdown = ref<string | null>(null)

/** 移动端菜单是否打开 */
const isMobileMenuOpen = ref(false)

/** 订单模态框是否打开 */
const isOrderModalOpen = ref(false)

const menuItems: MenuItem[] = [
  { label: '首页', href: '#', id: 'home', hasDropdown: false },
  {
    label: '汽车托运',
    id: 'transport',
    hasDropdown: true,
    children: [
      { label: '小板车托运', href: '#', id: 'small-carrier' },
      { label: '大板车托运', href: '#', id: 'big-carrier' },
      { label: '汽车救援', href: '#', id: 'rescue' },
      { label: '代驾', href: '#', id: 'driver' },
      { label: '价格查询', href: '#', id: 'pricing' },
      { label: '用户指南', href: '#', id: 'guide' },
      { label: '常见问题', href: '#', id: 'faq' },
    ]
  },
  {
    label: '解决方案',
    id: 'solutions',
    hasDropdown: true,
    children: [
      { label: '汽车供应链', href: '#', id: 'supply-chain' },
      { label: '商业活动物流', href: '#', id: 'commercial' },
      { label: '个人旅游托运', href: '#', id: 'personal' },
      { label: '网络安全防护', href: '#', id: 'cybersecurity' },
    ]
  },
  { label: '清障车销售', id: 'truck-sales', href: '#', hasDropdown: false },
  {
    label: '生态合作',
    id: 'partners',
    hasDropdown: true,
    children: [
      { label: '城市合伙人招募', href: '#', id: 'partner-recruit' },
      { label: '司机入驻', href: '#', id: 'driver-join' },
      { label: '企业/救援公司登陆', href: 'https://rescue.ctcapp.com/rescue-app/#/entrance', id: 'b2b-login' },
    ]
  },
  { label: '信息资讯', id: 'news', href: '#', hasDropdown: false },
  {
    label: '关于我们',
    id: 'about',
    hasDropdown: true,
    children: [
      { label: '司机之家', href: '#', id: 'driver-home' },
      { label: '联系我们', href: '#', id: 'contact' },
      { label: '人才招聘', href: '#', id: 'careers' },
    ]
  },
  {
    label: 'APP下载',
    id: 'download',
    href: '#',
    hasDropdown: true,
    children: [
      { label: '下载中心', href: '#', id: 'download' },
      { label: '客户端下载', href: '#', id: 'download-client' },
      { label: '司机端下载', href: '#', id: 'download-driver' },
    ]
  },
]

/**
 * 检查菜单项是否为激活状态
 * 
 * @param item - 要检查的菜单项
 * @returns 如果菜单项或其子项处于激活状态返回 true
 * 
 * @description
 * 判断逻辑：
 * 1. 菜单项本身的 id 与 activeId 匹配
 * 2. 或者菜单项的任何子菜单项的 id 与 activeId 匹配
 * 
 * @example
 * ```typescript
 * // activeId = 'small-carrier'
 * isActive({ id: 'transport', children: [{ id: 'small-carrier' }] })
 * // => true (因为子项匹配)
 * 
 * isActive({ id: 'home' })
 * // => false (id 不匹配)
 * ```
 */
const isActive = (item: MenuItem) => {
  return props.activeId === item.id || (item.children?.some(child => child.id === props.activeId))
}

/**
 * 处理主导航项点击事件
 * 
 * @param id - 被点击的导航项 ID
 * 
 * @description
 * 执行以下操作：
 * 1. 触发 update:activeId 事件，通知父组件更新激活状态
 * 2. 关闭当前打开的下拉菜单（桌面端）
 * 3. 关闭移动端菜单抽屉
 * 
 * @example
 * ```typescript
 * // 用户点击"首页"导航项
 * handleNavClick('home')
 * // => 触发事件，关闭菜单，页面跳转到首页
 * ```
 */
const handleNavClick = (id: string) => {
  emit('update:activeId', id)
  activeDropdown.value = null
  isMobileMenuOpen.value = false
}

/**
 * 处理子菜单项点击事件
 * 
 * @param child - 被点击的子菜单项对象
 * @param child.href - 外部链接地址（可选）
 * @param child.id - 内部页面 ID（可选）
 * 
 * @description
 * 根据子菜单项的类型执行不同操作：
 * 1. **外部链接**：如果 href 以 http/https 开头，在新标签页打开链接
 *    - 使用 window.open 打开新窗口
 *    - 设置 noopener 和 noreferrer 安全属性
 *    - 关闭下拉菜单和移动端菜单
 * 2. **内部导航**：如果存在 id，调用 handleNavClick 进行内部导航
 * 
 * @example
 * ```typescript
 * // 外部链接 - B2B 登录
 * handleChildClick({ 
 *   href: 'https://rescue.ctcapp.com/rescue-app/#/entrance',
 *   label: '企业/救援公司登陆' 
 * })
 * // => 在新标签页打开外部链接
 * 
 * // 内部导航
 * handleChildClick({ id: 'small-carrier', label: '小板车托运' })
 * // => 触发内部导航，跳转到小板车页面
 * ```
 */
const handleChildClick = (child: { href?: string; id?: string }) => {
  // 如果是外部链接，打开新窗口
  if (child.href?.startsWith('http')) {
    window.open(child.href, '_blank', 'noopener,noreferrer')
    activeDropdown.value = null
    isMobileMenuOpen.value = false
    return
  }
  // 否则处理内部导航
  if (child.id) handleNavClick(child.id)
}

/**
 * 处理移动端订单按钮点击事件
 * 
 * @description
 * 在移动端菜单中点击"立即下单"按钮时：
 * 1. 打开订单模态框
 * 2. 关闭移动端菜单抽屉，提供更好的用户体验
 * 
 * @example
 * ```typescript
 * // 用户在移动端菜单中点击"立即下单"
 * handleMobileOrderClick()
 * // => 打开订单模态框，关闭移动端菜单
 * ```
 */
const handleMobileOrderClick = () => {
  isOrderModalOpen.value = true
  isMobileMenuOpen.value = false
}
</script>
