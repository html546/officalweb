<template>
  <div
    v-show="isOpen"
    :class="cn(
      'overflow-hidden text-sm transition-all',
      isOpen ? 'animate-accordion-down' : 'animate-accordion-up',
      $attrs.class
    )"
  >
    <div :class="cn('pb-4 pt-0', $attrs.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'
import { inject, computed } from 'vue'

const props = defineProps<{
  value: string
}>()

const accordion = inject<{
  activeValue: { value: string | string[] }
  type: string
}>('accordion')

const isOpen = computed(() => {
  if (!accordion) return false
  if (accordion.type === 'multiple') {
    return (accordion.activeValue.value as string[]).includes(props.value)
  }
  return accordion.activeValue.value === props.value
})

defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}
</style>
