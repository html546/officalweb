<template>
  <div class="bg-white min-h-screen font-['Noto_Sans_SC']">
    
    <!-- 🏛️ Hero Section (400px Height) -->
    <section class="relative h-[400px] overflow-hidden">
      <!-- Background Image & Overlay -->
      <div class="absolute inset-0">
        <ImageWithFallback 
          :src="ASSETS.HERO_BG" 
          alt="Logistics Network" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/80 via-[#0B2747]/40 to-transparent" />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 lg:px-0 relative z-10 h-full flex flex-col">
        <!-- Breadcrumb - Top Left Fixed -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
          <NuxtLink 
            to="/"
            class="hover:text-white transition-colors cursor-pointer"
          >
            首页
          </NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <NuxtLink 
            to="/download"
            class="hover:text-white transition-colors cursor-pointer text-white/60"
          >
            APP下载
          </NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-medium">车拖车客户端</span>
        </div>

        <!-- Main Content (Center Aligned) -->
        <div class="flex-grow flex flex-col items-center justify-center text-center">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="flex flex-col items-center"
          >
            <h1 class="text-[40px] font-bold text-white mb-4 leading-tight">
              车拖车数字化终端下载中心
            </h1>
            <p class="text-[18px] text-white/90 tracking-wide mb-10 max-w-[800px]">
              行业领先的 AI 智能调度平台，连接 167 万用户与 45 万运力伙伴
            </p>

            <!-- Platform Support Bar -->
            <div class="flex items-center justify-center gap-10">
              <div class="flex items-center gap-3 text-white border-r border-white/20 pr-10 last:border-0 last:pr-0">
                <Apple class="w-6 h-6" />
                <span class="text-[16px] font-medium">iOS</span>
              </div>
              <div class="flex items-center gap-3 text-white border-r border-white/20 pr-10 last:border-0 last:pr-0">
                <Smartphone class="w-6 h-6" />
                <span class="text-[16px] font-medium">Android</span>
              </div>
              <div class="flex items-center gap-3 text-white">
                <DownloadHarmonyOSLogo class="text-white" />
                <span class="text-[16px] font-medium ml-1">HarmonyOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🟦 Section 1: Client App -->
    <section class="bg-white py-24 overflow-hidden border-b border-gray-50">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-[60px]">
          
          <!-- LEFT COLUMN -->
          <div 
            v-motion
            class="lg:w-1/2"
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <div class="inline-flex items-center px-4 py-1.5 bg-[#E6F2FF] text-[#006EFF] text-[13px] font-bold rounded-full mb-6">
              我是车主 / 企业
            </div>
            
            <h2 class="text-[32px] font-bold text-[#0B2747] leading-tight mb-8">
              车拖车客户端：全流程可视化的智能托运管家
            </h2>
            
            <p class="text-[16px] text-[#4B5563] leading-[1.8] mb-10 max-w-[540px]">
              车拖车客户端致力于为个人车主及企业客户提供一站式、数字化的汽车托运解决方案。通过整合全国优质运力资源，我们实现了托运全流程的线上化透明管理。从智能秒级报价到北斗高精度实时追踪，再到便捷的电子发票申请，车拖车让每一次汽车托运都像寄送快递一样简单、安全、高效。
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Zap class="w-5 h-5 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">AI 智能报价</h4>
                  <p class="text-[12px] text-gray-400">5秒极速出价</p>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <MapPin class="w-5 h-5 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">全程可视化</h4>
                  <p class="text-[12px] text-gray-400">GPS+北斗双模</p>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FileText class="w-5 h-5 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">电子发票</h4>
                  <p class="text-[12px] text-gray-400">企业便捷报销</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-8 mb-8">
              <div class="flex flex-col items-center gap-2">
                <div class="bg-white p-2.5 rounded-2xl border border-gray-100 shadow-md">
                  <img :src="ASSETS.QR_PLACEHOLDER" alt="QR" class="w-[80px] h-[80px]" />
                </div>
                <span class="text-[11px] text-gray-400 font-bold">扫码下载</span>
              </div>
              <div class="flex flex-wrap gap-3">
                <button @click="handleDownload('ios')" class="h-10 px-4 bg-black hover:bg-gray-900 text-white rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm border-none cursor-pointer">
                  <Apple class="w-4 h-4" /> App Store
                </button>
                <button @click="handleDownload('android')" class="h-10 px-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm cursor-pointer">
                  <Smartphone class="w-4 h-4" /> Android
                </button>
                <button @click="handleDownload('harmony')" class="h-10 px-4 bg-white hover:bg-gray-50 text-[#0B2747] border border-gray-200 rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm cursor-pointer">
                  <DownloadHarmonyOSLogo /> <span class="ml-1">HarmonyOS</span>
                </button>
              </div>
            </div>

            <NuxtLink 
              to="/download/client"
              class="text-[16px] text-[#006EFF] hover:underline transition-colors flex items-center gap-1 font-bold"
            >
              了解更多功能详情 <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- RIGHT COLUMN -->
          <div 
            v-motion
            class="lg:w-1/2 flex justify-center lg:justify-end"
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <DownloadClientMockupVideo />
          </div>
        </div>
      </div>
    </section>

    <!-- 🟧 Section 2: Driver App -->
    <section class="bg-[#F8F9FB] py-24 overflow-hidden">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-[60px]">
          
          <!-- LEFT COLUMN -->
          <div 
            v-motion
            class="lg:w-1/2 order-2 lg:order-1"
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <div class="inline-flex items-center px-4 py-1.5 bg-[#FFF4E6] text-[#FF6B00] text-[13px] font-bold rounded-full mb-6">
              我是司机 / 承运商
            </div>
            
            <h2 class="text-[32px] font-bold text-[#0B2747] leading-tight mb-8">
              车拖车司机端：汇聚 38 万认证司机的接单神器
            </h2>
            
            <p class="text-[16px] text-[#4B5563] leading-[1.8] mb-10 max-w-[540px]">
              车拖车司机端是专为职业板车司机、承运商及代驾师傅打造的数字化赚钱利器。平台汇聚了全国海量真实货源，通过先进的智能匹配算法，根据您的常跑路线进行自动听单派发，极减空驶损耗。同时，我们提供行业领先的极速结算系统,运费实时到账，账目清晰透明。
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Headphones class="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">自动听单</h4>
                  <p class="text-[12px] text-gray-400">告别空驶损耗</p>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Wallet class="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">极速结算</h4>
                  <p class="text-[12px] text-gray-400">运费秒级到账</p>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <BookOpen class="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h4 class="text-[15px] font-bold text-[#0B2747]">司机课堂</h4>
                  <p class="text-[12px] text-gray-400">专业持证上岗</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-8 mb-8">
              <div class="flex flex-col items-center gap-2">
                <div class="bg-white p-2.5 rounded-2xl border border-gray-100 shadow-md">
                  <img :src="ASSETS.QR_PLACEHOLDER" alt="QR" class="w-[80px] h-[80px]" />
                </div>
                <span class="text-[11px] text-gray-400 font-bold">扫码接单</span>
              </div>
              <div class="flex flex-wrap gap-3">
                <button @click="handleDownload('driver-ios')" class="h-10 px-4 bg-[#0B2747] hover:bg-black text-white rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm border-none cursor-pointer">
                  <Apple class="w-4 h-4" /> App Store
                </button>
                <button @click="handleDownload('driver-android')" class="h-10 px-4 bg-white hover:bg-gray-50 text-[#0B2747] border border-gray-200 rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm cursor-pointer">
                  <Smartphone class="w-4 h-4" /> Android
                </button>
                <button @click="handleDownload('driver-harmony')" class="h-10 px-4 bg-white hover:bg-gray-50 text-[#0B2747] border border-gray-200 rounded-xl flex items-center gap-2 text-[13px] font-bold transition-transform hover:-translate-y-0.5 shadow-sm cursor-pointer">
                  <DownloadHarmonyOSLogo /> <span class="ml-1 text-[13px]">HarmonyOS</span>
                </button>
              </div>
            </div>

            <NuxtLink 
              to="/download/driver"
              class="text-[16px] text-[#0B2747] hover:underline transition-colors flex items-center gap-1 font-bold"
            >
              了解更多功能详情 <ChevronRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- RIGHT COLUMN -->
          <div 
            v-motion
            class="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <DownloadDriverMockupVideo />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { 
  MapPin, 
  Zap, 
  FileText, 
  Headphones, 
  Wallet, 
  BookOpen, 
  Apple, 
  Smartphone, 
  ChevronRight
} from 'lucide-vue-next'

const ASSETS = {
  QR_PLACEHOLDER: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://chetuoche.com/download",
  HERO_BG: "https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBuZXR3b3JrJTIwbWFwJTIwbG9naXN0aWNzJTIwbm9kZXMlMjBibHVlJTIwc2lsdmVyfGVufDF8fHx8MTc2OTY3NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
}

const handleDownload = (platform: string) => {
  const messages: Record<string, string> = {
    'ios': '即将跳转 App Store',
    'android': '即将下载 Android APK',
    'harmony': '即将跳转 HarmonyOS 应用市场',
    'driver-ios': '即将跳转 App Store（司机端）',
    'driver-android': '即将下载 Android APK（司机端）',
    'driver-harmony': '即将跳转 HarmonyOS 应用市场（司机端）'
  }
  alert(messages[platform] || '即将下载')
}

useHead({
  title: 'APP下载中心 - 车拖车智能汽车物流平台',
  meta: [
    {
      name: 'description',
      content: '车拖车数字化终端下载中心，行业领先的 AI 智能调度平台，连接 167 万用户与 45 万运力伙伴。支持iOS、Android及HarmonyOS系统。'
    }
  ]
})
</script>
