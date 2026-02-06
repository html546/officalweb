<template>
  <section class="bg-white py-20 font-['Noto_Sans_SC']">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <!-- Unified Container -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="w-full rounded-2xl overflow-hidden border border-[#E5E7EB] grid grid-cols-1 lg:grid-cols-2 items-stretch"
      >
        <!-- Left Zone: The Scenario (Compact Gray Zone) -->
        <div class="bg-[#F8F9FB] p-8 flex items-center">
          <p class="text-[16px] leading-relaxed text-[#4B5563] text-justify">
            大多数车主对汽车托运的认知，仅停留在高速公路上偶尔见到的双层运输车画面。对于具体流程，他们往往感觉像在
            <span class="font-bold text-[#111827]">面对一个"黑盒"</span>
            ，不知道是按公里计费还是按车型一口价，总担心会有隐形消费。是像寄快递一样上门取件，还是必须自己把车开到偏远的物流园？车钥匙交给陌生人后，会不会被私开？途中万一剐蹭了，保险到底赔不赔？
          </p>
        </div>

        <!-- Right Zone: The Solution (Compact Blue Zone) -->
        <div class="bg-[#F0F7FF] p-8 flex items-center">
          <p class="text-[16px] leading-relaxed text-[#0B2747] text-justify">
            <span class="font-bold text-[#0B2747]">
              车拖车重构信任机制：把"非标服务"做成"标准产品"。
            </span>
            汽车托运最大的痛点是信任。用户把几十万的资产交给陌生人，焦虑感极强。车拖车通过数字化手段将这种焦虑转化为掌控感。
            <span class="font-bold text-[#006EFF]">
              可视化视频验车留档、GPS轨迹实时共享，关键节点主动推送。
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or state needed for this component
</script>
