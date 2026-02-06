<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC'] overflow-hidden">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-20">
        <h2 class="text-[32px] font-bold text-[#0B2747]">保姆式执行流程</h2>
        <p class="text-[#4B5563] mt-4">标准化专业执行，确保高价值资产万无一失</p>
      </div>

      <div class="relative">
        <!-- Connecting Line -->
        <div class="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006EFF]/30 to-transparent z-0" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <div
            v-for="(step, idx) in steps"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: idx * 100 } }"
            class="text-center group"
          >
            <div class="w-24 h-24 rounded-full bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:border-[#006EFF] group-hover:shadow-md transition-all relative">
              <div class="absolute inset-2 rounded-full border border-dashed border-[#006EFF]/20" />
              <span class="text-[32px] font-bold text-[#0B2747] group-hover:text-[#006EFF] transition-colors">{{ idx + 1 }}</span>
            </div>
            <h3 class="text-[20px] font-bold text-[#0B2747] mb-4">{{ step.title }}</h3>
            <p class="text-[#4B5563] text-[15px] leading-relaxed px-4">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "需求勘察",
    desc: "现场评估展馆进入路线、卸货区限高及地面承重，确保物理通达性。"
  },
  {
    title: "定制包装",
    desc: "根据底盘高度定制木桥或长坡道，加装车辆外观护具与漆面保护膜。"
  },
  {
    title: "精密运输",
    desc: "北斗+GPS全程实时监控，温湿度感应，在途全封闭状态严禁非授权开启。"
  },
  {
    title: "精准落位",
    desc: "专业地勤协助展车摆放至指定展台，并配合灯光/旋转台等设备联动调试。"
  }
]
</script>
