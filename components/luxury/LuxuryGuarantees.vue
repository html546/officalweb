<template>
  <div class="font-['Noto_Sans_SC']">
    <!-- C. Value Proposition -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[800px] text-center px-4">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[32px] font-bold text-[#0B2747] mb-6"
        >
          驭享非凡展程：车展、巡演及高价值车辆特种托运
        </h2>
        <div class="w-24 h-px bg-[#0B2747]/20 mx-auto mb-8" />
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-[18px] text-[#4B5563] leading-[1.8]"
        >
          专为未发布车型与珍藏级座驾打造，提供全封闭、高保密、准时达的专业物流执行方案。每一台车辆均享有专属定制护具与百万级特种保险。
        </p>
      </div>
    </section>

    <!-- D. Guarantees Grid -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in guarantees"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: idx * 150 } }"
            class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#E5E7EB] relative overflow-hidden group"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#F0F7FF] rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110" />
            <div class="w-14 h-14 bg-[#0B2747] rounded-xl flex items-center justify-center mb-8 text-white relative z-10">
              <component :is="item.icon" :stroke-width="1.5" class="w-8 h-8" />
            </div>
            <h3 class="text-[22px] font-bold text-[#0B2747] mb-4 relative z-10">{{ item.title }}</h3>
            <p class="text-[#4B5563] leading-relaxed relative z-10">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Truck, UserCheck, FileLock } from 'lucide-vue-next'

const guarantees = [
  {
    icon: Truck,
    title: "全封闭厢式板车",
    desc: "配备液压尾板与气囊减震系统，确保全程无尘、无划痕、零震动。"
  },
  {
    icon: UserCheck,
    title: "专业地勤团队",
    desc: "5年以上高端车操作经验团队，精通超跑低底盘装卸与特殊车辆加固。"
  },
  {
    icon: FileLock,
    title: "严苛保密协议",
    desc: "针对未发布新车，提供全流程物理遮蔽、网络信息封锁与NDA协议签署。"
  }
]
</script>
