# 车拖车 Nuxt 3 项目

这是从 React/Next.js 迁移到 Vue/Nuxt 3 的车拖车智能汽车物流平台。

## 🚀 快速开始

### 1. 安装依赖

```bash
# 备份原React的package.json
mv package.json package-react-backup.json

# 使用Nuxt的package.json
mv package-nuxt.json package.json

# 安装依赖
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
npm run preview
```

## 📁 项目结构

```
project/
├── assets/                 # 静态资源
│   └── css/               # 样式文件
│       ├── theme.css      # 主题变量
│       ├── fonts.css      # 字体配置
│       ├── tailwind.css   # Tailwind配置
│       └── index.css      # 全局样式
├── components/            # Vue组件
│   ├── home/             # 首页组件
│   ├── big-carrier/      # 大板车业务组件
│   ├── small-carrier/    # 小板车业务组件
│   ├── valet/            # 代驾业务组件
│   ├── rescue/           # 救援业务组件
│   ├── ui/               # 基础UI组件
│   ├── TheHeader.vue     # 头部导航
│   ├── TheFooter.vue     # 页脚
│   ├── FloatingSidebar.vue  # 浮动侧边栏
│   ├── OrderModal.vue    # 订单模态框
│   └── ...
├── layouts/              # 布局组件
│   └── default.vue       # 默认布局
├── pages/                # 页面路由
│   ├── index.vue         # 首页
│   ├── big-carrier/      # 大板车页面
│   ├── small-carrier/    # 小板车页面
│   ├── valet/            # 代驾页面
│   ├── rescue/           # 救援页面
│   ├── pricing/          # 定价页面
│   └── ...
├── public/               # 静态文件
│   ├── favicon.ico       # 网站图标
│   └── logo.png          # Logo
├── utils/                # 工具函数
│   └── cn.ts             # 类名合并工具
├── app.vue               # 应用入口
├── nuxt.config.ts        # Nuxt配置
├── tailwind.config.ts    # Tailwind配置
└── tsconfig.json         # TypeScript配置
```

## 🎨 技术栈

- **框架**: Nuxt 3 (Vue 3)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **动画**: @vueuse/motion
- **图标**: lucide-vue-next
- **工具**: VueUse

## 📦 已迁移的页面

### ✅ 完成的页面 (100%)
- [x] 首页 (`/`)
- [x] 大板车页面 (`/big-carrier`)
- [x] 小板车页面 (`/small-carrier`)
- [x] 代驾页面 (`/valet`)
- [x] 救援页面 (`/rescue`)
- [x] 定价页面 (`/pricing`)
- [x] 供应链页面 (`/supply-chain`)
- [x] 豪华运输页面 (`/luxury-transport`)
- [x] 个人出行页面 (`/personal-travel`)
- [x] 解决方案页面 (`/solutions`)
- [x] 关于我们 (`/about`)
- [x] 新闻资讯 (`/news`)
- [x] 联系我们 (`/contact`)
- [x] 帮助中心 (`/guide`)
- [x] 招聘 (`/careers`)
- [x] 网络安全 (`/cybersecurity`)
- [x] 下载中心 (`/download`)
- [x] 司机端应用 (`/app/driver`)
- [x] 客户端应用 (`/app/client`)
- [x] 合作伙伴 (`/partners`)
- [x] 合伙人招募 (`/partner-recruit`)
- [x] 司机入驻 (`/driver`)
- [x] 司机之家 (`/driver/home`)
- [x] 卡车销售 (`/truck-sales`)

## 🔧 配置说明

### 品牌颜色

```css
--brand-blue: #006EFF    /* Tech Blue: Links, Active, Icons */
--brand-navy: #0B2747    /* Navy Blue: Headings, Footer BG */
--brand-orange: #FF6B00  /* Safety Orange: CTA, Alerts, Rescue */
```

### 字体

- 主字体: Noto Sans SC
- 备用字体: system-ui, sans-serif

## 📝 迁移说明

### React到Vue的主要转换

1. **组件语法**:
   - React: `function Component() {}` → Vue: `<script setup lang="ts">`
   - JSX → Vue Template

2. **状态管理**:
   - `useState` → `ref()`
   - `useEffect` → `onMounted()` / `watch()`
   - `useMemo` → `computed()`

3. **动画**:
   - `motion/react` → `v-motion` 指令

4. **图标**:
   - `lucide-react` → `lucide-vue-next`

5. **Props & Events**:
   - Props: `defineProps<>()`
   - Emits: `defineEmits<>()`

### 图片资源

所有图片使用外部Unsplash URL，无需本地资源。

## ✅ 功能状态

### 已测试通过
- ✅ **导航栏交互**: 所有链接和按钮正常工作
- ✅ **路由跳转**: 页面间导航流畅
- ✅ **弹窗功能**: OrderModal完美运行
- ✅ **页面样式**: Tailwind CSS完全加载
- ✅ **响应式设计**: 移动端和桌面端都正常

### 可选优化
1. ⚠️ Logo和favicon文件是占位符，建议替换为实际文件
2. ⚠️ 外部图片资源（Unsplash）在生产环境可考虑本地化

## 📚 文档

- `MIGRATION_GUIDE.md` - Figma提供的迁移指南
- `LAYOUT_MIGRATION.md` - 布局组件迁移文档
- `MIGRATION_STATUS.md` - 迁移进度追踪
- `FIXES_APPLIED.md` - 已应用的修复
- `BIG_CARRIER_MIGRATION_SUMMARY.md` - 大板车组件迁移总结
- `MIGRATION_SUMMARY_SMALL_CARRIER_VALET.md` - 小板车和代驾迁移总结
- `RESCUE_PRICING_MIGRATION_SUMMARY.md` - 救援和定价迁移总结

## 🤝 贡献

本项目由 AI Agents 协作完成迁移工作。

## 📄 许可

© 2026 车拖车物流科技. All rights reserved.

---

**最后更新**: 2026-02-04
**迁移进度**: 100% ✅ (所有页面和组件已完成)
**项目状态**: 生产就绪

查看完整迁移报告: [FINAL_MIGRATION_REPORT.md](./FINAL_MIGRATION_REPORT.md)
