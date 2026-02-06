<template>
  <div class="flex gap-6">
    <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
      <component :is="icon" class="w-6 h-6 text-[#006EFF]" />
    </div>
    <div>
      <h3 class="text-[18px] font-bold text-[#0B2747] mb-2">{{ title }}</h3>
      <p class="text-[#0B2747]/60 text-[15px] leading-relaxed">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc: string
}>()
</script>
