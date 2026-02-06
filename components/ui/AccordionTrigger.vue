<template>
  <button
    :class="cn(
      'flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      $attrs.class
    )"
    :data-state="isOpen ? 'open' : 'closed'"
    @click="handleClick"
  >
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4 shrink-0 transition-transform duration-200"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn'
import { inject, computed } from 'vue'

const props = defineProps<{
  value: string
}>()

const accordion = inject<{
  activeValue: { value: string | string[] }
  toggleValue: (value: string) => void
  type: string
}>('accordion')

const isOpen = computed(() => {
  if (!accordion) return false
  if (accordion.type === 'multiple') {
    return (accordion.activeValue.value as string[]).includes(props.value)
  }
  return accordion.activeValue.value === props.value
})

const handleClick = () => {
  if (accordion) {
    accordion.toggleValue(props.value)
  }
}

defineOptions({
  inheritAttrs: false
})
</script>
