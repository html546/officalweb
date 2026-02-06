# 完整路由映射表

**更新时间**: 2026-02-04  
**状态**: ✅ 全部配置完成

---

## 📍 导航ID到路由的完整映射

| 导航ID | 路由路径 | 页面文件 | 状态 |
|--------|---------|---------|------|
| `home` | `/` | `pages/index.vue` | ✅ |
| `transport` | `/transport` | `pages/transport/index.vue` | ✅ 新建 |
| `big-carrier` | `/big-carrier` | `pages/big-carrier/index.vue` | ✅ |
| `small-carrier` | `/small-carrier` | `pages/small-carrier/index.vue` | ✅ |
| `rescue` | `/rescue` | `pages/rescue/index.vue` | ✅ |
| `driver` | `/valet` | `pages/valet/index.vue` | ✅ |
| `pricing` | `/pricing` | `pages/pricing/index.vue` | ✅ |
| `guide` | `/guide` | `pages/guide/index.vue` | ✅ |
| `supply-chain` | `/supply-chain` | `pages/supply-chain/index.vue` | ✅ |
| `commercial` | `/luxury-transport` | `pages/luxury-transport/index.vue` | ✅ |
| `personal` | `/personal-travel` | `pages/personal-travel/index.vue` | ✅ |
| `cybersecurity` | `/cybersecurity` | `pages/cybersecurity/index.vue` | ✅ |
| `truck-sales` | `/truck-sales` | `pages/truck-sales/index.vue` | ✅ |
| `partner-recruit` | `/partner-recruit` | `pages/partner-recruit/index.vue` | ✅ |
| `driver-join` | `/driver` | `pages/driver/index.vue` | ✅ |
| `driver-home` | `/driver/home` | `pages/driver/home.vue` | ✅ |
| `partners` | `/partners` | `pages/partners/index.vue` | ✅ |
| `news` | `/news` | `pages/news/index.vue` | ✅ |
| `about` | `/about` | `pages/about/index.vue` | ✅ |
| `contact` | `/contact` | `pages/contact/index.vue` | ✅ |
| `careers` | `/careers` | `pages/careers/index.vue` | ✅ |
| `download` | `/download` | `pages/download/index.vue` | ✅ 新建 |
| `download-client` | `/app/client` | `pages/app/client/index.vue` | ✅ |
| `download-driver` | `/app/driver` | `pages/app/driver/index.vue` | ✅ |
| `solutions` | `/solutions` | `pages/solutions/index.vue` | ✅ |

---

## 🗂️ 按分类整理的路由

### 首页
- `/` - 首页

### 汽车托运分类
- `/transport` - 汽车托运总览（父级）
  - `/small-carrier` - 小板车托运
  - `/big-carrier` - 大板车托运
  - `/rescue` - 汽车救援
  - `/valet` - 代驾服务
  - `/pricing` - 价格查询
  - `/guide` - 用户指南

### 解决方案分类
- `/solutions` - 解决方案总览（父级）
  - `/supply-chain` - 汽车供应链
  - `/luxury-transport` - 商业活动物流
  - `/personal-travel` - 个人旅游托运
  - `/cybersecurity` - 网络安全防护

### 生态合作分类
- `/partners` - 生态合作总览（父级）
  - `/partner-recruit` - 城市合伙人招募
  - `/driver` - 司机入驻

### 关于我们分类
- `/about` - 关于我们（父级）
  - `/driver/home` - 司机之家
  - `/contact` - 联系我们
  - `/careers` - 人才招聘

### APP下载分类
- `/download` - 下载中心（父级）
  - `/app/client` - 客户端下载
  - `/app/driver` - 司机端下载

### 其他一级页面
- `/truck-sales` - 清障车销售
- `/news` - 信息资讯

---

## 🔍 特殊路由说明

### 外部链接
- **企业/救援公司登陆**: `https://rescue.ctcapp.com/rescue-app/#/entrance`
  - 在 TheHeader.vue 中特殊处理
  - 使用 `target="_blank"` 新窗口打开

### 路由别名
- `driver` (ID) → `/valet` (路径) - 代驾服务
- `driver-join` (ID) → `/driver` (路径) - 司机入驻
- `commercial` (ID) → `/luxury-transport` (路径) - 商业活动物流
- `personal` (ID) → `/personal-travel` (路径) - 个人旅游托运

---

## 📊 统计数据

- **总页面数**: 24个
- **新建页面**: 2个（transport, download）
- **父级页面**: 5个（带下拉菜单）
- **子页面**: 17个
- **一级独立页面**: 2个（truck-sales, news）

---

## 🎯 路由映射代码

### layouts/default.vue

```typescript
// 路由到ID的映射
const routeToId: Record<string, string> = {
  '/': 'home',
  '/transport': 'transport',
  '/big-carrier': 'big-carrier',
  '/small-carrier': 'small-carrier',
  '/rescue': 'rescue',
  '/valet': 'driver',
  '/pricing': 'pricing',
  '/guide': 'guide',
  '/supply-chain': 'supply-chain',
  '/luxury-transport': 'commercial',
  '/personal-travel': 'personal',
  '/cybersecurity': 'cybersecurity',
  '/truck-sales': 'truck-sales',
  '/partner-recruit': 'partner-recruit',
  '/driver': 'driver-join',
  '/partners': 'partners',
  '/news': 'news',
  '/about': 'about',
  '/contact': 'contact',
  '/careers': 'careers',
  '/download': 'download',
  '/solutions': 'solutions',
  '/app/client': 'download-client',
  '/app/driver': 'download-driver',
  '/driver/home': 'driver-home',
}

// ID到路由的映射
const idToRoute: Record<string, string> = {
  'home': '/',
  'transport': '/transport',
  'big-carrier': '/big-carrier',
  'small-carrier': '/small-carrier',
  'rescue': '/rescue',
  'driver': '/valet',
  'pricing': '/pricing',
  'guide': '/guide',
  'supply-chain': '/supply-chain',
  'commercial': '/luxury-transport',
  'personal': '/personal-travel',
  'cybersecurity': '/cybersecurity',
  'truck-sales': '/truck-sales',
  'partner-recruit': '/partner-recruit',
  'driver-join': '/driver',
  'partners': '/partners',
  'news': '/news',
  'about': '/about',
  'contact': '/contact',
  'careers': '/careers',
  'download': '/download',
  'download-client': '/app/client',
  'download-driver': '/app/driver',
  'driver-home': '/driver/home',
  'solutions': '/solutions',
}
```

---

## ✅ 验证清单

- [x] 所有父级菜单都有对应页面
- [x] 所有子菜单都有对应页面
- [x] 路由映射双向完整（ID↔路由）
- [x] 特殊路由别名已配置
- [x] 外部链接特殊处理
- [x] 新建页面已创建并配置

---

**配置完成**: 2026-02-04  
**下一步**: 在浏览器中测试所有导航链接
