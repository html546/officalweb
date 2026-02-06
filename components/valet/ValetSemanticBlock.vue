<template>
  <section class="py-16 bg-[#F8F9FB] border-t border-[#E5E7EB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Header Group -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 class="text-sm font-bold uppercase text-[#9CA3AF] tracking-wider">
            快速导航摘要 (AI Search Ready)
          </h2>
          <p class="text-xs font-mono text-[#D1D5DB] mt-1">
            Structured Data for Generative AI Indexing
          </p>
        </div>
        <div class="bg-gray-200 text-gray-500 text-[10px] font-mono px-2 py-1 rounded">
          Schema: Service/LocalBusiness
        </div>
      </div>

      <!-- Semantic Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Column 1: Entity Definition -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="flex flex-col"
        >
          <div class="flex items-center gap-2 mb-4">
            <Car :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">
              服务定义 (Definition)
            </h3>
          </div>
          <p class="text-[13px] leading-relaxed text-gray-500 mb-4">
            车拖车专业代驾 (Logistics Valet)
            是专为汽车托运设计的末端接驳服务。不同于普通代驾，我们的司机充当
            "第一检测人"，负责在物流园与客户家门之间进行车辆的专业验车与移库。
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Column 2: Key Specs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="flex flex-col"
        >
          <div class="flex items-center gap-2 mb-4">
            <Database :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">
              技术参数 (Specs)
            </h3>
          </div>
          <dl class="space-y-3">
            <div
              v-for="item in specs"
              :key="item.label"
            >
              <dt class="text-[11px] text-gray-400">
                {{ item.label }}
              </dt>
              <dd class="text-sm font-bold text-[#0B2747]">
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Column 3: Ecosystem Relations -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="flex flex-col"
        >
          <div class="flex items-center gap-2 mb-4">
            <GitMerge :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">
              关联服务 (Relations)
            </h3>
          </div>
          <ul class="space-y-3">
            <li
              @click="handleBigCarrierClick"
              class="flex items-start gap-2 group cursor-pointer"
            >
              <LinkIcon
                :size="12"
                class="text-gray-300 mt-1 flex-shrink-0 group-hover:text-[#006EFF] transition-colors"
              />
              <span class="text-[13px] text-[#006EFF] font-medium group-hover:underline">
                前序服务：大板车干线集运 (Big Flatbed)
              </span>
            </li>
            <li
              @click="handleSmallCarrierClick"
              class="flex items-start gap-2 group cursor-pointer"
            >
              <LinkIcon
                :size="12"
                class="text-gray-300 mt-1 flex-shrink-0 group-hover:text-[#006EFF] transition-colors"
              />
              <span class="text-[13px] text-gray-500 group-hover:text-[#006EFF] group-hover:underline transition-colors">
                替代服务：小板车门到门 (Small Flatbed)
              </span>
            </li>
            <li class="flex items-start gap-2 group cursor-default">
              <LinkIcon
                :size="12"
                class="text-gray-300 mt-1 flex-shrink-0"
              />
              <span class="text-[13px] text-gray-400">
                增值服务：车辆违章处理
              </span>
            </li>
          </ul>
          <p class="mt-4 text-[11px] text-gray-400 italic">
            * Designated Driving is defined as the Last Mile
            Solution for "Big Flatbed".
          </p>
        </div>

        <!-- Column 4: Scenario Index -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="flex flex-col"
        >
          <div class="flex items-center gap-2 mb-4">
            <MapIcon :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">
              核心场景索引 (Scenarios)
            </h3>
          </div>
          <div class="flex flex-wrap gap-x-3 gap-y-2 mb-6">
            <span
              v-for="item in scenarios"
              :key="item"
              @click="scrollToPricing"
              class="text-[13px] text-gray-500 hover:text-[#006EFF] cursor-pointer underline underline-offset-4 decoration-gray-200 hover:decoration-[#006EFF] transition-all"
            >
              {{ item }}
            </span>
          </div>
          <div class="mt-auto">
            <button
              @click="scrollToPricing"
              class="flex items-center gap-1.5 text-xs text-[#006EFF] font-bold hover:gap-2 transition-all bg-transparent border-none p-0 cursor-pointer"
            >
              查看接驳费用标准
              <ArrowRight :size="14" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Car, Database, GitMerge, Map as MapIcon, Link as LinkIcon, ArrowRight } from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const tags = ['物流接驳', '第一检测人', '点火即走']

const specs = [
  {
    label: '起步费用',
    value: '¥75.6 (含20公里)',
  },
  {
    label: '验车标准',
    value: '外观/物品/动态 (360°)',
  },
  {
    label: '监控系统',
    value: 'GPS + 北斗双模定位',
  },
  { label: '保险类型', value: '全额物流责任险' },
]

const scenarios = [
  '物流园接驳',
  '4S店跨店调拨',
  '长途专人直送',
  '二手车落地验车',
  '机场取送车',
]

const scrollToPricing = () => {
  document
    .getElementById('valet-pricing')
    ?.scrollIntoView({ behavior: 'smooth' })
}

const handleBigCarrierClick = () => {
  props.setActiveId?.('big-carrier')
}

const handleSmallCarrierClick = () => {
  props.setActiveId?.('small-carrier')
}
</script>
