<template>
  <article class="bg-white min-h-screen font-['Noto_Sans_SC']">
    <!-- 1. Hero Section: The Warm Welcome -->
    <section class="relative h-[550px] overflow-hidden bg-[#0B2747]">
      <div class="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764743474959-9146e86c809c"
          alt="Logistics Rest Station at Dusk"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747] via-[#0B2747]/70 to-transparent" />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 relative z-10 h-full flex flex-col justify-center">
        <nav class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/60">
          <button
            @click="navigateToHome"
            class="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            首页
          </button>
          <ChevronRight class="w-3 h-3" />
          <button
            @click="navigateToSolutions"
            class="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            解决方案
          </button>
          <ChevronRight class="w-3 h-3" />
          <span class="text-white font-bold">
            司机之家
          </span>
        </nav>

        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0 }"
          class="max-w-[700px]"
        >
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[14px] mb-8">
            <div class="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            计划 2026 年底构建 500+ 处
          </div>
          <h1 class="text-[48px] font-bold text-white mb-6 leading-tight">
            司机之家：全国驿站补给网络
            <br />
            关怀每一位运力伙伴
          </h1>
          <p class="text-[18px] text-white/90 mb-10 leading-relaxed">
            全面铺设服务驿站，为货运司机提供 24h
            热水淋浴、免费
            Wi-Fi、车辆自助检测及温暖生活补给。不仅仅是歇脚的地方，更是人车双补给的能量站。
          </p>
          <Button class="h-16 px-10 rounded-2xl bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] border-none shadow-xl shadow-orange-500/30">
            查找附近驿站
          </Button>
        </div>
      </div>
    </section>

    <!-- 2. Section A: Basic Services - "Comfort & Rest" -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            基础服务：舒心休整
          </h2>
          <div class="w-16 h-1 bg-[#FF6B00] rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            :icon="Bath"
            title="24h 洗漱空间"
            desc="24小时热水淋浴、标准化洁净卫生间、免费一次性洗漱包。"
          />
          <ServiceCard
            :icon="Wifi"
            title="数字化休息区"
            desc="高速免费 Wi-Fi 全覆盖、手机快充、路况天气大屏。"
          />
          <ServiceCard
            :icon="Coffee"
            title="生活补给站"
            desc="冷热直饮水无限供应、简餐加热设备。"
          />
          <ServiceCard
            :icon="Stethoscope"
            title="应急关怀"
            desc="配备应急药箱与防暑降温用品。"
          />
          <ServiceCard
            :icon="Moon"
            title="临时休息"
            desc="安静的睡眠舱或舒适休息椅，缓解长途驾驶疲劳。"
          />
          <ServiceCard
            :icon="ShieldCheck"
            title="安全停车"
            desc="全监控覆盖的专用停车区，安心休憩。"
          />
        </div>
      </div>
    </section>

    <!-- 3. Section B: Vehicle Care - "Efficiency" -->
    <section class="py-24 bg-[#F0F7FF]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-12">
              车辆关怀：高效续航
            </h2>
            <div class="space-y-10">
              <VehicleFeature
                :icon="Droplets"
                title="自助洗车"
                desc="配备高压水枪与专业洗车液，让您的爱车时刻保持专业形象。"
              />
              <VehicleFeature
                :icon="QrCode"
                title="车贴权益落地"
              >
                <template #desc>
                  <span>
                    官方认证车贴现场申领。专人指导贴附，完成后即可在司机端
                    APP 解锁
                    <strong class="text-[#006EFF]">
                      "自动接单"
                    </strong>
                    权益。
                  </span>
                </template>
              </VehicleFeature>
              <VehicleFeature
                :icon="Zap"
                title="基础检测"
                desc="免费胎压检测、玻璃水加注，确保行车安全。"
              />
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :visibleOnce="true"
            class="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766524790783-7915025f453a"
              alt="Chinese Driver with Truck Logo"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Section C: The Blueprint (Map Visualization) -->
    <section class="py-24 bg-[#0B2747] text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584291527905-f930791fb1ce"
          alt="Network Nodes Background"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold mb-4">
            全国驿站布局蓝图
          </h2>
          <div class="w-20 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="space-y-4">
            <div class="text-[56px] font-black text-[#FF6B00]">
              500+
            </div>
            <p class="text-white/60 text-[18px]">
              规划站点 (2026)
            </p>
          </div>
          <div class="space-y-4 border-x border-white/10">
            <div class="text-[56px] font-black text-[#FF6B00]">
              24h
            </div>
            <p class="text-white/60 text-[18px]">
              全天候开放
            </p>
          </div>
          <div class="space-y-4">
            <div class="text-[56px] font-black text-[#FF6B00]">
              0元
            </div>
            <p class="text-white/60 text-[18px]">
              认证司机免费入场
            </p>
          </div>
        </div>

        <div class="mt-20 max-w-[800px] mx-auto border border-white/10 rounded-[40px] p-8 bg-white/5 backdrop-blur-sm text-center">
          <p class="text-white/80 leading-relaxed italic">
            "司机之家不仅仅是物理上的歇脚点，更是车拖车'尊重劳动、关怀伙伴'价值观的直接体现。我们致力于在全国主要高速枢纽与物流集散地，为每一位在路上的伙伴构建温暖港湾。"
          </p>
        </div>
      </div>
    </section>

    <!-- 5. Section D: How to Access (App Integration) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="max-w-[1000px] mx-auto border-2 border-[#FF6B00] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16">
          <div class="flex-1">
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-10">
              如何进入司机之家？
            </h2>
            <div class="space-y-8">
              <StepItem
                num="1"
                text="下载 车拖车司机端 APP"
              />
              <StepItem num="2" text="完成实名与车辆认证" />
              <StepItem
                num="3"
                text="出示 APP 内的 认证账号 即可免费享受基础服务"
              />
            </div>
          </div>
          <div class="shrink-0 text-center space-y-4">
            <div class="w-48 h-48 bg-gray-50 border-2 border-gray-100 rounded-3xl flex items-center justify-center p-4">
              <div class="w-full h-full bg-[#0B2747] rounded-xl flex items-center justify-center text-white">
                <Download class="w-12 h-12" />
              </div>
            </div>
            <p class="text-[14px] font-bold text-[#0B2747]">
              扫描下载司机端 APP
            </p>
            <Button class="w-full bg-[#0B2747] text-white hover:bg-[#1a3a5a] border-none">
              立即认证
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Section E: FAQ (SEO Schema Content) -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[800px] px-4">
        <div class="text-center mb-16">
          <div class="inline-flex p-3 bg-blue-50 rounded-2xl text-[#006EFF] mb-6">
            <Info class="w-6 h-6" />
          </div>
          <h2 class="text-[28px] font-bold text-[#0B2747]">
            驿站服务简报
          </h2>
        </div>

        <div class="space-y-4">
          <AccordionItem
            v-for="(item, idx) in faqData"
            :key="idx"
            :question="item.q"
            :answer="item.a"
          />
        </div>
      </div>
    </section>

    <footer class="py-20 bg-white border-t border-gray-100 text-center">
      <p class="text-gray-400 text-[14px]">
        车拖车·司机之家 | 全国伙伴热线：400-XXX-XXXX
      </p>
    </footer>
  </article>
</template>

<script setup lang="ts">
import {
  ChevronRight,
  Bath,
  Wifi,
  Coffee,
  Stethoscope,
  Moon,
  ShieldCheck,
  Droplets,
  Zap,
  QrCode,
  Download,
  Info,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import ServiceCard from '@/components/driver-home/ServiceCard.vue'
import VehicleFeature from '@/components/driver-home/VehicleFeature.vue'
import StepItem from '@/components/driver-home/StepItem.vue'
import AccordionItem from '@/components/driver-home/AccordionItem.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const faqData = [
  {
    q: "车拖车司机之家提供哪些服务？",
    a: "司机之家提供基础生活服务（24h热水淋浴、免费Wi-Fi、简餐加热、应急药箱、临时休整）以及车辆专业关怀（自助洗车、认证车贴申领、胎压检测、玻璃水加注）等全方位补给。",
  },
  {
    q: "准入条件是什么？",
    a: "所有车拖车平台认证的板车司机、救援司机及代驾伙伴均可凭司机端 APP 内的认证账号，免费入场并享受所有基础服务。",
  },
]

const navigateToHome = () => {
  props.setActiveId?.('home')
}

const navigateToSolutions = () => {
  props.setActiveId?.('solutions')
}
</script>
