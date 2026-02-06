<template>
  <section class="relative h-[550px] overflow-hidden bg-[#0B2747]">
    <!-- Background Image Overlay -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1716518363780-5ffd4aa93d9e"
        alt="CheTuoChe Driver"
        class="w-full h-full object-cover opacity-30 grayscale-[0.5]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747] via-[#0B2747]/80 to-transparent" />
    </div>

    <div class="container mx-auto max-w-[1200px] px-4 h-full relative z-10">
      <!-- Breadcrumb -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
        <button
          @click="handleSetActiveId('home')"
          class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          首页
        </button>
        <ChevronRight class="w-4 h-4" />
        <button
          @click="handleSetActiveId('download')"
          class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          APP下载
        </button>
        <ChevronRight class="w-4 h-4" />
        <span class="text-white font-bold">
          车拖车司机端
        </span>
      </div>

      <div class="flex h-full items-center pt-8">
        <div class="w-1/2">
          <h1
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0 }"
            class="text-[40px] font-bold text-white leading-tight mb-6"
          >
            车拖车司机端：汇聚 38 万<br />
            认证司机的接单神器
          </h1>

          <p
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 100 } }"
            class="text-[18px] text-white/80 leading-[1.6] max-w-[500px] mb-10"
          >
            支持板车、代驾、救援三种接单模式。智能听单告别空驶，运费极速结算。38万+
            认证司机的共同选择。
          </p>

          <div class="flex gap-10 mb-10">
            <div class="text-white">
              <div class="text-[28px] font-black text-[#FF6B00]">
                38万+
              </div>
              <div class="text-[12px] text-white/60 uppercase font-bold">
                认证司机
              </div>
            </div>
            <div class="text-white">
              <div class="text-[28px] font-black text-[#FF6B00]">
                2000万+
              </div>
              <div class="text-[12px] text-white/60 uppercase font-bold">
                累计托运
              </div>
            </div>
            <div class="text-white">
              <div class="text-[28px] font-black text-[#FF6B00]">
                0元
              </div>
              <div class="text-[12px] text-white/60 uppercase font-bold">
                注册门槛
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <Button class="h-14 px-10 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-2xl font-bold text-[18px] border-none shadow-xl shadow-orange-900/40">
              下载司机端接单
            </Button>
            <button class="text-white font-bold text-[16px] underline bg-transparent border-none cursor-pointer hover:text-[#FF6B00] transition-colors">
              阅读接单规范
            </button>
          </div>

          <div class="flex items-center gap-6 mt-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <Apple class="w-5 h-5 text-white" />
            <Smartphone class="w-5 h-5 text-white" />
            <Globe class="w-5 h-5 text-white" />
            <span class="text-[12px] font-bold text-white uppercase tracking-widest">
              HarmonyOS
            </span>
          </div>
        </div>

        <div class="w-1/2 flex justify-center">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <OrderDispatchMockup />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight, Apple, Smartphone, Globe } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import OrderDispatchMockup from '@/components/driver/OrderDispatchMockup.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const handleSetActiveId = (id: string) => {
  props.setActiveId?.(id)
}
</script>
