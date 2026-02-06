# 首页组件迁移清单

本文档列出了从 React 迁移到 Vue 3 的首页组件清单。

## 组件列表

### 1. HomeHero.vue ✅
- **源文件**: `src/app/components/home-hero.tsx`
- **目标文件**: `components/home/HomeHero.vue`
- **状态**: 已完成
- **功能**: 首页 Hero 区域，包含主标题、CTA 按钮、信任条和微信小程序二维码弹窗
- **依赖**: 
  - `lucide-vue-next` (图标)
  - Dialog 组件 (需要迁移或创建)
  - v-motion (动画)

### 2. HomeServiceSmall.vue ✅
- **源文件**: `src/app/components/home-service-small.tsx`
- **目标文件**: `components/home/HomeServiceSmall.vue`
- **状态**: 已完成
- **功能**: 小板车服务介绍区域
- **依赖**: 
  - `lucide-vue-next`
  - Dialog 组件
  - 图片映射 (`@/app/images`)

### 3. HomeServiceBig.vue ✅
- **源文件**: `src/app/components/home-service-big.tsx`
- **目标文件**: `components/home/HomeServiceBig.vue`
- **状态**: 已完成
- **功能**: 大板车服务介绍区域
- **依赖**: 
  - `lucide-vue-next`
  - 图片映射 (`@/app/images`)

### 4. HomeServiceValet.vue ✅
- **源文件**: `src/app/components/home-service-valet.tsx`
- **目标文件**: `components/home/HomeServiceValet.vue`
- **状态**: 已完成
- **功能**: 代驾服务介绍区域
- **依赖**: 
  - `lucide-vue-next`
  - 图片映射 (`@/app/images`)

### 5. HomeServiceRescue.vue ✅
- **源文件**: `src/app/components/home-service-rescue.tsx`
- **目标文件**: `components/home/HomeServiceRescue.vue`
- **状态**: 已完成
- **功能**: 道路救援服务介绍区域
- **依赖**: 
  - `lucide-vue-next`
  - Dialog 组件
  - 图片映射 (`@/app/images`)

### 6. HomeTrust.vue ✅
- **源文件**: `src/app/components/home-trust.tsx`
- **目标文件**: `components/home/HomeTrust.vue`
- **状态**: 已完成
- **功能**: 信任与技术展示区域
- **依赖**: 
  - `lucide-vue-next`

### 7. HomeEcosystem.vue ✅
- **源文件**: `src/app/components/home-ecosystem.tsx`
- **目标文件**: `components/home/HomeEcosystem.vue`
- **状态**: 已完成
- **功能**: 生态系统与制造业务展示
- **依赖**: 
  - `lucide-vue-next`
  - 图片映射 (`@/app/images`)

### 8. HomeFaqBrief.vue ✅
- **源文件**: `src/app/components/home-faq-brief.tsx`
- **目标文件**: `components/home/HomeFaqBrief.vue`
- **状态**: 已完成
- **功能**: 服务简报 FAQ 区域
- **依赖**: 无外部依赖

### 9. NewsSection.vue ✅
- **源文件**: `src/app/components/news-section.tsx`
- **目标文件**: `components/home/NewsSection.vue`
- **状态**: 已完成
- **功能**: 新闻资讯展示区域
- **依赖**: 
  - `lucide-vue-next`

### 10. pages/index.vue ✅
- **源文件**: `src/app/page.tsx`
- **目标文件**: `pages/index.vue`
- **状态**: 已完成
- **功能**: 首页主页面，组合所有 home 组件
- **依赖**: 所有上述组件

## 迁移要点

### 技术转换

1. **状态管理**
   - `useState` → `ref()`
   - `useEffect` → `onMounted()` / `watch()`

2. **动画**
   - `motion` (React) → `v-motion` (Vue)
   - 保持相同的动画效果

3. **图标**
   - `lucide-react` → `lucide-vue-next`
   - 图标名称保持一致

4. **组件结构**
   - React 函数组件 → Vue 3 SFC with `<script setup>`
   - Props 使用 `defineProps<Props>()`
   - 事件处理使用 `@click` 等指令

5. **图片处理**
   - 使用 Agent B 提供的图片映射 (`@/app/images`)
   - 图片错误处理使用 `@error` 事件

### 待完成事项

1. **UI 组件库**
   - Dialog 组件需要迁移或创建
   - Button 组件需要迁移或创建（当前使用原生 button）
   - 其他 Shadcn UI 组件

2. **图片映射**
   - 确认 Agent B 已完成图片映射
   - 验证图片导入路径正确性

3. **路由处理**
   - `setActiveId` 函数需要与路由系统集成
   - 可能需要使用 Vue Router 的 `useRouter()`

4. **动画库**
   - 确认 `v-motion` 或 `@vueuse/motion` 已安装
   - 验证动画效果正常工作

5. **样式**
   - 确保 Tailwind CSS 配置正确
   - 验证所有 Tailwind 类名正常工作

## 使用说明

### 导入组件

```vue
<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue'
// ... 其他组件
</script>
```

### Props 传递

```vue
<template>
  <HomeHero :open-order-modal="handleOpenModal" />
  <HomeServiceBig :set-active-id="handleSetActiveId" />
</template>
```

### 路由集成

如果需要在组件中使用路由：

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNavigation = (id: string) => {
  // 路由逻辑
  router.push(`/path/${id}`)
}
</script>
```

## 注意事项

1. **图片路径**: 当前使用占位符路径，需要 Agent B 完成图片映射后更新
2. **Dialog 组件**: 需要创建或迁移 Dialog 相关组件
3. **类型安全**: 所有组件使用 TypeScript，确保类型定义正确
4. **响应式**: 所有组件保持响应式布局，使用 Tailwind 响应式类
5. **H1 标题**: 确保 HomeHero 中的 H1 标题为 "智能汽车物流生态平台"

## 测试建议

1. 逐个组件测试渲染
2. 测试响应式布局（移动端/桌面端）
3. 测试动画效果
4. 测试图片加载和错误处理
5. 测试模态框交互
6. 测试路由导航功能
