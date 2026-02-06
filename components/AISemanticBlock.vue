<template>
  <section class="bg-[#F8F9FB] py-16 font-['Noto_Sans_SC'] border-t border-[#E5E7EB]">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Section Header -->
      <div class="flex flex-row justify-between items-start mb-10">
        <div>
          <h2 class="text-sm font-bold uppercase tracking-widest text-[#9CA3AF]">
            快速导航摘要 (AI Search Ready)
          </h2>
          <p class="text-xs font-mono text-[#D1D5DB] mt-1">
            Structured Data for Generative AI Indexing
          </p>
        </div>
        <div class="bg-gray-200 text-gray-500 text-[10px] px-2 py-1 rounded font-mono">
          JSON-LD Embedded
        </div>
      </div>

      <!-- Semantic Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        <!-- Column 1: Entity Definition -->
        <article class="flex flex-col">
          <h3 class="text-sm font-bold text-[#0B2747] mb-3 flex items-center gap-2">
            <BookOpen :size="16" class="text-[#006EFF]" />
            服务定义 (Definition)
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed text-justify">
            小板车托运 (Small Flatbed Transport)
            是指采用单车位平板拖车或厢式车，提供
            <strong>一对一、门到门</strong>
            的专属汽车运输服务。区别于大板车拼车，它具有
            <strong>零中转、零等待</strong> 的特点。
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in ['专车专送', '时效优先', '私密性强']"
              :key="tag"
              class="bg-blue-50 text-[#006EFF] text-xs px-2 py-1 rounded font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </article>

        <!-- Column 2: Key Specifications -->
        <div class="flex flex-col">
          <h3 class="text-sm font-bold text-[#0B2747] mb-3 flex items-center gap-2">
            <Settings2 :size="16" class="text-[#006EFF]" />
            核心参数 (Specs)
          </h3>
          <dl class="space-y-0">
            <div
              v-for="(item, idx) in specs"
              :key="idx"
              class="flex justify-between items-center py-2 border-b border-gray-200 border-dashed last:border-0"
            >
              <dt class="text-xs text-gray-500 font-medium">
                {{ item.label }}
              </dt>
              <dd class="text-sm font-bold text-[#0B2747]">
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Column 3: Ecosystem Relations -->
        <nav class="flex flex-col">
          <h3 class="text-sm font-bold text-[#0B2747] mb-3 flex items-center gap-2">
            <Share2 :size="16" class="text-[#006EFF]" />
            适用场景与关联 (Relations)
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(text, idx) in scenarios"
              :key="idx"
              class="flex items-start gap-2 text-sm text-gray-600"
            >
              <CheckCircle2
                :size="14"
                class="text-[#006EFF] shrink-0 mt-0.5"
              />
              <span>{{ text }}</span>
            </li>
          </ul>
          <div class="mt-4 pt-3 border-t border-gray-200 flex flex-wrap gap-x-2 gap-y-1">
            <template v-for="(link, idx) in relatedLinks" :key="link">
              <button
                @click="() => setActiveId?.(linkMap[link])"
                class="text-xs text-[#006EFF] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                {{ link }}
              </button>
              <span v-if="idx < relatedLinks.length - 1" class="text-gray-300 text-xs">|</span>
            </template>
          </div>
        </nav>

        <!-- Column 4: GEO Index -->
        <nav class="flex flex-col">
          <h3 class="text-sm font-bold text-[#0B2747] mb-3 flex items-center gap-2">
            <MapPin :size="16" class="text-[#006EFF]" />
            热门服务区域 (GEO Index)
          </h3>
          <div class="flex flex-wrap gap-x-3 gap-y-2">
            <button
              v-for="city in cities"
              :key="city"
              @click="scrollToCalculator"
              class="text-xs text-gray-500 hover:text-[#006EFF] hover:underline cursor-pointer transition-colors bg-transparent border-none p-0"
            >
              {{ city }}
            </button>
          </div>
          <button
            @click="scrollToCalculator"
            class="mt-4 flex items-center gap-1 text-xs text-[#006EFF] font-bold hover:translate-x-1 transition-transform bg-transparent border-none p-0 cursor-pointer"
          >
            查看该城市最新报价 <ArrowRight :size="12" />
          </button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BookOpen,
  Settings2,
  Share2,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const scrollToCalculator = () => {
  document.getElementById('price-calculator')?.scrollIntoView({ behavior: 'smooth' })
}

const linkMap: Record<string, string> = {
  '大板车集运': 'big-carrier',
  '道路救援': 'rescue',
  '代驾服务': 'driver',
}

const specs = [
  { label: '响应速度', value: '5秒接单 / 15分钟上门' },
  { label: '运力覆盖', value: '全国 90% 地区 / 38万辆' },
  { label: '计费模式', value: '起步价 + 里程 / 一口价' },
  { label: '保险承保', value: '太平洋 / 东海 (全额)' },
]

const scenarios = [
  '豪车交付：4S店至客户家门',
  '紧急救援：故障车/事故车拖离',
  '二手车交易：异地购车验车',
]

const relatedLinks = ['大板车集运', '道路救援', '代驾服务']

const cities = [
  '北京托运',
  '上海小板车',
  '广州拖车',
  '深圳运车',
  '成都',
  '杭州',
  '三亚',
  '乌鲁木齐',
  '西安',
  '武汉',
]
</script>
