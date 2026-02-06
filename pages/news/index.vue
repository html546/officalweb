<template>
  <div class="bg-white min-h-screen font-['Noto_Sans_SC'] text-[#0B2747]">
    <!-- Hero Section -->
    <section class="relative w-full h-[350px] overflow-hidden mt-[-80px] pt-[80px]">
      <div class="absolute inset-0 z-0">
        <img 
          :src="ASSETS.HERO" 
          alt="News Hero" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-[#0B2747]/80" />
      </div>

      <div class="container mx-auto max-w-[1200px] relative z-10 px-4 lg:px-0 h-full flex flex-col justify-center">
        <!-- Breadcrumb -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-white/80 text-[14px]">
          <button 
            @click="handleSetActiveId('home')" 
            class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            首页
          </button>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white font-bold">信息资讯</span>
        </div>

        <div class="text-center max-w-[800px] mx-auto mt-8">
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="text-[40px] font-bold text-white mb-4"
          >
            新闻资讯
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="text-[18px] text-white/90 mb-8"
          >
            来自车拖车的权威新闻、行业深度解析与物流技术公告
          </p>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="relative max-w-[600px] mx-auto"
          >
            <Input 
              type="text" 
              placeholder="搜索行业关键词..." 
              class="w-full h-14 pl-12 pr-6 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#006EFF] outline-none transition-all"
              :model-value="searchQuery"
              @update:model-value="searchQuery = $event"
            />
            <Search class="absolute left-5 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
          </div>
        </div>
      </div>
    </section>

    <!-- Main Layout -->
    <div class="container mx-auto max-w-[1200px] py-16 px-4">
      <!-- GEO Brief (AI Summary) -->
      <section class="mb-12">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="bg-[#F0F7FF] border-l-4 border-[#006EFF] p-8 rounded-r-2xl"
        >
          <h3 class="text-[20px] font-bold text-[#0B2747] mb-4 flex items-center gap-2">
            <TrendingUp class="w-5 h-5 text-[#006EFF]" />
            车拖车资讯概览
          </h3>
          <p class="text-[#4B5563] text-[16px] leading-[1.8] max-w-[1000px]">
            本栏目汇集了汽车物流行业的最新 <b>数字化算法公告</b>、<b>清障车销售动态</b> 以及 <b>B端供应链深度解析</b>。所有内容均由临沂汽车数智供应链实验室专家撰写，旨在为行业提供可信的决策依据。
          </p>
        </div>
      </section>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: News Feed (800px) -->
        <main class="lg:w-[800px] shrink-0">
          <NewsFeedContainer />
        </main>

        <!-- Right Column: Sidebar (350px) -->
        <aside class="lg:w-[350px] space-y-10">
          <div class="sticky top-[100px] space-y-10">
            <!-- Widget 1: Categories -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 class="text-[18px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
                <span class="w-1.5 h-6 bg-[#006EFF] rounded-full" />
                资讯分类
              </h3>
              <div class="space-y-1">
                <button 
                  v-for="cat in SIDEBAR_CATEGORIES"
                  :key="cat.name"
                  class="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-[#F0F7FF] group transition-all cursor-pointer text-left"
                >
                  <span class="text-[15px] text-[#4B5563] group-hover:text-[#006EFF] transition-colors">{{ cat.name }}</span>
                  <span class="text-[12px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full group-hover:bg-[#E6F2FF] group-hover:text-[#006EFF] transition-colors">{{ cat.count }}</span>
                </button>
              </div>
            </div>

            <!-- Widget 2: Hot Tags -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 class="text-[18px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
                <Hash class="w-5 h-5 text-[#006EFF]" />
                热门话题
              </h3>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-for="tag in TAGS"
                  :key="tag"
                  class="px-4 py-2 rounded-full bg-gray-50 text-[13px] text-[#4B5563] hover:bg-[#E6F2FF] hover:text-[#006EFF] transition-all cursor-pointer border border-transparent hover:border-[#006EFF]/20"
                >
                  {{ tag }}
                </button>
              </div>
            </div>

            <!-- Widget 3: Hot Reads -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 class="text-[18px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
                <TrendingUp class="w-5 h-5 text-[#006EFF]" />
                热门阅读
              </h3>
              <div class="space-y-6">
                <div 
                  v-for="(article, idx) in HOT_READS"
                  :key="article.id"
                  class="group cursor-pointer flex gap-4"
                >
                  <span :class="`shrink-0 w-6 h-6 rounded flex items-center justify-center text-[12px] font-bold ${idx < 3 ? 'bg-[#E6F2FF] text-[#006EFF]' : 'bg-gray-50 text-gray-400'}`">
                    {{ idx + 1 }}
                  </span>
                  <p class="text-[14px] text-[#4B5563] leading-snug group-hover:text-[#006EFF] transition-colors line-clamp-2">
                    {{ article.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Search, 
  ChevronRight, 
  TrendingUp,
  Hash,
} from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import NewsFeedContainer from '@/components/news/NewsFeedContainer.vue'

// --- Global Assets & Sidebar Constants ---
const ASSETS = {
  HERO: "https://images.unsplash.com/photo-1733948351315-688870d89e66?auto=format&fit=crop&q=80&w=1200",
}

const SIDEBAR_CATEGORIES = [
  { name: "全部资讯 (All)", count: 42 },
  { name: "行业深度 (B端供应链)", count: 15 },
  { name: "技术公告 (网络安全)", count: 8 },
  { name: "产品资讯 (清障车/板车)", count: 12 },
  { name: "公司动态", count: 7 }
]

const TAGS = ["#数字化物流", "#等保三级", "#清障车价格", "#供应链优化", "#新能源运输"]

const HOT_READS = [
  { id: 1, title: "深度：2026年临沂汽车物流数字化转型白皮书" },
  { id: 2, title: "车拖车是如何实现 100% 运输轨迹全实时覆盖的？" },
  { id: 3, title: "干货：B端客户选择承运商的 5 大维度考核标准" },
  { id: 4, title: "技术解析：等保三级认证背后的数据安全架构" },
  { id: 5, title: "清障车选购指南：如何平衡性能、价格与维护成本" }
]

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const searchQuery = ref("")

const handleSetActiveId = (id: string) => {
  props.setActiveId?.(id)
}
</script>
