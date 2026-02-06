<template>
  <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
    <button
      @click="isOpen = !isOpen"
      class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer outline-none"
    >
      <span class="font-bold text-[#0B2747]">
        {{ question }}
      </span>
      <div
        :class="`w-6 h-6 rounded-full bg-blue-50 text-[#006EFF] flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`"
      >
        <ChevronRight class="w-4 h-4 rotate-90" />
      </div>
    </button>
    <div
      v-show="isOpen"
      class="overflow-hidden transition-all"
    >
      <div class="p-6 pt-0 text-gray-500 text-[15px] leading-relaxed border-t border-gray-50">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  question: string
  answer: string
}>()

const isOpen = ref(false)
</script>
