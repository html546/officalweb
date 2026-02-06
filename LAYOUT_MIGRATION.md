# Layout组件迁移文档

本文档记录了从React到Nuxt3的Layout组件迁移过程和说明。

## 迁移概览

本次迁移将以下React组件转换为Vue 3组件：

1. ✅ `src/app/components/header.tsx` → `components/TheHeader.vue`
2. ✅ `src/app/components/footer.tsx` → `components/TheFooter.vue`
3. ✅ `src/app/layout.tsx` → `layouts/default.vue`
4. ✅ `src/app/components/floating-sidebar.tsx` → `components/FloatingSidebar.vue`

## 组件说明

### 1. TheHeader.vue

**位置**: `components/TheHeader.vue`

**功能**:
- 顶部固定导航栏（高度80px）
- 响应式设计（移动端/桌面端）
- 下拉菜单导航
- 移动端抽屉式菜单
- 订单模态框触发

**Props**:
```typescript
interface Props {
  activeId: string  // 当前激活的导航项ID
}
```

**Emits**:
```typescript
{
  'update:activeId': [id: string]  // 导航项点击事件
}
```

**依赖**:
- `lucide-vue-next` - 图标库
- `components/ui/Button.vue` - 按钮组件
- `components/OrderModal.vue` - 订单模态框

**注意事项**:
- Logo图片路径需要替换为实际资源路径（当前使用占位符 `/logo.png`）
- 导航逻辑使用 `update:activeId` 事件，父组件需要处理路由跳转
- 移动端菜单使用Vue Transition实现动画效果

### 2. TheFooter.vue

**位置**: `components/TheFooter.vue`

**功能**:
- 网站页脚信息展示
- 联系信息（电话、邮箱、地址）
- 服务链接导航
- 社交媒体二维码（微信、抖音）
- 版权信息

**Props**:
```typescript
interface Props {
  setActiveId?: (id: string) => void  // 导航处理函数（可选）
}
```

**依赖**:
- `lucide-vue-next` - 图标库

**注意事项**:
- Logo图片路径需要替换为实际资源路径
- 二维码图片使用占位符URL，需要替换为实际图片
- 导航点击会触发 `setActiveId` 回调并滚动到顶部

### 3. layouts/default.vue

**位置**: `layouts/default.vue`

**功能**:
- Nuxt3默认布局组件
- 包含Header、Main、Footer结构
- 管理全局导航状态

**状态管理**:
- 使用 `ref` 管理 `activeId` 状态
- 通过事件处理函数更新状态

**注意事项**:
- 这是Nuxt3的布局文件，会自动应用到所有页面
- 如果需要不同的布局，可以创建其他布局文件（如 `layouts/custom.vue`）
- 当前实现使用本地状态管理，后续可以集成Nuxt的composables或状态管理库

### 4. FloatingSidebar.vue

**位置**: `components/FloatingSidebar.vue`

**功能**:
- 右侧浮动操作栏
- 救援热线按钮（带悬停提示）
- 在线客服按钮（带二维码弹窗）
- 返回顶部按钮（滚动时显示）

**Props**:
```typescript
interface Props {
  onOpenOrderModal: () => void  // 打开订单模态框的回调
}
```

**依赖**:
- `lucide-vue-next` - 图标库

**功能特性**:
- 使用 `onMounted` 和 `onUnmounted` 管理滚动事件监听
- 使用Vue Transition实现悬停提示和返回顶部按钮的动画
- 二维码图片错误处理

**注意事项**:
- 二维码图片URL需要替换为实际图片
- 返回顶部按钮在滚动超过一个屏幕高度时显示

## 基础UI组件

为了支持主要组件，创建了以下基础UI组件（位于 `components/ui/`）：

### Button.vue
- 基础按钮组件
- 支持Tailwind类名合并

### Dialog.vue
- 模态框组件
- 使用Teleport渲染到body
- 支持点击遮罩关闭

### DialogContent.vue, DialogHeader.vue, DialogTitle.vue, DialogDescription.vue
- Dialog的子组件
- 用于构建订单模态框

### Tabs.vue, TabsList.vue, TabsTrigger.vue, TabsContent.vue
- 标签页组件
- 使用provide/inject实现状态共享

### Input.vue, Label.vue
- 表单输入组件
- 用于订单表单

## 工具函数

### utils/cn.ts
- Tailwind类名合并工具
- 使用 `clsx` 和 `tailwind-merge`

## 迁移要点

### 1. 状态管理转换
- `useState` → `ref()`
- `useEffect` → `onMounted` / `onUnmounted` / `watch`

### 2. 动画转换
- `motion.div` → Vue `Transition` 组件
- `AnimatePresence` → Vue `Transition` 组件

### 3. 图标转换
- `lucide-react` → `lucide-vue-next`
- 图标名称保持一致

### 4. 事件处理
- React事件（`onClick`, `onMouseEnter`）→ Vue事件（`@click`, `@mouseenter`）
- 事件修饰符（`.prevent`, `.self`）

### 5. 条件渲染
- `{condition && <Component />}` → `<Component v-if="condition" />`
- `{condition ? <A /> : <B />}` → `<Component v-if="condition">A</Component><Component v-else>B</Component>`

### 6. 列表渲染
- `{items.map(...)}` → `<Component v-for="..." />`

### 7. 类名绑定
- `className={...}` → `:class="..."` 或 `class="..."`
- 动态类名使用数组或对象语法

## 待完成事项

### 1. 资源路径
- [ ] 替换Logo图片路径为实际资源
- [ ] 替换二维码图片URL为实际图片
- [ ] 配置Nuxt3的静态资源处理

### 2. 路由集成
- [ ] 集成Nuxt Router实现真正的页面跳转
- [ ] 处理锚点导航（`#home`, `#pricing`等）
- [ ] 实现SPA导航体验

### 3. 状态管理
- [ ] 考虑使用Pinia或Nuxt的useState进行全局状态管理
- [ ] 实现导航状态的持久化（如刷新后保持当前页面）

### 4. 依赖安装
确保安装以下依赖：
```bash
npm install lucide-vue-next clsx tailwind-merge
```

### 5. 样式配置
- [ ] 确保Tailwind CSS v4正确配置
- [ ] 验证字体配置（Noto Sans SC）
- [ ] 检查颜色主题变量

### 6. 测试
- [ ] 测试响应式设计（移动端/桌面端）
- [ ] 测试下拉菜单交互
- [ ] 测试移动端菜单
- [ ] 测试模态框功能
- [ ] 测试滚动和返回顶部功能

## 使用示例

### 在页面中使用布局

```vue
<template>
  <div>
    <!-- 页面内容 -->
    <!-- 布局会自动应用，因为使用了 layouts/default.vue -->
  </div>
</template>

<script setup lang="ts">
// 页面逻辑
</script>
```

### 使用FloatingSidebar

```vue
<template>
  <div>
    <!-- 页面内容 -->
    <FloatingSidebar :on-open-order-modal="handleOpenOrderModal" />
  </div>
</template>

<script setup lang="ts">
import FloatingSidebar from '@/components/FloatingSidebar.vue'

const handleOpenOrderModal = () => {
  // 打开订单模态框的逻辑
}
</script>
```

## 已知问题

1. **Logo路径**: 当前使用占位符路径，需要替换为实际资源
2. **二维码图片**: 使用占位符URL，需要替换为实际图片
3. **路由跳转**: 当前使用事件传递，需要集成Nuxt Router
4. **ImageWithFallback组件**: 原React组件未找到，FloatingSidebar中使用简单的img标签替代

## 后续优化建议

1. **性能优化**:
   - 考虑使用 `v-memo` 优化列表渲染
   - 图片懒加载（使用Nuxt Image组件）

2. **可访问性**:
   - 添加ARIA标签
   - 键盘导航支持
   - 焦点管理

3. **SEO优化**:
   - 添加meta标签
   - 结构化数据

4. **类型安全**:
   - 完善TypeScript类型定义
   - 使用Vue的defineProps和defineEmits的类型推断

## 迁移检查清单

- [x] TheHeader组件迁移完成
- [x] TheFooter组件迁移完成
- [x] default布局迁移完成
- [x] FloatingSidebar组件迁移完成
- [x] 基础UI组件创建完成
- [x] 工具函数创建完成
- [ ] 资源路径配置
- [ ] 路由集成
- [ ] 依赖安装验证
- [ ] 功能测试
- [ ] 响应式测试

---

**迁移完成日期**: 2026-02-04
**迁移人员**: Agent C - Layout组件迁移专家
