<template>
  <section class="py-24 bg-gray-50">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16">
        <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
          司机原声
        </h2>
        <div class="flex items-center justify-center gap-4">
          <div class="flex text-orange-400">
            <Star
              v-for="s in 5"
              :key="s"
              class="w-4 h-4 fill-current"
            />
          </div>
          <span class="text-[#0B2747] font-bold">
            4.8 | 38万+ 司机好评
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(review, idx) in reviews"
          :key="idx"
          :class="[
            'p-8 rounded-3xl border border-gray-100 shadow-sm',
            idx === 1 ? 'bg-[#0B2747] text-white shadow-xl shadow-blue-900/20' : 'bg-white'
          ]"
        >
          <Quote :class="idx === 1 ? 'text-white/10' : 'text-orange-100'" class="w-10 h-10 mb-6" />
          <p :class="[
            'text-[15px] italic leading-relaxed mb-8',
            idx === 1 ? 'text-white/80' : 'text-[#4B5563]'
          ]">
            {{ review.text }}
          </p>
          <div class="flex items-center gap-3">
            <div :class="[
              'w-10 h-10 rounded-full flex items-center justify-center font-bold',
              idx === 1 ? 'bg-white/10 text-[#FF6B00]' : 'bg-orange-50 text-[#FF6B00]'
            ]">
              {{ review.initial }}
            </div>
            <div>
              <div :class="[
                'text-[14px] font-bold',
                idx === 1 ? 'text-white' : 'text-[#0B2747]'
              ]">
                {{ review.name }}
              </div>
              <div :class="[
                'text-[11px]',
                idx === 1 ? 'text-white/40' : 'text-gray-400'
              ]">
                {{ review.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Quote } from 'lucide-vue-next'

const reviews = [
  {
    text: "以前跑空返程是常态，现在用自动听单设置好回程路线，基本上卸货前就能配好回程货，收入稳定多了。",
    initial: "刘",
    name: "刘师傅",
    role: "从业5年 | 大板司机",
  },
  {
    text: "做代驾送车最怕赖账。这个平台结算快，客户确认后钱马上到账，而且不用担心车辆保险问题，每单都有太平洋承保。",
    initial: "赵",
    name: "赵师傅",
    role: "兼职代驾 | 认证司机",
  },
  {
    text: "我们救援队入驻后，附近的事故拖车单子多了不少。LBS派单很准，都是周围 20 公里内的活，效率很高。",
    initial: "助",
    name: "极速救援车队",
    role: "认证救援机构",
  },
]
</script>
