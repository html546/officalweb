<template>
  <article class="bg-white min-h-screen font-['Noto_Sans_SC']">
    <!-- 🚀 Hero Section: The Visionary Leader -->
    <section class="relative h-[600px] overflow-hidden bg-gradient-to-b from-[#0B2747] to-[#111827]">
      <!-- Abstract Tech Background -->
      <div class="absolute inset-0 opacity-20 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596468257587-0ef5ee6709e3"
          alt="Tech Background"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Dot Grid Map Overlay (Subtle) -->
      <div class="absolute inset-0 z-1 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />

      <div class="container mx-auto max-w-[1200px] px-4 relative z-10 text-center h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <nav class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/60">
          <button
            @click="navigateToHome"
            class="hover:text-white bg-transparent border-none cursor-pointer"
          >
            首页
          </button>
          <ChevronRight class="w-3 h-3" />
          <span class="text-white font-bold">
            关于我们
          </span>
        </nav>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-[48px] md:text-[56px] font-bold text-white leading-tight mb-8"
        >
          关于车拖车：用数字技术
          <br />
          重塑汽车物流信任标准的领军者
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[18px] text-white/80 leading-[1.8] max-w-[800px] mx-auto mb-12"
        >
          车拖车（CheTuoChe）作为中国领先的汽车数智化物流服务平台，坚持"商运+旅运+救援"的一体化发展战略。我们致力于通过
          AI 智能算法与全流程透明化技术，连接全国 70万
          名认证司机，为用户提供安全、高效、透明的汽车物流解决方案。
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="flex items-center justify-center gap-6"
        >
          <Button
            @click="navigateToSolutions"
            class="h-14 px-10 bg-[#006EFF] hover:bg-[#0058CC] text-white rounded-2xl font-bold text-[18px] border-none shadow-xl shadow-blue-900/40"
          >
            了解解决方案
          </Button>
          <Button
            @click="navigateToCareers"
            class="h-14 px-10 border-white text-white hover:bg-white/10 rounded-2xl font-bold text-[18px] bg-transparent"
          >
            加入我们
          </Button>
        </div>
      </div>
    </section>

    <!-- 🛡️ Section A: Company Identity & Mission -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-12 gap-12 items-center">
          <div class="col-span-12 lg:col-span-6">
            <div
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0 }"
              :visibleOnce="true"
            >
              <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">
                让汽车物流更简单、更高效
              </h2>

              <div class="space-y-6">
                <p class="text-[16px] text-gray-600 leading-[1.8]">
                  车拖车（CheTuoChe）作为中国领先的汽车数智化物流服务平台，始终坚持
                  <strong>"商运+旅运+救援"</strong>
                  的一体化发展战略。我们不仅是传统运力与数字化技术的撮合者，更是汽车物流行业信任标准与服务标准的定义者。通过自研的数智供应链系统，我们实现了物流轨迹的毫秒级更新。
                </p>
                <p class="text-[16px] text-gray-600 leading-[1.8]">
                  凭借自有及挂靠的{" "}
                  <span class="text-[#FF6B00] font-bold">
                    100,000台
                  </span>{" "}
                  合规运力车辆，以及覆盖全国的{" "}
                  <span class="text-[#FF6B00] font-bold">
                    45万
                  </span>{" "}
                  名认证司机，车拖车已实现年 GMV 突破{" "}
                  <span class="text-[#FF6B00] font-bold">
                    43亿
                  </span>{" "}
                  的规模化跨越。我们在临沂市建立了
                  <strong>汽车数智供应链重点实验室</strong>
                  ，并拥有自己的<strong>板车制造基地</strong>
                  ，形成了从生产制造到终端托运的全产业链闭环。
                </p>
              </div>

              <div class="flex gap-10 mt-12 border-t pt-10">
                <div>
                  <div class="text-[28px] font-black text-[#0B2747]">
                    100,000
                    <span class="text-[16px] ml-1">
                      台
                    </span>
                  </div>
                  <div class="text-[12px] text-gray-400 uppercase font-bold tracking-wider">
                    合规清障车
                  </div>
                </div>
                <div>
                  <div class="text-[28px] font-black text-[#0B2747]">
                    450,000
                    <span class="text-[16px] ml-1">
                      名
                    </span>
                  </div>
                  <div class="text-[12px] text-gray-400 uppercase font-bold tracking-wider">
                    认证司机
                  </div>
                </div>
                <div>
                  <div class="text-[28px] font-black text-[#0B2747]">
                    2,800,000
                    <span class="text-[16px] ml-1">
                      位
                    </span>
                  </div>
                  <div class="text-[12px] text-gray-400 uppercase font-bold tracking-wider">
                    服务用户
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-6">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.95 }"
              :visible="{ opacity: 1, scale: 1 }"
              :visibleOnce="true"
              class="relative rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1657980928718-a97f012f552e"
                alt="CheTuoChe Lab"
                class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/80 to-transparent" />
              <div class="absolute bottom-10 left-10 right-10">
                <div class="text-white font-bold text-[20px] mb-2">
                  临沂市汽车数智供应链重点实验室
                </div>
                <div class="text-white/60 text-[14px]">
                  用 AI 赋能每一公里，探索汽车物流的最优解。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏭 Section A-Plus: "Software + Manufacturing" Industrial Layout -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-12 gap-12 items-center">
          <!-- Left Column: Narrative -->
          <div class="col-span-12 lg:col-span-5">
            <div
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0 }"
              :visibleOnce="true"
            >
              <h2 class="text-[32px] font-bold text-[#0B2747] mb-8 leading-tight">
                产业布局：从"智能调度"到"硬核制造"
              </h2>

              <div class="space-y-6 mb-10">
                <p class="text-[16px] text-gray-600 leading-[1.8]">
                  车拖车不仅是一家基于 AI
                  算法的数字平台，更是深耕"实体制造"的硬核物流实业。我们在山东临沂及湖北随州建立了
                  <strong>两大现代化专用车制造基地</strong>
                  ，通过自主研发实现了清障车与轿运车的标准化量产。
                </p>
                <p class="text-[16px] text-gray-600 leading-[1.8]">
                  依托"数智供应链实验室"的研发成果，我们将物联网（IoT）技术直接融入板车制造过程，确保每一台产出的运输车都具备原生数字化追踪能力。目前，平台年产规模已达{" "}
                  <span class="text-[#FF6B00] font-bold">
                    1,500 台
                  </span>
                  ，并在全国枢纽城市落位了 20
                  多个直营销售服务中心。
                </p>
              </div>

              <div class="flex flex-wrap gap-3">
                <span
                  v-for="(tag, idx) in ['年产1500台', '两大生产基地', '20+服务网点', '临沂重点实验室']"
                  :key="idx"
                  class="px-5 py-2.5 bg-white border border-gray-200 text-[#0B2747] rounded-xl text-[14px] font-bold shadow-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column: Industrial Map Visualization -->
          <div class="col-span-12 lg:col-span-7 relative">
            <div class="bg-white/50 rounded-[40px] p-8 border border-gray-100 shadow-inner overflow-hidden relative aspect-[4/3] flex items-center justify-center">
              <!-- Stylized China Map Background -->
              <div class="absolute inset-0 opacity-10 flex items-center justify-center">
                <Globe
                  class="w-[80%] h-[80%] text-[#0B2747]"
                  :stroke-width="0.5"
                />
              </div>

              <!-- Hotspots -->
              <div class="relative w-full h-full">
                <!-- 山东临沂 HQ -->
                <div
                  v-motion
                  :initial="{ scale: 0 }"
                  :visible="{ scale: 1 }"
                  :visibleOnce="true"
                  class="absolute top-[35%] left-[75%] z-20 group"
                >
                  <div class="relative">
                    <div class="w-4 h-4 bg-[#006EFF] rounded-full animate-ping absolute inset-0" />
                    <div class="w-4 h-4 bg-[#006EFF] rounded-full relative border-2 border-white shadow-lg" />
                  </div>
                  <!-- Tooltip -->
                  <div class="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[220px] bg-white p-3 rounded-xl shadow-xl border border-blue-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div class="flex items-center gap-2 mb-1">
                      <div class="p-1.5 bg-blue-50 rounded-lg text-[#006EFF]">
                        <Factory class="w-4 h-4" />
                      </div>
                      <span class="text-[13px] font-bold text-[#0B2747]">
                        临沂制造基地
                      </span>
                    </div>
                    <div class="text-[10px] text-gray-400">
                      总部 / 汽车数智供应链实验室
                    </div>
                  </div>
                </div>

                <!-- 湖北随州 Factory -->
                <div
                  v-motion
                  :initial="{ scale: 0 }"
                  :visible="{ scale: 1, transition: { delay: 200 } }"
                  :visibleOnce="true"
                  class="absolute top-[50%] left-[65%] z-20 group"
                >
                  <div class="relative">
                    <div class="w-3 h-3 bg-[#006EFF] rounded-full absolute inset-0" />
                    <div class="w-3 h-3 bg-[#006EFF] rounded-full relative border-2 border-white shadow-lg" />
                  </div>
                  <!-- Tooltip -->
                  <div class="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[160px] bg-white p-3 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center">
                    <span class="text-[12px] font-bold text-[#0B2747]">
                      随州专用车制造基地
                    </span>
                  </div>
                </div>

                <!-- Scattered Service Dots -->
                <div
                  v-for="(pos, i) in [
                    { t: '25%', l: '85%' },
                    { t: '45%', l: '80%' },
                    { t: '65%', l: '75%' },
                    { t: '30%', l: '70%' },
                    { t: '55%', l: '60%' },
                    { t: '70%', l: '50%' },
                    { t: '20%', l: '65%' },
                    { t: '40%', l: '55%' },
                    { t: '60%', l: '85%' },
                  ]"
                  :key="i"
                  v-motion
                  :initial="{ opacity: 0 }"
                  :visible="{ opacity: 1, transition: { delay: 300 + i * 50 } }"
                  :visibleOnce="true"
                  class="absolute w-2 h-2 bg-[#FF6B00] rounded-full opacity-60 border border-white"
                  :style="{ top: pos.t, left: pos.l }"
                />
              </div>

              <!-- Legend -->
              <div class="absolute bottom-8 left-8 flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-[#006EFF] rounded-full" />
                  <span class="text-[12px] text-gray-500 font-medium">
                    制造基地 / 实验室
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-[#FF6B00] rounded-full" />
                  <span class="text-[12px] text-gray-500 font-medium">
                    全国 20+ 销售服务中心
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🤝 Section A-Plus-2: Strategic Manufacturing Partners -->
    <section class="py-12 bg-white border-b border-gray-50">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-8">
          <h3 class="text-[14px] font-bold text-gray-400 uppercase tracking-widest">
            战略合作伙伴 (装备制造)
          </h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div
            v-for="(partner, idx) in [
              { name: '福田汽车', en: 'Foton' },
              { name: '中国重汽', en: 'Sinotruk' },
              { name: '江淮汽车', en: 'JAC' },
              { name: '一汽解放', en: 'FAW' },
            ]"
            :key="idx"
            class="flex flex-col items-center gap-1 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
          >
            <div class="text-[20px] font-black text-[#0B2747] tracking-tight group-hover:text-[#006EFF]">
              {{ partner.en }}
            </div>
            <div class="text-[12px] text-gray-400 font-medium">
              {{ partner.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Strengths -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :visibleOnce="true"
            class="text-[32px] font-bold mb-4 text-[#0B2747]"
          >
            四大核心硬实力
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            :visibleOnce="true"
            class="text-[16px] text-gray-400"
          >
            Core Strengths
          </p>
          <div
            v-motion
            :initial="{ width: 0 }"
            :visible="{ width: 60, transition: { delay: 200, duration: 800 } }"
            :visibleOnce="true"
            class="h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in [
              {
                icon: Truck,
                title: '专业运力池',
                desc: '自有及挂靠 100,000台 合规清障车与大型轿运车，所有车辆均符合国六排放及最新安全标准，常驻司机数量超 70万，确保极速响应。',
              },
              {
                icon: Brain,
                title: '数字化调度',
                desc: '自研 TMS 运输管理系统，实现全流程 GPS/北斗双模定位。通过 AI 算法优化路线，让每一台车的行驶轨迹对用户完全透明。',
              },
              {
                icon: ShieldCheck,
                title: '安全合规保障',
                desc: '拥有国家信息安全等级保护三级（等保三级）认证，联合 太平洋 等保险巨头提供亿元级物流责任险承保，全程风险无忧。',
              },
              {
                icon: Globe,
                title: '行业覆盖力',
                desc: '服务路线覆盖全国 90% 以上地区，已在全国建立 20 多个销售服务点，为全国 300万 用户提供无盲区的数字化托运服务。',
              },
            ]"
            :key="idx"
            v-motion
            :hovered="{ y: -10 }"
            class="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/20 group transition-all"
          >
            <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#006EFF] mb-8 group-hover:bg-[#006EFF] group-hover:text-white transition-colors">
              <component :is="item.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-[22px] font-bold text-[#0B2747] mb-6">
              {{ item.title }}
            </h3>
            <p class="text-[15px] text-gray-500 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⏳ Section C: History Timeline -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :visibleOnce="true"
            class="text-[32px] font-bold mb-4 text-[#0B2747]"
          >
            车拖车发展历程
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            :visibleOnce="true"
            class="text-[16px] text-gray-400"
          >
            Our Journey
          </p>
          <div
            v-motion
            :initial="{ width: 0 }"
            :visible="{ width: 60, transition: { delay: 200, duration: 800 } }"
            :visibleOnce="true"
            class="h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"
          />
        </div>

        <div class="relative max-w-[900px] mx-auto">
          <!-- Center Line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block" />

          <div class="space-y-16">
            <div
              v-for="(item, idx) in timelineData"
              :key="idx"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: idx * 100 } }"
              :visibleOnce="true"
              :class="`flex items-center gap-12 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`"
            >
              <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div
                  :class="`md:px-12 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:text-right w-full'}`"
                >
                  <div class="text-[24px] font-black text-[#FF6B00] mb-2">
                    {{ item.year }}
                  </div>
                  <h4 class="text-[20px] font-bold text-[#0B2747] mb-4">
                    {{ item.title }}
                  </h4>
                  <p class="text-[14px] text-gray-500 leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>

              <!-- Point on Line -->
              <div class="relative z-10 hidden md:flex items-center justify-center">
                <div class="w-4 h-4 bg-[#FF6B00] rounded-full border-4 border-white shadow-lg" />
              </div>

              <div class="w-full md:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏆 Section D: Qualifications & Honors -->
    <section class="py-24 bg-[#F0F7FF]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <SectionTitle subtitle="Qualifications & Honors">
          资质与荣誉
        </SectionTitle>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, idx) in [
              {
                title: '道路运输经营许可证',
                type: '核心资质',
              },
              { title: 'ISO9001 质量认证', type: '核心资质' },
              { title: '国家高新技术企业', type: '核心资质' },
              { title: '信息安全等保三级', type: '核心资质' },
              {
                title: '山东省首版次高端软件',
                type: '政府荣誉',
              },
              {
                title: '山东省大数据创新应用',
                type: '政府荣誉',
              },
              {
                title: '数智供应链重点实验室',
                type: '研发机构',
              },
              {
                title: '物流责任险亿元保单',
                type: '安全保障',
              },
            ]"
            :key="idx"
            v-motion
            :hovered="{ scale: 1.02 }"
            class="bg-white p-6 rounded-2xl border border-blue-50 shadow-md group"
          >
            <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#006EFF] mb-4 group-hover:bg-[#006EFF] group-hover:text-white transition-all">
              <Award class="w-5 h-5" />
            </div>
            <div class="text-[12px] text-blue-400 font-bold uppercase tracking-wider mb-2">
              {{ item.type }}
            </div>
            <div class="text-[16px] font-bold text-[#0B2747]">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🤝 Section E: Partners -->
    <section class="py-20 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-12">
          <h3 class="text-[18px] font-bold text-gray-400 uppercase tracking-widest">
            合作伙伴
          </h3>
        </div>
        <div class="flex flex-wrap justify-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div
            v-for="(brand, idx) in [
              'Mercedes-Benz',
              'BMW',
              'Audi',
              'Honda',
              'Tesla',
              'Foton',
              'Sinotruk',
              'JAC',
              'FAW',
            ]"
            :key="idx"
            class="text-[18px] font-black text-[#0B2747] tracking-tight"
          >
            {{ brand }}
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ChevronRight,
  Truck,
  Brain,
  ShieldCheck,
  Globe,
  Award,
  Factory,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const router = useRouter()

const timelineData = ref([
  {
    year: '2019',
    title: '战略筹备',
    desc: '团队正式筹建，开始探索"线上数字化+线下实体运力"的汽车物流信息撮合模式。',
  },
  {
    year: '2020',
    title: '品牌诞生',
    desc: '车拖车品牌正式创立，APP 成功上线，标志着平台进入数字化经营元年。',
  },
  {
    year: '2022',
    title: '规模增长',
    desc: '年度 GMV 突破 3.5亿，旅运与长途代驾业务正式上线，服务版图进一步扩张。',
  },
  {
    year: '2023',
    title: '跨越巅峰',
    desc: '年度 GMV 突破 10亿，平台注册用户突破 40万，多个区域分公司相继落地。',
  },
  {
    year: '2024',
    title: '生态升级',
    desc: 'GMV 近 20亿，上线道路救援业务，构建起「商运+旅运+救援」的一体化服务体系。',
  },
  {
    year: '2025',
    title: '持续领跑',
    desc: '开通线上代驾接驳及长途代驾业务，持续通过技术创新领跑汽车数智化物流赛道。',
  },
])

const navigateToHome = () => {
  router.push('/')
}

const navigateToSolutions = () => {
  router.push('/solutions')
}

const navigateToCareers = () => {
  router.push('/careers')
}

</script>
