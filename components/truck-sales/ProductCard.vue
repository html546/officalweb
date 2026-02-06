<template>
  <div 
    class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
  >
    <div class="aspect-[16/10] bg-[#F8F9FB] relative">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute top-4 left-4 bg-[#006EFF] text-white text-[12px] font-bold px-3 py-1 rounded-md">
        {{ tag }}
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-[18px] font-bold text-[#0B2747] mb-3">{{ title }}</h3>
      <p class="text-[#0B2747]/60 text-[14px] leading-relaxed mb-6">{{ specs }}</p>
      <button 
        @click="$emit('inquire')"
        class="text-[#006EFF] font-bold text-[14px] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
      >
        查看配置详情 <ChevronRight class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  image: string
  title: string
  tag: string
  specs: string
}>()

defineEmits<{
  inquire: []
}>()
</script>
