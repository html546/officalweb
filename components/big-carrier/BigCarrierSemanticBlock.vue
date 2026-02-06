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
            <Truck :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">服务定义 (Definition)</h3>
          </div>
          <p class="text-[13px] text-gray-500 leading-relaxed mb-4">
            大板车干线集运 (Big Flatbed Consolidation) 采用符合 <span class="text-gray-700 font-medium">GB1589 标准</span> 的双层笼车结构，单次装载 6-12 台 车辆。通过"固定干线+枢纽中转"模式，实现高性价比的批量汽车运输。
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tag in ['GB1589合规', '干线直发', '批量降本']"
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
                { label: '装载能力', value: '6-12 台 / 双层笼车' },
                { label: '网络规模', value: '30,000+ 线路 / 1000+ 网点' },
                { label: '定位系统', value: '国家交通局运输系统 (Gov)' },
                { label: '参考时效', value: '3-7 天 (跨省干线)' },
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
                '末端接驳：代驾进城解决限行',
                'B2B调拨：二手车商批量发运',
                '候鸟迁徙：家庭用车长途流转',
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
              @click="handleDriverClick"
              class="text-[12px] text-[#006EFF] hover:underline flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
            >
              <span>代驾接驳服务</span>
              <ArrowRight :size="12" />
            </button>
            <button 
              @click="handleSmallCarrierClick"
              class="text-[12px] text-[#006EFF] hover:underline flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
            >
              <span>小板车专送详情</span>
              <ArrowRight :size="12" />
            </button>
          </div>
        </div>

        <!-- Column 4: GEO Index -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-4">
            <Map :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">热门干线索引 (Route Index)</h3>
          </div>
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="route in [
                '北京-三亚', '上海-成都', '广州-北京', 
                '哈尔滨-海南', '深圳-西安', '杭州-乌鲁木齐'
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
            <span>查看所有干线报价</span>
            <ArrowRight :size="14" />
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, Database, GitMerge, Map, CheckCircle2, ArrowRight } from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const scrollToPricing = () => {
  document.getElementById('hot-routes')?.scrollIntoView({ behavior: 'smooth' })
}

const handleDriverClick = () => {
  props.setActiveId?.('driver')
}

const handleSmallCarrierClick = () => {
  props.setActiveId?.('small-carrier')
}
</script>
