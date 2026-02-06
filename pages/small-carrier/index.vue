<template>
  <div class="w-full">
    <SmallCarrierHero :set-active-id="setActiveId" />
    
    <!-- Intro Section - The Problem & The Solution -->
    <SmallCarrierIntro />

    <div id="small-carrier">
      <SmallCarrierSection />
    </div>

    <!-- Price Calculator - Real-time Quote -->
    <PriceCalculator />

    <!-- Feature Matrix - How it works -->
    <FeatureMatrix />

    <!-- Service Process - Steps -->
    <ServiceProcess />

    <!-- Case Studies - Real Examples -->
    <CaseStudies />

    <!-- Testimonials - Social Proof -->
    <Testimonials />

    <!-- FAQ Section - Questions & Expert Support -->
    <FAQSection />

    <!-- AI Search Ready Semantic Block - SEO Optimization -->
    <AISemanticBlock :set-active-id="setActiveId" />
  </div>
</template>

<script setup lang="ts">
import SmallCarrierHero from '@/components/small-carrier/SmallCarrierHero.vue'
import SmallCarrierIntro from '@/components/small-carrier/SmallCarrierIntro.vue'
import SmallCarrierSection from '@/components/small-carrier/SmallCarrierSection.vue'
import PriceCalculator from '@/components/PriceCalculator.vue'
import FeatureMatrix from '@/components/FeatureMatrix.vue'
import ServiceProcess from '@/components/ServiceProcess.vue'
import CaseStudies from '@/components/CaseStudies.vue'
import Testimonials from '@/components/Testimonials.vue'
import FAQSection from '@/components/FAQSection.vue'
import AISemanticBlock from '@/components/AISemanticBlock.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const setActiveId = (id: string) => {
  props.setActiveId?.(id)
}
</script>
