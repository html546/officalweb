<template>
  <div class="min-h-screen flex flex-col bg-white font-['Noto_Sans_SC']">
    <TheHeader :active-id="activeId" @update:active-id="handleSetActiveId" />
    <main class="flex-grow pt-[80px]">
      <slot />
    </main>
    <TheFooter @set-active-id="handleSetActiveId" />
    <OrderModal v-model="isOrderModalOpen" />
    <FloatingSidebar @open-order-modal="openOrderModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import OrderModal from '@/components/OrderModal.vue'
import FloatingSidebar from '@/components/FloatingSidebar.vue'

const router = useRouter()
const route = useRoute()

const activeId = ref('home')
const isOrderModalOpen = ref(false)

// 路由到ID的映射
const routeToId: Record<string, string> = {
  '/': 'home',
  '/transport': 'transport',
  '/big-carrier': 'big-carrier',
  '/small-carrier': 'small-carrier',
  '/rescue': 'rescue',
  '/valet': 'driver',
  '/pricing': 'pricing',
  '/guide': 'guide',
  '/supply-chain': 'supply-chain',
  '/luxury-transport': 'commercial',
  '/personal-travel': 'personal',
  '/cybersecurity': 'cybersecurity',
  '/truck-sales': 'truck-sales',
  '/partner-recruit': 'partner-recruit',
  '/driver': 'driver-join',
  '/partners': 'partners',
  '/news': 'news',
  '/about': 'about',
  '/contact': 'contact',
  '/careers': 'careers',
  '/download': 'download',
  '/download/client': 'download-client',
  '/download/driver': 'download-driver',
  '/solutions': 'solutions',
  '/driver/home': 'driver-home',
}

// ID到路由的映射
const idToRoute: Record<string, string> = {
  'home': '/',
  'transport': '/transport',
  'big-carrier': '/big-carrier',
  'small-carrier': '/small-carrier',
  'rescue': '/rescue',
  'driver': '/valet',
  'pricing': '/pricing',
  'guide': '/guide',
  'supply-chain': '/supply-chain',
  'commercial': '/luxury-transport',
  'personal': '/personal-travel',
  'cybersecurity': '/cybersecurity',
  'truck-sales': '/truck-sales',
  'partner-recruit': '/partner-recruit',
  'driver-join': '/driver',
  'partners': '/partners',
  'news': '/news',
  'about': '/about',
  'contact': '/contact',
  'careers': '/careers',
  'download': '/download',
  'download-client': '/download/client',
  'download-driver': '/download/driver',
  'driver-home': '/driver/home',
  'solutions': '/solutions',
}

// 监听路由变化更新activeId
watch(() => route.path, (newPath) => {
  activeId.value = routeToId[newPath] || 'home'
}, { immediate: true })

const handleSetActiveId = (id: string) => {
  activeId.value = id
  const targetRoute = idToRoute[id] || '/'
  if (route.path !== targetRoute) {
    router.push(targetRoute)
  }
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openOrderModal = () => {
  isOrderModalOpen.value = true
}
</script>
