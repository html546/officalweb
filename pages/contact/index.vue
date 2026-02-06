<template>
  <article class="bg-white min-h-screen font-['Noto_Sans_SC']">

    <!-- 🚀 Hero Section: The Promise of Connection -->
    <section class="relative h-[400px] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621375041839-da81cd8a7295"
          alt="Contact Hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-[#0B2747]/90" />
      </div>

      <div class="container mx-auto max-w-[1200px] px-4 lg:px-0 relative z-10 h-full flex flex-col justify-center">
        <!-- Breadcrumb - Top Left Fixed -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
          <button
            @click="navigateToHome"
            class="hover:text-white bg-transparent border-none cursor-pointer transition-colors"
          >
            首页
          </button>
          <ChevronRight class="w-4 h-4" />
          <button
            @click="navigateToAbout"
            class="text-white/60 hover:text-white bg-transparent border-none cursor-pointer transition-colors"
          >
            关于我们
          </button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">联系我们</span>
        </div>

        <div class="max-w-[800px] pt-16 px-4 lg:px-0">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="text-[40px] font-bold text-white leading-tight mb-6"
          >
            期待与您的每一次连接
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="text-[18px] text-white/80 leading-relaxed mb-8"
          >
            无论您需要供应链方案、个人托运还是车辆装备支持，我们的专家团队都在这里。
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200 } }"
            class="inline-flex items-center gap-3 px-6 py-3 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-2xl"
          >
            <div class="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span class="text-[#FF6B00] font-bold text-[14px]">
              提交表单后，行业顾问将在 10分钟内 与您取得联系
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏙️ Main Layout: Contact Matrix & Lead Form -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-12 gap-16">
          <!-- Left Column: Business Routing Matrix -->
          <div class="col-span-12 lg:col-span-5 space-y-8">
            <div class="mb-10">
              <h2 class="text-[28px] font-bold text-[#0B2747] mb-4">多维度业务触达</h2>
              <p class="text-gray-500 text-[15px]">根据您的具体需求，选择最快速的触达通道。</p>
            </div>

            <!-- General Service -->
            <div
              v-motion
              :hovered="{ x: 10 }"
              class="p-8 rounded-[32px] bg-[#F8F9FB] border border-gray-100 group transition-all cursor-pointer"
              @click="callPhone('4000751117')"
            >
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#006EFF] group-hover:bg-[#006EFF] group-hover:text-white transition-all">
                  <Phone class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[12px] text-blue-400 font-bold uppercase tracking-widest mb-2">综合服务热线</div>
                  <div class="text-[24px] font-black text-[#0B2747] mb-2 tracking-tight">400-075-1117</div>
                  <p class="text-[14px] text-gray-500">业务咨询、投诉建议、救援呼叫</p>
                </div>
              </div>
            </div>

            <!-- Truck Sales -->
            <div
              v-motion
              :hovered="{ x: 10 }"
              class="p-8 rounded-[32px] bg-[#FFF8F4] border border-orange-50 group transition-all cursor-pointer"
              @click="callPhone('13800000000')"
            >
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                  <Truck class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[12px] text-orange-400 font-bold uppercase tracking-widest mb-2">板车销售专线</div>
                  <div class="text-[24px] font-black text-[#0B2747] mb-2 tracking-tight">138-XXXX-XXXX</div>
                  <p class="text-[14px] text-gray-500">获取底盘报价、金融方案与入驻政策</p>
                </div>
              </div>
            </div>

            <!-- Tech Support -->
            <div
              v-motion
              :hovered="{ x: 10 }"
              class="p-8 rounded-[32px] bg-[#F0F4F8] border border-blue-50 group transition-all cursor-pointer"
              @click="sendEmail('tech@autotrans.com')"
            >
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-[#0B2747] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#006EFF] transition-all">
                  <ShieldCheck class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[12px] text-blue-900/40 font-bold uppercase tracking-widest mb-2">安全与技术支持</div>
                  <div class="text-[24px] font-black text-[#0B2747] mb-2 tracking-tight">tech@autotrans.com</div>
                  <p class="text-[14px] text-gray-500">系统对接、网络安全合规咨询</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Intelligent Inquiry Form -->
          <div class="col-span-12 lg:col-span-7">
            <div
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :visible="{ opacity: 1, x: 0 }"
              :visibleOnce="true"
              class="bg-white rounded-[40px] p-10 border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <div class="mb-10">
                <h3 class="text-[24px] font-bold text-[#0B2747] mb-2">即刻开启专属方案咨询</h3>
                <p class="text-gray-400 text-[14px]">我们的专家将在第一时间为您提供专业建议。</p>
              </div>

              <form v-if="!submitted" @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label class="block text-[14px] font-bold text-[#0B2747] mb-3">请选择您感兴趣的服务</label>
                  <div class="relative">
                    <select
                      v-model="formData.serviceType"
                      required
                      class="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 appearance-none focus:ring-2 focus:ring-[#006EFF] outline-none transition-all cursor-pointer"
                    >
                      <option value="">点击选择咨询业务</option>
                      <option value="b2b">🏢 汽车供应链解决方案 (B2B)</option>
                      <option value="personal">🚗 个人/私家车长途托运</option>
                      <option value="equipment">🛠️ 清障车装备采购 (板车销售)</option>
                      <option value="premium">🏎️ 商业活动/高端车托运</option>
                      <option value="coop">🤝 其他合作咨询</option>
                    </select>
                    <ChevronDown class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-[14px] font-bold text-[#0B2747] mb-3">姓名</label>
                    <input
                      v-model="formData.name"
                      type="text"
                      required
                      placeholder="请输入您的姓名"
                      class="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 focus:ring-2 focus:ring-[#006EFF] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-[14px] font-bold text-[#0B2747] mb-3">联系电话</label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      required
                      placeholder="请输入您的手机号码"
                      class="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 focus:ring-2 focus:ring-[#006EFF] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-[14px] font-bold text-[#0B2747] mb-3">需求描述</label>
                  <textarea
                    v-model="formData.description"
                    rows="4"
                    placeholder="请简要描述您的车型、路线或具体采购需求..."
                    class="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:ring-2 focus:ring-[#006EFF] outline-none transition-all resize-none"
                  />
                </div>

                <Button class="w-full h-16 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-2xl font-bold text-[18px] border-none shadow-xl shadow-orange-500/30 cursor-pointer">
                  提交咨询
                </Button>

                <p class="text-center text-[12px] text-gray-400">
                  您的信息受 <span class="font-bold">ISO27001 信息安全体系</span> 保护，仅用于业务沟通。
                </p>
              </form>

              <div
                v-else
                v-motion
                :initial="{ opacity: 0, scale: 0.9 }"
                :enter="{ opacity: 1, scale: 1 }"
                class="py-20 text-center"
              >
                <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                  <CheckCircle2 class="w-10 h-10" />
                </div>
                <h4 class="text-[24px] font-bold text-[#0B2747] mb-4">提交成功！</h4>
                <p class="text-gray-500 max-w-[400px] mx-auto">
                  感谢您的信任。我们的行业顾问已收到您的需求，将在 10 分钟内拨打您的电话：<span class="font-bold text-[#0B2747]">{{ formData.phone }}</span>
                </p>
                <Button
                  @click="submitted = false"
                  class="mt-10 border-gray-200 rounded-xl cursor-pointer"
                >
                  再次咨询
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🗺️ Section B: Location & Social -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Headquarters Map -->
          <div class="lg:col-span-7">
            <h3 class="text-[24px] font-bold text-[#0B2747] mb-8">总部办公中心</h3>
            <div class="relative rounded-[40px] overflow-hidden shadow-xl border-8 border-white group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760124056883-732e7a5e2e68"
                alt="Headquarters Location"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div class="absolute inset-0 bg-[#0B2747]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-[300px]">
                  <MapPin class="w-8 h-8 text-[#FF6B00] mx-auto mb-4" />
                  <div class="text-[16px] font-bold text-[#0B2747] mb-2">山东车拖车网络科技有限公司</div>
                  <div class="text-[12px] text-gray-500 leading-relaxed">山东省临沂市经济技术开发区沃尔沃路与芝加哥路交汇车拖车总部</div>
                </div>
              </div>
              <!-- Floating Address Card (Mobile Friendly) -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl lg:hidden">
                <div class="flex items-center gap-4">
                  <MapPin class="w-6 h-6 text-[#FF6B00]" />
                  <div class="text-[14px] font-bold">临沂市经济技术开发区</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Connect -->
          <div class="lg:col-span-5 flex flex-col">
            <h3 class="text-[24px] font-bold text-[#0B2747] mb-8">关注我们</h3>
            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center text-center group">
                <div class="w-16 h-16 bg-[#F0FDF4] rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <QrCode class="w-8 h-8" />
                </div>
                <div class="text-[18px] font-bold text-[#0B2747] mb-2">微信公众号</div>
                <p class="text-[12px] text-gray-400 mb-6 leading-relaxed">获取最新运价与行业资讯</p>
                <div class="w-32 h-32 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=wechat_chetuoche"
                    alt="WeChat QR"
                    class="w-24 h-24 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>

              <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center text-center group">
                <div class="w-16 h-16 bg-[#FFF1F2] rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <MessageSquare class="w-8 h-8" />
                </div>
                <div class="text-[18px] font-bold text-[#0B2747] mb-2">抖音官方号</div>
                <p class="text-[12px] text-gray-400 mb-6 leading-relaxed">观看发车现场与避坑指南</p>
                <div class="w-32 h-32 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=douyin_chetuoche"
                    alt="Douyin QR"
                    class="w-24 h-24 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '#app'
import {
  ChevronRight,
  ChevronDown,
  Phone,
  Truck,
  ShieldCheck,
  MapPin,
  MessageSquare,
  QrCode,
  CheckCircle2,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const router = useRouter()

const formData = ref({
  serviceType: '',
  name: '',
  phone: '',
  description: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  // Simulate API call
  setTimeout(() => {
    submitted.value = true
  }, 800)
}

const navigateToHome = () => {
  router.push('/')
}

const navigateToAbout = () => {
  router.push('/about')
}

const callPhone = (phone: string) => {
  window.location.href = `tel:${phone}`
}

const sendEmail = (email: string) => {
  window.location.href = `mailto:${email}`
}

const structuredData = computed(() => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: '联系车拖车 - 数字化汽车物流专家',
    mainEntity: {
      '@type': 'Organization',
      name: '车拖车 (CheTuoChe)',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '400-075-1117',
          contactType: 'customer support',
          areaServed: 'CN',
          availableLanguage: 'Chinese',
        },
        {
          '@type': 'ContactPoint',
          telephone: '138-XXXX-XXXX',
          contactType: 'sales',
          areaServed: 'CN',
          availableLanguage: 'Chinese',
        },
        {
          '@type': 'ContactPoint',
          email: 'tech@autotrans.com',
          contactType: 'technical support',
          areaServed: 'CN',
          availableLanguage: 'Chinese',
        },
      ],
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
</script>
