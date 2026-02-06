<template>
  <section class="py-20 bg-white font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="max-w-[800px] mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-[32px] font-bold text-[#0B2747]">常见问题解答</h2>
          <p class="text-[#4B5563] mt-2">为您解答在不同解决方案中可能遇到的疑问</p>
        </div>

        <div class="space-y-4">
          <details
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="group border rounded-xl px-6 bg-white shadow-sm overflow-hidden"
          >
            <summary class="list-none cursor-pointer py-6 flex items-center justify-between group-hover:text-[#006EFF] transition-colors">
              <span class="text-[18px] font-bold text-[#0B2747] group-open:text-[#006EFF]">
                {{ faq.question }}
              </span>
              <ChevronDown class="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#006EFF]" />
            </summary>
            <div class="pb-6 text-[#4B5563] text-[16px] leading-relaxed">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    question: "汽车托运一般需要几天？",
    answer: "托运时效取决于运输距离。通常省内 1-2 天，周边省份 2-3 天，跨省长途 3-7 天。车拖车通过数字化调度优化路径，平均时效比行业标准快 15%。"
  },
  {
    question: "托运过程中提供保险吗？",
    answer: "是的，我们为每一台承运车辆提供足额运输险。涵盖装卸车意外、交通事故、恶劣天气等造成的损失，且支持实时保单在线查询。"
  },
  {
    question: "如何追踪我的车辆位置？",
    answer: '您可以通过车拖车 APP 或小程序，在"订单详情"中实时查看车辆的 GPS 定位信息。大板车集运还支持路径回放功能。'
  },
  {
    question: "个人异地托运有哪些注意事项？",
    answer: "请确保车内无贵重违禁品，油量保持在 1/4 左右。我们的司机会在取车时进行 360° AI 验车并拍摄不少于 8 张高清照片，确保交付时原样交接。"
  }
]
</script>
