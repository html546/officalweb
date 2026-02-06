<template>
  <main class="w-full">
    <TravelHero />
    <TravelFeatures />
    
    <!-- Reusing SecurityMoat for trust -->
    <SecurityMoat />
    
    <!-- Specialized Content for Travel -->
    <section class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747]">多场景支持</h2>
          <p class="text-[#4B5563] mt-4">为您解决不同旅途中的车辆转运痛点</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in scenarios"
            :key="idx"
            class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform"
          >
            <span class="inline-block px-3 py-1 bg-[#006EFF]/10 text-[#006EFF] text-[12px] font-bold rounded-full mb-6">
              {{ item.tag }}
            </span>
            <h3 class="text-[20px] font-bold text-[#0B2747] mb-4">{{ item.title }}</h3>
            <p class="text-[#4B5563] leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reusing LeadGen with Travel context -->
    <LuxuryLeadGen />
  </main>
</template>

<script setup lang="ts">
import TravelHero from '@/components/travel/TravelHero.vue'
import TravelFeatures from '@/components/travel/TravelFeatures.vue'
import SecurityMoat from '@/components/solutions/SecurityMoat.vue'
import LuxuryLeadGen from '@/components/luxury/LuxuryLeadGen.vue'

const scenarios = [
  { title: "三亚过冬", desc: "把爱车送往三亚，享受椰林海风中的自在驾驶。", tag: "季节性托运" },
  { title: "进藏朝圣", desc: "飞机直达林芝或拉萨，爱车已在酒店门口等候。", tag: "超长距离" },
  { title: "跨省搬家", desc: "全家出行不将就，爱车与大件行李一站式送达。", tag: "门到门" }
]

useHead({
  title: '个人旅游托运 - 让远方触手可及 | 车拖车',
  meta: [
    {
      name: 'description',
      content: '车拖车个人旅游托运服务，专业异地运车，告别长途驾驶疲劳。支持西藏转山、三亚度假、洱海环游等场景，200万车主商业险保障，48小时极速交付。'
    },
    {
      name: 'keywords',
      content: '个人旅游托运,异地运车,汽车托运,自驾游托运,西藏运车,三亚运车,门到门运车'
    }
  ]
})
</script>
