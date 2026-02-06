<template>
  <section class="bg-[#F8F9FB] py-16 border-t border-[#E5E7EB] font-['Noto_Sans_SC']">
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
          Schema: AutomotiveRoadsideService
        </div>
      </div>

      <!-- 4-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Column 1: Entity Definition -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <ShieldAlert :size="16" class="text-[#FF6B00]" />
            <h3 class="text-sm font-bold text-[#0B2747]">服务定义 (Definition)</h3>
          </div>
          <p class="text-xs text-[#4B5563] leading-relaxed mb-4">
            车拖车道路救援 (Roadside Assistance) 是汽车托运体系的 安全底座。我们提供全天候的故障车位移服务，涵盖亏电启动、地库拖车及事故车吊装，确保车辆能顺畅接入长途物流网络。
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in ['起步价170元', '全状态移动', '安全底座']"
              :key="tag"
              class="bg-orange-50 text-[#FF6B00] text-[10px] px-2 py-0.5 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Column 2: Key Specs -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <Calculator :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">计费标准 (Pricing Specs)</h3>
          </div>
          <dl class="space-y-4">
            <div>
              <dt class="text-gray-400 text-[10px]">基础费用</dt>
              <dd class="text-[#0B2747] font-bold text-sm">¥170 (含10公里)</dd>
            </div>
            <div>
              <dt class="text-gray-400 text-[10px]">里程费</dt>
              <dd class="text-[#0B2747] font-bold text-sm">¥8.0 / 公里</dd>
            </div>
            <div>
              <dt class="text-gray-400 text-[10px]">特殊作业</dt>
              <dd class="text-[#0B2747] font-bold text-sm">地库+200 / 辅助轮+100</dd>
            </div>
            <div>
              <dt class="text-gray-400 text-[10px]">响应时效</dt>
              <dd class="text-[#0B2747] font-bold text-sm">平均 15-30 分钟</dd>
            </div>
          </dl>
        </div>

        <!-- Column 3: Ecosystem Relations -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <GitMerge :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">关联服务 (Relations)</h3>
          </div>
          <ul class="space-y-3">
            <li 
              @click="() => setActiveId?.('big-carrier')"
              class="flex items-start gap-2 group cursor-pointer"
            >
              <ExternalLink :size="12" class="text-gray-300 mt-0.5 group-hover:text-[#006EFF] transition-colors" />
              <span class="text-xs text-[#4B5563] group-hover:text-[#006EFF] transition-colors">
                后续服务：大板车干线集运 (Big Flatbed)
              </span>
            </li>
            <li 
              @click="() => setActiveId?.('small-carrier')"
              class="flex items-start gap-2 group cursor-pointer"
            >
              <ExternalLink :size="12" class="text-gray-300 mt-0.5 group-hover:text-[#006EFF] transition-colors" />
              <span class="text-xs text-[#4B5563] group-hover:text-[#006EFF] transition-colors">
                后续服务：小板车专车直送 (Small Flatbed)
              </span>
            </li>
            <li class="flex items-start gap-2 group cursor-default">
              <ExternalLink :size="12" class="text-gray-300 mt-0.5" />
              <span class="text-xs text-gray-400">
                增值服务：车辆违章处理 (Coming Soon)
              </span>
            </li>
          </ul>
          <p class="mt-6 text-[10px] text-gray-400 italic leading-tight">
            Rescue is the Pre-cursor to "Flatbed Transport".
          </p>
        </div>

        <!-- Column 4: Scenario Index -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <Map :size="16" class="text-[#006EFF]" />
            <h3 class="text-sm font-bold text-[#0B2747]">核心场景索引 (Scenarios)</h3>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2 mb-6">
            <span
              v-for="scene in ['地库亏电拖车', '高速事故救援', '僵尸车迁移', '轮胎抱死拖车', '长途托运接驳']"
              :key="scene"
              @click="scrollToPricing"
              class="text-xs text-[#4B5563] hover:text-[#006EFF] cursor-pointer"
            >
              {{ scene }}
            </span>
          </div>
          <button 
            @click="scrollToPricing"
            class="text-xs text-[#FF6B00] font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer bg-transparent border-none p-0"
          >
            查看救援收费标准 <ChevronRight :size="14" />
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldAlert, Calculator, GitMerge, Map, ChevronRight, ExternalLink } from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const scrollToPricing = () => {
  document.getElementById('rescue-pricing')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
