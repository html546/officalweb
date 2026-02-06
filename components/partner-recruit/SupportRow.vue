<template>
  <div
    :class="`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`"
  >
    <div class="lg:w-1/2">
      <div class="mb-6">
        <component :is="icon" class="w-12 h-12 text-[#006EFF]" />
      </div>
      <h3 class="text-[28px] font-bold mb-6 text-[#0B2747]">
        {{ title }}
      </h3>
      <p class="text-[#4B5563] text-[18px] leading-relaxed mb-8">
        {{ desc }}
      </p>
      <div class="space-y-4">
        <div v-for="item in items" :key="item" class="flex items-center gap-3">
          <CheckCircle2 class="w-5 h-5 text-[#006EFF]" />
          <span class="font-medium">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2">
      <div class="rounded-[40px] overflow-hidden shadow-2xl">
        <img
          :src="image"
          :alt="title"
          class="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

defineProps<{
  title: string
  desc: string
  icon: any
  image: string
  reverse: boolean
  items: string[]
}>()
</script>
