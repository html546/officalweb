<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            class="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              :src="EXTERNAL_ASSETS.TRAVEL_SCENE"
              alt="Vacation Travel"
              class="w-full h-auto"
            />
            <div class="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white">
              <p class="text-[#0B2747] font-bold text-[18px] mb-2">
                "以前开车去拉萨要4天，现在飞机2小时。"
              </p>
              <p class="text-[#4B5563] text-[14px]">
                —— 车拖车忠实用户：张先生
              </p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: idx * 100 } }"
            class="group p-6 rounded-2xl border border-gray-100 hover:border-[#006EFF]/30 hover:bg-[#F0F7FF] transition-all"
          >
            <div class="w-12 h-12 rounded-xl bg-[#006EFF]/10 text-[#006EFF] flex items-center justify-center mb-6 group-hover:bg-[#006EFF] group-hover:text-white transition-all">
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-[18px] font-bold text-[#0B2747] mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-[#4B5563] text-[14px] leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Smartphone, Camera, MapPin, Truck } from 'lucide-vue-next'
import { EXTERNAL_ASSETS } from '@/utils/images'

const features = [
  {
    icon: Smartphone,
    title: "智能透明报价",
    desc: "输入起点终点，系统实时匹配路由。拒绝隐形加价，让每一分运费都清清楚楚。",
  },
  {
    icon: Camera,
    title: "360°  验车",
    desc: "接车现场多角度拍照存证。区块链记录车况信息，确保发车与到达状态始终如一。",
  },
  {
    icon: MapPin,
    title: "门到门取送",
    desc: "覆盖全国300+城市。专业司机免费上门接车，异地酒店准时交付，全程零操心。",
  },
  {
    icon: Truck,
    title: "全程在途监控",
    desc: "APP 实时查看车辆位置。每一个转运节点自动推送通知，掌控每一公里动态。",
  },
]
</script>
