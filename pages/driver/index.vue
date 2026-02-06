<template>
  <div class="bg-white min-h-screen font-['Noto_Sans_SC']">
    <!-- 1. Hero Section (High Impact) -->
    <section class="relative w-full h-[500px] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1688619101855-396f4f06710e?q=80&w=2000" 
          alt="CheTuoChe Professional Driver" 
          class="w-full h-full object-cover"
        />
        <!-- Overlay: Slight dark gradient on the left text area -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/80 via-[#0B2747]/40 to-transparent" />
      </div>

      <div class="container mx-auto max-w-[1200px] relative z-10 px-4 h-full flex flex-col justify-center">
        <!-- Breadcrumb - Top Left -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
          <button @click="navigateToHome" class="hover:text-white transition-colors cursor-pointer bg-transparent border-none">首页</button>
          <ChevronRight class="w-4 h-4" />
          <button @click="navigateToPartners" class="hover:text-white transition-colors cursor-pointer bg-transparent border-none">合作伙伴</button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white">司机入驻</span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="max-w-[700px]"
        >
          <h1 class="text-[40px] font-bold text-white leading-[1.2] mb-6">
            车拖车司机端：<br />全国最大的板车司机接单平台
          </h1>
          <p class="text-[18px] text-white/90 leading-relaxed mb-10 max-w-[600px]">
            汇聚 38 万+ 认证司机，已完成 2000 万次托运。海量真实货源，自动听单，极速结算。
          </p>
          <div class="flex gap-4">
            <Button class="h-14 px-10 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] border-none shadow-lg shadow-orange-500/20 cursor-pointer">
              下载司机端 APP
            </Button>
            <Button 
              @click="scrollToStandards"
              class="h-14 px-10 rounded-full border-white/40 text-white hover:bg-white hover:text-[#0B2747] hover:border-white font-bold text-[18px] transition-all cursor-pointer bg-transparent"
            >
              查看入驻标准
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. App Download & Stats Bar (Trust) -->
    <section class="bg-[#0B2747] py-12 text-white border-b border-white/10">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <StatItem value="38 万+" label="认证司机" />
          <StatItem value="2000 万+" label="累计托运订单" />
          <StatItem value="90%+" label="全国区域覆盖" />
          <div class="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div class="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-1">
              <QrCode class="w-full h-full text-[#0B2747]" />
            </div>
            <div>
              <div class="text-[14px] font-bold mb-2">扫码下载</div>
              <div class="flex gap-3">
                <AppleStoreIcon class="w-4 h-4" />
                <AndroidIcon class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Why Join Us? (Feature Grid) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">车拖车司机端核心权益</h2>
          <div class="w-16 h-1 bg-[#006EFF] mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            :icon="Zap"
            title="自动接单"
            desc="设置常跑路线，系统自动匹配优质订单，告别空驶，提高效率。"
          />
          <FeatureCard 
            :icon="Wallet"
            title="极速结算"
            desc="运费快速到账，支持提现，账目清晰透明，保障每一分血汗钱。"
          />
          <FeatureCard 
            :icon="GraduationCap"
            title="司机学堂"
            desc="提供标准化操作培训，提升服务技能，让接单过程更专业更自信。"
          />
          <FeatureCard 
            :icon="ShieldCheck"
            title="保险服务"
            desc="一键购买运输险，为每一单托运保驾护航，人车货全方位保障。"
          />
          <FeatureCard 
            :icon="Tag"
            title="车贴权益"
            desc="认证品牌车贴，享受平台流量倾斜，系统优先派单，接单快人一步。"
          />
          <FeatureCard 
            :icon="Truck"
            title="买卖板车"
            desc="平台内直接交易专业板车，经过官方认证审核，二手车买卖更放心。"
          />
        </div>
      </div>
    </section>

    <!-- 4. App Interface Showcase (Visual Proof) -->
    <section class="py-24 bg-[#F8F9FB] overflow-hidden">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <!-- Left: Phone Mockups -->
          <div class="lg:w-1/2 relative">
            <div class="relative z-10 w-[300px] mx-auto">
              <img src="https://images.unsplash.com/photo-1509576931792-214960705f8a?q=80&w=1000" alt="App Mockup" class="rounded-[40px] shadow-2xl border-[8px] border-[#0B2747]" />
              <div class="absolute -bottom-6 -right-12 w-[240px] hidden md:block">
                 <img src="https://images.unsplash.com/photo-1509576931792-214960705f8a?q=80&w=1000" alt="App Mockup 2" class="rounded-[30px] shadow-2xl border-[6px] border-[#0B2747] opacity-90 scale-90" />
              </div>
            </div>
            <!-- Background Decor -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#006EFF]/5 rounded-full blur-3xl -z-10" />
          </div>

          <!-- Right: Feature List -->
          <div class="lg:w-1/2">
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">功能强大的接单神器</h2>
            <div class="space-y-8">
              <ShowcaseItem 
                :icon="Smartphone"
                title="听单模式"
                desc="智能语音播报订单详情，无需低头看手机，开车也能安全找货。"
              />
              <ShowcaseItem 
                :icon="UserCheck"
                title="实名认证"
                desc="人脸识别+车辆多维审核，构建诚信运力网络，接单更真实更有保障。"
              />
              <ShowcaseItem 
                :icon="Truck"
                title="救援入驻"
                desc="专为拖车司机开放救援订单入口，一键切换业务模式，增收更容易。"
              />
            </div>
            <Button class="mt-12 h-14 px-10 rounded-xl bg-[#0B2747] hover:bg-[#1a3a5a] text-white font-bold cursor-pointer">
              立即下载体验
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Driver Academy & Standards (Education) -->
    <section id="driver-standards" class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">司机课堂：标准化作业规范</h2>
          <p class="text-[#0B2747]/60">专业化的服务流程是高收入的基石</p>
        </div>

        <div class="relative max-w-[1000px] mx-auto py-12">
          <!-- Horizontal Connecting Line -->
          <div class="absolute top-[80px] left-[50px] right-[50px] h-[2px] bg-[#006EFF]/20 hidden md:block" />
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepItem 
              :icon="Phone"
              title="接单"
              desc="确认细节，主动联系"
            />
            <StepItem 
              :icon="Camera"
              title="验车"
              desc="360°环车拍摄，共同确认"
            />
            <StepItem 
              :icon="Truck"
              title="运输"
              desc="四轮捆绑，平稳驾驶"
            />
            <StepItem 
              :icon="CheckCircle"
              title="交车"
              desc="共同复验，证件归还"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Driver's Home (Station Network) -->
    <section class="py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-6">司机之家：您的路上补给站</h2>
            <p class="text-[#0B2747]/70 text-[18px] leading-relaxed mb-10">
              全国 500+ 服务驿站，提供免费洗漱、24h 休息区、Wi-Fi 及车辆自助检测，让您的运输之路不再孤独。
            </p>
            <div class="flex flex-wrap gap-3 mb-10">
              <TagItem :icon="ShowerHead" label="免费淋浴" />
              <TagItem :icon="Coffee" label="24h 休息区" />
              <TagItem :icon="Smartphone" label="免费 Wi-Fi" />
              <TagItem :icon="Wrench" label="自助检测" />
            </div>
            <Button class="border-[#006EFF] text-[#006EFF] font-bold h-12 px-8 rounded-full hover:bg-[#006EFF] hover:text-white transition-all cursor-pointer bg-transparent">
              查询附近驿站
            </Button>
          </div>
          <div class="lg:w-1/2 rounded-[32px] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1671822571472-8a57bfc7e194?q=80&w=1000" alt="Driver Station" class="w-full h-[400px] object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  ChevronRight, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  GraduationCap, 
  Tag, 
  Truck,
  Phone,
  Camera,
  CheckCircle,
  Coffee,
  ShowerHead,
  Wrench,
  QrCode,
  UserCheck
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import StatItem from '@/components/driver/StatItem.vue'
import FeatureCard from '@/components/driver/FeatureCard.vue'
import ShowcaseItem from '@/components/driver/ShowcaseItem.vue'
import StepItem from '@/components/driver/StepItem.vue'
import TagItem from '@/components/driver/TagItem.vue'
import AppleStoreIcon from '@/components/driver/AppleStoreIcon.vue'
import AndroidIcon from '@/components/driver/AndroidIcon.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const scrollToStandards = () => {
  document.getElementById('driver-standards')?.scrollIntoView({ behavior: 'smooth' })
}

const navigateToHome = () => {
  props.setActiveId?.('home')
}

const navigateToPartners = () => {
  props.setActiveId?.('partners')
}
</script>
