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
          赋能整车物流数字化：从生产线到 4S 店的零延时供货
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 0.2 } }"
          class="text-[18px] text-[#4B5563] leading-[1.8]"
        >
          深度整合 OTD 交付体系，通过智能调度与多式联运，打造高周转、低损耗的新车物流底座。车拖车通过数字化手段，实现物流全链路可追溯，确保每一辆车都能安全、准时送达。
        </p>
      </div>
    </section>

    <!-- D. Business Scenarios -->
    <section class="py-24 bg-[#F8F9FB]">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747]">覆盖全链路业务场景</h2>
          <div class="w-16 h-1 bg-[#006EFF] mx-auto mt-4" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in scenarios"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }"
            class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-[#E5E7EB]"
          >
            <div class="w-14 h-14 bg-[#F0F7FF] rounded-xl flex items-center justify-center mb-8 text-[#006EFF]">
              <component :is="item.icon" :strokeWidth="1.5" class="w-8 h-8" />
            </div>
            <h3 class="text-[22px] font-bold text-[#0B2747] mb-4">{{ item.title }}</h3>
            <p class="text-[#4B5563] leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- E. Core Advantages (Data Matrix) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="text-center mb-16">
          <h2 class="text-[32px] font-bold text-[#0B2747]">核心技术优势与价值</h2>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-[#F0F7FF]">
                <th class="px-8 py-6 text-[16px] font-bold text-[#0B2747]">功能特性</th>
                <th class="px-8 py-6 text-[16px] font-bold text-[#0B2747]">技术支撑</th>
                <th class="px-8 py-6 text-[16px] font-bold text-[#0B2747] text-right">核心价值回报</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E5E7EB]">
              <tr 
                v-for="(row, idx) in advantages"
                :key="idx"
                class="hover:bg-[#F8F9FB] transition-colors"
              >
                <td class="px-8 py-8">
                  <span class="text-[18px] font-bold text-[#0B2747]">{{ row.feature }}</span>
                </td>
                <td class="px-8 py-8">
                  <span class="text-[16px] text-[#4B5563]">{{ row.tech }}</span>
                </td>
                <td class="px-8 py-8 text-right">
                  <div class="flex flex-col items-end">
                    <span class="text-[28px] font-bold text-[#006EFF] leading-none mb-1">{{ row.value }}</span>
                    <span class="text-[14px] text-[#6B7280]">{{ row.label }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- F. Security Badge -->
    <section class="bg-[#F0F7FF] py-8">
      <div class="container mx-auto max-w-[1200px] px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6 bg-white/50 rounded-2xl border border-[#006EFF]/10">
          <div class="flex items-center gap-6">
            <div class="w-16 h-16 bg-[#0B2747] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0B2747]/20">
              <ShieldCheck :strokeWidth="1.5" class="w-10 h-10" />
            </div>
            <p class="text-[18px] font-medium text-[#0B2747]">
              本方案由车拖车金融级安全系统护航，符合国家等保三级认证标准。
            </p>
          </div>
          <Button variant="ghost" class="text-[#006EFF] font-bold hover:bg-[#006EFF]/5 px-6 h-12 rounded-full border border-[#006EFF]/20">
            查看安全白皮书
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Factory, Store, RefreshCw, ShieldCheck } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const scenarios = [
  {
    icon: Factory,
    title: "新车入库与分拨",
    desc: "解决主机厂车辆下线后的快速疏运，精准连接 VDC 分拨中心，提升出厂周转效率。"
  },
  {
    icon: Store,
    title: "4S 店精准铺货",
    desc: "基于销量预测的动态补库运输，优化区域物流分配，有效降低经销商库存积压。"
  },
  {
    icon: RefreshCw,
    title: "店间库存调拨",
    desc: "高效解决区域经销商之间的畅销/滞销车型余缺调整，实现全网库存动态平衡。"
  }
]

const advantages = [
  { feature: "OTD 可视化", tech: "接入主机厂 ERP 系统", value: "12%-18%", label: "交付周期缩短" },
  { feature: "智能路径规划", tech: "AI 算法匹配多式联运", value: "15%", label: "物流成本降低" },
  { feature: "数字化验车", tech: "移动端 24 项标准检查", value: "< 0.05%", label: "平均货损率" }
]
</script>
