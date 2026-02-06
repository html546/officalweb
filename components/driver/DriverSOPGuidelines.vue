<template>
  <section class="py-24 bg-[#0B2747] text-white overflow-hidden relative">
    <!-- Background Watermark -->
    <div class="absolute top-0 right-0 text-[120px] font-black text-white/5 pointer-events-none select-none -translate-y-1/2 translate-x-1/4">
      SOP
    </div>

    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h2 class="text-[32px] font-bold mb-4">
          司机接单规范
        </h2>
        <p class="text-white/40 text-[16px]">
          司机接单托运全过程行为规范
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line (Desktop) -->
        <div class="absolute top-[40px] left-0 w-full h-0.5 bg-white/10 hidden lg:block" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div
            v-for="(item, idx) in steps"
            :key="idx"
            class="relative z-10 flex flex-col items-center lg:items-start group"
          >
            <div class="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] transition-all duration-300">
              <component :is="item.icon" class="w-5 h-5 text-white" />
            </div>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-[#FF6B00] font-black text-[14px]">
                {{ item.step }}
              </span>
              <h4 class="text-[20px] font-bold">
                {{ item.title }}
              </h4>
            </div>
            <p class="text-[14px] text-white/50 leading-relaxed text-center lg:text-left">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Settings,
  Camera,
  Truck,
  ClipboardCheck,
  UserCheck,
} from 'lucide-vue-next'

const steps = [
  {
    step: "01",
    title: "接单与确认",
    desc: "确保路线匹配，主动联系客户确认细节。",
    icon: Settings,
  },
  {
    step: "02",
    title: "取车与验车",
    desc: "共同验车，360度拍照记录车况。",
    icon: Camera,
  },
  {
    step: "03",
    title: "运输与途中",
    desc: "安全装载，全程实时报备节点。",
    icon: Truck,
  },
  {
    step: "04",
    title: "交车与核验",
    desc: "共同复验，确认无损后交付车辆。",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "全程通用规范",
    desc: "注重隐私保护，保持专业沟通礼仪。",
    icon: UserCheck,
  },
]
</script>
