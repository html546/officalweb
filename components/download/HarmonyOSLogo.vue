<template>
  <div :class="['flex flex-col items-center', className]">
    <div class="w-5 h-5 flex items-center justify-center border border-current rounded-full mb-0.5">
      <span class="text-[10px] font-bold">O</span>
    </div>
    <div class="w-3 h-0.5 bg-current rounded-full" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})
</script>
