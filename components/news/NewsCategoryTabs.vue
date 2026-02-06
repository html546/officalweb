<template>
  <div class="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 mb-6 border-b border-gray-100">
    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="$emit('tabChange', cat.id)"
      :class="[
        'px-6 py-2.5 rounded-full text-[14px] font-medium transition-all whitespace-nowrap mb-2',
        activeTab === cat.id
          ? 'bg-[#0B2747] text-white shadow-md ring-2 ring-[#0B2747]/20'
          : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200'
      ]"
    >
      {{ cat.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface NewsType {
  id: string
  name: string
}

interface Props {
  categories: NewsType[]
  activeTab: string
}

defineProps<Props>()

defineEmits<{
  tabChange: [id: string]
}>()
</script>
