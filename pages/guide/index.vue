<template>
  <div class="bg-white min-h-screen font-['Noto_Sans_SC'] text-[#0B2747]">

    <!-- Hero Section -->
    <section class="relative w-full h-[400px] overflow-hidden mt-[-80px] pt-[80px]">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1764332688472-b970f6ca8915?auto=format&fit=crop&q=80&w=1200"
          alt="User Guide Hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747]/90 to-[#0B2747]/40" />
      </div>

      <div class="container mx-auto max-w-[1200px] relative z-10 px-4 h-full flex flex-col justify-center">
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
          <button
            @click="navigateToHome"
            class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            首页
          </button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white/60">汽车托运</span>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">用户指南</span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="max-w-[800px]"
        >
          <h1 class="text-[36px] font-bold text-white leading-[1.3] mb-4">
            车拖车用户指南：
            <br />
            汽车托运流程、安全规范与避坑百科
          </h1>
          <p class="text-[18px] text-white/90 font-medium mb-8 leading-relaxed">
            为您拆解从询价下单、视频验车到保险理赔的全流程细节，让非标服务变得像标准产品一样可靠。
          </p>

          <Button
            @click="scrollToPitfalls"
            class="h-12 px-8 rounded-full border-2 border-white bg-transparent text-white font-bold text-[16px] hover:bg-white hover:text-[#0B2747] transition-all border-solid cursor-pointer"
          >
            阅读避坑指南
          </Button>
        </div>
      </div>
    </section>

    <!-- Pitfall Avoidance Grid -->
    <section id="pitfalls" class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            拒绝行业黑盒，三大托运避坑指南
          </h2>
          <div class="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in pitfalls"
            :key="idx"
            v-motion
            :hovered="{ y: -5 }"
            class="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all"
          >
            <div class="text-[12px] font-bold text-[#006EFF] uppercase tracking-widest mb-2">
              {{ item.subtitle }}
            </div>
            <h3 class="text-[22px] font-bold mb-8 text-[#0B2747]">
              {{ item.title }}
            </h3>

            <div class="space-y-6">
              <div class="flex gap-4">
                <XCircle class="w-6 h-6 text-red-500 shrink-0" />
                <p class="text-[14px] text-gray-500 italic leading-relaxed">
                  {{ item.trap }}
                </p>
              </div>
              <div class="flex gap-4">
                <CheckCircle2 class="w-6 h-6 text-green-500 shrink-0" />
                <p class="text-[14px] text-[#0B2747] font-medium leading-relaxed">
                  {{ item.solution }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5-Stage Process (Timeline) -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            全流程标准作业规范 (SOP)
          </h2>
          <p class="text-[#4B5563]">
            车拖车将每一个环节都置于阳光下，让托运更安心。
          </p>
        </div>

        <div class="max-w-[900px] mx-auto space-y-0">
          <div
            v-for="(step, idx) in timelineSteps"
            :key="idx"
            class="flex gap-8 lg:gap-12"
          >
            <div class="flex flex-col items-center">
              <div
                :class="`w-14 h-14 rounded-full flex items-center justify-center text-white z-10 shrink-0 shadow-lg ${step.isOrange ? 'bg-[#FF6B00]' : 'bg-[#006EFF]'}`"
              >
                <component :is="step.icon" class="w-6 h-6" />
              </div>
              <div v-if="!step.isLast" class="w-0.5 flex-grow bg-gray-200 my-2" />
            </div>
            <div class="pb-12 flex-grow">
              <div class="flex items-center gap-4 mb-4">
                <h4
                  :class="`text-[20px] font-bold ${step.isOrange ? 'text-[#FF6B00]' : 'text-[#0B2747]'}`"
                >
                  {{ step.title }}
                </h4>
              </div>
              <div class="text-[#4B5563]" v-html="step.content" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inspection Standards Showcase -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 relative">
            <div class="absolute -inset-4 bg-blue-100 rounded-[50px] rotate-3 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1715422719211-e6e51fae630f?auto=format&fit=crop&q=80&w=800"
              alt="Inspection App Interface"
              class="w-full max-w-[500px] mx-auto rounded-[40px] shadow-2xl border-8 border-white"
            />
            <div class="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <Smartphone class="w-10 h-10 text-[#006EFF]" />
              <div>
                <div class="font-bold text-[14px]">
                  实时验车报告
                </div>
                <div class="text-[12px] text-gray-400">
                  一车一档 · 全程记录
                </div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#006EFF] font-bold text-[14px] mb-6">
              <ShieldCheck class="w-4 h-4" />
              第一检测人：不放过任何一道划痕
            </div>
            <h3 class="text-[32px] font-bold text-[#0B2747] mb-8 leading-tight">
              标准化验车流程
            </h3>
            <ul class="space-y-6">
              <li
                v-for="(item, idx) in inspectionItems"
                :key="idx"
                class="flex items-start gap-4"
              >
                <div class="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#006EFF]" />
                </div>
                <span class="text-[16px] text-[#4B5563] leading-relaxed">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-24 bg-[#F0F7FF]">
      <div class="container mx-auto max-w-[1000px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            常见问题解答
          </h2>
          <p class="text-[#4B5563]">
            针对托运过程中的高频疑问，我们为您梳理了答案。
          </p>
        </div>

        <Accordion type="single" collapsible class="w-full space-y-4">
          <AccordionItem
            v-for="(faq, idx) in faqs"
            :key="idx"
            :value="`faq-${idx + 1}`"
            class="bg-white px-6 rounded-2xl border-none shadow-sm overflow-hidden mb-4"
          >
            <AccordionTrigger class="hover:no-underline py-5 text-[17px] font-bold text-[#0B2747] text-left">
              <div class="flex items-start gap-4">
                <HelpCircle class="w-6 h-6 text-[#006EFF] shrink-0" />
                {{ faq.question }}
              </div>
            </AccordionTrigger>
            <AccordionContent class="text-[#4B5563] text-[15px] leading-relaxed pb-6 pl-10 border-t border-gray-50 pt-4">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-20 bg-[#0B2747] relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-[#006EFF]/10 skew-x-12 transform translate-x-1/2" />
      <div class="container mx-auto max-w-[1200px] px-4 text-center relative z-10">
        <h2 class="text-[36px] font-bold text-white mb-6">
          准备好开始托运了吗？
        </h2>
        <p class="text-white/70 text-[18px] mb-12">
          让您的爱车享受头等舱般的专业托运服务。
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            @click="navigateToPricing"
            class="h-14 px-12 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] shadow-lg border-none cursor-pointer transition-all hover:scale-105"
          >
            免费获取报价
          </Button>
          <Button
            @click="navigateToDownload"
            class="h-14 px-12 rounded-full border-2 border-white bg-transparent text-white font-bold text-[18px] hover:bg-white/10 transition-all border-solid cursor-pointer"
          >
            下载 APP
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '#app'
import {
  ChevronRight,
  XCircle,
  CheckCircle2,
  Calculator,
  Camera,
  MapPin,
  CheckCircle,
  Shield,
  ShieldCheck,
  Smartphone,
  HelpCircle,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue'
import AccordionContent from '@/components/ui/AccordionContent.vue'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const navigateToPricing = () => {
  router.push('/pricing')
}

const navigateToDownload = () => {
  router.push('/download')
}

const scrollToPitfalls = () => {
  const element = document.getElementById('pitfalls')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const pitfalls = [
  {
    title: '低价陷阱',
    subtitle: 'Price Trap',
    trap: '黑中介报低价，中途勒索转运费？',
    solution: '车拖车承诺一口价，下单即最终费用，严禁任何形式的中途加价。',
  },
  {
    title: '私开风险',
    subtitle: 'Private Use',
    trap: '爱车被司机私开办私事，甚至损坏？',
    solution: 'LBS+北斗双模定位全程监控，里程拍照留档，全封闭运输严禁私用。',
  },
  {
    title: '理赔难',
    subtitle: 'Insurance Issues',
    trap: '出了事故保险公司推诿，平台不管？',
    solution: '定制化独立保单，太平洋/东海保险承保，APP一键报损，极速响应。',
  },
]

const timelineSteps = [
  {
    icon: Calculator,
    title: 'Phase 1: 准备与下单',
    isOrange: false,
    isLast: false,
    content: `
      <div class="space-y-4">
        <p class="text-[16px] leading-relaxed">
          精准报价：根据车型、距离选择
          <b>大板车（性价比）</b>或
          <b>小板车（极速时效）</b>模式。
        </p>
        <div class="bg-[#FFF8F0] border-l-4 border-[#FF6B00] p-4 rounded-r-xl">
          <p class="text-[#FF6B00] font-bold mb-2 flex items-center gap-2 text-[14px]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            随车行李规定
          </p>
          <p class="text-[14px] text-[#4B5563]">
            <b>严禁：</b>
            易燃易爆品（打火机/烟花）、现金、身份证件及贵重物品。
          </p>
        </div>
      </div>
    `,
  },
  {
    icon: Camera,
    title: 'Phase 2: 交车与验车',
    isOrange: false,
    isLast: false,
    content: `
      <div class="space-y-4">
        <p class="text-[16px] leading-relaxed">
          <b>第一检测人机制：</b>司机到达现场后，进行
          360°
          环车视频录像，记录原有划痕、轮毂磨损及仪表里程。
        </p>
        <p class="text-[16px] text-[#006EFF] font-medium">
          签署电子合同：所有约定均在法律框架内，拒绝任何口头协议。
        </p>
      </div>
    `,
  },
  {
    icon: MapPin,
    title: 'Phase 3: 运输途中',
    isOrange: false,
    isLast: false,
    content: `
      <div class="space-y-4">
        <p class="text-[16px]">
          <b>可视化追踪：</b>车主可通过车拖车 APP
          实时查看车辆所在位置，定位精确至 1 米级。
        </p>
        <img
          src="https://images.unsplash.com/photo-1762232621838-2308d2d5ba33?auto=format&fit=crop&q=80&w=1200"
          alt="Transit"
          class="w-full h-48 object-cover rounded-2xl shadow-sm"
        />
      </div>
    `,
  },
  {
    icon: CheckCircle,
    title: 'Phase 4: 收车复验',
    isOrange: false,
    isLast: false,
    content: `
      <p class="text-[16px] leading-relaxed">
        核对车辆外观与里程。大板车因装卸需求允许
        1000米 正常移动，小板车应保持 0
        里程增加。确认无误后在 APP 确认收货。
      </p>
    `,
  },
  {
    icon: Shield,
    title: 'Phase 5: 售后保障',
    isOrange: true,
    isLast: true,
    content: `
      <p class="text-[16px] leading-relaxed">
        由CPIC太平洋保险或东海保险承保。如发现损伤，请
        <b>保持现场</b>并在 APP
        发起一键报损，专业理赔管家将在 1 小时内介入。
      </p>
    `,
  },
]

const inspectionItems = [
  '360° 环车高清视频拍摄（重点拍摄四角及车顶）',
  '仪表盘实时特写（油量、里程、故障灯状态）',
  '随车物品明细录入并由双方确认（照片留存）',
  '轮毂、轮胎花纹深度及备胎状态核实',
  '底盘外观（针对低底盘跑车/改装车）专项检查',
]

const faqs = [
  {
    question: '汽车托运可以放置随车行李吗？',
    answer:
      '可以放置个人衣物、生活用品等。限重 50-100kg（不同线路略有差异）。请注意：严禁放置打火机、油漆、易燃易爆品，以及现金、首饰等贵重物品。随车物品需固定好，避免在装卸过程中移动造成内饰损坏。',
  },
  {
    question: '为什么有的平台报价极低，中途却要加价？',
    answer:
      '这是行业典型的"低价钓鱼"套路。黑中介先报低于成本的价格吸引车主，车辆交出后以"超重费"、"转运费"、"保险费"等名义要挟加价。车拖车坚持一口价体系，系统生成的订单金额即最终支付金额。',
  },
  {
    question: '运输过程中车辆发生损伤怎么办？',
    answer:
      '收车时请务必先行验车。如发现新增损伤，请第一时间拍摄照片、视频，并在现场联系我们的 400 客服或在 APP 内一键报损。由于有独立保险覆盖，理赔专员会全程代办，车主无需面对承运商进行繁琐扯皮。',
  },
]

const schemaMarkup = computed(() => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何使用车拖车托运您的汽车',
      description:
        '车拖车为您提供全流程标准化的汽车托运服务，包含询价下单、视频验车、运输追踪及收车复验。',
      step: [
        {
          '@type': 'HowToStep',
          name: '准备与下单',
          text: '选择托运模式（大板车或小板车），核对随车物品限制。',
        },
        {
          '@type': 'HowToStep',
          name: '交车与验车',
          text: '第一检测人机制：360° 视频留档，签署电子合同。',
        },
        {
          '@type': 'HowToStep',
          name: '运输途中',
          text: '实时查看 LBS/北斗定位追踪。',
        },
        {
          '@type': 'HowToStep',
          name: '收车复验',
          text: '核对外观与里程，确认无误后签收。',
        },
        {
          '@type': 'HowToStep',
          name: '售后保障',
          text: '一键报损，享受保险理赔服务。',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '汽车托运可以放置随车行李吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '可以。随车行李限重 50-100kg，严禁放置易燃易爆品、现金及贵重物品。',
          },
        },
        {
          '@type': 'Question',
          name: '为什么有的平台报价极低，中途却加价？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '部分不规范平台使用"低价钓鱼"，中途勒索转运费。车拖车承诺一口价，下单即最终费用。',
          },
        },
      ],
    },
  ]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaMarkup.value)
    }
  ]
})
</script>
