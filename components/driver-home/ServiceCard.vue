<template>
  <div
    class="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
  >
    <div class="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
      <component :is="icon" class="w-8 h-8" />
    </div>
    <h3 class="text-[18px] font-bold text-[#0B2747] mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-500 text-[14px] leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc: string
}>()
</script>
