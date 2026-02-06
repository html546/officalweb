<template>
  <section class="py-12 bg-white">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="relative rounded-3xl overflow-hidden bg-[#FFF5EB] flex flex-col md:flex-row items-center">
        <!-- Content -->
        <div class="p-10 md:p-16 w-full md:w-3/5 z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-[#0B2747] mb-6">
            24小时道路救援：<br />
            汽车托运的<span class="text-[#FF6B00]">安全底座</span>
          </h2>
          <p class="text-gray-700 text-lg mb-8 max-w-xl">
            提供起步价 170元 的全天候应急服务。涵盖故障拖车、地库亏电搭电及事故救援，构建"运输+保障"的完整闭环。
          </p>

          <button
            @click="showRescueDialog = true"
            class="bg-[#FF6B00] hover:bg-[#E56000] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
          >
            <PhoneCall class="w-5 h-5" />
            呼叫紧急救援
          </button>

          <Dialog v-model="showRescueDialog">
            <DialogContent class="sm:max-w-md bg-white rounded-2xl">
              <DialogHeader>
                <DialogTitle class="text-2xl font-bold text-[#0B2747] text-center pt-4">24小时紧急救援热线</DialogTitle>
              </DialogHeader>
              <DialogDescription class="text-center text-gray-500 pb-2">
                全天候为您提供故障拖车、搭电及事故救援服务
              </DialogDescription>
              <div class="flex flex-col items-center justify-center py-8 gap-6">
                <a
                  href="tel:4008889999"
                  class="text-4xl font-black text-[#FF6B00] hover:text-[#E56000] transition-colors tracking-wider decoration-0"
                >
                  400-888-9999
                </a>
                <p class="text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
                  点击号码直接拨打 · 优先接入人工客服
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <!-- Image/Graphic -->
        <div class="w-full md:w-2/5 h-[300px] md:h-auto relative">
          <div class="absolute inset-0 md:-left-20">
            <img
              :src="serviceImage"
              alt="Roadside Rescue"
              class="w-full h-full object-cover object-center"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFF5EB] via-transparent to-transparent md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhoneCall } from 'lucide-vue-next'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
import DialogHeader from '@/components/ui/DialogHeader.vue'
import DialogTitle from '@/components/ui/DialogTitle.vue'
import DialogDescription from '@/components/ui/DialogDescription.vue'
// Import image from images mapping (Agent B's work)
import { SERVICE_RESCUE, EXTERNAL_ASSETS } from '@/utils/images'

const serviceImage = ref(SERVICE_RESCUE || EXTERNAL_ASSETS.RESCUE_SCENE)
const showRescueDialog = ref(false)

const handleImageError = () => {
  serviceImage.value = EXTERNAL_ASSETS.RESCUE_SCENE
}
</script>
