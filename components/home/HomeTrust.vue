<template>
  <section class="py-24 bg-white">
    <div class="max-w-[1200px] mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#0B2747] mb-16">用数字技术重塑信任标准</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="flex flex-col items-center"
        >
          <div class="w-20 h-20 bg-[#FFF5EB] rounded-full flex items-center justify-center mb-6">
            <component :is="item.icon" class="w-10 h-10 text-[#FF6B00]" />
          </div>
          <h3 class="text-xl font-bold text-[#0B2747] mb-4">{{ item.title }}</h3>
          <p class="text-gray-600 leading-relaxed max-w-xs mx-auto">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck, UserCheck, BarChart3 } from 'lucide-vue-next'

const items = [
  {
    icon: ShieldCheck,
    title: '金融级安全',
    desc: '通过国家等保三级认证，TLS 1.3 加密，保障大客户数据隐私。'
  },
  {
    icon: UserCheck,
    title: '真实运力风控',
    desc: '人脸识别 + 信用体系双重验真，70万+ 司机实名认证。'
  },
  {
    icon: BarChart3,
    title: 'OTD 可视化',
    desc: '订单状态实时上云，轨迹偏差毫秒级预警。'
  }
]
</script>
