<template>
  <section class="bg-white py-20 font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Unified Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        
        <!-- Left Zone: The Industry Pain Point -->
        <div class="bg-[#F8F9FB] p-10 flex flex-col justify-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            <p class="text-[16px] leading-[1.75] text-[#4B5563]">
              大板车运输虽然在长途干线上具备成本优势，但在首末端环节存在严重的
              <span class="font-bold text-[#111827]">服务盲区</span>
              。由于大板车无法进入市区或小区，用户被迫承担"接驳"的隐形成本：要么需要亲自驾驶车辆往返于偏远的郊区物流园或高速路口进行交接，要么需额外付费雇佣小板车进行中转。这种"
              <span class="font-bold text-[#111827]">运输不彻底、交付不闭环</span>
              "是导致用户满意度下降的核心痛点之一。
            </p>
          </div>
        </div>

        <!-- Right Zone: The Platform Solution -->
        <div class="bg-[#F0F7FF] p-10 flex flex-col justify-center border-l border-white md:border-l-0">
          <div
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            <p class="text-[16px] leading-[1.75] text-[#0B2747]">
              车拖车代驾服务的核心在于
              <span class="font-bold text-[#006EFF]">灵活的延伸能力</span>
              。它不仅有效解决了传统托运"最后一公里"的送达难题，填补了物流点到家门的空白；更引入了
              <span class="font-bold text-[#FF6B00]">"第一检测人"机制</span>
              ——代驾员在取送车环节即开始执行标准化的验车流程（外观、随车物品、动态检测），确保车辆在进入物流干线前的状态透明可查，真正实现了"门到门"服务闭环。
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>
