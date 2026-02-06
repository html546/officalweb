<template>
  <div class="flex flex-col items-center text-center relative z-10 group">
    <div class="w-16 h-16 rounded-full bg-white border-2 border-[#006EFF]/20 flex items-center justify-center mb-6 text-[#006EFF] group-hover:bg-[#006EFF] group-hover:text-white transition-all shadow-lg shadow-blue-500/10">
      <component :is="icon" class="w-8 h-8" />
    </div>
    <h3 class="text-[18px] font-bold text-[#0B2747] mb-2">{{ title }}</h3>
    <p class="text-[#0B2747]/60 text-[14px]">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc: string
}>()
</script>
