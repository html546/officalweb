<template>
  <div class="text-center mb-16">
    <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
      <slot />
    </h2>
    <p v-if="subtitle" class="text-[14px] text-[#4B5563] uppercase tracking-widest">
      {{ subtitle }}
    </p>
    <div class="w-16 h-1 bg-[#006EFF] mx-auto mt-4" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  subtitle?: string
}

defineProps<Props>()
</script>
