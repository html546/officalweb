<template>
  <div class="group">
    <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#006EFF] mb-8 group-hover:bg-[#006EFF] group-hover:text-white transition-all">
      <component :is="icon" class="w-8 h-8" />
    </div>
    <h4 class="text-[20px] font-bold text-[#0B2747] mb-4">{{ title }}</h4>
    <div class="h-32 rounded-2xl overflow-hidden mb-6">
      <ImageWithFallback :src="image" :alt="title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
    <p class="text-gray-500 text-[14px] leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
import ImageWithFallback from '@/components/ImageWithFallback.vue'

defineProps<{
  icon: any
  title: string
  image: string
  desc: string
}>()
</script>
