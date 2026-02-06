<template>
  <div
    class="p-10 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
  >
    <div
      :class="`w-20 h-20 rounded-3xl ${color === 'blue' ? 'bg-[#006EFF]/10' : 'bg-[#FF6B00]/10'} flex items-center justify-center mb-8`"
    >
      <component :is="icon" class="w-10 h-10" :class="color === 'blue' ? 'text-[#006EFF]' : 'text-[#FF6B00]'" />
    </div>
    <h3 class="text-[22px] font-bold mb-4">{{ title }}</h3>
    <p class="text-[#4B5563] leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc: string
  color: "blue" | "orange"
}>()
</script>
