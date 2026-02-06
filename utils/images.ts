/**
 * @file 车拖车平台 核心资产库 (Core Assets Library)
 * 集中管理所有外部图片链接，实现资产组件化管理。
 * 
 * 注意：原 Figma 资产已替换为外部 URL，因为 figma:asset 协议在 Nuxt 中不可用
 */

// 1. 品牌资产 (Brand Assets)
// 使用占位符Logo，建议替换为实际Logo文件（放在 public/ 目录）
export const BRAND_LOGO = '/logo.png';

// 2. 首页与通用 Hero (Home & General Hero)
export const HERO_HOME = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000';

// 3. 核心业务分类 (Core Service Categories)
// 使用高质量卡车运输相关图片
export const SERVICE_BIG_CARRIER = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000';
export const SERVICE_DRIVER = 'https://images.unsplash.com/photo-1688619101855-396f4f06710e?q=80&w=1000';
export const SERVICE_SMALL_CARRIER = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000';
export const SERVICE_RESCUE = 'https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?q=80&w=1000';

// 4. 专项业务 Hero (Service Specific Heroes)
export const HERO_BIG_CARRIER = 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=2000';
export const HERO_SMALL_CARRIER = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000';
export const HERO_RESCUE = 'https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?q=80&w=2000';
export const HERO_VALET = 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=2000';

// 5. 业务案例与实拍 (Cases & Real Photos)
export const CASE_BIG_1 = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000';
export const CASE_BIG_2 = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000';
export const CASE_BIG_3 = 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=1000';
export const CASE_VALET_1 = 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=1000';
export const CASE_VALET_2 = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000';
export const CASE_RESCUE_1 = 'https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?q=80&w=1000';
export const CASE_RESCUE_2 = 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1000';

// 6. 其他视觉组件 (Miscellaneous UI Assets)
export const SECTION_LARGE_CARRIER = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200';
export const SECTION_SMALL_CARRIER = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200';

// 7. 高质量外部资产 (External Unsplash Assets - Optimized for Asia/Brand)
export const EXTERNAL_ASSETS = {
  // 带有蓝色品牌 Logo 的卡车
  BRANDED_TRUCK: "https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=2000",
  PRICING_HERO_TRUCK: "https://images.unsplash.com/photo-1591768793355-74d7c80b0e17?q=80&w=2000",
  // 亚洲面孔用户
  AVATAR_MALE_ASIA: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=500",
  AVATAR_FEMALE_ASIA: "https://images.unsplash.com/photo-1758600587839-56ba05596c69?q=80&w=500",
  AVATAR_BUSINESS_ASIA: "https://images.unsplash.com/photo-1700954343841-2134b33d569d?q=80&w=500",
  // 救援与代驾场景
  RESCUE_SCENE: "https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?q=80&w=1080",
  VALET_HANDOVER: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=1080",
  // 荣誉与资质
  CERT_GOV: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?q=80&w=1080",
  CERT_ISO: "https://images.unsplash.com/photo-1751170360067-fbb998061d70?q=80&w=1080",
  // 解决方案聚合页资产
  SOLUTIONS_HERO: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?q=80&w=2000",
  SOLUTIONS_DASHBOARD: "https://images.unsplash.com/photo-1580307979043-96d7c4233ed9?q=80&w=1080",
  SOLUTIONS_LUXURY: "https://images.unsplash.com/photo-1707407087163-7ab35bca9ffc?q=80&w=1080",
  SOLUTIONS_FAMILY: "https://images.unsplash.com/photo-1617662466977-9306d7c91a58?q=80&w=1080",
  SUPPLY_CHAIN_HERO: "https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2000",
  LUXURY_HERO: "https://images.unsplash.com/photo-1751806524609-ce4550a4aae6?q=80&w=2000",
  LUXURY_SHOW: "https://images.unsplash.com/photo-1767096600257-8089136850c5?q=80&w=1080",
  LUXURY_TOUR: "https://images.unsplash.com/photo-1760688193696-0f868b4623b3?q=80&w=1080",
  LUXURY_TRACK: "https://images.unsplash.com/photo-1695271337804-cfe9ea9a2083?q=80&w=1080",
  TRAVEL_HERO: "https://images.unsplash.com/photo-1761047321481-abbdcfb7ff00?q=80&w=2000",
  TRAVEL_SCENE: "https://images.unsplash.com/photo-1762391536348-662da61071c3?q=80&w=1080",
  TRAVEL_DELIVERY: "https://images.unsplash.com/photo-1646363803002-eb30f025a4bf?q=80&w=1080",
  FACTORY_HERO: "https://images.unsplash.com/photo-1679561159990-bbf4394db78f?q=80&w=2000",
  TRUCK_WRECKER_3T: "https://images.unsplash.com/photo-1742069028629-790f9d5b014b?q=80&w=1000",
  TRUCK_FLATBED_FULL: "https://images.unsplash.com/photo-1531061972109-7a54a01c8088?q=80&w=1000",
  TRUCK_ENCLOSED_BOX: "https://images.unsplash.com/photo-1657486233645-f0f71d4d7805?q=80&w=1000",
  MAP_CHINA_TECH: "https://images.unsplash.com/photo-1584291527905-f930791fb1ce?q=80&w=1000",
  PARTNERS_HERO: "https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=2000",
  PARTNER_DRIVER: "https://images.unsplash.com/photo-1649186019834-18ee06d7d5ad?q=80&w=1000",
  PARTNER_OFFICE: "https://images.unsplash.com/photo-1699956572066-a1a66223649e?q=80&w=1000",
  ECOSYSTEM_HERO: "https://images.unsplash.com/photo-1519003722824-192d997a339b?q=80&w=2000",
  PARTNER_CARRIER_TRUCK: "https://images.unsplash.com/photo-1720014836833-20d9992a510f?q=80&w=1000",
  PARTNER_RESCUE_TRUCK: "https://images.unsplash.com/photo-1764772609673-e0894db7a794?q=80&w=1000",
  PARTNER_DRIVER_UNIFORM: "https://images.unsplash.com/photo-1589913026939-756281607f54?q=80&w=1000",
  PARTNER_B2B_HANDSHAKE: "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?q=80&w=1000",
  DRIVER_HERO_V2: "https://images.unsplash.com/photo-1688619101855-396f4f06710e?q=80&w=2000",
  APP_MOCKUP_IMAGE: "https://images.unsplash.com/photo-1509576931792-214960705f8a?q=80&w=1000",
  SERVICE_STATION_LOUNGE: "https://images.unsplash.com/photo-1671822571472-8a57bfc7e194?q=80&w=1000",
  ABOUT_HERO: "https://images.unsplash.com/photo-1607370883617-9720ac853cc4?q=80&w=2000",
  COMPANY_HQ: "https://images.unsplash.com/photo-1646215993365-125e6428e1dc?q=80&w=1000",
  LEADER_PORTRAIT: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1000",
  GUIDE_HERO: "https://images.unsplash.com/photo-1764332688472-b970f6ca8915?q=80&w=1500",
  INSPECTION_MOCK: "https://images.unsplash.com/photo-1598585031991-a99408386ab9?q=80&w=1000",
  PARTNER_HERO: "https://images.unsplash.com/photo-1565688335719-d0297c355556?q=80&w=1500",
  STOREFRONT: "https://images.unsplash.com/photo-1611226103607-72fe64c526ec?q=80&w=1000",
  SUCCESS_PARTNER: "https://images.unsplash.com/photo-1700954343841-2134b33d569d?q=80&w=1000",
};
