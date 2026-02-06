<template>
  <section class="py-24 bg-white border-t border-gray-50">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16 max-w-[800px] mx-auto">
        <h2 class="text-[32px] font-bold text-[#0B2747] mb-6">
          车拖车APP可以做什么
        </h2>
        <p class="text-[16px] text-gray-600 leading-relaxed">
          车拖车app是用户发布汽车托运订单的移动APP，用户可以选择发布多种托运需求，包括小板车、大板车、代驾、救援等。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div
          v-for="(item, idx) in functions"
          :key="idx"
          class="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
        >
          <div class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#006EFF]">
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-[18px] font-bold text-[#0B2747] mb-2">{{ item.title }}</h3>
            <p class="text-[14px] text-[#4B5563] leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Wallet,
  Truck,
  LifeBuoy,
  Briefcase,
  Gift,
  ArrowRightLeft,
  Bot,
  FileText,
  MapPin,
  Share2,
  ShieldCheck,
  AlertTriangle,
  Link,
  Receipt,
  CreditCard,
} from 'lucide-vue-next'

const functions = [
  {
    icon: Wallet,
    title: "查看托运价格",
    desc: "填写托运信息，查看托运价格，包括小板车、大板车托运价格"
  },
  {
    icon: Truck,
    title: "发布托运订单",
    desc: "选择小板车托运、大板车托运或者选择代驾送车。"
  },
  {
    icon: LifeBuoy,
    title: "发布拖车救援",
    desc: "快速发布紧急救援需求，联系附近的专业拖车服务解决车辆故障或事故问题。"
  },
  {
    icon: Briefcase,
    title: "商务合作",
    desc: "为企业或车队客户提供专属合作入口，洽谈长期运输或战略合作。"
  },
  {
    icon: Gift,
    title: "领取福利",
    desc: "进入活动中心，领取平台发放的优惠券、折扣卡等用户福利。"
  },
  {
    icon: ArrowRightLeft,
    title: "买卖板车",
    desc: "在平台内发布信息，直接买卖用于车辆运输的专业板车。"
  },
  {
    icon: Bot,
    title: "AI发单",
    desc: "与AI智能体直接对话，完成询价、发布托运订单，匹配最佳路线、推荐司机并。"
  },
  {
    icon: FileText,
    title: "查看订单状态",
    desc: "实时跟踪订单从接单、在途到交付的全流程状态更新。"
  },
  {
    icon: MapPin,
    title: "查看车辆位置",
    desc: "在地图上实时查看承运车辆的实际运输位置与行驶轨迹。"
  },
  {
    icon: Share2,
    title: "邀请分享",
    desc: "通过个人邀请码或链接分享APP，邀请好友注册并使用以获得双方奖励。"
  },
  {
    icon: ShieldCheck,
    title: "购买保险",
    desc: "在托运订单基础上，额外购买运输途中的车辆损失险等保障。"
  },
  {
    icon: AlertTriangle,
    title: "处理违章",
    desc: "委托平台协助处理车辆在代驾或托运过程中产生的交通违章。"
  },
  {
    icon: Link,
    title: "分享订单",
    desc: "将订单详情页面生成链接或卡片，分享给家人或朋友以便共同了解进度。"
  },
  {
    icon: Receipt,
    title: "申请发票",
    desc: "在线提交申请，获取对应订单的合规电子或纸质发票。"
  },
  {
    icon: CreditCard,
    title: "支付附加费",
    desc: "对订单产生的（如高速费、临时等待费等）额外费用进行在线补缴。"
  }
]
</script>
