<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :class="imageClass"
    :style="imageStyle"
    @error="handleError"
    @load="handleLoad"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Props {
  /** 图片源地址 */
  src: string;
  /** 图片替代文本 */
  alt?: string;
  /** CSS 类名 */
  class?: string;
  /** 内联样式 */
  style?: string | Record<string, any>;
  /** 备用图片地址（当主图片加载失败时使用） */
  fallback?: string;
  /** 默认占位图 */
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  fallback: 'https://images.unsplash.com/photo-1644442076205-627648a62844?q=80&w=500',
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7lm77niYfliqDovb3lpLHotKU8L3RleHQ+PC9zdmc+',
});

const currentSrc = ref<string>(props.src);
const hasError = ref<boolean>(false);
const isLoading = ref<boolean>(true);

// 计算图片类名
const imageClass = computed(() => {
  const baseClass = props.class || '';
  const stateClass = isLoading.value ? 'opacity-0' : 'opacity-100';
  return `${baseClass} ${stateClass} transition-opacity duration-300`.trim();
});

// 计算图片样式
const imageStyle = computed(() => {
  if (typeof props.style === 'string') {
    return props.style;
  }
  return props.style || {};
});

/**
 * 处理图片加载错误
 */
const handleError = () => {
  if (!hasError.value) {
    hasError.value = true;
    // 如果提供了 fallback，使用 fallback；否则使用默认占位图
    currentSrc.value = props.fallback || props.placeholder;
  } else {
    // 如果 fallback 也加载失败，使用占位图
    currentSrc.value = props.placeholder;
  }
  isLoading.value = false;
};

/**
 * 处理图片加载成功
 */
const handleLoad = () => {
  isLoading.value = false;
  hasError.value = false;
};

// 监听 src 变化，重置状态
watch(
  () => props.src,
  (newSrc) => {
    currentSrc.value = newSrc;
    hasError.value = false;
    isLoading.value = true;
  },
  { immediate: true }
);
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
