# "Tags with side effect" 错误修复报告

## 问题描述

在编译Vue组件时出现以下错误：

```
Tags with side effect (<script> and <style>) are ignored in client component templates.
```

这个错误出现在4个页面文件中，导致这些页面无法正常编译和访问。

## 问题原因

在Vue 3和Nuxt 3中，不允许在`<template>`标签内使用`<script>`或`<style>`标签，即使这些标签被包裹在`<Head>`组件中也不行。

这4个文件在`<template>`中错误地使用了Schema.org JSON-LD结构化数据标记：

```vue
<template>
  <article>
    <Head>
      <script type="application/ld+json">
        {{ schemaMarkup }}
      </script>
    </Head>
    <!-- ... -->
  </article>
</template>
```

## 受影响的文件

1. `pages/download/client.vue`
2. `pages/download/driver.vue`
3. `pages/app/client/index.vue`
4. `pages/app/driver/index.vue`

## 解决方案

### 1. 从`<template>`中移除`<Head>`和`<script>`标签

删除了所有文件中`<template>`部分的以下代码：

```vue
<!-- Schema Markup -->
<Head>
  <script type="application/ld+json">
    {{ schemaMarkup }}
  </script>
</Head>
```

### 2. 在`useHead`中正确添加Schema标记

在每个文件的`<script setup>`部分的`useHead`配置中添加`script`数组：

```typescript
useHead({
  title: '...',
  meta: [...],
  script: [
    {
      type: 'application/ld+json',
      children: schemaMarkup
    }
  ]
})
```

这是在Nuxt 3中添加JSON-LD结构化数据的正确方法。

## 修复结果

### 编译状态

✅ 所有4个页面文件现在都能成功编译
✅ 不再出现"Tags with side effect"错误
✅ HMR（热模块替换）正常工作

### 页面测试

| 页面路径 | 状态 | 说明 |
|---------|------|------|
| `/app/client` | ✅ 200 OK | 客户端APP页面正常 |
| `/download/driver` | ✅ 200 OK | 司机端下载页面正常 |
| `/app/driver` | ✅ 200 OK | 司机端APP页面正常 |
| `/download/client` | ✅ 200 OK | 客户端下载页面正常 |
| `/` | ✅ 200 OK | 首页正常 |

### Schema.org 标记验证

Schema.org结构化数据仍然正确地添加到页面`<head>`中，搜索引擎可以正常识别。

## 技术说明

### Vue 3 / Nuxt 3 中处理`<script>`标签的最佳实践

1. **不要**在`<template>`中使用`<script>`标签
2. **使用** `useHead` composable 添加脚本到页面头部
3. **对于JSON-LD**：使用`script`数组，设置`type`和`children`属性

### 示例代码

```vue
<template>
  <div>
    <!-- 页面内容 -->
  </div>
</template>

<script setup lang="ts">
const schemaMarkup = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  // ... 其他属性
})

useHead({
  title: '页面标题',
  script: [
    {
      type: 'application/ld+json',
      children: schemaMarkup
    }
  ]
})
</script>
```

## 其他注意事项

服务器日志中还有一些Vue警告（如"Failed to resolve component: SectionTitle"），这些是独立的问题，与本次修复无关。

---

**修复时间**: 2026-02-05  
**状态**: ✅ 已完成
**影响范围**: 4个页面文件
**测试结果**: 所有页面正常工作
