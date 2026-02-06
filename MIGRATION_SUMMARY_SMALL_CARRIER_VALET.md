# Small Carrier 和 Valet 组件迁移总结

## 📋 迁移概览

本次迁移将 Small Carrier（小板车）和 Valet（代驾）相关的所有 React/TSX 组件迁移到 Nuxt/Vue 3。

**迁移日期**: 2026-02-04  
**迁移状态**: ✅ 已完成

---

## 📁 文件结构

### Small Carrier 组件

#### 页面组件
- ✅ `pages/small-carrier/index.vue` ← `src/app/components/small-carrier-page.tsx`

#### 子组件
- ✅ `components/small-carrier/SmallCarrierHero.vue` ← `src/app/components/small-carrier-hero.tsx`
- ✅ `components/small-carrier/SmallCarrierIntro.vue` ← `src/app/components/small-carrier-intro.tsx`
- ✅ `components/small-carrier/SmallCarrierSection.vue` ← `src/app/components/small-carrier-section.tsx`

### Valet 组件

#### 页面组件
- ✅ `pages/valet/index.vue` ← `src/app/components/valet-page.tsx`

#### 子组件
- ✅ `components/valet/ValetHero.vue` ← `src/app/components/valet-hero.tsx`
- ✅ `components/valet/ValetIntro.vue` ← `src/app/components/valet-intro.tsx`
- ✅ `components/valet/ValetProcess.vue` ← `src/app/components/valet-process.tsx`
- ✅ `components/valet/ValetAdvantages.vue` ← `src/app/components/valet-advantages.tsx`
- ✅ `components/valet/ValetPricing.vue` ← `src/app/components/valet-pricing.tsx`
- ✅ `components/valet/ValetCases.vue` ← `src/app/components/valet-cases.tsx`
- ✅ `components/valet/ValetReviews.vue` ← `src/app/components/valet-reviews.tsx`
- ✅ `components/valet/ValetFaq.vue` ← `src/app/components/valet-faq.tsx`

---

## 🔄 技术转换映射

### 1. 状态管理
| React | Vue 3 |
|-------|-------|
| `useState()` | `ref()` |
| `useEffect()` | `onMounted()` / `onUnmounted()` / `watch()` |

**示例**:
```tsx
// React
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);
```

```vue
// Vue 3
const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
```

### 2. 动画库
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
  :enter="{ opacity: 1, y: 0 }"
  :viewport="{ once: true }"
>
  Content
</div>
```

### 3. 图标库
| React | Vue 3 |
|-------|-------|
| `lucide-react` | `lucide-vue-next` |

**示例**:
```tsx
// React
import { ShieldCheck, Users } from "lucide-react";
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

### 4. 图片资源
| React | Vue 3 |
|-------|-------|
| `figma:asset/...` | `EXTERNAL_ASSETS` from `@/src/app/images` |
| `ImageWithFallback` (React) | `ImageWithFallback.vue` |

**示例**:
```tsx
// React
import heroBg from "figma:asset/04156ed50e5aa9e3fd9e4e78953522afc0c2ef76.png";
<ImageWithFallback src={heroBg} alt="Hero" />
```

```vue
<!-- Vue 3 -->
<script setup>
import { EXTERNAL_ASSETS } from '@/src/app/images'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
const heroBg = EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX
</script>
<template>
  <ImageWithFallback :src="heroBg" alt="Hero" />
</template>
```

### 5. Dialog/Modal 组件
| React | Vue 3 |
|-------|-------|
| `Dialog`, `DialogContent`, etc. (Radix UI) | `Dialog.vue`, `DialogContent.vue`, etc. |

**示例**:
```tsx
// React
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

```vue
<!-- Vue 3 -->
<Dialog :model-value="isOpen" @update:model-value="isOpen = $event">
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

---

## 🎨 样式保持

所有 Tailwind CSS 类名保持不变，确保视觉效果一致：
- ✅ 颜色系统：`#0B2747`, `#FF6B00`, `#006EFF` 等品牌色
- ✅ 间距和布局：`py-24`, `px-4`, `max-w-[1200px]` 等
- ✅ 响应式设计：`md:`, `lg:` 断点
- ✅ 字体：`font-['Noto_Sans_SC']` 保持不变

---

## 📝 组件特性

### Small Carrier 组件

#### SmallCarrierHero.vue
- ✅ Hero 背景图片（使用 `EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX`）
- ✅ 面包屑导航
- ✅ CTA 按钮（立即下单、价格查询）
- ✅ 信任指标（保险、司机数量）
- ✅ 微信小程序二维码弹窗（桌面端）

#### SmallCarrierIntro.vue
- ✅ 问题与解决方案对比布局
- ✅ 动画效果（v-motion）

#### SmallCarrierSection.vue
- ✅ 图片展示区域
- ✅ 浮动徽章（极速响应）
- ✅ 关键卖点（零等待、零中转）
- ✅ 平台技术亮点
- ✅ 预约按钮

### Valet 组件

#### ValetHero.vue
- ✅ Hero 背景图片（使用 `EXTERNAL_ASSETS.VALET_HANDOVER`）
- ✅ 自定义方向盘图标（使用 Vue `h()` 函数）
- ✅ 信任指标（第一检测人、GPS监控、点火即走）
- ✅ 微信小程序二维码弹窗

#### ValetIntro.vue
- ✅ 行业痛点与平台解决方案对比

#### ValetProcess.vue
- ✅ 5步流程展示
- ✅ 步骤图标和编号
- ✅ 高亮步骤（验车取车）
- ✅ 底部信任提示

#### ValetAdvantages.vue
- ✅ 6个核心优势卡片
- ✅ 悬停效果（边框颜色、阴影）
- ✅ 图标颜色变化动画

#### ValetPricing.vue
- ✅ 价格标准卡片
- ✅ 对比表格（车拖车 vs 普通代驾）
- ✅ 在线计算运费按钮
- ✅ 微信小程序二维码弹窗

#### ValetCases.vue
- ✅ 3个真实场景案例
- ✅ 图片展示和悬停效果
- ✅ 数据标签（里程、车型等）

#### ValetReviews.vue
- ✅ 3个用户评价卡片
- ✅ 用户头像（使用 `EXTERNAL_ASSETS`）
- ✅ 评分展示（5星）
- ✅ 标签系统

#### ValetFaq.vue
- ✅ 常见问题手风琴组件
- ✅ 帮助中心侧边栏
- ✅ 联系客服按钮

---

## ⚠️ 注意事项

### 1. 依赖组件
以下组件需要单独迁移（当前已注释）：
- `PriceCalculator` - 价格计算器
- `FeatureMatrix` - 功能矩阵
- `ServiceProcess` - 服务流程
- `CaseStudies` - 案例研究
- `Testimonials` - 用户评价
- `FAQSection` - FAQ 部分
- `AISemanticBlock` - AI 语义块
- `ValetSemanticBlock` - Valet 语义块

### 2. 图片资源
- ✅ 所有 `figma:asset` 引用已替换为 `EXTERNAL_ASSETS` 中的 Unsplash URL
- ✅ 图片映射关系：
  - Small Carrier Hero → `EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX`
  - Small Carrier Section → `EXTERNAL_ASSETS.TRUCK_ENCLOSED_BOX`
  - Valet Hero → `EXTERNAL_ASSETS.VALET_HANDOVER`
  - Valet Cases → `EXTERNAL_ASSETS.VALET_HANDOVER` + Unsplash URL
  - Valet Reviews → `EXTERNAL_ASSETS.AVATAR_*` 系列

### 3. 事件处理
- ✅ `onClick` → `@click`
- ✅ `setActiveId` 函数通过 props 传递
- ✅ 移动端检测逻辑保持不变

### 4. Props 传递
- ✅ 使用 `defineProps<Props>()` 定义 props
- ✅ 可选 props 使用 `?` 标记
- ✅ 事件通过函数调用传递

---

## ✅ 验证清单

- [x] 所有组件文件已创建
- [x] 所有导入路径正确
- [x] 图片资源映射完成
- [x] 动画效果迁移完成
- [x] 响应式设计保持
- [x] 无 linter 错误
- [x] 组件结构符合 Vue 3 Composition API 规范

---

## 🚀 下一步

1. **测试组件**：在 Nuxt 应用中测试所有组件功能
2. **迁移依赖组件**：完成 PriceCalculator、FeatureMatrix 等组件的迁移
3. **路由集成**：确保页面路由正确配置
4. **性能优化**：检查图片加载和动画性能
5. **SEO 优化**：添加 meta 标签和语义化 HTML

---

## 📚 参考文档

- [Vue 3 Composition API](https://vuejs.org/api/composition-api-setup.html)
- [@vueuse/motion](https://motion.vueuse.org/)
- [lucide-vue-next](https://lucide.dev/guide/packages/lucide-vue-next)
- [Nuxt 3 文档](https://nuxt.com/docs)

---

**迁移完成时间**: 2026-02-04  
**迁移文件总数**: 13 个组件文件
