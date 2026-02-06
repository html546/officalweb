<template>
  <section class="py-24 bg-[#F8F9FB]">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-12 lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div class="relative w-full max-w-[500px] aspect-square">
            <!-- Floating UI Cards -->
            <div
              v-motion
              :animate="{ y: [-10, 10, -10], transition: { duration: 4000, repeat: Infinity, ease: 'easeInOut' } }"
              class="absolute top-0 left-0 w-4/5 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10"
            >
              <div class="h-[240px] bg-slate-100 relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                  alt="Map Tracking"
                  class="w-full h-full object-cover opacity-80"
                />
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    v-motion
                    :animate="{ scale: [1, 1.2, 1], transition: { duration: 2000, repeat: Infinity } }"
                    class="w-8 h-8 bg-[#006EFF] rounded-full border-4 border-white flex items-center justify-center shadow-lg"
                  >
                    <Truck class="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-[14px] font-bold text-[#0B2747]">
                    实时轨迹追踪
                  </span>
                  <span class="text-[10px] text-green-500 font-bold">
                    运输中
                  </span>
                </div>
                <div class="text-[12px] text-gray-400">
                  北京朝阳 → 上海浦东 (距终点 280km)
                </div>
              </div>
            </div>

            <div
              v-motion
              :animate="{ x: [10, -10, 10], transition: { duration: 5000, repeat: Infinity, ease: 'easeInOut' } }"
              class="absolute top-1/3 right-0 w-3/5 bg-white rounded-2xl shadow-2xl border border-blue-50 p-4 z-20"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-bold text-[#0B2747]">
                    电子发票开具成功
                  </div>
                  <div class="text-[10px] text-gray-400">
                    订单号: CT129384812
                  </div>
                </div>
              </div>
            </div>

            <div
              v-motion
              :animate="{ y: [5, -5, 5], transition: { duration: 3000, repeat: Infinity, ease: 'easeInOut' } }"
              class="absolute bottom-10 left-1/4 w-1/2 bg-white rounded-2xl shadow-2xl border border-orange-50 p-5 z-30 flex items-center gap-4"
            >
              <ShieldCheck class="w-8 h-8 text-[#FF6B00]" />
              <div>
                <div class="text-[14px] font-bold text-[#0B2747]">
                  PICC 运输险
                </div>
                <div class="text-[10px] text-gray-400">
                  全程保单已生效
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 pl-0 lg:pl-10 order-1 lg:order-2">
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            :visibleOnce="true"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">
              全流程数字化保障与生态服务
            </h2>

            <p class="text-[16px] text-gray-600 leading-[1.8] mb-10">
              安全是车拖车的核心基石。客户端集成
              GPS+北斗双模定位技术，让用户在地图上能实时追踪车辆轨迹与运输节点。我们构建了完整的数字化履约闭环：发车前在线签署法律效力合同，运输中在线投保车辆损失险，交付后一键申请企业电子发票。此外，APP
              还独创了"买卖板车"交易板块与"福利中心"，并支持协助处理代驾过程中的违章问题，提供超越运输本身的生态价值。
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="tag in tags"
                :key="tag"
                class="px-5 py-2 bg-orange-50 text-[#FF6B00] rounded-full text-[14px] font-bold"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, CheckCircle2, ShieldCheck } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const tags = [
  "轨迹可视",
  "电子发票",
  "买卖板车",
  "违章处理",
]
</script>
