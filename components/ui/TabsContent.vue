<template>
  <Transition
    enter-active-class="transition-all duration-200"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <div
      v-if="isActive"
      :class="cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', $attrs.class)"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'
import { inject, computed } from 'vue'

const props = defineProps<{
  value: string
}>()

const tabsContext = inject<{
  activeTab: { value: string }
  setActiveTab: (value: string) => void
}>('tabs')

const isActive = computed(() => tabsContext?.activeTab.value === props.value)

defineOptions({
  inheritAttrs: false
})
</script>
