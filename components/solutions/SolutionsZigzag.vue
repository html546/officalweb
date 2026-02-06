<template>
  <section :class="`py-20 ${bgColor} font-['Noto_Sans_SC'] overflow-hidden`">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div :class="`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`">
        
        <!-- Text Side -->
        <div class="flex-1 space-y-6">
          <div
            v-motion
            :initial="{ opacity: 0, x: reverse ? 30 : -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-2">{{ title }}</h2>
            <p class="text-[18px] text-[#4B5563] mb-8">{{ subtitle }}</p>
            
            <ul v-if="features" class="space-y-4 mb-8">
              <li
                v-for="(feature, idx) in features"
                :key="idx"
                class="flex items-center gap-3 text-[#4B5563]"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-[#006EFF]" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div v-if="tags" class="flex flex-wrap gap-3 mb-8">
              <span
                v-for="(tag, idx) in tags"
                :key="idx"
                class="px-4 py-1.5 rounded-full bg-[#F0F7FF] text-[#006EFF] text-[14px] font-medium border border-[#E0E7FF]"
              >
                {{ tag }}
              </span>
            </div>

            <Button 
              variant="outline"
              @click="handleCtaClick"
              class="h-12 px-8 rounded-full border-[#006EFF] text-[#006EFF] hover:bg-[#006EFF] hover:text-white transition-all font-bold cursor-pointer"
            >
              {{ ctaText }}
            </Button>
          </div>
        </div>

        <!-- Image Side -->
        <div class="flex-1 w-full">
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
            class="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback 
              :src="imageSrc" 
              :alt="title" 
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

interface Props {
  title: string
  subtitle: string
  features?: string[]
  tags?: string[]
  ctaText: string
  imageSrc: string
  reverse?: boolean
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  bgColor: 'bg-white'
})

const emit = defineEmits<{
  ctaClick: []
}>()

const handleCtaClick = () => {
  emit('ctaClick')
}
</script>
