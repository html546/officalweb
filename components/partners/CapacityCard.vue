<template>
  <div 
    class="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col hover:-translate-y-2 transition-transform duration-300"
  >
    <div class="h-48 relative">
      <ImageWithFallback :src="image" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div class="absolute bottom-4 left-6 flex items-center gap-2 text-white">
        <div class="p-2 bg-[#006EFF] rounded-lg">
          <component :is="icon" class="w-6 h-6" />
        </div>
        <span class="font-bold">{{ title }}</span>
      </div>
      <div v-if="tag" class="absolute top-4 right-4 px-3 py-1 bg-[#FF6B00] text-white text-[11px] font-bold rounded-full">
        {{ tag }}
      </div>
    </div>
    <div class="p-8 flex flex-col flex-1">
      <h4 class="text-[20px] font-bold text-[#0B2747] mb-3">{{ headline }}</h4>
      <p class="text-gray-500 text-[14px] leading-relaxed mb-8 flex-1">{{ desc }}</p>
      <Button 
        @click="$emit('click')"
        class="w-full h-12 rounded-xl bg-gray-50 text-[#0B2747] hover:bg-[#006EFF] hover:text-white font-bold transition-all border-none cursor-pointer"
      >
        {{ btnText }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

defineProps<{
  image: string
  icon: any
  title: string
  headline: string
  desc: string
  tag?: string
  btnText: string
}>()

defineEmits<{
  click: []
}>()
</script>
