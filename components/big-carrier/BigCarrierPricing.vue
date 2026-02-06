<template>
  <section id="hot-routes" aria-label="Calculator" class="bg-[#F8F9FB] py-24 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-[36px] font-bold text-[#0B2747]">
          全国热门专线参考报价
        </h2>
        <p class="text-[16px] text-[#4B5563] mt-4 max-w-2xl mx-auto">
          数据来源于车拖车智能调度系统实时统计，大板车干线集运价格透明，拒绝隐形消费。
        </p>
      </div>

      <!-- Table Container -->
      <div class="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden">
        <!-- Table Header -->
        <div class="bg-[#0B2747] h-16 flex items-center text-white font-bold text-sm tracking-wide">
          <div class="w-[35%] pl-8 text-left">起始地 → 目的地</div>
          <div class="w-[15%] text-center">车型</div>
          <div class="w-[15%] text-center">参考时效</div>
          <div class="w-[15%] text-center">发车频次</div>
          <div class="w-[20%] pr-8 text-right">参考价格</div>
        </div>

        <!-- Table Rows -->
        <ul class="divide-y divide-gray-100 p-0 m-0 list-none">
          <li
            v-for="(row, index) in pricingData"
            :key="index"
            class="h-20 flex items-center hover:bg-blue-50 transition-colors duration-200"
          >
            <!-- Route Column -->
            <div class="w-[35%] pl-8 flex items-center gap-3">
              <div class="flex items-center gap-2 text-[#0B2747] font-bold">
                <span>{{ row.from }}</span>
                <ArrowRight :size="14" class="text-gray-400" />
                <span>{{ row.to }}</span>
              </div>
              <span
                v-if="row.badge"
                :class="[
                  row.badge.color,
                  'text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase'
                ]"
              >
                {{ row.badge.text }}
              </span>
            </div>

            <!-- Vehicle Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.vehicle }}
            </div>

            <!-- Time Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.time }}
            </div>

            <!-- Frequency Column -->
            <div class="w-[15%] text-center text-[#4B5563] text-sm">
              {{ row.freq }}
            </div>

            <!-- Price Column -->
            <div class="w-[20%] pr-8 text-right">
              <span class="text-[#FF6B00] text-lg font-bold">
                {{ row.price }} 元起
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Footer / CTA Area -->
      <div class="flex flex-col items-center mt-12">
        <button
          v-motion
          :while-hover="{ scale: 1.02 }"
          :while-tap="{ scale: 0.98 }"
          @click="handleQuoteClick"
          class="bg-[#006EFF] text-white px-8 py-4 h-14 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors border-none cursor-pointer"
        >
          获取精准干线报价
          <Calculator :size="18" />
        </button>
        
        <button 
          @click="handleQuoteClick"
          class="text-[#4B5563] text-sm mt-6 hover:text-[#006EFF] transition-colors border-none bg-transparent cursor-pointer"
        >
          查看更多城市价格 &gt;
        </button>
        
        <p class="text-[12px] text-gray-400 mt-4 text-center">
          *注：以上价格仅供参考，实际费用受季节、车型及燃油费波动影响，以系统实时报价为准。
        </p>
      </div>
    </div>

    <!-- Mini Program Modal (Desktop Only) -->
    <Dialog v-model="isMiniProgramModalOpen">
      <DialogContent class="sm:max-w-[400px] bg-white p-0 overflow-hidden rounded-2xl gap-0">
        <div class="p-8 flex flex-col items-center text-center">
          <DialogHeader class="mb-2 p-0 space-y-0">
            <DialogTitle class="text-[22px] font-bold text-[#0B2747] text-center">微信扫码 · 3秒获取报价</DialogTitle>
          </DialogHeader>
          <DialogDescription class="text-[14px] text-gray-500 mb-8 max-w-[260px] leading-relaxed">
            无需下载，支持小板车、大板车、救援实时测算
          </DialogDescription>
          
          <!-- QR Code Container -->
          <div class="relative w-[180px] h-[180px] bg-white border-2 border-[#0B2747]/5 rounded-xl flex items-center justify-center mb-6 shadow-inner">
            <ImageWithFallback 
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://chetuoche.com/miniprogram"
              alt="WeChat Mini Program QR"
              class="w-full h-full p-2"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 border border-gray-100">
                <MessageCircle class="w-6 h-6 text-[#07C160] fill-current" />
              </div>
            </div>
          </div>

          <div class="text-[14px] text-gray-400 mb-6 font-medium">
            打开微信 [扫一扫]
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Calculator, MessageCircle } from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const pricingData = [
  {
    from: '北京',
    to: '广州',
    badge: { text: 'HOT', color: 'bg-red-500' },
    vehicle: '轿车/SUV',
    time: '3-4 天',
    freq: '每日发车',
    price: '2200',
  },
  {
    from: '上海',
    to: '成都',
    vehicle: '轿车/SUV',
    time: '4-5 天',
    freq: '每日发车',
    price: '2400',
  },
  {
    from: '深圳',
    to: '北京',
    vehicle: '轿车/SUV',
    time: '3-4 天',
    freq: '每日发车',
    price: '2300',
  },
  {
    from: '沈阳',
    to: '三亚',
    badge: { text: '候鸟专线', color: 'bg-green-600' },
    vehicle: '轿车/SUV',
    time: '5-7 天',
    freq: '隔日发车',
    price: '3500',
  },
  {
    from: '杭州',
    to: '西安',
    vehicle: '轿车/SUV',
    time: '3-4 天',
    freq: '每日发车',
    price: '2100',
  },
]

const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleQuoteClick = () => {
  if (isMobile.value) {
    window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
  } else {
    isMiniProgramModalOpen.value = true
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
