<template>
  <section class="py-24 bg-[#0B2747] font-['Noto_Sans_SC'] relative overflow-hidden">
    <!-- Decorative background flair -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#006EFF] rounded-full blur-[120px]" />
      <div class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#006EFF] rounded-full blur-[120px]" />
    </div>

    <div class="container mx-auto max-w-[1200px] px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-white mb-4"
        >
          为您的企业定制供应链物流方案
        </h2>
        <p class="text-white/70 text-[18px]">留下您的联系方式，我们的供应链专家将在 24 小时内为您提供专业评估</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.98 }"
        :visible-once="{ opacity: 1, scale: 1 }"
        class="max-w-[900px] mx-auto"
      >
        <form @submit.prevent="handleSubmit" class="flex flex-col md:flex-row items-center gap-4">
          <div class="w-full md:flex-1">
            <input 
              type="text" 
              placeholder="输入企业名称" 
              v-model="formData.company"
              class="w-full h-16 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all text-[16px]"
            />
          </div>
          <div class="w-full md:flex-1">
            <input 
              type="tel" 
              placeholder="输入联系电话" 
              v-model="formData.phone"
              class="w-full h-16 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#006EFF] transition-all text-[16px]"
            />
          </div>
          <div class="w-full md:w-auto">
            <Button 
              type="submit"
              class="w-full md:w-auto h-16 px-12 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-[18px] transition-all shadow-xl shadow-orange-500/20 border-none cursor-pointer"
            >
              立即咨询专家
            </Button>
          </div>
        </form>
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
  company: "",
  phone: ""
})

const handleSubmit = () => {
  if (!formData.value.company || !formData.value.phone) {
    toast.error("请完整填写企业信息")
    return
  }
  // Mock API call
  console.log("Submitting lead:", formData.value)
  toast.success("咨询申请已提交，专家将尽快与您联系！")
  formData.value = { company: "", phone: "" }
}
</script>
