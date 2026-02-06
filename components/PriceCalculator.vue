<template>
  <section id="price-calculator" class="bg-white py-24 font-['Noto_Sans_SC'] border-t border-gray-100">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#006EFF] text-xs font-bold mb-6">
            <Calculator class="w-3 h-3" />
            <span>实时查价系统 v4.0</span>
          </div>
          <h2 class="text-[36px] font-bold text-[#0B2747] leading-tight mb-6">
            透明计费，
            <br />
            一键获取小板车托运报价
          </h2>
          <p class="text-gray-500 text-lg mb-8 leading-relaxed">
            输入出发地与目的地，系统将根据实时运力分布及里程，秒级生成标准托运方案。
          </p>

          <ul class="space-y-4">
            <li
              v-for="(item, i) in features"
              :key="i"
              class="flex items-center gap-3 text-gray-700"
            >
              <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <ChevronRight class="w-3 h-3 text-green-600" />
              </div>
              <span class="text-sm font-medium">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

        <div class="lg:w-1/2 w-full">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :visibleOnce="true"
            class="w-full max-w-[480px] bg-white/98 border border-[#F3F4F6] rounded-2xl p-8 shadow-xl relative"
          >
            <!-- Header Section -->
            <div class="mb-8">
              <h3 class="text-[20px] font-bold text-[#0B2747]">
                小板车托运在线估价
              </h3>
              <div class="flex items-center gap-2 mt-2 text-[12px] text-[#6B7280]">
                <Sparkles
                  :size="14"
                  class="text-[#006EFF]"
                />
                <span>
                  AI智能定价 · 拒绝隐形消费 · 5秒获取报价
                </span>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Location Input Group -->
              <div class="relative space-y-4">
                <!-- Start Point -->
                <div class="relative">
                  <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#10B981]" />
                  <input
                    type="text"
                    placeholder="请输入出发地 (例如: 北京朝阳区)"
                    class="w-full h-12 bg-gray-50 rounded-lg pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#006EFF] transition-all"
                    :value="fromCity"
                    @focus="isLocationFocus = true"
                    @blur="setTimeout(() => isLocationFocus = false, 200)"
                    @input="(e: Event) => fromCity = (e.target as HTMLInputElement).value"
                  />
                  <!-- Simulated Dropdown -->
                  <div
                    v-if="isLocationFocus"
                    class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg z-20 py-1 overflow-hidden"
                  >
                    <div
                      v-for="item in locationSuggestions"
                      :key="item"
                      class="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                      @click="() => { fromCity = item; isLocationFocus = false }"
                    >
                      {{ item }}
                    </div>
                  </div>
                </div>

                <!-- Connecting Line Visual -->
                <div class="absolute left-5 top-10 bottom-10 w-[1px] border-l border-dashed border-gray-300 pointer-events-none" />

                <!-- End Point -->
                <div class="relative">
                  <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B00]" />
                  <input
                    type="text"
                    placeholder="请输入目的地"
                    class="w-full h-12 bg-gray-50 rounded-lg pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#006EFF] transition-all"
                    :value="toCity"
                    @input="(e: Event) => toCity = (e.target as HTMLInputElement).value"
                  />
                </div>
              </div>

              <!-- Vehicle Type Selector -->
              <div class="space-y-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  选择托运车型
                </label>
                <div class="relative">
                  <div
                    @click="isVehicleOpen = !isVehicleOpen"
                    class="h-12 bg-gray-50 rounded-lg flex items-center justify-between px-4 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <span
                      :class="carType ? 'text-sm font-medium text-gray-700' : 'text-sm text-gray-400'"
                    >
                      {{ carType || '请选择车型 (如: 轿车/SUV)' }}
                    </span>
                    <ChevronDown
                      :class="`w-4 h-4 text-gray-400 transition-transform ${isVehicleOpen ? 'rotate-180' : ''}`"
                    />
                  </div>

                  <!-- Dropdown Menu (Chips Grid) -->
                  <div
                    v-if="isVehicleOpen"
                    class="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-30 p-4"
                  >
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      <button
                        v-for="type in vehicleTypes"
                        :key="type"
                        @click="() => { carType = type; isVehicleOpen = false }"
                        :class="`py-2 rounded-lg text-xs font-medium transition-all border ${
                          carType === type
                            ? 'bg-blue-100 border-[#006EFF] text-[#006EFF]'
                            : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                        }`"
                      >
                        {{ type }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Area -->
              <div class="space-y-4 pt-2">
                <button
                  @click="handleCalculate"
                  :disabled="isCalculating || !fromCity || !toCity"
                  class="w-full h-[56px] bg-gradient-to-r from-[#FF6B00] to-[#E56000] text-white font-bold text-[18px] rounded-xl transition-all shadow-lg shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  <div
                    v-if="isCalculating"
                    class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"
                  />
                  <span v-else>立即获取报价</span>
                </button>

                <!-- Secondary Action -->
                <div class="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span>或使用微信扫码下单</span>
                  <button 
                    @click="handleQRClick"
                    class="flex items-center gap-1 text-[#006EFF] font-medium hover:underline bg-transparent border-none cursor-pointer p-0"
                  >
                    <QrCode :size="16" />
                    <span>点击弹出小程序码</span>
                  </button>
                </div>
              </div>

              <!-- Result Display -->
              <div
                v-if="result"
                v-motion
                :initial="{ opacity: 0, scale: 0.95 }"
                :enter="{ opacity: 1, scale: 1 }"
                class="mt-6 pt-6 border-t border-dashed border-gray-200"
              >
                <div class="flex justify-between items-end mb-4">
                  <div>
                    <p class="text-xs text-gray-400 mb-1">
                      预计里程
                    </p>
                    <p class="text-lg font-bold text-[#0B2747]">
                      {{ result.distance }} km
                    </p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-gray-400 mb-1">
                      预估价格
                    </p>
                    <p class="text-2xl font-bold text-[#FF6B00]">
                      ¥{{ result.total }}
                    </p>
                  </div>
                </div>
                <div class="bg-green-50 rounded-xl p-3 flex items-start gap-3">
                  <ShieldCheck class="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <p class="text-[11px] text-gray-600">
                    价格包含全额物流责任险，最高赔付
                    <strong>¥500,000</strong>。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import {
  Calculator,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  QrCode,
  MessageCircle,
} from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const fromCity = ref('')
const toCity = ref('')
const carType = ref('轿车')
const isCalculating = ref(false)
const isVehicleOpen = ref(false)
const isLocationFocus = ref(false)
const isMiniProgramModalOpen = ref(false)
const isMobile = ref(false)

interface Result {
  distance: number
  basePrice: number
  insurance: number
  total: number
}

const result = ref<Result | null>(null)

const vehicleTypes = [
  '摩托车',
  '轿车',
  '跑车',
  'SUV',
  '面包车',
  '皮卡',
  '叉车',
  '电四轮',
  '餐车',
  '房车',
  '货车',
  '拖拉机',
  '挖掘机',
]

const locationSuggestions = [
  '北京朝阳区建国门外大街 (推荐)',
  '北京朝阳大悦城',
]

const features = [
  '拒绝加价：系统一口价，不包含等待费过路费',
  '极速调度：下单后最快 5 秒钟接单',
  '全额保险：太平洋保险实时承保',
]

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleQRClick = () => {
  if (isMobile.value) {
    window.location.href = 'weixin://dl/business/?t=chetuoche_quote'
  } else {
    isMiniProgramModalOpen.value = true
  }
}

const handleCalculate = () => {
  if (!fromCity.value || !toCity.value) return

  isCalculating.value = true
  setTimeout(() => {
    const mockDistance = Math.floor(Math.random() * 2000) + 100
    const baseRate = 1.5
    const basePrice = Math.floor(mockDistance * baseRate)
    const insurance = 200

    result.value = {
      distance: mockDistance,
      basePrice: basePrice,
      insurance: insurance,
      total: basePrice + insurance,
    }
    isCalculating.value = false
  }, 800)
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
