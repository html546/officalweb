<template>
  <div class="flex items-start gap-4">
    <div class="p-3 rounded-xl bg-white/5 border border-white/10">
      <component :is="icon" class="w-8 h-8 text-[#006EFF]" />
    </div>
    <div>
      <div class="text-[28px] font-bold text-white mb-1">{{ value }}</div>
      <div class="text-white/60 text-[14px]">{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  value: string
  label: string
}>()
</script>
