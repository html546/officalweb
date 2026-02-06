<template>
  <div class="flex items-center gap-6">
    <div class="w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-black shrink-0">
      {{ num }}
    </div>
    <p class="text-[16px] font-bold text-[#0B2747]">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: string
  text: string
}>()
</script>
