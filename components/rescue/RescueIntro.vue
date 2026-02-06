<template>
  <section class="py-20 bg-white font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <!-- Left Zone: The Pain Point -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0 }"
          :visibleOnce="true"
          class="bg-[#F8F9FB] p-12 flex flex-col justify-center"
        >
          <h3 class="text-xl font-bold text-[#0B2747] mb-4">
            当车辆"动弹不得"时...
          </h3>
          <p class="text-[15px] leading-relaxed text-gray-500">
            在汽车托运前后，用户常面临极度尴尬的时刻：起运前因长期闲置导致 <span class="text-[#111827] font-semibold">电瓶亏电、轮胎瘪气</span> ；或抵达目的地后因低温造成 <span class="text-[#111827] font-semibold">机械故障</span> 。面对"<span class="text-[#111827] font-bold text-lg">车在跟前却开不走</span>"的困境，单纯的托运服务无法解决这"最后一米"的移动难题。
          </p>
        </div>

        <!-- Right Zone: The Solution -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible="{ opacity: 1, x: 0 }"
          :visibleOnce="true"
          class="bg-[#FFF7ED] p-12 flex flex-col justify-center border-l md:border-l-0 md:border-t-0 border-orange-100"
        >
          <h3 class="text-xl font-bold text-[#0B2747] mb-4">
            构建"运输+保障"的安全底座
          </h3>
          <p class="text-[15px] leading-relaxed text-gray-600">
            车拖车将救援服务视为汽车托运的 <span class="text-[#FF6B00] font-bold">安全底座</span> 。我们不只提供简单的修车服务，而是针对故障车、事故车及僵尸车构建了一条 <span class="text-[#FF6B00] font-bold">全状态移动链路</span> 。无论是地库亏电启动，还是事故车的专业吊装，我们确保您的爱车在任何状态下都能顺畅进入物流网络。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or state needed
</script>
