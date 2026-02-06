<template>
  <div class="p-8 rounded-[32px] border-none shadow-sm hover:shadow-lg transition-all bg-white">
    <div class="flex items-center gap-4 mb-6">
      <img
        :src="image"
        :alt="name"
        class="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <div class="font-bold text-[18px]">{{ name }}</div>
        <div class="text-gray-400 text-[14px]">
          {{ location }}
        </div>
      </div>
    </div>
    <p class="text-[#4B5563] italic mb-8 relative">
      <span class="text-[40px] text-[#006EFF]/10 absolute -top-4 -left-2">
        "
      </span>
      {{ quote }}
    </p>
    <div class="flex justify-between items-center pt-6 border-t border-gray-100">
      <span class="text-[14px] text-gray-400">
        上月净收益
      </span>
      <span class="text-[24px] font-black text-[#FF6B00]">
        {{ income }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  location: string
  quote: string
  income: string
}>()
</script>
