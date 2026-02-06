<template>
  <div class="flex-1 flex flex-col items-center text-center">
    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
      <CheckCircle2 class="w-6 h-6 text-green-600" />
    </div>
    <h4 class="text-[20px] font-bold mb-4">{{ title }}</h4>
    <p class="text-[#4B5563] text-[15px] max-w-[280px]">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

defineProps<{
  title: string
  desc: string
}>()
</script>
