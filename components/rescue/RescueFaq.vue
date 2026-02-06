<template>
  <section class="bg-white py-24 font-['Noto_Sans_SC'] border-t border-[#E5E7EB]">
    <div class="max-w-[800px] mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-[#0B2747] mb-4">
          常见问题解答
        </h2>
        <p class="text-[#4B5563]">
          为您解答关于道路救援的所有疑惑
        </p>
      </div>

      <div class="space-y-4">
        <details
          v-for="(faq, idx) in faqs"
          :key="idx"
          :open="idx === 0"
          class="group border-b border-gray-100 last:border-0"
        >
          <summary class="list-none cursor-pointer py-6 flex items-center justify-between group-hover:text-[#006EFF] transition-colors">
            <span class="text-[18px] font-bold text-[#0B2747] group-open:text-[#006EFF]">
              {{ faq.question }}
            </span>
            <ChevronDown class="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#006EFF]" />
          </summary>
          <div class="pb-8 text-[#4B5563] text-[16px] leading-relaxed">
            {{ faq.answer }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    question: '救援起步价 170元 包含什么？',
    answer:
      '包含救援车出车费及 10公里内 的拖车里程。超出部分按 8元/公里 计费。无任何隐形出车费。',
  },
  {
    question: '车辆在地库或者轮胎抱死，怎么收费？',
    answer:
      '地库作业需使用特殊板车，加收 200元 困难作业费；轮胎抱死需使用辅助轮，加收 100元/个。下单前系统会提示所有加项。',
  },
  {
    question: '救援后可以直接托运到外地吗？',
    answer:
      '可以。这是我们的核心优势。救援车可以将故障车直接拖至我们的大板车集散中心，无缝衔接长途托运服务，无需您中转操心。',
  },
  {
    question: '你们多久能到？',
    answer:
      '依托平台 70万 运力池，市区通常 15-30分钟 抵达，高速路段视交通状况而定，系统会实时共享司机位置。',
  },
]
</script>
