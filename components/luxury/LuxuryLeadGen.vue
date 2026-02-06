<template>
  <section class="py-24 bg-white font-['Noto_Sans_SC']">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        
        <!-- Left Side: Text -->
        <div class="flex-1">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            <h2 class="text-[40px] font-bold text-[#0B2747] mb-6 leading-[1.2]">
              开启您的定制托运方案
            </h2>
            <p class="text-[20px] text-[#4B5563] leading-relaxed max-w-[500px]">
              我们的行业专家将在 10 分钟内响应您的需求，并为您制定专属的高端运输方案。
            </p>
            <div class="mt-12 space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#006EFF]">
                  <span class="font-bold">01</span>
                </div>
                <p class="text-[16px] font-medium text-[#0B2747]">1对1专属专家顾问全程跟进</p>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#006EFF]">
                  <span class="font-bold">02</span>
                </div>
                <p class="text-[16px] font-medium text-[#0B2747]">金融级NDA保密协议保障</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Form -->
        <div class="flex-1 w-full max-w-[560px]">
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="bg-[#F8F9FB] p-10 rounded-3xl border border-[#E5E7EB] shadow-xl"
          >
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[14px] font-bold text-[#0B2747] ml-4">联系人姓名</label>
                  <input 
                    type="text" 
                    placeholder="您的姓名" 
                    v-model="formData.name"
                    class="w-full h-14 px-6 rounded-full bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-[14px] font-bold text-[#0B2747] ml-4">联系电话</label>
                  <input 
                    type="tel" 
                    placeholder="手机号码" 
                    v-model="formData.phone"
                    class="w-full h-14 px-6 rounded-full bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-[14px] font-bold text-[#0B2747] ml-4">托运车型</label>
                <input 
                  type="text" 
                  placeholder="例如：法拉利 296 GTB" 
                  v-model="formData.model"
                  class="w-full h-14 px-6 rounded-full bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="text-[14px] font-bold text-[#0B2747] ml-4">活动/用车日期</label>
                <input 
                  type="text" 
                  placeholder="YYYY-MM-DD" 
                  v-model="formData.date"
                  class="w-full h-14 px-6 rounded-full bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all"
                />
              </div>
              <Button 
                type="submit"
                class="w-full h-16 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] transition-all shadow-lg shadow-orange-500/20 border-none cursor-pointer mt-4"
              >
                立即咨询专家
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { useToast } from '@/composables/useToast'

const toast = useToast()

const formData = ref({
  name: "",
  phone: "",
  model: "",
  date: ""
})

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.phone) {
    toast.error("请完整填写联系信息")
    return
  }
  toast.success("定制方案申请已提交，高级专家将尽快联系您！")
  formData.value = { name: "", phone: "", model: "", date: "" }
}
</script>
