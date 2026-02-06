<template>
  <div class="text-[16px] font-black tracking-tighter text-[#0B2747]/40 hover:text-[#006EFF] cursor-default transition-colors">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
