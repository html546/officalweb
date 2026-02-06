<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 class="text-[32px] font-bold text-[#0B2747] mb-4">
            真实用户评价
          </h2>
          <div class="flex items-center gap-4">
            <div class="flex text-orange-400">
              <Star
                v-for="s in 5"
                :key="s"
                class="w-5 h-5 fill-current"
              />
            </div>
            <span class="text-[18px] font-bold text-[#0B2747]">
              用户评分 4.9
            </span>
            <span class="text-gray-400">
              | 基于 1000万+ 条真实托运评价
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          class="border-[#006EFF] text-[#006EFF] font-bold rounded-xl h-12 px-8"
        >
          查看全部评价
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(review, idx) in reviews"
          :key="idx"
          :class="[
            'p-8 rounded-3xl border border-gray-100',
            idx === 1 ? 'bg-white shadow-xl shadow-gray-200/20' : 'bg-gray-50'
          ]"
        >
          <Quote class="w-8 h-8 text-blue-200 mb-4" />
          <p class="text-[15px] text-[#4B5563] leading-relaxed mb-6">
            {{ review.text }}
          </p>
          <div class="flex items-center gap-3">
            <div :class="[
              'w-10 h-10 rounded-full flex items-center justify-center font-bold border',
              idx === 1 ? 'bg-blue-50 text-[#006EFF]' : 'bg-white text-[#006EFF] border-blue-100'
            ]">
              {{ review.initial }}
            </div>
            <div>
              <div class="text-[14px] font-bold text-[#0B2747]">
                {{ review.name }}
              </div>
              <div class="text-[11px] text-gray-400">
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
import Button from '@/components/ui/Button.vue'

const reviews = [
  {
    text: '第一次用"车拖车"把我的奥迪从北京运到三亚，最惊喜的就是那个轨迹追踪！在 APP 上能看到车走到哪了，什么时候进的服务区，真的很安心。保险也是在线秒批，数字化程度太高了。',
    initial: "张",
    name: "张先生 · 私家车主",
    role: "北京 - 三亚 | 奥迪 Q5",
  },
  {
    text: "作为车行经理，我们需要长期稳定的运力。车拖车客户端的企业账户非常好用，开票非常快，电子发票一键下载。AI 报价比我以前一个个打电话询价效率高太多了，价格也很公道。",
    initial: "李",
    name: "李经理 · 车行商户",
    role: "常年合作 | 二手车交易",
  },
  {
    text: "自驾游路上车子出了点故障，通过 APP 找了代驾取送。司机师傅非常专业，全程都有录像，验车也很仔细。这种标准化的服务在传统物流里很难见到，推荐给所有自驾车友。",
    initial: "王",
    name: "王女士 · 旅游达人",
    role: "紧急取送 | 户外自驾",
  },
]
</script>
