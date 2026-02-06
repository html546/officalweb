<template>
  <div class="flex-1 flex flex-col items-center text-center relative z-10 px-6">
    <div class="w-20 h-20 rounded-2xl bg-[#F0F7FF] flex items-center justify-center mb-6 border border-[#006EFF]/10 shadow-lg shadow-blue-500/5">
      <component :is="icon" class="w-10 h-10 text-[#006EFF]" />
    </div>
    <div class="text-[#006EFF] text-[12px] font-bold mb-2">STEP {{ number }}</div>
    <h3 class="text-[20px] font-bold text-[#0B2747] mb-3">{{ title }}</h3>
    <p class="text-[#0B2747]/60 text-[14px] leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  icon: any
  title: string
  desc: string
}>()
</script>
