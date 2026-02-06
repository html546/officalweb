<template>
  <Dialog :model-value="modelValue" @update:model-value="handleClose">
    <DialogContent class="sm:max-w-[600px] bg-white p-0 overflow-hidden rounded-xl">
      <DialogHeader class="p-6 pb-2 bg-[#0B2747] text-white">
        <DialogTitle class="text-2xl font-bold flex items-center gap-2">
          <Truck class="w-6 h-6 text-[#FF6B00]" />
          立即获取报价
        </DialogTitle>
        <DialogDescription class="text-gray-300 text-sm mt-2">
          AI 智能调度，最快 5 秒出价
        </DialogDescription>
      </DialogHeader>
      
      <div class="p-6">
        <Tabs v-model="activeTab" class="w-full">
          <TabsList class="grid w-full grid-cols-4 mb-6 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="small-carrier" class="data-[state=active]:bg-white data-[state=active]:text-[#006EFF] data-[state=active]:shadow-sm rounded-md py-2 text-sm font-medium transition-all">
              小板车
            </TabsTrigger>
            <TabsTrigger value="big-carrier" class="data-[state=active]:bg-white data-[state=active]:text-[#006EFF] data-[state=active]:shadow-sm rounded-md py-2 text-sm font-medium transition-all">
              大板车
            </TabsTrigger>
            <TabsTrigger value="rescue" class="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-sm rounded-md py-2 text-sm font-medium transition-all">
              道路救援
            </TabsTrigger>
            <TabsTrigger value="valet" class="data-[state=active]:bg-white data-[state=active]:text-[#006EFF] data-[state=active]:shadow-sm rounded-md py-2 text-sm font-medium transition-all">
              代驾
            </TabsTrigger>
          </TabsList>

          <!-- Form Content -->
          <TabsContent
            v-for="tab in tabs"
            :key="tab"
            :value="tab"
            class="space-y-4"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="start-city">出发城市</Label>
                <div class="relative">
                  <MapPin class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="start-city" placeholder="例如：上海" class="pl-9" />
                </div>
              </div>
              <div class="space-y-2">
                <Label for="end-city">到达城市</Label>
                <div class="relative">
                  <MapPin class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="end-city" placeholder="例如：北京" class="pl-9" />
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <Label for="phone">手机号码</Label>
              <div class="relative">
                <Phone class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="phone" placeholder="请输入手机号接收报价" class="pl-9" />
              </div>
            </div>

            <div
              v-if="tab === 'small-carrier'"
              class="p-3 bg-blue-50 text-blue-700 text-sm rounded-md"
            >
              专车直送，预计 15 分钟内上门取车
            </div>
            <div
              v-if="tab === 'big-carrier'"
              class="p-3 bg-gray-50 text-gray-600 text-sm rounded-md"
            >
              高性价比，每日发车，支持全国主要城市
            </div>
            <div
              v-if="tab === 'rescue'"
              class="p-3 bg-orange-50 text-orange-700 text-sm rounded-md"
            >
              紧急救援，平均 30 分钟到达现场
            </div>

            <Button class="w-full bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold text-lg h-12 mt-4">
              {{ tab === 'rescue' ? '呼叫救援' : '免费获取报价' }}
            </Button>
            
            <p class="text-center text-xs text-gray-400 mt-2">
              点击按钮即表示同意《用户服务协议》及《隐私政策》
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Truck, MapPin, Phone } from 'lucide-vue-next'
import Dialog from './ui/Dialog.vue'
import DialogContent from './ui/DialogContent.vue'
import DialogHeader from './ui/DialogHeader.vue'
import DialogTitle from './ui/DialogTitle.vue'
import DialogDescription from './ui/DialogDescription.vue'
import Tabs from './ui/Tabs.vue'
import TabsList from './ui/TabsList.vue'
import TabsTrigger from './ui/TabsTrigger.vue'
import TabsContent from './ui/TabsContent.vue'
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'
import Label from './ui/Label.vue'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const activeTab = ref('small-carrier')
const tabs = ['small-carrier', 'big-carrier', 'rescue', 'valet']

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>
