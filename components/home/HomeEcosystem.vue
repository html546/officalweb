<template>
  <section class="py-12 bg-white">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left: B2B Solutions -->
        <div
          @click="handleSupplyChainClick"
          class="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            :src="supplyChainImage"
            alt="Supply Chain Solutions"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            @error="handleSupplyChainImageError"
          />
          <!-- Gradient Overlay: Navy Blue to Transparent -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/90 via-[#0B2747]/50 to-transparent p-10 flex flex-col justify-end text-white">
            <h3 class="text-3xl font-bold mb-4 drop-shadow-md text-[rgb(255,255,255)]">汽车供应链解决方案</h3>
            <p class="text-gray-200 mb-6 drop-shadow-sm">为主机厂与经销商提供全链路物流管理服务</p>
            <div class="flex items-center text-[#FF6B00] font-bold group-hover:text-[#FF8533] transition-colors">
              了解企业服务 <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <!-- Right: Factory Sales -->
        <div
          @click="handleTruckSalesClick"
          class="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            :src="factoryImage"
            alt="Truck Manufacturing"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            @error="handleFactoryImageError"
          />
          <!-- Gradient Overlay: Navy Blue to Transparent -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B2747]/90 via-[#0B2747]/50 to-transparent p-10 flex flex-col justify-end text-white">
            <h3 class="text-3xl font-bold mb-4 drop-shadow-md text-[rgb(255,255,255)]">源头工厂直销</h3>
            <p class="text-gray-200 mb-6 drop-shadow-sm">自有临沂/随州基地，年产1500台清障车</p>
            <div class="flex items-center text-[#FF6B00] font-bold group-hover:text-[#FF8533] transition-colors">
              了解板车销售 <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
// Import images from images mapping (Agent B's work)
import { EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const supplyChainImage = ref(EXTERNAL_ASSETS.PARTNER_B2B_HANDSHAKE)
const factoryImage = ref(EXTERNAL_ASSETS.FACTORY_HERO)

const handleSupplyChainImageError = () => {
  supplyChainImage.value = EXTERNAL_ASSETS.PARTNER_B2B_HANDSHAKE
}

const handleFactoryImageError = () => {
  factoryImage.value = EXTERNAL_ASSETS.FACTORY_HERO
}

const handleSupplyChainClick = () => {
  props.setActiveId?.('supply-chain')
}

const handleTruckSalesClick = () => {
  props.setActiveId?.('truck-sales')
}
</script>
