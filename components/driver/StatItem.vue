<template>
  <div class="text-center md:text-left">
    <div class="text-[32px] font-bold mb-1">{{ value }}</div>
    <div class="text-white/60 text-[14px]">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>
