# Personal Travel & Solutions 页面迁移总结

## 迁移概述

本次迁移将 Personal Travel（个人出行）和 Solutions（解决方案）页面从 React/Next.js 迁移到 Nuxt/Vue 3。

## 迁移的文件清单

### Personal Travel（个人出行）

#### 页面文件
- ✅ `src/app/personal-travel/page.tsx` → `pages/personal-travel/index.vue`

#### 组件文件
- ✅ `src/app/components/travel-hero.tsx` → `components/travel/TravelHero.vue`
- ✅ `src/app/components/travel-features.tsx` → `components/travel/TravelFeatures.vue`

### Solutions（解决方案聚合页）

#### 页面文件
- ✅ `src/app/components/solutions-page.tsx` → `pages/solutions/index.vue`

#### 组件文件
- ✅ `src/app/components/solutions-hero.tsx` → `components/solutions/SolutionsHero.vue`
- ✅ `src/app/components/solutions-zigzag.tsx` → `components/solutions/SolutionsZigzag.vue`
- ✅ `src/app/components/solutions-faq.tsx` → `components/solutions/SolutionsFaq.vue`

#### 依赖组件（新创建）
- ✅ `components/solutions/SecurityMoat.vue` - 平台级网络安全防护方案
- ✅ `components/solutions/LuxuryLeadGen.vue` - 定制托运方案表单
- ✅ `components/solutions/FinalCTABox.vue` - 最终行动号召框

### Transport 综合页面组件

- ✅ `src/app/components/transport-hero.tsx` → `components/transport/TransportHero.vue`
- ✅ `src/app/components/transport-nav.tsx` → `components/transport/TransportNav.vue`
- ✅ `src/app/components/transport-comparison.tsx` → `components/transport/TransportComparison.vue`

## 主要技术转换

### 1. React Hooks → Vue 3 Composition API

**React:**
```tsx
const [formData, setFormData] = useState({ name: "", phone: "" })
```

**Vue:**
```vue
const formData = ref({ name: "", phone: "" })
```

### 2. motion → v-motion

**React (motion/react):**
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
```

**Vue (v-motion):**
```vue
<div
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0 }"
  :transition="{ duration: 800 }"
>
```

### 3. lucide-react → lucide-vue-next

**React:**
```tsx
import { ChevronRight, ShieldCheck } from "lucide-react"
<ChevronRight className="w-4 h-4" />
```

**Vue:**
```vue
import { ChevronRight, ShieldCheck } from 'lucide-vue-next'
<ChevronRight class="w-4 h-4" />
```

### 4. 事件处理

**React:**
```tsx
<Button onClick={() => setActiveId('contact')} />
```

**Vue:**
```vue
<Button @click="handleSetActiveId('contact')" />
```

### 5. Props 和 Events

**React (回调函数):**
```tsx
interface Props {
  setActiveId?: (id: string) => void
}
<Component setActiveId={setActiveId} />
```

**Vue (事件发射):**
```vue
interface Props {
  // props定义
}
const emit = defineEmits<{
  ctaClick: []
}>()
<Component @cta-click="handleClick" />
```

### 6. 条件渲染和列表渲染

**React:**
```tsx
{features && features.map((f, idx) => <div key={idx}>{f}</div>)}
```

**Vue:**
```vue
<ul v-if="features">
  <li v-for="(feature, idx) in features" :key="idx">{{ feature }}</li>
</ul>
```

### 7. 图片资源

所有图片使用外部 URL（EXTERNAL_ASSETS），从 `@/src/app/images/index` 导入：
```vue
import { EXTERNAL_ASSETS } from '@/src/app/images/index'
<img :src="EXTERNAL_ASSETS.TRAVEL_HERO" />
```

### 8. Accordion 组件

使用原生 HTML `<details>` 元素替代 React Accordion 组件：
```vue
<details class="group">
  <summary>问题</summary>
  <div>答案</div>
</details>
```

## 组件结构

### Personal Travel 页面结构
```
pages/personal-travel/index.vue
├── TravelHero
├── TravelFeatures
├── SecurityMoat
├── 多场景支持 Section
└── LuxuryLeadGen
```

### Solutions 页面结构
```
pages/solutions/index.vue
├── SolutionsHero
├── SolutionZigZag (数字化供应链)
├── SolutionZigZag (商业活动与高端定制)
├── SolutionZigZag (个人旅游与异地托运)
├── SecurityMoat
├── SolutionsFAQ
└── FinalCTABox
```

## 样式保持

- ✅ 所有 Tailwind CSS 类名保持不变
- ✅ 颜色方案保持一致（#0B2747, #006EFF, #FF6B00 等）
- ✅ 响应式断点保持一致
- ✅ 字体设置保持一致（Noto_Sans_SC）

## 功能特性

### Personal Travel
- ✅ Hero 区域带面包屑导航
- ✅ 特性展示（4个核心特性）
- ✅ 多场景支持卡片
- ✅ 定制方案表单

### Solutions
- ✅ Hero 区域
- ✅ 三个解决方案的 ZigZag 布局
- ✅ 网络安全防护展示
- ✅ FAQ 常见问题
- ✅ 最终行动号召

### Transport
- ✅ Hero 区域
- ✅ 粘性导航栏
- ✅ 对比表格（大板车 vs 小板车 vs 代驾）

## 注意事项

1. **图片资源**: 所有图片使用外部 URL，确保网络连接正常
2. **事件处理**: 使用 Vue 的事件发射机制替代 React 的回调函数
3. **动画**: v-motion 的配置与 motion/react 略有不同，已做相应调整
4. **表单处理**: 使用 Vue 的 `v-model` 进行双向绑定
5. **组件导入**: 使用 `@/` 别名导入组件和资源

## 测试建议

1. 检查所有页面路由是否正常工作
2. 验证动画效果是否流畅
3. 测试表单提交功能
4. 检查响应式布局在不同设备上的表现
5. 验证图片加载和错误处理

## 后续工作

- [ ] 集成实际的表单提交 API
- [ ] 添加 toast 通知库（替代 alert）
- [ ] 优化图片加载性能
- [ ] 添加单元测试
- [ ] 性能优化和代码分割

---

**迁移完成日期**: 2026-02-04
**迁移状态**: ✅ 完成
