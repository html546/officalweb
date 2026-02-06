<template>
  <div class="flex gap-6">
    <div class="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0">
      <component :is="icon" class="w-6 h-6 text-[#006EFF]" />
    </div>
    <div>
      <h4 class="text-[18px] font-bold text-[#0B2747] mb-2">
        {{ title }}
      </h4>
      <p v-if="desc" class="text-gray-500 text-[15px] leading-relaxed">
        {{ desc }}
      </p>
      <slot v-else name="desc" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any
  title: string
  desc?: string
}>()
</script>
