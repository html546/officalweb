<template>
  <div class="bg-[#F8F9FB] min-h-screen font-['Noto_Sans_SC']">
    <!-- 1. Hero Section (Industrial Style) -->
    <section class="relative w-full h-[500px] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1679561159990-bbf4394db78f?q=80&w=2000" 
          alt="CheTuoChe Wrecker Manufacturing" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/90 via-[#0B2747]/60 to-transparent" />
      </div>

      <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
        <!-- Breadcrumb - Top Left Fixed -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
          <button @click="navigateToHome" class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0">首页</button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">清障车销售</span>
        </div>

        <div class="max-w-[800px] pt-16 px-4 lg:px-0">
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="text-[40px] leading-[1.2] font-bold text-white mb-6"
          >
            车拖车装备制造：<br />
            源头工厂直销，赋能运力升级
          </h1>
          
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-[18px] text-white/90 leading-relaxed mb-10 max-w-[640px]"
          >
            山东临沂 / 湖北随州两大生产基地，年产 1500 台。购车即享平台优选订单权益，助您开启高效物流事业。
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
            class="flex flex-wrap gap-4"
          >
            <Button 
              @click="scrollToForm"
              class="h-14 px-10 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] border-none shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              获取底盘报价
            </Button>
            <Button 
              @click="scrollToForm"
              class="h-14 px-10 rounded-full bg-transparent border-white text-white hover:bg-white/10 font-bold text-[18px] cursor-pointer"
            >
              查看金融方案
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Product Showcase -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">热销车型系列</h2>
          <div class="w-16 h-1 bg-[#006EFF] mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Truck 1 -->
          <ProductCard 
            image="https://images.unsplash.com/photo-1742069028629-790f9d5b014b?q=80&w=1000"
            title="3吨蓝牌一拖二清障车"
            tag="C证可开 / 进城无忧"
            specs="轴距 3300mm | 载重 3吨 | 适合城市救援"
            @inquire="scrollToForm"
          />
          <!-- Truck 2 -->
          <ProductCard 
            image="https://images.unsplash.com/photo-1531061972109-7a54a01c8088?q=80&w=1000"
            title="全落地液压板清障车"
            tag="豪车/超跑专用"
            specs="零角度上车 | 載重 4-5吨 | 适合长途专车"
            @inquire="scrollToForm"
          />
          <!-- Truck 3 -->
          <ProductCard 
            image="https://images.unsplash.com/photo-1657486233645-f0f71d4d7805?q=80&w=1000"
            title="厢式运输车 (封闭式)"
            tag="高价值/保密运输"
            specs="全封闭结构 | 气囊减震 | 适合巡展/赛车"
            @inquire="scrollToForm"
          />
        </div>
      </div>
    </section>

    <!-- 3. Manufacturing Strength -->
    <section class="bg-[#0B2747] py-24 text-white overflow-hidden">
      <div class="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row gap-16 items-center">
        <div class="flex-1">
          <h2 class="text-[32px] font-bold mb-12">硬核智造实力</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <StatItem :icon="Factory" value="2 大" label="生产基地 (临沂/随州)" />
            <StatItem :icon="Truck" value="1500 台" label="年产能规模" />
            <StatItem :icon="Award" value="20+" label="全国销售服务点" />
            <StatItem :icon="ShieldCheck" value="100%" label="原厂售后保障" />
          </div>
        </div>
        <div class="flex-1 relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1584291527905-f930791fb1ce?q=80&w=1000" alt="Service Network Map" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-[#006EFF]/10 mix-blend-overlay" />
          </div>
          <!-- Decorative Pulse Points -->
          <div class="absolute top-[40%] left-[60%] w-3 h-3 bg-[#006EFF] rounded-full animate-ping" />
          <div class="absolute top-[50%] left-[45%] w-3 h-3 bg-[#006EFF] rounded-full animate-ping delay-100" />
        </div>
      </div>
    </section>

    <!-- 4. Trust Bar - Chassis Partners -->
    <section class="py-16 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <h3 class="text-center text-[#0B2747]/60 text-[14px] font-bold tracking-widest uppercase mb-10">战略合作品牌底盘</h3>
        <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale opacity-60 hover:opacity-100 transition-all">
          <PartnerLogo name="FOTON 福田" />
          <PartnerLogo name="SINOTRUK 中国重汽" />
          <PartnerLogo name="JAC 江淮汽车" />
          <PartnerLogo name="FAW 一汽解放" />
          <PartnerLogo name="ISUZU 五十铃" />
        </div>
      </div>
    </section>

    <!-- 5. Buy & Join Ecosystem -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">购车+入驻：开启无忧运营模式</h2>
          <div class="w-16 h-1 bg-[#006EFF] mx-auto" />
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <!-- Connector Lines (Desktop) -->
          <div class="hidden md:block absolute top-[40%] left-[30%] right-[30%] h-[1px] border-t border-dashed border-[#006EFF]/30 z-0" />
          
          <EcosystemStep 
            number="01"
            :icon="Truck"
            title="优惠购车"
            desc="享受工厂直销价与专属金融分期方案。"
          />
          <EcosystemStep 
            number="02"
            :icon="BadgeCheck"
            title="极速入驻"
            desc="绿色通道认证，免费赠送车贴与接单装备。"
          />
          <EcosystemStep 
            number="03"
            :icon="TrendingUp"
            title="流量倾斜"
            desc='系统打标"自营运力"，优先派发高价值订单。'
          />
        </div>
      </div>
    </section>

    <!-- 6. Lead Gen Form -->
    <section id="sales-lead-form" class="py-16 bg-[#F0F7FF] border-y border-[#006EFF]/10">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-900/5 flex flex-col lg:flex-row items-center gap-10">
          <div class="lg:w-1/3">
            <h3 class="text-[24px] font-bold text-[#0B2747] mb-2">获取 2026 最新报价单</h3>
            <p class="text-[#0B2747]/60">提交您的意向车型，销售经理将在 1 小时内为您提供底盘报价及金融方案。</p>
            <div class="mt-6 flex items-center gap-2 text-[#006EFF] font-bold">
              <Phone class="w-5 h-5" /> 138-XXXX-XXXX (板车销售热线)
            </div>
          </div>
          
          <form @submit.prevent="handleFormSubmit" class="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input required type="text" placeholder="您的姓名" v-model="formData.name" class="h-14 px-6 rounded-xl border border-gray-200 focus:border-[#006EFF] focus:ring-1 focus:ring-[#006EFF] outline-none" />
            <input required type="tel" placeholder="联系电话" v-model="formData.phone" class="h-14 px-6 rounded-xl border border-gray-200 focus:border-[#006EFF] focus:ring-1 focus:ring-[#006EFF] outline-none" />
            <select v-model="formData.vehicleType" class="h-14 px-6 rounded-xl border border-gray-200 focus:border-[#006EFF] focus:ring-1 focus:ring-[#006EFF] outline-none bg-white">
              <option>意向车型</option>
              <option>3吨蓝牌一拖二</option>
              <option>全落地液压板</option>
              <option>厢式运输车</option>
            </select>
            <Button type="submit" class="h-14 rounded-xl bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold border-none cursor-pointer">
              <span v-if="formSubmitted">
                <CheckCircle2 />
              </span>
              <span v-else>立即咨询销售经理</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight, Factory, Truck, Award, ShieldCheck, TrendingUp, BadgeCheck, Phone, CheckCircle2 } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ProductCard from '@/components/truck-sales/ProductCard.vue'
import StatItem from '@/components/truck-sales/StatItem.vue'
import PartnerLogo from '@/components/truck-sales/PartnerLogo.vue'
import EcosystemStep from '@/components/truck-sales/EcosystemStep.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const formSubmitted = ref(false)
const formData = ref({
  name: '',
  phone: '',
  vehicleType: '意向车型'
})

const scrollToForm = () => {
  document.getElementById('sales-lead-form')?.scrollIntoView({ behavior: 'smooth' })
}

const handleFormSubmit = () => {
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
  }, 3000)
}

const navigateToHome = () => {
  props.setActiveId?.('home')
}
</script>
