<template>
  <main class="w-full">
    <SolutionsHero :set-active-id="handleSetActiveId" />
    
    <!-- Solution 1: Digital Supply Chain -->
    <SolutionZigZag 
      title="数字化汽车供应链解决方案"
      subtitle="面向新车从厂家到 4S 店的高效铺货"
      :features="[
        'OTD 全周期缩短：从订单到交付全流程数字化监控',
        '零公里交付标准：专业板车运输，确保新车完美状态',
        '库存预警与动态调拨：基于大数据算法的智能仓储建议'
      ]"
      cta-text="查看供应链方案"
      :image-src="EXTERNAL_ASSETS.SOLUTIONS_DASHBOARD"
      @cta-click="handleCtaClick('contact')"
    />
    
    <!-- Solution 2: Commercial & High-End -->
    <SolutionZigZag 
      title="商业活动与高端定制方案"
      subtitle="面向车展、巡演及车友会活动"
      :tags="['全封闭厢式板车', '保密协议', '定额特种险']"
      cta-text="定制车展方案"
      :image-src="EXTERNAL_ASSETS.SOLUTIONS_LUXURY"
      :reverse="true"
      bg-color="bg-[#F8F9FB]"
      @cta-click="handleCtaClick('contact')"
    />

    <!-- Solution 3: Personal Tourism -->
    <SolutionZigZag 
      title="个人旅游与异地托运方案"
      subtitle='让"人机分离"的自驾生活更简单'
      :features="[
        '智能透明报价：拒绝隐形消费，系统自动计算最优路径',
        '360° AI 验车：全方位拍照存证，区块链技术不可篡改',
        '门到门取送：专业司机上门接送车，全程管家式服务'
      ]"
      cta-text="开始托运"
      :image-src="EXTERNAL_ASSETS.SOLUTIONS_FAMILY"
      @cta-click="handleCtaClick('pricing')"
    />

    <SecurityMoat />
    <SolutionsFAQ />
    <FinalCTABox :set-active-id="handleSetActiveId" />
  </main>
</template>

<script setup lang="ts">
import SolutionsHero from '@/components/solutions/SolutionsHero.vue'
import SolutionZigZag from '@/components/solutions/SolutionsZigzag.vue'
import SecurityMoat from '@/components/solutions/SecurityMoat.vue'
import SolutionsFAQ from '@/components/solutions/SolutionsFaq.vue'
import FinalCTABox from '@/components/solutions/FinalCTABox.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

interface Props {
  setActiveId?: (id: string) => void
}

const props = defineProps<Props>()

const handleSetActiveId = (id: string) => {
  props.setActiveId?.(id)
}

const handleCtaClick = (id: string) => {
  handleSetActiveId(id)
}
</script>
