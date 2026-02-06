<template>
  <div 
    class="p-10 rounded-3xl bg-[#F8F9FB] border border-transparent hover:border-[#006EFF]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group hover:-translate-y-1 duration-300"
  >
    <div class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#006EFF] group-hover:text-white transition-colors">
      <component :is="icon" class="w-8 h-8 text-[#006EFF] group-hover:text-white" />
    </div>
    <h3 class="text-[20px] font-bold text-[#0B2747] mb-4">{{ title }}</h3>
    <p class="text-[#0B2747]/60 text-[15px] leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc: string
}>()
</script>
