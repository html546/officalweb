# 页面迁移总结 - About, Contact, Guide, Careers, Cybersecurity

## 📋 迁移概览

本次迁移将以下5个React/TypeScript页面迁移到Nuxt/Vue 3：

1. ✅ **pages/about/index.vue** - About（关于我们）页面
2. ✅ **pages/contact/index.vue** - Contact（联系我们）页面
3. ✅ **pages/guide/index.vue** - Guide（帮助中心）页面
4. ✅ **pages/careers/index.vue** - Careers（招聘）页面
5. ✅ **pages/cybersecurity/index.vue** - Cybersecurity（网络安全）页面

## ✅ 已完成迁移的页面

### 1. About 页面 (`pages/about/index.vue`)

**来源**: `src/app/components/about-page.tsx`

**主要功能**:
- Hero区域：公司愿景介绍
- 公司身份与使命：核心数据展示（100,000台车辆、450,000名司机、2,800,000位用户）
- 产业布局：制造基地地图可视化
- 战略合作伙伴展示
- 四大核心硬实力
- 发展历程时间线
- 资质与荣誉（Masonry布局）
- 合作伙伴展示

**迁移要点**:
- ✅ 使用 `v-motion` 实现滚动动画
- ✅ 使用 `lucide-vue-next` 图标库
- ✅ 图片使用外部URL（Unsplash）
- ✅ Masonry布局使用CSS Grid实现
- ✅ 响应式设计保持完整

### 2. Contact 页面 (`pages/contact/index.vue`)

**来源**: `src/app/components/contact-page.tsx`

**主要功能**:
- Hero区域：联系承诺
- 多维度业务触达：电话、邮箱联系方式
- 智能咨询表单（Vue原生表单处理）
- 总部办公中心地图展示
- 社交媒体二维码（微信公众号、抖音）

**迁移要点**:
- ✅ 表单使用Vue原生 `v-model` 双向绑定
- ✅ 表单提交状态管理使用 `ref()`
- ✅ Schema.org结构化数据（JSON-LD）
- ✅ 表单验证使用HTML5原生验证
- ✅ 图片hover效果保持

### 3. Guide 页面 (`pages/guide/index.vue`)

**来源**: `src/app/components/guide-page.tsx`

**主要功能**:
- Hero区域：用户指南介绍
- 三大托运避坑指南
- 5阶段流程时间线（SOP）
- 标准化验车流程展示
- FAQ手风琴组件
- CTA区域

**迁移要点**:
- ✅ 使用自定义Accordion组件
- ✅ Timeline步骤使用v-for循环渲染
- ✅ Schema.org HowTo和FAQPage结构化数据
- ✅ 平滑滚动到锚点功能
- ✅ 图片使用外部URL

### 4. Careers 页面 (`pages/careers/index.vue`)

**来源**: `src/app/components/careers-page.tsx`

**主要功能**:
- Hero区域：招聘愿景 + 职位搜索
- 员工价值主张（EVP）：3个核心优势
- 校招专项：‘智运生’计划
- 热招岗位列表（Tabs分类）
- 招聘FAQ
- Footer导航

**迁移要点**:
- ✅ 使用Tabs组件实现职位分类
- ✅ 职位搜索功能使用 `computed` 实现过滤
- ✅ JobPosting Schema.org结构化数据
- ✅ 表单使用Vue原生处理
- ✅ 响应式布局保持完整

### 5. Cybersecurity 页面 (`pages/cybersecurity/index.vue`)

**来源**: `src/app/components/cybersecurity-page.tsx`

**主要功能**:
- Hero区域：等保三级认证展示
- 全链路技术架构安全（3大支柱）
- 核心防御数据指标可视化
- 隐私合规展示
- CTA区域

**迁移要点**:
- ✅ 深色主题设计保持
- ✅ 动画效果使用 `v-motion`
- ✅ 图标使用 `lucide-vue-next`
- ✅ 响应式设计保持

## 🔄 主要转换内容

### 1. React Hooks → Vue 3 Composition API

| React 特性 | Vue 3 等价 | 状态 |
|-----------|-----------|------|
| `useState` | `ref()` | ✅ |
| `useEffect` | `onMounted()` / `watch()` | ✅ |
| `useMemo` | `computed()` | ✅ |
| `useCallback` | 普通函数（Vue自动优化） | ✅ |

**示例**:
```tsx
// React
const [formData, setFormData] = useState({ name: '', phone: '' })
```

```vue
<!-- Vue 3 -->
<script setup>
const formData = ref({ name: '', phone: '' })
</script>
```

### 2. 动画库转换

| React | Vue 3 |
|-------|-------|
| `motion/react` | `@vueuse/motion` (v-motion directive) |

**示例**:
```tsx
// React
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

```vue
<!-- Vue 3 -->
<div
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :visible="{ opacity: 1, y: 0 }"
  :visibleOnce="true"
>
  Content
</div>
```

### 3. 图标库转换

| React | Vue 3 |
|-------|-------|
| `lucide-react` | `lucide-vue-next` |

**示例**:
```tsx
// React
import { ShieldCheck, Users } from "lucide-react"
<ShieldCheck className="w-5 h-5" />
```

```vue
<!-- Vue 3 -->
<script setup>
import { ShieldCheck, Users } from 'lucide-vue-next'
</script>
<template>
  <ShieldCheck class="w-5 h-5" />
</template>
```

### 4. 表单处理

| React | Vue 3 |
|-------|-------|
| React Hook Form / useState | Vue原生 `v-model` |

**示例**:
```tsx
// React
const [name, setName] = useState('')
<input value={name} onChange={(e) => setName(e.target.value)} />
```

```vue
<!-- Vue 3 -->
<script setup>
const name = ref('')
</script>
<template>
  <input v-model="name" />
</template>
```

### 5. 图片资源

| React | Vue 3 |
|-------|-------|
| `figma:asset` | 外部URL（Unsplash） |
| `ImageWithFallback` (React) | `ImageWithFallback.vue` |

**示例**:
```tsx
// React
import heroBg from "figma:asset/04156ed50e5aa9e3fd9e4e78953522afc0c2ef76.png"
<ImageWithFallback src={heroBg} alt="Hero" />
```

```vue
<!-- Vue 3 -->
<template>
  <ImageWithFallback
    src="https://images.unsplash.com/photo-..."
    alt="Hero"
  />
</template>
```

### 6. 组件转换

| React | Vue 3 |
|-------|-------|
| `className` | `class` |
| `onClick` | `@click` |
| `onMouseEnter` | `@mouseenter` |
| `dangerouslySetInnerHTML` | `v-html` |

## 🆕 新增UI组件

### Accordion组件

创建了完整的Accordion组件系统：
- `components/ui/Accordion.vue` - 主容器
- `components/ui/AccordionItem.vue` - 单项容器
- `components/ui/AccordionTrigger.vue` - 触发器
- `components/ui/AccordionContent.vue` - 内容区域

**特性**:
- ✅ 支持单选和复选模式
- ✅ 支持可折叠
- ✅ 平滑动画过渡
- ✅ 响应式设计

## 📁 文件结构

```
pages/
├── about/
│   └── index.vue          # About页面
├── contact/
│   └── index.vue           # Contact页面
├── guide/
│   └── index.vue           # Guide页面
├── careers/
│   └── index.vue           # Careers页面
└── cybersecurity/
    └── index.vue           # Cybersecurity页面

components/ui/
├── Accordion.vue           # Accordion主组件
├── AccordionItem.vue       # Accordion项
├── AccordionTrigger.vue    # Accordion触发器
└── AccordionContent.vue    # Accordion内容
```

## 🎨 设计保持

所有页面的设计、样式和交互效果都已完整迁移：
- ✅ 颜色方案（#0B2747, #FF6B00, #006EFF）
- ✅ 字体大小和间距
- ✅ 响应式断点
- ✅ Hover效果
- ✅ 动画过渡
- ✅ 阴影和边框样式

## 🔍 SEO优化

所有页面都包含：
- ✅ Schema.org结构化数据（JSON-LD）
- ✅ 语义化HTML标签
- ✅ 适当的标题层级（h1, h2, h3）
- ✅ Alt文本和描述

## 📝 注意事项

1. **路由导航**: 所有页面使用 `useRouter()` 进行导航，需要确保Nuxt路由配置正确
2. **图片资源**: 当前使用Unsplash占位图，生产环境需要替换为实际图片URL
3. **表单提交**: Contact页面的表单提交目前是模拟实现，需要连接实际API
4. **搜索功能**: Careers页面的搜索功能已实现，但可能需要后端API支持
5. **动画性能**: 大量使用 `v-motion` 动画，确保性能优化

## ✅ 测试建议

1. 逐个页面测试渲染和布局
2. 测试响应式设计（移动端/桌面端）
3. 测试动画效果
4. 测试表单交互（Contact页面）
5. 测试Tabs切换（Careers页面）
6. 测试Accordion展开/折叠（Guide和Careers页面）
7. 测试路由导航
8. 测试图片加载和错误处理

## 🎯 下一步

1. 替换占位图片为实际图片URL
2. 连接Contact表单到实际API
3. 连接Careers职位数据到实际API
4. 添加单元测试
5. 性能优化（图片懒加载、代码分割等）

---

**迁移完成日期**: 2026-02-04
**迁移页面数量**: 5个
**新增组件数量**: 4个（Accordion相关）
**代码行数**: 约3000+行
