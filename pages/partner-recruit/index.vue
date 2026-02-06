<template>
  <div class="bg-white min-h-screen font-['Noto_Sans_SC'] text-[#0B2747]">

    <!-- Hero Section -->
    <section class="relative w-full h-[550px] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565688335719-d0297c355556?q=80&w=1500"
          alt="Business Opportunity"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/90 to-[#0B2747]/60" />
      </div>

      <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
          <button
            @click="navigateToHome"
            class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            首页
          </button>
          <ChevronRight class="w-4 h-4" />
          <span class="hover:text-white transition-colors">
            生态合作
          </span>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">
            城市合伙人招募
          </span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="max-w-[800px] pt-16 px-4 lg:px-0"
        >
          <h1 class="text-[48px] font-bold text-white leading-[1.2] mb-6">
            共享万亿级拖车蓝海：
            <br />
            车拖车城市合伙人招募计划
          </h1>
          <p class="text-[24px] text-white/90 font-medium mb-12">
            零门槛准入 · 全维度扶持 · 收益上不封顶
          </p>

          <div class="flex flex-wrap gap-12 mb-12">
            <div class="flex flex-col">
              <span class="text-[32px] font-black text-[#FF6B00]">
                0 元
              </span>
              <span class="text-white/80 text-[16px]">
                品牌加盟费
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[32px] font-black text-[#FF6B00]">
                90%
              </span>
              <span class="text-white/80 text-[16px]">
                最高返佣比例
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-[32px] font-black text-[#FF6B00]">
                100%
              </span>
              <span class="text-white/80 text-[16px]">
                业务免费开放
              </span>
            </div>
          </div>

          <Button
            @click="scrollToForm"
            class="h-16 px-12 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[20px] shadow-[0_10px_30px_rgba(255,107,0,0.4)] transition-all hover:-translate-y-1 border-none cursor-pointer"
          >
            立即申请加入
          </Button>
        </div>
      </div>
    </section>

    <!-- Core Policy Highlights -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[36px] font-bold text-[#0B2747] mb-4">
            打破行业壁垒，三大核心权益
          </h2>
          <div class="w-20 h-1.5 bg-[#006EFF] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard
            :icon="Unlock"
            title="零费准入"
            desc="免费解锁全平台业务权限，低成本开启物流创业之路。"
            color="blue"
          />
          <HighlightCard
            :icon="HeartHandshake"
            title="全维扶持"
            desc="总部共担推广成本，提供从团队搭建到物料支持的一站式服务。"
            color="blue"
          />
          <HighlightCard
            :icon="TrendingUp"
            title="阶梯式高返佣"
            desc="业绩越高比例越高，收益回报无上限。"
            color="orange"
          />
        </div>
      </div>
    </section>

    <!-- Profit Model (Simplified Calculator) -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold mb-4">
            多重收益管道，盈利空间无上限
          </h2>
          <p class="text-[#4B5563]">
            透明的分润机制，让您的每一分努力都有超额回报。
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Side: Input & Result (Clean UI) -->
          <div class="space-y-8">
            <!-- Input Area -->
            <div class="bg-white p-10 lg:p-12 rounded-[40px] shadow-sm border border-gray-100">
              <div class="flex justify-between items-center mb-10">
                <h3 class="text-[20px] font-bold text-[#0B2747]">
                  预估月成交额 (GMV)
                </h3>
                <div class="text-[32px] font-black text-[#0B2747]">
                  ¥{{ salesValue[0].toLocaleString() }}
                </div>
              </div>

              <Slider
                :model-value="salesValue"
                @update:model-value="salesValue = $event"
                :max="500000"
                :step="5000"
                class="py-4"
              />
              <div class="flex justify-between text-[12px] text-gray-400 mt-4">
                <span>0</span>
                <span>¥100,000</span>
                <span>¥200,000</span>
                <span>¥300,000</span>
                <span>¥400,000</span>
                <span>¥500,000+</span>
              </div>
            </div>

            <!-- Result Cards Area (Horizontal Layout) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Card 1: Rebate Ratio -->
              <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div class="text-[#4B5563] text-[15px] mb-4">
                    当前信息费返佣比例
                  </div>
                  <div class="flex items-baseline gap-2">
                    <div class="text-[56px] font-black text-[#FF6B00] leading-none font-mono">
                      {{ commissionData.rate }}%
                    </div>
                  <div
                    v-if="commissionData.isCloseToNext"
                    v-motion
                    :animate="{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 1500 } }"
                    class="text-[#006EFF]"
                  >
                    <ArrowUpCircle class="w-8 h-8" />
                  </div>
                  </div>
                </div>
                <div class="absolute top-0 right-0 p-4 opacity-5">
                  <TrendingUp class="w-20 h-20" />
                </div>
              </div>

              <!-- Card 2: Estimated Income -->
              <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div class="text-[#4B5563] text-[15px] mb-4">
                    预估月净收入
                  </div>
                  <div class="text-[56px] font-black text-[#FF6B00] leading-none font-mono">
                    ¥
                    {{ Math.round(commissionData.income).toLocaleString() }}
                  </div>
                </div>
                <div class="absolute top-0 right-0 p-4 opacity-5">
                  <Award class="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: Tier Progress Bar (Visual Context) -->
          <div class="bg-[#0B2747] p-10 lg:p-12 rounded-[40px] shadow-sm text-white">
            <h3 class="text-[20px] font-bold mb-10 flex items-center gap-2">
              <ShieldCheck class="text-[#FF6B00] w-6 h-6" />
              返佣等级体系
            </h3>

            <div class="relative space-y-4">
              <!-- Connector Line -->
              <div class="absolute left-[27px] top-6 bottom-6 w-0.5 bg-white/10 z-0" />

              <div
                v-for="(tier, index) in tiers"
                :key="index"
                v-motion
                :initial="false"
                :animate="{
                  backgroundColor: commissionData.tierIndex === index
                    ? tier.isPremium
                      ? 'rgba(255, 215, 0, 0.1)'
                      : 'rgba(0, 110, 255, 0.1)'
                    : 'rgba(0, 110, 255, 0)',
                  borderColor: commissionData.tierIndex === index
                    ? tier.isPremium
                      ? 'rgba(255, 215, 0, 0.3)'
                      : 'rgba(0, 110, 255, 0.3)'
                    : 'rgba(0, 110, 255, 0)',
                  x: commissionData.tierIndex === index ? 12 : 0,
                }"
                :class="`relative z-10 p-5 rounded-2xl flex items-center gap-6 border transition-all ${
                  commissionData.tierIndex === index
                    ? tier.isPremium
                      ? 'bg-[rgba(255,215,0,0.1)] border-[rgba(255,215,0,0.3)]'
                      : 'bg-[rgba(0,110,255,0.1)] border-[rgba(0,110,255,0.3)]'
                    : ''
                }`"
              >
                <div
                  :class="`w-14 h-14 rounded-full flex items-center justify-center font-bold text-[20px] shrink-0 transition-all ${
                    commissionData.tierIndex === index
                      ? tier.isPremium
                        ? 'bg-[#FFD700] text-[#0B2747] scale-110 shadow-[0_0_20px_rgba(255,215,0,0.5)]'
                        : 'bg-[#006EFF] text-white scale-110 shadow-[0_0_20px_rgba(0,110,255,0.4)]'
                      : 'bg-white/10 text-white/40'
                  }`"
                >
                  <Crown v-if="tier.isPremium" class="w-7 h-7" />
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="flex-grow">
                  <div
                    :class="`text-[13px] font-bold uppercase tracking-wider mb-1 ${
                      commissionData.tierIndex === index
                        ? tier.isPremium
                          ? 'text-[#FFD700]'
                          : 'text-[#006EFF]'
                        : 'text-white/30'
                    }`"
                  >
                    {{ tier.label }}
                  </div>
                  <div
                    :class="`text-[18px] font-medium ${
                      commissionData.tierIndex === index ? 'text-white' : 'text-white/60'
                    }`"
                  >
                    成交额 {{ tier.range }}
                  </div>
                </div>
                <div
                  :class="`text-[36px] font-black ${
                    commissionData.tierIndex === index
                      ? tier.isPremium
                        ? 'text-[#FFD700]'
                        : 'text-[#006EFF]'
                      : 'text-white/10'
                  } font-mono`"
                >
                  {{ tier.rate }}
                </div>
              </div>
            </div>

            <div class="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">
              <p class="text-white/60 text-[14px] leading-relaxed">
                <span class="text-[#FF6B00] font-bold">
                  提示：
                </span>
                合伙人业绩每月动态核算。晋升正式代理商后，除了享受
                90%
                顶格返佣，还可获得区域经营权及公司股权期权。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Agent Upgrade (Premium Section) -->
    <section class="py-24 bg-[#0B2747] text-white">
      <div class="container mx-auto max-w-[1000px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold mb-4">
            晋升正式代理商，赢取公司股权
          </h2>
          <p class="text-gray-400 text-[18px]">
            缴纳 10 万加盟费或年度成单达 800
            万，即可升级为核心合伙人。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="text-[48px] font-black text-[#FF6B00] mb-2">
              90%
            </div>
            <div class="text-[18px] font-bold mb-2">
              顶格返佣
            </div>
            <p class="text-gray-400 text-[14px]">
              享受全平台最高级别利润分成，最大化变现能力。
            </p>
          </div>
          <div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Award class="w-12 h-12 text-white mx-auto mb-4" />
            <div class="text-[18px] font-bold mb-2">
              区域独家保护
            </div>
            <p class="text-gray-400 text-[14px]">
              指定区域内唯一正式代理，锁定属地化增量市场。
            </p>
          </div>
          <div class="p-8 rounded-3xl bg-white/5 border border-[#FFD700]/30 hover:bg-white/10 transition-colors">
            <div class="text-[48px] font-black text-[#FFD700] mb-2">
              股权
            </div>
            <div class="text-[18px] font-bold mb-2">
              10万等值期权
            </div>
            <p class="text-gray-400 text-[14px]">
              深度捆绑平台成长，共享未来资本上市红利。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Checklist -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold mb-4">
            准入标准
          </h2>
          <p class="text-[#4B5563]">
            成为合伙人，我们需要您具备以下基础条件
          </p>
        </div>

        <div class="flex flex-col lg:flex-row justify-between gap-12 bg-[#F8F9FB] p-12 rounded-[40px]">
          <CheckItem
            title="主体资格"
            desc="拥有独立法人资格，可合法开具物流类公对公发票。"
          />
          <div class="hidden lg:block w-px bg-gray-200" />
          <CheckItem
            title="硬件设施"
            desc="拥有不低于 60㎡ 的沿街店面或商务办公室，位置交通便利。"
          />
          <div class="hidden lg:block w-px bg-gray-200" />
          <CheckItem
            title="团队配置"
            desc="专职运营及销售团队不少于 5 人，具备基础物流操作经验。"
          />
        </div>
      </div>
    </section>

    <!-- Support System -->
    <section class="py-24 bg-[#F0F7FF]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-20">
          <h2 class="text-[36px] font-bold text-[#0B2747] mb-4">
            您的后盾，车拖车全程护航
          </h2>
          <div class="w-20 h-1.5 bg-[#006EFF] mx-auto rounded-full" />
        </div>

        <div class="space-y-24">
          <SupportRow
            title="全维度人才培养"
            desc="提供涵盖新人入职、大客户开发技巧、数字化订单系统操作等全方位培训，让您的团队快速具备盈利能力。"
            :icon="GraduationCap"
            image="https://images.unsplash.com/photo-1611226103607-72fe64c526ec?q=80&w=1000"
            :reverse="false"
            :items="[
              '每周线上集训',
              '不定期驻场辅导',
              '成功案例拆解',
            ]"
          />
          <SupportRow
            title="品牌赋能与营销支持"
            desc="总部承担主流媒体品牌广告投放。免费提供门店装修设计、宣传海报、落地展架等全套视觉物料支持。"
            :icon="Megaphone"
            image="https://images.unsplash.com/photo-1565688335719-d0297c355556?q=80&w=1500"
            :reverse="true"
            :items="[
              '千万级广告覆盖',
              '门店VI规范设计',
              '地推话术包',
            ]"
          />
          <SupportRow
            title="专属管家式售后服务"
            desc="设立合伙人专属客服通道，协助处理复杂异常订单，24h 响应投诉，让您专注市场开发无后顾之忧。"
            :icon="Headphones"
            image="https://images.unsplash.com/photo-1598585031991-a99408386ab9?q=80&w=1000"
            :reverse="false"
            :items="[
              '理赔绿色通道',
              'VIP专属响应',
              '系统功能定制',
            ]"
          />
        </div>
      </div>
    </section>

    <!-- Success Cases -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold mb-4">
            优秀合伙人风采
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SuccessCard
            image="https://images.unsplash.com/photo-1700954343841-2134b33d569d?q=80&w=1000"
            name="陈先生"
            location="山东·济南"
            quote="从传统物流转型，首月在平台支持下成交额即突破 30 万，纯收入超 20 万。数字化管理真的省心。"
            income="¥20.5W+"
          />
          <SuccessCard
            image="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1000"
            name="林女士"
            location="广东·佛山"
            quote="0加盟费政策给了我创业的勇气。现在团队已经扩招到10人，是本地口碑最好的托运服务站。"
            income="¥15.8W+"
          />
          <SuccessCard
            image="https://images.unsplash.com/photo-1700954343841-2134b33d569d?q=80&w=1000"
            name="王总"
            location="四川·成都"
            quote="正式代理商的区域保护政策非常有竞争力。现在正向年度800万目标冲刺，期待拿原始股权。"
            income="¥28.2W+"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[800px] px-4">
        <h2 class="text-[32px] font-bold text-center mb-12">
          合作常见疑问
        </h2>
        <Accordion
          type="single"
          :collapsible="true"
          class="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger class="text-[18px] font-bold">
              真的不需要任何加盟费吗？
            </AccordionTrigger>
            <AccordionContent class="text-[#4B5563]">
              是的。我们推行"城市合伙人"模式，初级阶段完全免收加盟费、保证金。我们更看重合伙人在当地的市场拓展能力与服务质量。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger class="text-[18px] font-bold">
              佣金结算周期是多久？
            </AccordionTrigger>
            <AccordionContent class="text-[#4B5563]">
              平台采用 T+1
              实时入账模式。当运单状态变更为"已完成"且客户确认支付后，返佣金额将即时进入您的合伙人钱包，您可以随时申请提现。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger class="text-[18px] font-bold">
              没有物流经验可以加入吗？
            </AccordionTrigger>
            <AccordionContent class="text-[#4B5563]">
              完全可以。我们提供"保姆级"扶持体系，从系统培训到实战带教。只要您有创业热情和本地人脉资源，剩下的专业活儿由总部后台完成。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- Lead Gen Form -->
    <section id="recruit-form" class="py-24 bg-[#0B2747]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold text-white mb-4">
            立即申请，抢占城市名额
          </h2>
          <p class="text-white/60">
            每个县级以上区域仅限首批 3 名合伙人席位
          </p>
        </div>

        <div class="max-w-[1000px] mx-auto bg-white/5 p-8 lg:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm">
          <form
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            @submit.prevent="handleFormSubmit"
          >
            <input
              type="text"
              placeholder="公司名称"
              v-model="formData.companyName"
              class="bg-white/10 border border-white/20 rounded-xl h-14 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
              required
            />
            <input
              type="text"
              placeholder="联系人姓名"
              v-model="formData.contactName"
              class="bg-white/10 border border-white/20 rounded-xl h-14 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
              required
            />
            <input
              type="tel"
              placeholder="联系电话"
              v-model="formData.phone"
              class="bg-white/10 border border-white/20 rounded-xl h-14 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
              required
            />
            <input
              type="text"
              placeholder="店面/办公面积 (㎡)"
              v-model="formData.area"
              class="bg-white/10 border border-white/20 rounded-xl h-14 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
            />
            <input
              type="text"
              placeholder="团队当前人数"
              v-model="formData.teamSize"
              class="bg-white/10 border border-white/20 rounded-xl h-14 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
            />
            <Button
              type="submit"
              class="bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold h-14 rounded-xl text-[18px] border-none cursor-pointer"
            >
              提交加盟申请
            </Button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '#app'
import {
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Unlock,
  HeartHandshake,
  Award,
  Crown,
  ArrowUpCircle,
  Megaphone,
  GraduationCap,
  Headphones,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionContent from '@/components/ui/AccordionContent.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue'
import Slider from '@/components/ui/Slider.vue'
import HighlightCard from '@/components/partner-recruit/HighlightCard.vue'
import CheckItem from '@/components/partner-recruit/CheckItem.vue'
import SupportRow from '@/components/partner-recruit/SupportRow.vue'
import SuccessCard from '@/components/partner-recruit/SuccessCard.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const salesValue = ref<number[]>([300000]) // in absolute units

const formData = ref({
  companyName: '',
  contactName: '',
  phone: '',
  area: '',
  teamSize: ''
})

// 将 useMemo 转换为 computed
const commissionData = computed(() => {
  const val = salesValue.value[0]
  let rate = 30
  let tierIndex = 0
  let nextThreshold = 50000

  if (val > 300000) {
    rate = 70
    tierIndex = 4
    nextThreshold = Infinity
  } else if (val > 200000) {
    rate = 60
    tierIndex = 3
    nextThreshold = 300000
  } else if (val > 100000) {
    rate = 50
    tierIndex = 2
    nextThreshold = 200000
  } else if (val > 50000) {
    rate = 40
    tierIndex = 1
    nextThreshold = 100000
  } else {
    rate = 30
    tierIndex = 0
    nextThreshold = 50000
  }

  // Formula: GMV * Rate * 5% Service Fee (HIDDEN)
  const income = val * (rate / 100) * 0.05
  const isCloseToNext =
    nextThreshold !== Infinity &&
    nextThreshold - val <= nextThreshold * 0.1

  return { rate, income, tierIndex, isCloseToNext }
})

const tiers = [
  { label: "入门期", range: "≤5万", rate: "30%" },
  { label: "成长期", range: "5-10万", rate: "40%" },
  { label: "核心期", range: "10-20万", rate: "50%" },
  { label: "巅峰期", range: "20-30万", rate: "60%" },
  {
    label: "正式代理商",
    range: ">30万",
    rate: "70%",
    isPremium: true,
  },
]

const structuredData = computed(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "车拖车城市合伙人招募计划",
    description:
      "共享万亿级拖车蓝海，零门槛准入，全维度扶持，高比例返佣。",
    organizer: {
      "@type": "Organization",
      name: "车拖车",
    },
  }
  return JSON.stringify(schema)
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: structuredData.value
    }
  ]
})

const scrollToForm = () => {
  document
    .getElementById("recruit-form")
    ?.scrollIntoView({ behavior: "smooth" })
}

const handleFormSubmit = () => {
  alert("申请已提交，我们将尽快联系您！")
}

const navigateToHome = () => {
  props.setActiveId?.('home')
}
</script>
