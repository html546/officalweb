<template>
  <article class="bg-white min-h-screen font-['Noto_Sans_SC']">
    
    <!-- 🚀 Hero Section: The Power of Scale -->
    <DriverHero />

    <!-- ⚡ Section A: Intelligent Order Dispatch & Ecosystem -->
    <DriverOrderDispatch />

    <!-- 📚 Section B: Driver Academy & Standardization -->
    <DriverAcademy />

    <!-- 📱 Section: App Functions -->
    <DriverAppFunctions />

    <!-- 📋 Section C: SOP Guidelines -->
    <DriverSOPGuidelines />

    <!-- 💼 Section D: Ecosystem Services -->
    <DriverEcosystemServices />

    <!-- 💬 Section E: User Reviews -->
    <DriverReviews />

    <!-- 📄 SEO Summary Footer -->
    <DriverFooter />

  </article>
</template>

<script setup lang="ts">
import DriverHero from '@/components/driver/DriverHero.vue'
import DriverOrderDispatch from '@/components/driver/DriverOrderDispatch.vue'
import DriverAcademy from '@/components/driver/DriverAcademy.vue'
import DriverAppFunctions from '@/components/driver/DriverAppFunctions.vue'
import DriverSOPGuidelines from '@/components/driver/DriverSOPGuidelines.vue'
import DriverEcosystemServices from '@/components/driver/DriverEcosystemServices.vue'
import DriverReviews from '@/components/driver/DriverReviews.vue'
import DriverFooter from '@/components/driver/DriverFooter.vue'

const schemaMarkup = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "车拖车司机端",
  operatingSystem: "Android, iOS, HarmonyOS",
  applicationCategory: "BusinessApplication",
  featureList: "自动听单, 极速结算, 救援入驻",
  audience: {
    "@type": "Audience",
    audienceType: "Truck Drivers",
  },
})

useHead({
  title: '车拖车司机端 - 汇聚38万认证司机的接单神器 | 车拖车',
  meta: [
    {
      name: 'description',
      content: '车拖车司机端支持板车、代驾、救援三种接单模式。智能听单告别空驶，运费极速结算。38万+认证司机的共同选择。'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: schemaMarkup
    }
  ]
})
</script>
