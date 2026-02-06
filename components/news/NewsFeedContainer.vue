<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-[24px] font-bold text-[#0B2747]">最新资讯</h2>
    </div>

    <!-- Category Tabs -->
    <NewsCategoryTabs 
      :categories="newsTypes" 
      :active-tab="activeTab" 
      @tab-change="handleTabChange"
    />

    <!-- Article List -->
    <div v-if="error" class="p-6 bg-red-50 text-red-600 rounded-lg text-sm">
      {{ error }}
      <p class="mt-2 text-xs opacity-70">提示：如果看到 CORS 错误，请尝试使用代理或在服务端允许跨域。</p>
    </div>
    <NewsArticleList v-else :loading="loading" :news-list="newsList" />

    <!-- Pagination Controls -->
    <div 
      v-if="!loading && !error && newsList.length > 0"
      class="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-gray-100"
    >
      <button 
        @click="handlePrevPage"
        :disabled="page === 1"
        class="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft class="w-4 h-4" />
        上一页
      </button>
      
      <span class="text-sm font-medium text-[#0B2747]">
        第 {{ page }} 页
      </span>
      
      <button 
        @click="handleNextPage"
        class="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
      >
        下一页
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import NewsCategoryTabs from './NewsCategoryTabs.vue'
import NewsArticleList from './NewsArticleList.vue'

import type { NewsItem, NewsItemAPI } from '@/types'

// --- Types ---
interface NewsType {
  id: string
  name: string
}

// --- Mock Data for Fallback ---
const MOCK_NEWS_TYPES: NewsType[] = [
  { id: '1', name: '全部' },
  { id: '2', name: '行业深度' },
  { id: '3', name: '技术公告' },
  { id: '4', name: '产品资讯' },
]

const MOCK_NEWS_LIST: NewsItem[] = [
  {
    id: 1,
    title: "车拖车数字化算法实验室：如何通过 AI 调度提升 15% 的汽车运输周转率？",
    summary: "在非标物流领域，空驶率一直是制约效率的瓶颈。临沂汽车数智供应链实验室最新发布的调度模型显示，通过多维度路径优化，可大幅降低车辆空载时间。",
    createTime: "2026-05-12",
    author: "车拖车研究院",
    imgUrl: "https://images.unsplash.com/photo-1720382248625-dc19de24834c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "2026年清障车市场趋势报告：从传统液压到全数智化驱动的跨越",
    summary: "随着新能源汽车渗透率提升，托运清障需求正发生结构性变化。本文深入分析了新一代数智化清障车的技术演进路径、核心零部件国产化进程。",
    createTime: "2026-05-10",
    author: "产品中心",
    imgUrl: "https://images.unsplash.com/photo-1764670435420-fad750bfd88d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "信息安全升级公告：车拖车正式通过国家信息系统安全等级保护三级认证",
    summary: "车拖车平台在数据脱敏、加密传输及服务器深度加固方面完成全面升级，正式获得等保三级认证。这标志着平台在保障B端客户业务数据安全方面已达到金融级标准。",
    createTime: "2026-05-08",
    author: "信息安全部",
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "B2B汽车物流的标准化路径：临沂数智实验室的 300 条专家准则",
    summary: "非标服务标准化是物流行业的圣杯。我们总结了从交车验车到收车支付的 300 条核心作业准则，旨在打造行业级的透明度标杆与信任基础。",
    createTime: "2026-05-05",
    author: "专家组",
    imgUrl: "https://images.unsplash.com/photo-1720382248625-dc19de24834c?auto=format&fit=crop&q=80&w=800"
  }
]

// --- API Configuration ---
const API_CONFIG = {
  BASE_URL: "https://git.chetuoche.net/official-website-server",
  HEADERS: {
    "userType": "web",
    "Content-Language": "zh-CN",
    "channelSource": "3017",
    "Content-Type": "application/json"
  }
}

// Helper to generate dynamic headers
const getAuthHeaders = () => {
  const timestamp = Date.now().toString()
  const sign = `mock_sign_${timestamp}_web`
  
  return {
    ...API_CONFIG.HEADERS,
    timestamp,
    sign
  }
}

// --- State ---
const loading = ref(true)
const activeTab = ref('')
const page = ref(1)
const newsList = ref<NewsItem[]>([])
const newsTypes = ref<NewsType[]>([])
const error = ref<string | null>(null)

// --- API Functions ---
const fetchCategories = async () => {
  try {
    const response = await $fetch(`${API_CONFIG.BASE_URL}/api/home/getAllNewsType`, {
      method: 'GET',
      headers: getAuthHeaders()
    })
    
    const categories = Array.isArray(response) ? response : (response?.data || [])
    newsTypes.value = categories as NewsType[]
    if (categories.length > 0) {
      activeTab.value = categories[0].id
    }
  } catch (err) {
    // Fallback to mock data
    newsTypes.value = MOCK_NEWS_TYPES
    activeTab.value = MOCK_NEWS_TYPES[0].id
  }
}

const fetchNews = async () => {
  if (!activeTab.value) return

  loading.value = true
  error.value = null
  
  try {
    const response = await $fetch(`${API_CONFIG.BASE_URL}/api/home/newsList/${page.value}/10`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ newsTypeId: activeTab.value })
    })
    
    const rawList = Array.isArray(response) ? response : (response?.data?.list || response?.list || [])
    
    // Map API fields to UI fields
    const mappedList: NewsItem[] = rawList.map((item: NewsItemAPI) => ({
      id: item.id,
      title: item.title,
      summary: item.desc || item.summary || "暂无简介",
      createTime: item.createTime || new Date().toISOString().split('T')[0],
      author: item.author || "官方发布",
      imgUrl: item.imgUrl || item.cover || "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800"
    }))
    
    newsList.value = mappedList
  } catch (err) {
    // Fallback to mock data
    newsList.value = MOCK_NEWS_LIST
  } finally {
    loading.value = false
  }
}

// --- Handlers ---
const handleTabChange = (id: string) => {
  activeTab.value = id
  page.value = 1
}

const handlePrevPage = () => {
  if (page.value > 1) {
    page.value = page.value - 1
  }
}

const handleNextPage = () => {
  page.value = page.value + 1
}

// --- Lifecycle ---
onMounted(() => {
  fetchCategories()
})

// Watch for tab and page changes
watch([activeTab, page], () => {
  fetchNews()
}, { immediate: false })
</script>
