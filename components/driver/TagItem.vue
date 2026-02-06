<template>
  <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#006EFF]/10 text-[#006EFF] text-[14px] font-medium">
    <component :is="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  label: string
}>()
</script>
