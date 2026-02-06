<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="text-center mb-16 max-w-[800px] mx-auto">
        <h2 class="text-[32px] font-bold text-[#0B2747] mb-6">
          车拖车司机端可以做什么
        </h2>
        <p class="text-[16px] text-gray-600 leading-relaxed">
          板车司机或者代驾师傅通过认证后，可以查看平台所有信息，付费用户可以优先获得优质订单，完成接单任务后能够获得任务奖励。
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
            <h3 class="text-[18px] font-bold text-[#0B2747] mb-2">
              {{ item.title }}
            </h3>
            <p class="text-[14px] text-[#4B5563] leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  IdCard,
  ClipboardCheck,
  Settings,
  Zap,
  MousePointerClick,
  ClipboardList,
  Car,
  LifeBuoy,
  BookOpen,
  Coffee,
  Sticker,
  Crown,
  ShieldCheck,
  CreditCard,
  ArrowRightLeft,
  Share2,
} from 'lucide-vue-next'

const functions = [
  {
    icon: IdCard,
    title: "司机认证",
    desc: "在线提交身份、驾照等资料，通过平台审核后即可成为认证司机。",
  },
  {
    icon: ClipboardCheck,
    title: "车辆认证",
    desc: "提交行驶证等车辆信息，完成审核以确保运输工具合规。",
  },
  {
    icon: Settings,
    title: "设置听单规则",
    desc: "自定义设置常跑路线、车型偏好等，让系统优先推送更匹配的订单。",
  },
  {
    icon: Zap,
    title: "自动接单",
    desc: "开启后，系统将根据设置的规则，自动为司机接收并分配符合条件的订单。",
  },
  {
    icon: MousePointerClick,
    title: "手动接单",
    desc: "在订单列表中主动浏览并选择合适的订单进行接单。",
  },
  {
    icon: ClipboardList,
    title: "查看订单",
    desc: '在"我的订单"中，统一查看已接、进行中及已完成的所有订单详情。',
  },
  {
    icon: Car,
    title: "代驾接单",
    desc: '司机可选择进入"代驾"模式，专门接收并承接代驾服务订单。',
  },
  {
    icon: LifeBuoy,
    title: "救援团队入驻",
    desc: "专业的拖车/救援服务提供者可申请入驻平台，承接救援类订单。",
  },
  {
    icon: BookOpen,
    title: "司机课堂",
    desc: "提供线上培训课程、行业知识和安全规范等内容，帮助司机提升技能。",
  },
  {
    icon: Coffee,
    title: "司机之家",
    desc: "可以查看全国板车司机休息服务站，前往网点休息。",
  },
  {
    icon: Sticker,
    title: "车贴权益",
    desc: "申请车贴后，获得自动接单功能。",
  },
  {
    icon: Crown,
    title: "开通会员",
    desc: "付费开通会员，享受优先接单，优先派单等专属权益。",
  },
  {
    icon: ShieldCheck,
    title: "保险服务",
    desc: "可为承接的订单便捷购买或查看相关的运输保险，提升服务保障。",
  },
  {
    icon: CreditCard,
    title: "补缴服务费",
    desc: "客户线下结算费用时，司机需要在司机端支付服务费。",
  },
  {
    icon: ArrowRightLeft,
    title: "买卖板车",
    desc: "司机可在平台内发布或浏览信息，直接买卖用于运输的板车。",
  },
  {
    icon: Share2,
    title: "邀请分享",
    desc: "通过个人邀请码或链接邀请其他客户、司机加入，成功后可获得平台奖励。",
  },
]
</script>
