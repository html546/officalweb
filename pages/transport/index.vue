<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <TransportHero :on-back-to-home="handleBackToHome" />

    <!-- Sticky Navigation -->
    <TransportNav />

    <!-- Section 1: 大板车托运 -->
    <BigCarrierSection />

    <!-- Section 2: 小板车托运 -->
    <SmallCarrierSection />

    <!-- Section 3: 代驾接驳 -->
    <ValetSection />

    <!-- Section 4: 道路救援 -->
    <RescueSection />

    <!-- Comparison Table -->
    <TransportComparison />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TransportHero from '@/components/transport/TransportHero.vue'
import TransportNav from '@/components/transport/TransportNav.vue'
import BigCarrierSection from '@/components/transport/BigCarrierSection.vue'
import SmallCarrierSection from '@/components/small-carrier/SmallCarrierSection.vue'
import ValetSection from '@/components/transport/ValetSection.vue'
import RescueSection from '@/components/transport/RescueSection.vue'
import TransportComparison from '@/components/transport/TransportComparison.vue'

const router = useRouter()

const handleBackToHome = () => {
  router.push('/')
}

useHead({
  title: '汽车托运服务百科 - 大板车/小板车/代驾/救援全解析 | 车拖车',
  meta: [
    {
      name: 'description',
      content: '车拖车提供全场景汽车托运服务：大板车干线集运（高性价比）、小板车专车托运（极速响应）、专业代驾接驳、24小时道路救援。全国覆盖，安全可靠，价格透明。'
    },
    {
      name: 'keywords',
      content: '汽车托运,大板车托运,小板车托运,代驾服务,道路救援,车辆运输,笼车运输,汽车物流'
    }
  ]
})
</script>
