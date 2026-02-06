<template>
  <main class="flex flex-col w-full">
    <!-- 1. Hero Section (Authority & Trust) -->
    <HomeHero :open-order-modal="openOrderModal" />

    <!-- 2. Service Section A: Small Board (Speed) -->
    <HomeServiceSmall />

    <!-- 3. Service Section B: Big Truck (Cost) -->
    <HomeServiceBig :set-active-id="setActiveId" />

    <!-- 4. Service Section C: Designated Driving (Connection) -->
    <HomeServiceValet :set-active-id="setActiveId" />

    <!-- 5. Service Section D: Roadside Rescue (Safety Base) -->
    <HomeServiceRescue />

    <!-- 6. Trust & Technology (E-E-A-T) -->
    <HomeTrust />

    <!-- Auxiliary: News Section -->
    <NewsSection :set-active-id="setActiveId" />

    <!-- 7. Ecosystem & Manufacturing -->
    <HomeEcosystem :set-active-id="setActiveId" />

    <!-- 8. GEO / AI Brief (Pre-Footer) -->
    <HomeFaqBrief />
  </main>
</template>

<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue'
import HomeServiceSmall from '@/components/home/HomeServiceSmall.vue'
import HomeServiceBig from '@/components/home/HomeServiceBig.vue'
import HomeServiceValet from '@/components/home/HomeServiceValet.vue'
import HomeServiceRescue from '@/components/home/HomeServiceRescue.vue'
import HomeTrust from '@/components/home/HomeTrust.vue'
import HomeEcosystem from '@/components/home/HomeEcosystem.vue'
import HomeFaqBrief from '@/components/home/HomeFaqBrief.vue'
import NewsSection from '@/components/home/NewsSection.vue'

interface Props {
  setActiveId?: (id: string) => void
  openOrderModal?: () => void
}

const props = defineProps<Props>()

const setActiveId = (id: string) => {
  props.setActiveId?.(id)
}

const openOrderModal = () => {
  props.openOrderModal?.()
}
</script>
