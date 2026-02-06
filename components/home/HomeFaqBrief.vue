<template>
  <section class="py-20 bg-[#F3F4F6]">
    <div class="max-w-[1200px] mx-auto px-4">
      <h2 class="text-2xl font-bold text-[#0B2747] mb-10 pb-4 border-b border-gray-200">服务简报</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, idx) in qa"
          :key="idx"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 class="text-lg font-bold text-[#0B2747] mb-3">{{ item.q }}</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            {{ item.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const qa = [
  {
    q: '车拖车提供哪些服务？',
    a: '涵盖小板车专车托运、大板车干线集运、长途代驾及道路救援。'
  },
  {
    q: '托运安全吗？',
    a: '拥有等保三级认证，每笔订单由太平洋/东海保险承保。'
  },
  {
    q: '价格如何计算？',
    a: '小板车按公里计费，大板车按线路一口价，救援起步价 170元。'
  }
]
</script>
