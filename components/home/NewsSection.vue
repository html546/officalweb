<template>
  <section class="py-20 bg-white">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold text-[#0B2747] mb-2">新闻资讯</h2>
          <p class="text-gray-500">了解车拖车最新动态与行业资讯</p>
        </div>
        <a
          href="#"
          @click.prevent="handleViewMore"
          class="flex items-center text-[#006EFF] font-semibold hover:underline cursor-pointer"
        >
          查看更多 <ArrowRight class="w-4 h-4 ml-1" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="item in newsItems"
          :key="item.id"
          class="group cursor-pointer"
          @click="handleNewsClick"
        >
          <div class="relative overflow-hidden rounded-xl mb-4 aspect-[16/10]">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4 bg-[#FF6B00] text-white text-xs px-2 py-1 rounded">
              {{ item.category }}
            </div>
          </div>
          <div class="flex items-center text-gray-400 text-sm mb-2">
            <Calendar class="w-4 h-4 mr-1" />
            {{ item.date }}
          </div>
          <h3 class="text-xl font-bold text-[#0B2747] mb-2 group-hover:text-[#006EFF] transition-colors line-clamp-2">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {{ item.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Calendar } from 'lucide-vue-next'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const newsItems = [
  {
    id: 1,
    title: '车拖车完成 B 轮融资，加速 AI 智能调度系统升级',
    date: '2026-01-15',
    category: '企业动态',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    desc: '本轮融资将用于进一步完善全国运力网络建设及 L4 级自动驾驶干线物流的技术预研。'
  },
  {
    id: 2,
    title: '2025 年度中国物流行业创新奖揭晓，车拖车荣获金奖',
    date: '2025-12-20',
    category: '行业荣誉',
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0ce88be?q=80&w=800',
    desc: '凭借独特的"AI+运力"双引擎模式，车拖车在降本增效方面的突出表现获得评审团一致认可。'
  },
  {
    id: 3,
    title: '春节期间运力保障方案发布：承诺不涨价、不拒单',
    date: '2026-01-28',
    category: '服务公告',
    image: 'https://images.unsplash.com/photo-1625218377718-4c5991443cc6?q=80&w=800',
    desc: '为保障春节期间车主返乡需求，平台已调度储备 3000+ 辆应急救援车与小板车运力。'
  }
]

const handleViewMore = () => {
  props.setActiveId?.('news')
}

const handleNewsClick = () => {
  props.setActiveId?.('news')
}
</script>
