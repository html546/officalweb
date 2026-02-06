<template>
  <div class="space-y-6">
    <!-- Loading State -->
    <div v-if="loading" class="space-y-6">
      <div
        v-for="i in 4"
        :key="i"
        class="bg-white rounded-xl border border-gray-100 p-6 animate-pulse"
      >
        <div class="flex gap-6">
          <div class="w-[200px] h-[140px] bg-gray-200 rounded-lg flex-shrink-0" />
          <div class="flex-1 space-y-3">
            <div class="h-6 bg-gray-200 rounded w-3/4" />
            <div class="h-4 bg-gray-200 rounded w-full" />
            <div class="h-4 bg-gray-200 rounded w-5/6" />
            <div class="flex gap-4 mt-4">
              <div class="h-3 bg-gray-200 rounded w-20" />
              <div class="h-3 bg-gray-200 rounded w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Article List -->
    <div v-else-if="newsList.length > 0" class="space-y-6">
      <article
        v-for="article in newsList"
        :key="article.id"
        class="bg-white rounded-xl border border-gray-100 hover:border-[#006EFF]/30 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
      >
        <div class="flex flex-col md:flex-row gap-6 p-6">
          <!-- Article Image -->
          <div class="w-full md:w-[200px] h-[140px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
            <img
              :src="article.imgUrl"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError"
            />
          </div>

          <!-- Article Content -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-[20px] font-bold text-[#0B2747] mb-3 line-clamp-2 group-hover:text-[#006EFF] transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-[15px] text-gray-600 leading-relaxed line-clamp-2 mb-4">
                {{ article.summary }}
              </p>
            </div>

            <!-- Article Meta -->
            <div class="flex items-center gap-4 text-[13px] text-gray-400">
              <div class="flex items-center gap-1.5">
                <Calendar class="w-4 h-4" />
                <span>{{ formatDate(article.createTime) }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <User class="w-4 h-4" />
                <span>{{ article.author }}</span>
              </div>
              <div class="ml-auto">
                <span class="text-[#006EFF] font-medium group-hover:underline">
                  阅读全文 →
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <FileText class="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <p class="text-gray-400 text-lg">暂无相关资讯</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, User, FileText } from 'lucide-vue-next'
import type { NewsItem } from '@/types'

interface Props {
  loading: boolean
  newsList: NewsItem[]
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  } catch {
    return dateString
  }
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800'
}
</script>
