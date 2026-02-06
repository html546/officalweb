<template>
  <section class="relative h-[680px] overflow-hidden bg-gradient-to-b from-[#F0F7FF] to-[#FFFFFF]">
    <div class="container mx-auto max-w-[1200px] px-4 h-full relative flex flex-col justify-center">
      <!-- Breadcrumb -->
      <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-[#4B5563]">
        <button
          @click="handleSetActiveId('home')"
          class="hover:text-[#006EFF] transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          首页
        </button>
        <ChevronRight class="w-4 h-4 text-[#9CA3AF]" />
        <button
          @click="handleSetActiveId('download')"
          class="hover:text-[#006EFF] transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          APP下载
        </button>
        <ChevronRight class="w-4 h-4 text-[#9CA3AF]" />
        <span class="text-[#0B2747] font-bold">
          车拖车客户端
        </span>
      </div>

      <div class="flex items-stretch pt-16">
        <!-- Left Column (50%) -->
        <div class="w-1/2 flex flex-col justify-center">
          <div>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              class="text-[40px] font-bold text-[#0B2747] leading-tight mb-4"
            >
              车拖车 APP：国内领先的
              <br />
              AI 智能调度汽车托运平台
            </h1>

            <p
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="text-[18px] text-gray-600 leading-[1.6] max-w-[560px]"
            >
              国内领先的数字化汽车物流平台，已为用户完成
              1000万次 托运。支持安卓、iOS及 鸿蒙
              (HarmonyOS) 系统。集成 AI
              智能报价与全流程可视化追踪，让汽车物流更简单、更高效。
            </p>

            <div class="flex items-center gap-4 mt-8">
              <Button class="h-14 px-10 bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-2xl font-bold text-[18px] border-none shadow-xl shadow-orange-500/20">
                下载车拖车 APP
              </Button>
              <button
                @click="handleSetActiveId('guide')"
                class="flex items-center gap-1 text-[#006EFF] font-bold text-[16px] hover:underline bg-transparent border-none cursor-pointer"
              >
                阅读用户指南
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>

            <div class="flex items-center gap-6 mt-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
              <div class="flex items-center gap-2">
                <Apple class="w-5 h-5" />
                <span class="text-[12px] font-bold">
                  App Store
                </span>
              </div>
              <div class="flex items-center gap-2">
                <Smartphone class="w-5 h-5" />
                <span class="text-[12px] font-bold">
                  Android
                </span>
              </div>
              <div class="flex items-center gap-2">
                <Globe class="w-5 h-5" />
                <span class="text-[12px] font-bold">
                  HarmonyOS
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (50%) -->
        <div class="w-1/2 flex items-center justify-center relative">
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9, rotate: 5 }"
            :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 800 } }"
            class="relative z-10"
          >
            <HeroChatMockup />
          </div>
          <!-- Background Glow -->
          <div class="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl -z-0" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight, Apple, Smartphone, Globe } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import HeroChatMockup from '@/components/client/HeroChatMockup.vue'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const handleSetActiveId = (id: string) => {
  props.setActiveId?.(id)
}
</script>
