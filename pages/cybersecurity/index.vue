<template>
  <article class="min-h-screen bg-[#020617] text-white font-['Noto_Sans_SC'] selection:bg-sky-500/30">
    <!-- 🛡️ Hero Section: The Digital Fortress -->
    <section class="relative h-[650px] overflow-hidden">
      <!-- Background Overlay: Binary/Hex Grid -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[#0B2747]/40" />
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <!-- Hexagonal/Tech Grid Overlay -->
        <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#0F172A]" />

        <!-- Animated Glows -->
        <div
          v-motion
          :animate="{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            transition: { duration: 8000, repeat: Infinity }
          }"
          class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 lg:px-0 relative z-10 text-center h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <nav class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-[#9CA3AF]">
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
          <span class="text-white">网络安全防护</span>
        </nav>

        <!-- Trust Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="mb-8 inline-block mt-16"
        >
          <div class="relative">
            <div class="absolute -inset-6 bg-sky-500/20 blur-2xl rounded-full" />
            <div class="relative w-28 h-28 mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-[#1E293B] to-[#020617] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)] group overflow-hidden">
              <ShieldCheck class="w-12 h-12 text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
              <span class="mt-1 text-[10px] font-black text-white/40 tracking-[0.2em]">LEVEL 3</span>
              <!-- Metallic shine effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            <div class="mt-4 px-4 py-1.5 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full inline-flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span class="text-[12px] font-bold text-[#38BDF8] tracking-tight">国家等保三级认证 (DJCP) 标准建设</span>
            </div>
          </div>
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-[48px] font-bold text-white mb-6 leading-[1.2]"
        >
          金融级数据安全：为每一笔托运订单保驾护航
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[18px] text-[#E5E7EB] max-w-[800px] mx-auto mb-10 leading-relaxed"
        >
          基于国家网络安全等级保护（三级）标准构建，采用端到端数据加密与分布式高可用架构。车拖车通过 T 级带宽防护与 AI 实时风控系统，全方位捍卫 280万+ 用户的数字资产安全。
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="flex flex-wrap justify-center gap-4"
        >
          <div
            v-for="tag in ['TLS 1.3 加密', 'T级防护', '双向实名', '异地容灾']"
            :key="tag"
            class="px-6 py-2 rounded-full border border-[#38BDF8] text-[#38BDF8] bg-[#38BDF8]/5 text-[14px] font-bold tracking-wide"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </section>

    <!-- 🛡️ Section A: Three Pillars (Glass Cards) -->
    <section class="py-24 bg-[#0F172A]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[32px] font-bold text-white mb-4">全链路技术架构安全</h2>
          <div class="w-20 h-1 bg-[#38BDF8] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(pillar, idx) in pillars"
            :key="idx"
            v-motion
            :hovered="{ y: -10 }"
            class="group relative p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#38BDF8]/30 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <!-- Glow on hover -->
            <div class="absolute inset-0 bg-[#38BDF8]/0 group-hover:bg-[#38BDF8]/5 rounded-[40px] transition-colors" />
            <div class="relative z-10">
              <div class="w-16 h-16 bg-[#006EFF]/20 rounded-2xl flex items-center justify-center text-[#60A5FA] mb-8 group-hover:text-[#38BDF8] transition-colors">
                <component :is="pillar.icon" class="w-8 h-8" />
              </div>
              <h3 class="text-[22px] font-bold text-white mb-6">{{ pillar.title }}</h3>
              <p class="text-[#94A3B8] leading-relaxed text-[15px]">
                {{ pillar.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 📊 Section B: Hardcore Metrics (Data Viz) -->
    <section class="py-24 bg-[#0B2747] overflow-hidden">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <!-- Left: Visual -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
            class="relative"
          >
            <!-- Abstract Security Shield/Server Graphic -->
            <div class="relative aspect-square rounded-[60px] overflow-hidden bg-[#020617] border border-white/5 flex items-center justify-center">
              <div class="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  alt="Cyber Security Tech"
                  class="w-full h-full object-cover grayscale"
                />
              </div>
              <!-- 3D Floating Icons -->
              <div
                v-motion
                :animate="{ y: [0, -10, 0], transition: { duration: 3000, repeat: Infinity } }"
                class="relative z-10 flex flex-col items-center"
              >
                <Server class="w-24 h-24 text-[#38BDF8]/80 mb-4" />
                <div class="flex gap-4">
                  <Database class="w-8 h-8 text-[#38BDF8]/40" />
                  <Cpu class="w-8 h-8 text-[#38BDF8]/40" />
                  <ShieldCheck class="w-8 h-8 text-[#38BDF8]/40" />
                </div>
              </div>
              <!-- Radar Line -->
              <div
                v-motion
                :animate="{ rotate: 360, transition: { duration: 10000, repeat: Infinity, ease: 'linear' } }"
                class="absolute inset-[-50%] bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent"
              />
            </div>
          </div>

          <!-- Right: Metrics -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[32px] font-bold text-white mb-12">核心防御数据指标</h2>

            <div class="space-y-16">
              <div>
                <div class="text-[60px] font-black text-[#38BDF8] leading-none mb-4">T级</div>
                <div class="text-[18px] font-bold text-[#E5E7EB] mb-2 uppercase tracking-widest">DDoS 防护带宽</div>
                <p class="text-[#9CA3AF] text-[15px] leading-relaxed max-w-[450px]">
                  平台部署分布式流量清洗中心，可瞬间抵御大规模 DDoS 攻击，确保在复杂网络环境下业务依然坚如磐石。
                </p>
              </div>

              <div>
                <div class="text-[60px] font-black text-white leading-none mb-4">99.99%</div>
                <div class="text-[18px] font-bold text-[#E5E7EB] mb-2 uppercase tracking-widest">系统高可用性 (SLA)</div>
                <p class="text-[#9CA3AF] text-[15px] leading-relaxed max-w-[450px]">
                  多地三中心集群架构，实现毫秒级自动容灾切换，全天候保障您的托运业务流程永不中断。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 📜 Section C: Privacy Compliance -->
    <section class="py-24 bg-[#006EFF]/5 border-y border-white/5">
      <div class="container mx-auto max-w-[1000px] px-4 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :visibleOnce="true"
        >
          <h2 class="text-[32px] font-bold text-white mb-8">恪守《个人信息保护法》合规底线</h2>
          <p class="text-[#D1D5DB] text-[18px] leading-relaxed mb-16 max-w-[800px] mx-auto">
            地理位置数据仅用于运输追踪与安全风控。车拖车建立严格的数据访问控制体系（RBAC），敏感数据二次加密且阅后即焚，任何权限访问均有日志审计，确保隐私安全受控。
          </p>

          <div class="flex flex-wrap justify-center gap-16 md:gap-24 opacity-60">
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 border border-white/20 rounded-2xl flex items-center justify-center">
                <ShieldCheck class="w-10 h-10 text-white" />
              </div>
              <div class="text-[14px] font-bold text-white/80 uppercase tracking-widest">ISO 27001</div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 border border-white/20 rounded-2xl flex items-center justify-center">
                <div class="text-[18px] font-black text-white">DJCP</div>
              </div>
              <div class="text-[14px] font-bold text-white/80 uppercase tracking-widest">等保三级</div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 border border-white/20 rounded-2xl flex items-center justify-center">
                <Globe class="w-10 h-10 text-white" />
              </div>
              <div class="text-[14px] font-bold text-white/80 uppercase tracking-widest">GDPR Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 📞 Section D: Footer CTA (Blends into Global Footer) -->
    <section class="py-24 bg-[#020617] relative">
      <div class="container mx-auto max-w-[1200px] px-4 text-center">
        <h2 class="text-[32px] font-bold text-white mb-10">为您的汽车物流供应链筑起数字长城</h2>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            @click="navigateToContact"
            class="h-16 px-10 rounded-2xl bg-[#006EFF] hover:bg-[#0058CC] border-none font-bold text-[18px] shadow-xl shadow-blue-500/10"
          >
            申请安全评估报告
          </Button>
          <Button class="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5 font-bold text-[18px] bg-transparent text-white">
            <Mail class="w-5 h-5 mr-3" />
            安全咨询：tech@chetuoche.com
          </Button>
        </div>
        <p class="mt-8 text-white/30 text-[14px]">
          © 2019-2025 车拖车 (CheTuoChe) 信息安全实验室 | 技术团队 7x24 小时应急响应
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  ChevronRight,
  ShieldCheck,
  Lock,
  ShieldAlert,
  Cpu,
  Server,
  Database,
  Globe,
  Mail,
  Fingerprint,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const navigateToSolutions = () => {
  router.push('/solutions')
}

const navigateToContact = () => {
  router.push('/contact')
}

const pillars = [
  {
    icon: Fingerprint,
    title: '身份认证安全',
    desc: '承运司机与货主双向实名验真，集成公安部数据库接口，动态人脸核身确保操作人真实性。',
  },
  {
    icon: Lock,
    title: '数据链路加密',
    desc: '全链路 TLS 1.3 高强度加密传输，数据库采用国密 SM4 算法存储，严格执行订单数据脱敏机制。',
  },
  {
    icon: ShieldAlert,
    title: '智能风控系统',
    desc: '自研 AI 风控模型，实时识别刷单、骗运等高危行为，7x24 小时自动阻断各类恶意攻击请求。',
  },
]
</script>
