/**
 * 项目公共类型定义
 * 
 * @file types/index.ts
 * @description
 * 集中管理项目中使用的所有公共类型定义，包括：
 * - UI 组件类型（Button、Toast 等）
 * - 业务数据类型（Job、NewsItem、MenuItem 等）
 * - 工具类型和辅助类型
 * 
 * @example
 * ```typescript
 * import type { ButtonVariant, Job, NewsItem } from '@/types'
 * 
 * const variant: ButtonVariant = 'default'
 * const job: Job = { id: '1', title: '...', ... }
 * ```
 */

// ============================================================================
// Button 相关类型
// ============================================================================

/**
 * 按钮样式变体类型
 * 
 * @type ButtonVariant
 * @description
 * 定义按钮组件的视觉样式变体，用于不同场景和操作类型。
 * 
 * **样式说明**：
 * - `default`: 蓝色实心按钮（bg-primary），用于主要操作（提交、确认等）
 * - `destructive`: 红色实心按钮（bg-destructive），用于危险操作（删除、警告等）
 * - `outline`: 边框按钮，透明背景，用于次要操作（取消、返回等）
 * - `secondary`: 灰色实心按钮（bg-secondary），用于辅助操作
 * - `ghost`: 透明按钮，hover 时显示背景，用于不重要的操作（更多、设置等）
 * - `link`: 链接样式按钮，带下划线，用于导航类操作
 * 
 * @example
 * ```typescript
 * import type { ButtonVariant } from '@/types'
 * 
 * const primaryButton: ButtonVariant = 'default'
 * const dangerButton: ButtonVariant = 'destructive'
 * const cancelButton: ButtonVariant = 'outline'
 * ```
 * 
 * @see components/ui/Button.vue
 */
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

/**
 * 按钮尺寸类型
 * 
 * @type ButtonSize
 * @description
 * 定义按钮组件的尺寸规格，用于适配不同的使用场景和布局需求。
 * 
 * **尺寸规格**：
 * - `default`: 高度 36px（h-9），水平内边距 16px（px-4），用于常规场景
 * - `sm`: 高度 32px（h-8），水平内边距 12px（px-3），用于表格、卡片等紧凑场景
 * - `lg`: 高度 40px（h-10），水平内边距 24px（px-6），用于 Hero 区域、重要操作
 * - `icon`: 正方形按钮，尺寸 36x36px（size-9），仅用于图标按钮
 * 
 * @example
 * ```typescript
 * import type { ButtonSize } from '@/types'
 * 
 * const normalSize: ButtonSize = 'default'
 * const compactSize: ButtonSize = 'sm'
 * const heroSize: ButtonSize = 'lg'
 * const iconSize: ButtonSize = 'icon'
 * ```
 * 
 * @see components/ui/Button.vue
 */
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

// ============================================================================
// Toast 相关类型
// ============================================================================

/**
 * Toast 通知类型
 * 
 * @type ToastType
 * @description
 * 定义 Toast 通知的消息类型，用于区分不同级别的提示信息。
 * 
 * **类型说明**：
 * - `success`: 成功提示，用于操作成功、提交成功等场景（通常显示绿色）
 * - `error`: 错误提示，用于操作失败、验证错误等场景（通常显示红色）
 * - `info`: 信息提示，用于一般性信息展示、提示说明等场景（通常显示蓝色）
 * 
 * @example
 * ```typescript
 * import type { ToastType } from '@/types'
 * import { useToast } from '@/composables/useToast'
 * 
 * const toast = useToast()
 * toast.success('操作成功！')
 * toast.error('操作失败，请重试')
 * toast.info('这是一条提示信息')
 * ```
 * 
 * @see composables/useToast.ts
 */
export type ToastType = 'success' | 'error' | 'info'

// ============================================================================
// MenuItem 相关类型
// ============================================================================

/**
 * 菜单子项类型
 * 
 * @interface MenuItemChild
 * @description
 * 表示导航菜单中的子菜单项，用于构建多级导航结构。
 * 
 * @property {string} label - 子菜单项显示文本
 * @property {string} [href] - 子菜单项链接地址（可选）
 *   - 如果以 `http://` 或 `https://` 开头，将在新标签页打开
 *   - 否则作为内部路由处理
 * @property {string} [id] - 子菜单项唯一标识符（可选）
 *   - 用于路由导航和激活状态判断
 * 
 * @example
 * ```typescript
 * import type { MenuItemChild } from '@/types'
 * 
 * const child: MenuItemChild = {
 *   label: '小板车托运',
 *   href: '#',
 *   id: 'small-carrier'
 * }
 * ```
 * 
 * @see components/TheHeader.vue
 */
export interface MenuItemChild {
  /** 子菜单项显示文本 */
  label: string
  
  /** 
   * 子菜单项链接地址（可选）
   * 如果以 http/https 开头，将在新标签页打开
   */
  href?: string
  
  /** 
   * 子菜单项唯一标识符（可选）
   * 用于路由导航和激活状态判断
   */
  id?: string
}

/**
 * 菜单项类型
 * 
 * @interface MenuItem
 * @description
 * 表示导航菜单中的一个菜单项，支持单级和二级菜单结构。
 * 用于构建网站主导航菜单，支持下拉子菜单和外部链接跳转。
 * 
 * @property {string} label - 菜单项显示文本
 * @property {string} [href] - 菜单项链接地址（可选）
 *   - 如果提供，点击时将跳转到该地址
 * @property {string} [id] - 菜单项唯一标识符（可选）
 *   - 用于路由导航和激活状态判断
 * @property {boolean} hasDropdown - 是否包含下拉子菜单
 *   - `true` 时显示下拉箭头，支持展开子菜单
 *   - `false` 时为单级菜单项
 * @property {MenuItemChild[]} [children] - 子菜单项列表（可选）
 *   - 当 `hasDropdown` 为 `true` 时使用
 *   - 支持多级嵌套结构
 * 
 * @example
 * ```typescript
 * import type { MenuItem } from '@/types'
 * 
 * const menuItem: MenuItem = {
 *   label: '汽车托运',
 *   id: 'transport',
 *   hasDropdown: true,
 *   children: [
 *     { label: '小板车托运', href: '#', id: 'small-carrier' },
 *     { label: '大板车托运', href: '#', id: 'big-carrier' },
 *     { label: '汽车救援', href: '#', id: 'rescue' }
 *   ]
 * }
 * 
 * const simpleItem: MenuItem = {
 *   label: '首页',
 *   href: '#',
 *   id: 'home',
 *   hasDropdown: false
 * }
 * ```
 * 
 * @see components/TheHeader.vue
 */
export interface MenuItem {
  /** 菜单项显示文本 */
  label: string
  
  /** 
   * 菜单项链接地址（可选）
   * 如果提供，点击时将跳转到该地址
   */
  href?: string
  
  /** 
   * 菜单项唯一标识符（可选）
   * 用于路由导航和激活状态判断
   */
  id?: string
  
  /** 
   * 是否包含下拉子菜单
   * true 时显示下拉箭头，支持展开子菜单
   */
  hasDropdown: boolean
  
  /** 
   * 子菜单项列表（可选）
   * 当 hasDropdown 为 true 时使用
   */
  children?: MenuItemChild[]
}

// ============================================================================
// Job 相关类型
// ============================================================================

/**
 * 职位类型
 * 
 * @interface Job
 * @description
 * 表示招聘信息中的职位数据，用于人才招聘页面展示和管理。
 * 
 * @property {string} id - 职位唯一标识符
 *   - 格式：`JOB-YYYY-XXX`（如：`JOB-2024-001`）
 * @property {string} title - 职位标题
 *   - 如：`高级 Java 开发工程师`、`资深产品经理`
 * @property {string} category - 职位分类
 *   - 可选值：`tech`（技术与算法）、`product`（产品经理）、`ops`（运营类）、
 *     `service`（客户服务类）、`sales`（销售类）
 * @property {string} dept - 所属部门
 *   - 如：`技术部`、`产品部`、`运营部`、`客户部`
 * @property {string} type - 招聘类型
 *   - 如：`社招`、`校招`、`实习`
 * @property {string} location - 工作地点
 *   - 支持多个地点，用 `/` 分隔（如：`临沂/北京`）
 * @property {string} desc - 职位描述
 *   - 简要描述职位职责和要求
 * @property {string} date - 发布时间
 *   - 相对时间描述（如：`1天前发布`、`3天前发布`）
 * @property {string} salary - 薪资范围
 *   - 格式：`XXk-XXk`（如：`20k-40k`）
 * 
 * @example
 * ```typescript
 * import type { Job } from '@/types'
 * 
 * const job: Job = {
 *   id: 'JOB-2024-001',
 *   title: '高级 Java 开发工程师',
 *   category: 'tech',
 *   dept: '技术部',
 *   type: '社招',
 *   location: '临沂/北京',
 *   desc: '负责车拖车核心调度系统的架构设计与性能优化，确保金融级高可用性。',
 *   date: '1天前发布',
 *   salary: '20k-40k'
 * }
 * ```
 * 
 * @see pages/careers/index.vue
 */
export interface Job {
  /** 职位唯一标识符 */
  id: string
  
  /** 职位标题 */
  title: string
  
  /** 职位分类 */
  category: string
  
  /** 所属部门 */
  dept: string
  
  /** 招聘类型 */
  type: string
  
  /** 工作地点 */
  location: string
  
  /** 职位描述 */
  desc: string
  
  /** 发布时间 */
  date: string
  
  /** 薪资范围 */
  salary: string
}

// ============================================================================
// NewsItem 相关类型
// ============================================================================

/**
 * 新闻项类型
 * 
 * @interface NewsItem
 * @description
 * 表示新闻资讯列表中的单条新闻数据，用于新闻页面和首页新闻模块展示。
 * 
 * @property {number} id - 新闻唯一标识符
 *   - 通常为数字 ID，由后端 API 提供
 * @property {string} title - 新闻标题
 *   - 新闻的完整标题文本
 * @property {string} summary - 新闻摘要
 *   - 新闻的简要描述，用于列表展示
 *   - 如果 API 返回 `desc` 或 `summary`，会优先使用
 * @property {string} createTime - 创建时间
 *   - 格式：`YYYY-MM-DD`（如：`2026-05-12`）
 *   - 如果 API 未提供，会使用当前日期
 * @property {string} author - 作者
 *   - 新闻发布者或作者名称
 *   - 如果 API 未提供，默认为 `官方发布`
 * @property {string} imgUrl - 封面图片 URL
 *   - 新闻的封面图片地址
 *   - 如果 API 未提供，会使用默认图片
 * 
 * @example
 * ```typescript
 * import type { NewsItem } from '@/types'
 * 
 * const newsItem: NewsItem = {
 *   id: 1,
 *   title: '车拖车数字化算法实验室：如何通过 AI 调度提升 15% 的汽车运输周转率？',
 *   summary: '在非标物流领域，空驶率一直是制约效率的瓶颈...',
 *   createTime: '2026-05-12',
 *   author: '车拖车研究院',
 *   imgUrl: 'https://images.unsplash.com/photo-1720382248625-dc19de24834c?auto=format&fit=crop&q=80&w=800'
 * }
 * ```
 * 
 * @see components/news/NewsFeedContainer.vue
 * @see pages/news/index.vue
 */
export interface NewsItem {
  /** 新闻唯一标识符 */
  id: number
  
  /** 新闻标题 */
  title: string
  
  /** 新闻摘要 */
  summary: string
  
  /** 创建时间（格式：YYYY-MM-DD） */
  createTime: string
  
  /** 作者 */
  author: string
  
  /** 封面图片 URL */
  imgUrl: string
}

/**
 * 新闻项 API 响应类型
 * 
 * @interface NewsItemAPI
 * @description
 * 表示从后端 API 返回的新闻数据格式，可能与前端使用的 `NewsItem` 格式不同。
 * 用于 API 响应数据的类型定义和字段映射。
 * 
 * @property {number} id - 新闻唯一标识符
 * @property {string} title - 新闻标题
 * @property {string} [desc] - 新闻描述（可选，可能作为摘要使用）
 * @property {string} [summary] - 新闻摘要（可选）
 * @property {string} [imgUrl] - 图片 URL（可选）
 * @property {string} [cover] - 封面图片 URL（可选，可能作为 imgUrl 使用）
 * @property {string} createTime - 创建时间
 * @property {string} [author] - 作者（可选）
 * 
 * @example
 * ```typescript
 * import type { NewsItemAPI } from '@/types'
 * 
 * // API 响应数据
 * const apiResponse: NewsItemAPI = {
 *   id: 1,
 *   title: '新闻标题',
 *   desc: '新闻描述',
 *   cover: 'https://example.com/image.jpg',
 *   createTime: '2026-05-12',
 *   author: '作者名称'
 * }
 * 
 * // 映射为前端使用的 NewsItem
 * const newsItem: NewsItem = {
 *   id: apiResponse.id,
 *   title: apiResponse.title,
 *   summary: apiResponse.desc || apiResponse.summary || '暂无简介',
 *   createTime: apiResponse.createTime,
 *   author: apiResponse.author || '官方发布',
 *   imgUrl: apiResponse.imgUrl || apiResponse.cover || DEFAULT_IMAGE_URL
 * }
 * ```
 * 
 * @see components/news/NewsFeedContainer.vue
 */
export interface NewsItemAPI {
  /** 新闻唯一标识符 */
  id: number
  
  /** 新闻标题 */
  title: string
  
  /** 新闻描述（可选） */
  desc?: string
  
  /** 新闻摘要（可选） */
  summary?: string
  
  /** 图片 URL（可选） */
  imgUrl?: string
  
  /** 封面图片 URL（可选） */
  cover?: string
  
  /** 创建时间 */
  createTime: string
  
  /** 作者（可选） */
  author?: string
}

// ============================================================================
// 通用组件相关类型
// ============================================================================

/**
 * 主题颜色类型
 * 
 * @type ThemeColor
 * @description
 * 定义应用中通用的主题配色方案，用于按钮、卡片、区块等组件的配色。
 * 
 * **颜色说明**：
 * - `blue`: 蓝色主题（#006EFF），用于代驾、企业服务等
 * - `orange`: 橙色主题（#FF6B00），用于小板车、救援等
 * - `green`: 绿色主题（#10B981），用于环保、成功状态等
 * 
 * @example
 * ```typescript
 * import type { ThemeColor } from '@/types'
 * 
 * const theme: ThemeColor = 'blue'
 * const orangeTheme: ThemeColor = 'orange'
 * ```
 */
export type ThemeColor = 'blue' | 'orange' | 'green'

/**
 * 优势项类型
 * 
 * @interface AdvantageItem
 * @description
 * 表示服务优势展示区块中的单个优势项数据。
 * 用于构建各业务模块的核心优势、特色功能展示。
 * 
 * @property {Component} icon - 图标组件
 *   - 通常使用 lucide-vue-next 图标库中的图标
 *   - 如：`Zap`、`ShieldCheck`、`MapPin` 等
 * @property {string} title - 优势标题
 *   - 简短有力的标题文本（建议 4-12 字）
 * @property {string} description - 优势描述
 *   - 详细说明该优势的具体内容和价值
 *   - 支持纯文本或 HTML 格式（取决于组件配置）
 * 
 * @example
 * ```typescript
 * import type { AdvantageItem } from '@/types'
 * import { Zap, ShieldCheck } from 'lucide-vue-next'
 * 
 * const advantages: AdvantageItem[] = [
 *   {
 *     icon: Zap,
 *     title: '极速响应 15分钟上门',
 *     description: '依托AI智能LBS调度系统，精准匹配距您最近的优质运力。'
 *   },
 *   {
 *     icon: ShieldCheck,
 *     title: '零中转，零车损',
 *     description: '专车专送，全程无需装卸车辆。杜绝大板车集运中的多次搬运风险。'
 *   }
 * ]
 * ```
 * 
 * @see components/common/AdvantagesSection.vue
 */
export interface AdvantageItem {
  /** 图标组件（来自 lucide-vue-next） */
  icon: any
  
  /** 优势标题 */
  title: string
  
  /** 优势描述（支持纯文本或 HTML） */
  description: string
}

/**
 * 案例项类型（类型A：服务场景案例）
 * 
 * @interface CaseItemTypeA
 * @description
 * 表示服务案例展示中的单个案例数据（适用于服务场景展示）。
 * 包含徽章、图标、图片、描述和数据指标等信息。
 * 
 * @property {string} badge - 案例徽章文本（如："最后10公里接驳"）
 * @property {string} title - 案例标题
 * @property {Component} icon - 案例图标组件
 * @property {string} image - 案例配图 URL
 * @property {string} desc - 案例详细描述
 * @property {string} data1 - 数据指标1（如："接驳里程: 25km"）
 * @property {string} data2 - 数据指标2（如："车型: 奔驰 S400"）
 * 
 * @example
 * ```typescript
 * import type { CaseItemTypeA } from '@/types'
 * import { Truck } from 'lucide-vue-next'
 * 
 * const caseItem: CaseItemTypeA = {
 *   badge: '最后10公里接驳',
 *   title: '解决大板车进城难题',
 *   icon: Truck,
 *   image: '/images/case1.jpg',
 *   desc: '张先生的大板车订单抵达北京郊区...',
 *   data1: '接驳里程: 25km',
 *   data2: '车型: 奔驰 S400'
 * }
 * ```
 * 
 * @see components/common/CasesSection.vue
 */
export interface CaseItemTypeA {
  /** 案例徽章文本 */
  badge: string
  
  /** 案例标题 */
  title: string
  
  /** 案例图标组件 */
  icon: any
  
  /** 案例配图 URL */
  image: string
  
  /** 案例详细描述 */
  desc: string
  
  /** 数据指标1 */
  data1: string
  
  /** 数据指标2 */
  data2: string
}

/**
 * 案例项类型（类型B：路线案例）
 * 
 * @interface CaseItemTypeB
 * @description
 * 表示运输案例展示中的单个案例数据（适用于路线展示）。
 * 包含标签、起点、终点、标题、描述和页脚信息。
 * 
 * @property {string} tag - 案例分类标签（如："家庭长途搬迁"）
 * @property {string} image - 案例配图 URL
 * @property {string} from - 起点城市
 * @property {string} to - 终点城市
 * @property {string} title - 案例标题
 * @property {string} desc - 案例详细描述
 * @property {string} footer - 页脚信息（如："车型: 丰田汉兰达 | 里程: 3400km"）
 * 
 * @example
 * ```typescript
 * import type { CaseItemTypeB } from '@/types'
 * 
 * const caseItem: CaseItemTypeB = {
 *   tag: '家庭长途搬迁',
 *   image: '/images/case1.jpg',
 *   from: '哈尔滨',
 *   to: '三亚',
 *   title: '一家三口避寒过冬，车辆提前发运',
 *   desc: '张先生一家计划去海南过冬...',
 *   footer: '车型: 丰田汉兰达 | 里程: 3400km'
 * }
 * ```
 * 
 * @see components/common/CasesSection.vue
 */
export interface CaseItemTypeB {
  /** 案例分类标签 */
  tag: string
  
  /** 案例配图 URL */
  image: string
  
  /** 起点城市 */
  from: string
  
  /** 终点城市 */
  to: string
  
  /** 案例标题 */
  title: string
  
  /** 案例详细描述 */
  desc: string
  
  /** 页脚信息 */
  footer: string
}

/**
 * 案例项联合类型
 */
export type CaseItem = CaseItemTypeA | CaseItemTypeB

/**
 * 用户评价项类型
 * 
 * @interface ReviewItem
 * @description
 * 表示用户评价展示中的单条评价数据，用于展示真实用户反馈。
 * 
 * @property {string} user - 用户姓名（如："周女士"、"赵先生"）
 * @property {string} location - 用户所在地（如："北京"、"上海"）
 * @property {string} role - 用户角色/身份（如："私家车主"、"商务人士"）
 * @property {string} scenario - 使用场景描述（如："大板车进城接驳"）
 * @property {string} avatar - 用户头像图片 URL
 * @property {string} content - 评价内容文本
 * @property {string[]} tags - 评价标签列表（如：["#验车专业", "#省时省力"]）
 * @property {string} [route] - 运输路线（可选，如："上海→南京"）
 * @property {string} [car] - 车型信息（可选，如："奔驰 S400"）
 * 
 * @example
 * ```typescript
 * import type { ReviewItem } from '@/types'
 * 
 * const review: ReviewItem = {
 *   user: '周女士',
 *   location: '北京',
 *   role: '私家车主',
 *   scenario: '大板车进城接驳',
 *   avatar: '/images/avatar1.jpg',
 *   content: '以前运车最怕去五环外的物流园取车...',
 *   tags: ['#验车专业', '#省时省力']
 * }
 * ```
 * 
 * @see components/common/ReviewsSection.vue
 */
export interface ReviewItem {
  /** 用户姓名 */
  user: string
  
  /** 用户所在地 */
  location: string
  
  /** 用户角色/身份 */
  role: string
  
  /** 使用场景描述 */
  scenario: string
  
  /** 用户头像图片 URL */
  avatar: string
  
  /** 评价内容文本 */
  content: string
  
  /** 评价标签列表 */
  tags: string[]
  
  /** 运输路线（可选） */
  route?: string
  
  /** 车型信息（可选） */
  car?: string
}
