<template>
  <div class="min-h-screen bg-white font-['Noto_Sans_SC']">
    <!-- 🚀 Hero Section: The Visionary Call -->
    <section class="relative h-[500px] overflow-hidden bg-gradient-to-b from-[#0B2747] to-[#111827]">
      <div class="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764350126579-46f4c33cd12c"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 z-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />

      <div class="container mx-auto max-w-[1200px] px-4 lg:px-0 relative z-10 text-center h-full flex flex-col justify-center">
        <!-- Breadcrumb - Top Left Fixed -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
          <button
            @click="navigateToHome"
            class="hover:text-white cursor-pointer bg-transparent border-none p-0"
          >
            首页
          </button>
          <ChevronRight class="w-4 h-4" />
          <button
            @click="navigateToAbout"
            class="hover:text-white cursor-pointer bg-transparent border-none p-0 text-white/60"
          >
            关于我们
          </button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">
            人才招聘
          </span>
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-[48px] font-bold text-white mb-6 leading-tight mt-16"
        >
          加入我们，连接汽车物流的下一个时代
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[18px] text-white/70 max-w-[800px] mx-auto mb-10 leading-relaxed"
        >
          车拖车正致力于构建一个更透明、更高效的数字化物流生态系统。我们寻找对技术充满热忱、勇于挑战行业痛点的创新者。
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="max-w-[600px] mx-auto relative group"
        >
          <div class="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search class="w-5 h-5 text-gray-400 group-focus-within:text-[#006EFF] transition-colors" />
          </div>
          <Input
            v-model="searchQuery"
            placeholder="搜索职位关键词 (如：Java, 产品经理)..."
            class="w-full h-14 pl-14 pr-32 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white focus:text-[#0B2747] transition-all"
          />
          <Button class="absolute right-2 top-2 h-10 px-6 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-xl border-none font-bold">
            搜索职位
          </Button>
        </div>
      </div>
    </section>

    <!-- 🏢 Section A: Employee Value Proposition (EVP) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            在车拖车工作是怎样的体验？
          </h2>
          <div class="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in evpItems"
            :key="idx"
            class="p-10 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all group"
            :class="item.bgClass"
          >
            <div :class="`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all ${item.iconBgClass}`">
              <component :is="item.icon" class="w-8 h-8" :class="item.iconClass" />
            </div>
            <h3 class="text-[22px] font-bold text-[#0B2747] mb-4">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎓 Section B: Campus Recruitment -->
    <section class="py-24 bg-[#F0F7FF]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[36px] font-bold text-[#0B2747] mb-6">
              校招专项：‘智运生’计划
            </h2>
            <div class="space-y-6 text-gray-600 leading-relaxed text-[16px]">
              <p>
                ‘智运生’计划是车拖车面向全球优秀高校毕业生的核心人才培养战略。我们旨在通过两年的"导师制"轮岗轮训，培养出既懂业务逻辑、又懂前沿技术的复合型物流科技领军人才。
              </p>
              <p>
                在这里，你不是旁观者，而是规则的制定者。你将参与到支撑年
                GMV 43
                亿规模的系统开发中，与行业共同定义数字化托运的标准。
              </p>
            </div>

            <div class="flex flex-wrap gap-3 mt-10">
              <span
                v-for="tag in ['实习生招聘', '应届生', '交通物流', '信息安全']"
                :key="tag"
                class="px-4 py-2 bg-white rounded-full text-[14px] font-medium text-[#006EFF] border border-blue-100 shadow-sm"
              >
                {{ tag }}
              </span>
            </div>

            <Button class="mt-12 h-14 px-10 border-[#006EFF] text-[#006EFF] hover:bg-[#006EFF] hover:text-white rounded-2xl font-bold transition-all">
              查看校招岗位
            </Button>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible="{ opacity: 1, scale: 1 }"
            :visibleOnce="true"
            class="relative rounded-[40px] overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622016579436-14c1844c99ec"
              alt="CheTuoChe Team"
              class="w-full h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/60 to-transparent" />
            <div class="absolute bottom-10 left-10">
              <div class="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                <div class="text-white text-[14px] font-medium">
                  2026 届‘智运生’秋招正式开启
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 💼 Section C: Open Positions -->
    <section class="py-24 bg-white" id="positions">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            热招岗位
          </h2>
          <div class="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <Tabs v-model="activeTab" class="w-full">
          <TabsList class="flex flex-wrap justify-center gap-4 bg-transparent mb-12 h-auto">
            <TabsTrigger
              v-for="tab in tabs"
              :key="tab.value"
              :value="tab.value"
              class="px-8 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 data-[state=active]:bg-[#006EFF] data-[state=active]:text-white data-[state=active]:border-transparent transition-all shadow-sm"
            >
              {{ tab.label }}
            </TabsTrigger>
          </TabsList>

          <TabsContent :value="activeTab" class="space-y-6">
            <div
              v-for="(job, idx) in filteredJobs"
              :key="job.id"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: idx * 50 } }"
              class="flex flex-col md:flex-row items-center justify-between p-8 rounded-[32px] bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-100 transition-all group relative"
            >
              <div class="flex-1 mb-6 md:mb-0">
                <div class="flex items-center gap-4 mb-4">
                  <h3 class="text-[20px] font-bold text-[#0B2747] group-hover:text-[#006EFF] transition-colors">
                    {{ job.title }}
                  </h3>
                  <span class="px-3 py-1 bg-blue-50 text-[#006EFF] text-[12px] font-bold rounded-lg">
                    {{ job.salary }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-4 text-[14px] text-gray-400">
                  <span class="flex items-center gap-1.5">
                    <Briefcase class="w-4 h-4" />
                    {{ job.dept }} / {{ job.type }}
                  </span>
                  <span class="flex items-center gap-1.5">
                    <MapPin class="w-4 h-4" />
                    {{ job.location }}
                  </span>
                  <span class="flex items-center gap-1.5">
                    <Clock class="w-4 h-4" />
                    {{ job.date }}
                  </span>
                </div>
                <p class="mt-4 text-[14px] text-gray-500 leading-relaxed max-w-[600px] line-clamp-1">
                  {{ job.desc }}
                </p>
              </div>
              <div class="flex items-center gap-4">
                <Button
                  @click="sendEmail('hr@chetuoche.com')"
                  class="h-12 px-8 bg-[#006EFF] hover:bg-[#0058CC] text-white rounded-xl border-none font-bold shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  投递简历
                </Button>
              </div>
            </div>
            <div v-if="filteredJobs.length === 0" class="py-20 text-center text-gray-400">
              暂时没有该类别的热招岗位，换个分类看看吧。
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>

    <!-- ❓ Section D: FAQ -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[900px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            招聘常见问题
          </h2>
          <div class="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible class="w-full space-y-4">
          <AccordionItem
            v-for="(faq, idx) in faqs"
            :key="idx"
            :value="`item-${idx + 1}`"
            class="bg-white border border-gray-100 rounded-[24px] px-8 overflow-hidden"
          >
            <AccordionTrigger class="hover:no-underline py-6">
              <span class="text-[18px] font-bold text-[#0B2747] text-left">
                {{ faq.question }}
              </span>
            </AccordionTrigger>
            <AccordionContent class="pb-8 text-gray-500 leading-relaxed">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- 📄 Global Footer Summary -->
    <footer class="py-20 bg-[#0B2747] text-white border-t border-white/5">
      <div class="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div class="text-[24px] font-black mb-4">
            车拖车<span class="text-[#FF6B00]">.</span>
          </div>
          <p class="text-white/40 text-[14px]">
            让汽车物流更简单、更高效
          </p>
        </div>
        <div class="flex gap-8 text-[14px] text-white/60">
          <span
            class="hover:text-white cursor-pointer transition-colors"
            @click="navigateToAbout"
          >
            关于我们
          </span>
          <span
            class="hover:text-white cursor-pointer transition-colors"
            @click="navigateToContact"
          >
            联系我们
          </span>
          <span
            class="hover:text-white cursor-pointer transition-colors"
            @click="navigateToHome"
          >
            返回首页
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '#app'
import {
  ChevronRight,
  Search,
  Rocket,
  Terminal,
  Gift,
  Briefcase,
  MapPin,
  Clock,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Tabs from '@/components/ui/Tabs.vue'
import TabsList from '@/components/ui/TabsList.vue'
import TabsTrigger from '@/components/ui/TabsTrigger.vue'
import TabsContent from '@/components/ui/TabsContent.vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'
import AccordionTrigger from '@/components/ui/AccordionTrigger.vue'
import AccordionContent from '@/components/ui/AccordionContent.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import type { Job } from '@/types'

const router = useRouter()
const searchQuery = ref('')
const activeTab = ref('all')

const tabs = [
  { label: '全部', value: 'all' },
  { label: '技术与算法', value: 'tech' },
  { label: '产品经理', value: 'product' },
  { label: '运营类', value: 'ops' },
  { label: '客户服务类', value: 'service' },
  { label: '销售类', value: 'sales' },
]

const JOBS = [
  {
    id: 'JOB-2024-001',
    title: '高级 Java 开发工程师',
    category: 'tech',
    dept: '技术部',
    type: '社招',
    location: '临沂/北京',
    desc: '负责车拖车核心调度系统的架构设计与性能优化，确保金融级高可用性。',
    date: '1天前发布',
    salary: '20k-40k',
  },
  {
    id: 'JOB-2024-002',
    title: '高级算法工程师',
    category: 'tech',
    dept: '技术部',
    type: '社招',
    location: '北京/临沂',
    desc: '负责车拖车 AI 智能调度系统的核心算法优化，提升车辆周转效率。',
    date: '3天前发布',
    salary: '30k-60k',
  },
  {
    id: 'JOB-2024-003',
    title: '资深产品经理',
    category: 'product',
    dept: '产品部',
    type: '社招',
    location: '临沂',
    desc: '定义下一代数字化托运产品形态，协调研发与业务实现高效迭代。',
    date: '2天前发布',
    salary: '15k-30k',
  },
  {
    id: 'JOB-2024-004',
    title: '物流运营专家',
    category: 'ops',
    dept: '运营部',
    type: '社招',
    location: '全国',
    desc: '统筹区域运力池建设，优化供应商 SOP 流程，提升整体服务质量。',
    date: '5天前发布',
    salary: '12k-25k',
  },
  {
    id: 'JOB-2024-005',
    title: '客户成功顾问',
    category: 'service',
    dept: '客户部',
    type: '社招',
    location: '临沂',
    desc: '为 B 端大客户提供全流程物流咨询服务，建立长期合作伙伴关系。',
    date: '1周前发布',
    salary: '8k-15k',
  },
]

const filteredJobs = computed(() => {
  let jobs = activeTab.value === 'all' ? JOBS : JOBS.filter((j) => j.category === activeTab.value)
  if (searchQuery.value) {
    jobs = jobs.filter(
      (j) =>
        j.title.includes(searchQuery.value) ||
        j.desc.includes(searchQuery.value) ||
        j.dept.includes(searchQuery.value)
    )
  }
  return jobs
})

const evpItems = [
  {
    icon: Rocket,
    title: '快速成长',
    desc: '置身于行业领先的数字化托运平台，你将直接接触最前沿的 AI 调度算法与物流科技，与行业顶尖大牛共事，实现职业生涯的指数级跃升。',
    bgClass: 'bg-[#F8F9FB]',
    iconBgClass: 'bg-blue-50 text-[#006EFF] group-hover:bg-[#006EFF] group-hover:text-white',
    iconClass: '',
  },
  {
    icon: Terminal,
    title: '技术纯粹',
    desc: '我们推崇工程师文化，深耕网络安全技术。你将参与打造金融级物流数据底座，维护通过国家三级等保认证的核心系统，用技术捍卫数据价值。',
    bgClass: 'bg-[#F0F4F8] border-blue-50',
    iconBgClass: 'bg-[#0B2747] text-white group-hover:bg-[#006EFF]',
    iconClass: '',
  },
  {
    icon: Gift,
    title: '竞争性回报',
    desc: '提供具有市场竞争力的薪酬体系，包含年终奖与期权/股权激励。享受完善的五险一金保障，让每一份付出都获得对等的回报。',
    bgClass: 'bg-[#FFF8F4] border-orange-50',
    iconBgClass: 'bg-orange-50 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white',
    iconClass: '',
  },
]

const faqs = [
  {
    question: '车拖车的面试流程是怎样的？',
    answer:
      '通常包含 2-3 轮技术/专业面试 + 1 轮 HR 面试。面试官将重点考察候选人的行业认知深度与解决复杂问题的逻辑能力。如果是技术岗位，可能还包含代码测试或架构探讨环节。',
  },
  {
    question: '是否接受应届生实习？',
    answer:
      '是的。通过 ‘智运生’ 计划，我们长期开放实习岗位，特别欢迎交通物流与计算机相关专业的同学投递。实习表现优秀的同学有极高概率获得转正 Offer。',
  },
  {
    question: '入职后的培训体系是怎样的？',
    answer:
      '我们有完善的"车拖车学院"内训体系，涵盖行业知识普及、通用职业技能及专项技术工作坊。每一位入职新人都会配备一名"导师（Mentor）"，负责入职后的工作引导与成长反馈。',
  },
]

const navigateToHome = () => {
  router.push('/')
}

const navigateToAbout = () => {
  router.push('/about')
}

const navigateToContact = () => {
  router.push('/contact')
}

const sendEmail = (email: string) => {
  window.location.href = `mailto:${email}`
}

const getJobSchema = (job: Job) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.title,
    description: job.desc,
    identifier: {
      '@type': 'PropertyValue',
      name: 'CheTuoChe',
      value: job.id,
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: '车拖车',
      sameAs: 'https://www.chetuoche.com',
    },
    employmentType: 'FULL_TIME',
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location.split('/')[0],
        addressRegion: '山东',
        addressCountry: 'CN',
      },
    },
  }
  return schema
}

const allJobSchemas = computed(() => {
  return filteredJobs.value.map(job => getJobSchema(job))
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(allJobSchemas.value)
    }
  ]
})
</script>
