<template>
  <article class="bg-white min-h-screen font-['Noto_Sans_SC']">
    <!-- 1. Hero Section: The Grand Ecosystem Vision -->
    <section class="relative h-[600px] overflow-hidden bg-[#0B2747]">
      <!-- Background Map Overlay -->
      <div class="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1712508818413-76a31994b525" 
          alt="Global Logistics Network" 
          class="w-full h-full object-cover opacity-20" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B2747]/40 to-[#0B2747]" />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 relative z-10 text-center h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <nav class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/60">
          <button @click="navigateToHome" class="hover:text-white transition-colors bg-transparent border-none cursor-pointer">首页</button>
          <ChevronRight class="w-3 h-3" />
          <span class="text-white font-bold">生态合作</span>
        </nav>

        <h1 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-[48px] md:text-[56px] font-bold text-white mb-6 leading-tight"
        >
          共建数字化运力生态<br />
          驱动万亿物流新增长
        </h1>
        
        <p 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[18px] text-white/80 max-w-[800px] mx-auto mb-12 leading-relaxed"
        >
          车拖车生态平台面向 运力端、渠道端、消费端 全面开放。无论您是车队、创业者还是主机厂，都能在这里找到属于您的增长引擎。
        </p>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="flex flex-wrap justify-center gap-6"
        >
          <button 
            @click="scrollToForm"
            class="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all cursor-pointer"
          >
            我是运力方 (车队/救援)
          </button>
          <button 
            @click="navigateToPartnerRecruit"
            class="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all cursor-pointer"
          >
            我是渠道方 (城市合伙人)
          </button>
          <button 
            @click="scrollToForm"
            class="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all cursor-pointer"
          >
            我是需求方 (大客户)
          </button>
          <button 
            @click="openRescueApp"
            class="px-8 py-4 rounded-2xl border border-white bg-transparent text-white font-bold hover:bg-white hover:text-[#0B2747] transition-all flex items-center gap-2 cursor-pointer"
          >
            <LogIn class="w-5 h-5" />
            企业/救援公司登陆
          </button>
        </div>
      </div>
    </section>

    <!-- 2. Section A: Capacity Ecosystem (运力生态) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">加入运力网络：让车轮转动更有价值</h2>
          <div class="w-20 h-1 bg-[#006EFF] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Carrier Card -->
          <CapacityCard 
            image="https://images.unsplash.com/photo-1569478676506-ff9dc916613f"
            :icon="Truck"
            title="板车/承运商"
            headline="海量货源，极速结算"
            desc="直连百万级一手订单，支持空车配货。购买平台直销板车享金融支持。"
            tag="购车入驻闭环"
            btn-text="申请车队入驻"
            @click="scrollToForm"
          />
          <!-- Rescue Card -->
          <CapacityCard 
            image="https://images.unsplash.com/photo-1572299486328-2578c37ad440"
            :icon="LifeBuoy"
            title="救援服务商"
            headline="闲置运力，高效变现"
            desc="接入车拖车救援调度网络，盘活空闲时段，增加额外救援收入。"
            btn-text="救援入驻"
            @click="scrollToForm"
          />
          <!-- Valet Card -->
          <CapacityCard 
            image="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670"
            :icon="UserCheck"
            title="专业代驾"
            headline="最后一公里接驳"
            desc="承接大板车末端取送车任务，弹性工作，订单稳定。"
            btn-text="注册代驾"
            @click="scrollToForm"
          />
        </div>
      </div>
    </section>

    <!-- 3. Section B: Channel Ecosystem (渠道生态) -->
    <section class="py-24 bg-gradient-to-r from-[#006EFF] to-[#004DB3] text-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <!-- Left Column: Policy -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[36px] font-bold mb-8">城市合伙人计划：零门槛共赢拖车蓝海</h2>
            <div class="space-y-10">
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-[22px] font-bold mb-3">3大核心权益，全维扶持</h3>
                  <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-white/80">
                      <Check class="w-4 h-4 text-[#FF6B00]" />
                      <span><strong>零费准入：</strong>无需加盟费，全平台业务免费开放。</span>
                    </li>
                    <li class="flex items-center gap-3 text-white/80">
                      <Check class="w-4 h-4 text-[#FF6B00]" />
                      <span><strong>全维扶持：</strong>提供店面设计、系统培训及市场物料支持。</span>
                    </li>
                    <li class="flex items-center gap-3 text-white/80">
                      <Check class="w-4 h-4 text-[#FF6B00]" />
                      <span><strong>股权激励：</strong>年度成单达标可转为公司股权。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button 
                @click="navigateToPartnerRecruit"
                class="h-14 px-10 bg-white text-[#006EFF] hover:bg-white/90 rounded-2xl font-bold text-[18px] border-none shadow-xl cursor-pointer"
              >
                查看合伙人政策详情 <ChevronRight class="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <!-- Right Column: Rebate Table -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
            class="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 p-10 shadow-2xl"
          >
            <h4 class="text-[20px] font-bold mb-8 text-center uppercase tracking-widest">阶梯返利模型 (Rebate Model)</h4>
            <div class="space-y-4">
              <div 
                v-for="(item, idx) in rebateTiers" 
                :key="idx"
                class="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div>
                  <div class="text-[14px] text-white/60 mb-1">{{ item.desc }}</div>
                  <div class="text-[20px] font-black">{{ item.range }}</div>
                </div>
                <div class="text-right">
                  <div class="text-[14px] text-white/60 mb-1">返利比例</div>
                  <div class="text-[32px] font-black text-[#FF6B00]">{{ item.rebate }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Section C: Client Ecosystem (需求生态) -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <!-- Image Left -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible="{ opacity: 1, scale: 1 }"
            :visibleOnce="true"
            class="relative rounded-[40px] overflow-hidden shadow-2xl border border-white"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1604090261928-2431109672e4" 
              alt="Logistics Dashboard" 
              class="w-full h-full object-cover" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/60 to-transparent" />
            <div class="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white max-w-[320px]">
              <div class="text-[12px] font-bold uppercase tracking-wider mb-2">B2B 企业面板</div>
              <div class="text-[16px] font-bold">全流程轨迹可视化，数字化对账。</div>
            </div>
          </div>

          <!-- Text Right -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">大客户解决方案</h2>
            <h3 class="text-[22px] font-bold text-[#006EFF] mb-6">为企业构建可视化的数字物流底座</h3>
            
            <div class="space-y-12">
              <div class="flex gap-6">
                <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Rocket class="w-7 h-7 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[18px] font-bold text-[#0B2747] mb-2">降本增效</h4>
                  <p class="text-gray-500 text-[15px]">扁平化调度去除中间商，物流成本降低 20%。通过 AI 路径规划，大幅缩减在途时间。</p>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck class="w-7 h-7 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[18px] font-bold text-[#0B2747] mb-2">金融级安全</h4>
                  <p class="text-gray-500 text-[15px]">国家等保三级认证，数据隐私 0 泄露。每一单均有亿元级物流责任险覆盖。</p>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Building2 class="w-7 h-7 text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-[18px] font-bold text-[#0B2747] mb-2">定制化服务</h4>
                  <p class="text-gray-500 text-[15px]">提供 API 系统直接对接与专属客服团队。支持主机厂、4S店及大型二手车商的全国联运业务。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Section D: Ecosystem Support (赋能体系) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">全链路生态赋能</h2>
          <p class="text-gray-400">不仅仅是撮合，我们提供全方位的成长基石</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <SupportItem 
            :icon="Factory"
            title="装备制造"
            image="https://images.unsplash.com/photo-1720036236694-d0a231c52563"
            desc="自有板车工厂年产1500台，提供购车金融方案与融资租赁支持。"
          />
          <SupportItem 
            :icon="Coffee"
            title="司机之家"
            image="https://images.unsplash.com/photo-1721054940072-c1b1725afd03"
            desc="全国 500+ 线下驿站，提供淋浴、维修与补给，是司机的坚实后盾。"
          />
          <SupportItem 
            :icon="Lock"
            title="科技风控"
            image="https://images.unsplash.com/photo-1680992045535-95919d4971a9"
            desc="T级 DDoS 防护与双向实名认证，确保每一笔交易数据不可篡改。"
          />
          <SupportItem 
            :icon="GraduationCap"
            title="司机课堂"
            image="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9"
            desc="标准化服务培训与岗前考核体系，帮助合作伙伴提升核心服务分。"
          />
        </div>
      </div>
    </section>

    <!-- 6. Section E: Unified Entry Form -->
    <section id="coop-form" class="py-24 bg-[#0B2747] relative overflow-hidden">
      <!-- Abstract shapes -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006EFF]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div class="container mx-auto max-w-[900px] px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold text-white mb-4">立即加入生态网络</h2>
          <p class="text-white/40">提交申请后，我们将在 10 分钟内由专属顾问进行回访响应</p>
        </div>

        <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div class="flex bg-[#F8F9FB] p-1.5 rounded-2xl mb-10">
            <button
              v-for="tab in tabs"
              :key="tab.value"
              @click="activeTab = tab.value"
              :class="`flex-1 py-4 rounded-xl text-[15px] font-bold transition-all ${activeTab === tab.value ? 'bg-[#006EFF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-gray-600'}`"
            >
              {{ tab.label }}
            </button>
          </div>

          <form class="space-y-8" @submit.prevent="handleFormSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[14px] font-bold text-[#0B2747]">姓名/负责人</label>
                <input required type="text" placeholder="请输入您的姓名" v-model="formData.name" class="w-full h-14 px-6 rounded-xl bg-[#F8F9FB] border-none focus:ring-2 focus:ring-[#006EFF] transition-all" />
              </div>
              <div class="space-y-2">
                <label class="text-[14px] font-bold text-[#0B2747]">联系电话</label>
                <input required type="tel" placeholder="请输入您的电话" v-model="formData.phone" class="w-full h-14 px-6 rounded-xl bg-[#F8F9FB] border-none focus:ring-2 focus:ring-[#006EFF] transition-all" />
              </div>
            </div>

            <div v-if="activeTab === 'partner'" class="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
              <input type="checkbox" id="has-store" v-model="formData.hasStore" class="w-5 h-5 accent-[#FF6B00]" />
              <label for="has-store" class="text-[14px] font-bold text-[#0B2747]">已有本地线下门店或办公室？</label>
            </div>

            <div v-if="activeTab === 'fleet'" class="space-y-2">
              <label class="text-[14px] font-bold text-[#0B2747]">现有车辆规模</label>
              <select v-model="formData.fleetSize" class="w-full h-14 px-6 rounded-xl bg-[#F8F9FB] border-none focus:ring-2 focus:ring-[#006EFF] appearance-none transition-all">
                <option>1-5 台</option>
                <option>6-20 台</option>
                <option>20-50 台</option>
                <option>50 台以上</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-[14px] font-bold text-[#0B2747]">备注/留言</label>
              <textarea placeholder="请填写您的合作意向或目前经营情况..." v-model="formData.message" class="w-full h-32 p-6 rounded-xl bg-[#F8F9FB] border-none focus:ring-2 focus:ring-[#006EFF] transition-all resize-none" />
            </div>

            <Button type="submit" class="w-full h-16 rounded-2xl bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[20px] border-none shadow-xl shadow-orange-500/20 cursor-pointer">
              <span v-if="formSubmitted" class="flex items-center gap-2">
                <CheckCircle2 /> 提交成功，我们将尽快联系您
              </span>
              <span v-else>提交申请</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  ChevronRight, 
  Truck, 
  LifeBuoy, 
  UserCheck, 
  TrendingUp, 
  Check, 
  Rocket, 
  ShieldCheck, 
  Building2, 
  Factory, 
  Coffee, 
  Lock, 
  GraduationCap, 
  LogIn, 
  CheckCircle2
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import CapacityCard from '@/components/partners/CapacityCard.vue'
import SupportItem from '@/components/partners/SupportItem.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const activeTab = ref<'fleet' | 'partner' | 'client'>('fleet')
const formSubmitted = ref(false)
const formData = ref({
  name: '',
  phone: '',
  hasStore: false,
  fleetSize: '',
  message: ''
})

const tabs = [
  { value: 'fleet' as const, label: '我是车队' },
  { value: 'partner' as const, label: '我是合伙人' },
  { value: 'client' as const, label: '我是大客户' }
]

const rebateTiers = [
  { range: "≤5万", rebate: "30%", desc: "初始起步期" },
  { range: "5-10万", rebate: "40%", desc: "业务成长期" },
  { range: "10-20万", rebate: "50%", desc: "深度合作期" },
  { range: ">30万", rebate: "60%", desc: "核心战略期" }
]

const scrollToForm = () => {
  document.getElementById('coop-form')?.scrollIntoView({ behavior: 'smooth' })
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

const navigateToPartnerRecruit = () => {
  props.setActiveId?.('partner-recruit')
}

const openRescueApp = () => {
  window.open('https://rescue.ctcapp.com/rescue-app/#/entrance', '_blank')
}
</script>
