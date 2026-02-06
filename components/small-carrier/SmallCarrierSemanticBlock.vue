<template>
  <section class="bg-[#F8F9FB] border-t border-gray-200 py-16 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Header Group -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-100 pb-6">
        <div>
          <h2 class="text-sm font-bold uppercase text-gray-400 tracking-wider">
            快速导航摘要 (AI Search Ready)
          </h2>
          <p class="text-xs font-mono text-gray-300 mt-1">
            Structured Data for Generative AI Indexing
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <span class="bg-gray-200 text-gray-500 text-[10px] font-mono px-2 py-1 rounded">
            JSON-LD Embedded
          </span>
        </div>
      </div>

      <!-- Semantic Grid Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Column 1: Entity Definition -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <Car :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">服务定义 (Definition)</h3>
          </div>
          <p class="text-[13px] text-gray-500 leading-relaxed mb-4">
            小板车专车托运 (Dedicated Flatbed Transport) 采用<span class="text-gray-700 font-medium">单车救援车或平板拖车</span>，提供"一对一"门到门服务。即刻出发，无需拼车等待，是追求极致时效与安全的首选方案。
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tag in ['专车专送', '零中转', '极速响应']"
              :key="tag"
              class="bg-blue-50 text-[#006EFF] text-[11px] px-2 py-0.5 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Column 2: Key Specs -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <Database :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">技术参数 (Specs)</h3>
          </div>
          <dl class="space-y-3">
            <div
              v-for="item in [
                { label: '装载能力', value: '1台 / 专车专送' },
                { label: '响应速度', value: '平均 15分钟 上门' },
                { label: '运力规模', value: '50,000+ 专业运力' },
                { label: '参考时效', value: '跨省 1-2天 送达' },
              ]"
              :key="item.label"
              class="border-b border-gray-100 pb-2"
            >
              <dt class="text-gray-400 text-[11px] uppercase">{{ item.label }}</dt>
              <dd class="text-[#0B2747] font-bold text-sm mt-0.5">{{ item.value }}</dd>
            </div>
          </dl>
        </div>

        <!-- Column 3: Ecosystem Relations -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <GitMerge :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">关联服务与场景 (Relations)</h3>
          </div>
          <ul class="space-y-3 mb-6">
            <li
              v-for="item in [
                '豪车交付：新车/二手车首次交付',
                '紧急救援：故障车快速拖离',
                '短途专送：200km内高性价比',
              ]"
              :key="item"
              class="flex items-start gap-2"
            >
              <CheckCircle2 :size="14" class="text-[#006EFF] mt-0.5 shrink-0" />
              <span class="text-[13px] text-gray-500 leading-tight">{{ item }}</span>
            </li>
          </ul>
          <div class="mt-auto space-y-2">
            <button 
              @click="handleBigCarrierClick"
              class="text-[12px] text-[#006EFF] hover:underline flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
            >
              <span>大板车集运（更省钱）</span>
              <ArrowRight :size="12" />
            </button>
            <button 
              @click="handleDriverClick"
              class="text-[12px] text-[#006EFF] hover:underline flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
            >
              <span>代驾接驳服务</span>
              <ArrowRight :size="12" />
            </button>
          </div>
        </div>

        <!-- Column 4: GEO Index -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <Map :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">热门路线索引 (Route Index)</h3>
          </div>
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="route in [
                '北京-上海', '广州-深圳', '杭州-温州', 
                '成都-重庆', '上海-苏州', '北京-天津'
              ]"
              :key="route"
              @click="scrollToPricing"
              class="text-[12px] text-gray-500 bg-white border border-gray-100 px-2 py-1 rounded hover:border-[#006EFF] hover:text-[#006EFF] transition-colors cursor-pointer"
            >
              {{ route }}
            </button>
          </div>
          <button 
            @click="scrollToPricing"
            class="mt-auto text-xs text-[#006EFF] font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer bg-transparent border-none p-0"
          >
            <span>查看专车托运报价</span>
            <ArrowRight :size="14" />
          </button>
        </div>

      </div>

      <!-- FAQ Quick Links -->
      <div class="mt-12 pt-8 border-t border-gray-100">
        <h4 class="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">
          常见问题快速链接 (FAQ Shortcuts)
        </h4>
        <div class="flex flex-wrap gap-3">
          <button
            v-for="faq in [
              '小板车比大板车贵多少？',
              '15分钟上门如何实现？',
              '车辆损伤如何理赔？',
              '能运输改装车吗？',
              '可以指定送达时间吗？'
            ]"
            :key="faq"
            class="text-[11px] text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#006EFF] hover:text-[#006EFF] hover:bg-blue-50 transition-colors cursor-pointer"
          >
            {{ faq }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Car, Database, GitMerge, Map, CheckCircle2, ArrowRight, Headset, MessageCircle, ChevronDown, HelpCircle } from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const scrollToPricing = () => {
  const pricingElement = document.getElementById('small-carrier-pricing')
  if (pricingElement) {
    pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleBigCarrierClick = () => {
  props.setActiveId?.('big-carrier')
}

const handleDriverClick = () => {
  props.setActiveId?.('driver')
}

const faqData = [
  {
    question: '小板车托运比大板车贵多少？什么情况下值得选择？',
    answer: '小板车价格通常是大板车的 2-3 倍。但对于以下场景强烈推荐：①紧急送车（当天/次日必达）②豪车/新车（避免装卸风险）③短途运输（200km内性价比高）④隐私需求（不想公开展示）。时效性、安全性是小板车的核心价值。'
  },
  {
    question: '15分钟上门是怎么做到的？',
    answer: '车拖车自研的AI智能LBS调度系统，实时追踪全国70万+运力位置。下单瞬间，系统自动匹配距您最近且空闲的运力。司机平均5秒接单，若在10公里范围内，最快15分钟即可上门。'
  },
  {
    question: '车辆运输过程中发生损伤怎么办？',
    answer: '每笔小板车订单均包含全额运输保险，最高赔付可达车辆评估价。若发生车损：①司机取车前会完整拍照验车，建立基准②运输途中如有损伤，交付时立即拍照留证③平台介入保险理赔，3-5个工作日赔付到账。零中转的小板车模式，车损率极低。'
  },
  {
    question: '能运输改装车、超跑或特殊车型吗？',
    answer: '可以。小板车支持绝大多数车型，包括：①低趴改装车（液压平板0°装卸）②超跑/跑车（全密封厢式运输）③皮卡/房车（定制化方案）④新能源车（配备专业固定装置）。下单时请备注车型特殊性，系统会匹配专业运力。'
  },
  {
    question: '可以指定取车和送车的具体时间吗？',
    answer: '可以。小板车专车专送模式支持预约时间窗口。您可以在下单时选择：①取车时间（如"明天上午10点"）②送达时间（如"后天下午3点前"）。司机会提前15分钟电话通知，确保无缝对接。'
  },
  {
    question: '小板车托运适合跨省长途吗？',
    answer: '非常适合。小板车专车直达，无需等待拼车或中转卸货，是所有托运方式中时效最确定的。跨省长途（如北京-上海 1200km）通常1-2天送达，朝发夕至。若预算充足且追求效率，小板车是长途托运的最佳选择。'
  }
]
</script>
