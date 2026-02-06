<template>
  <section class="py-24 bg-[#F8F9FB]">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="grid grid-cols-12 gap-12 items-center">
        <div class="col-span-12 lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div class="relative w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <div class="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758224388400-305dfddfbcd9"
                alt="Standardization"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Overlay UI Cards -->
            <div
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visible-once="{ y: 0, opacity: 1 }"
              class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/20"
            >
              <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#006EFF]">
                  <Camera class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-[14px] font-bold text-[#0B2747]">
                    360° 拍照验车
                  </div>
                  <div class="text-[10px] text-gray-400">
                    起运前必须拍摄 12 张核心角度照片
                  </div>
                </div>
              </div>
              <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  v-motion
                  :initial="{ width: 0 }"
                  :visible-once="{ width: '75%', transition: { duration: 1000 } }"
                  class="h-full bg-green-500"
                />
              </div>
            </div>
            <div class="absolute top-6 right-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
              <BookOpen class="w-4 h-4 text-[#FF6B00]" />
              <span class="text-[12px] font-bold text-[#0B2747]">
                司机课堂在线学习
              </span>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 pl-0 lg:pl-10 order-1 lg:order-2">
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-[32px] font-bold text-[#0B2747] mb-8">
              司机课堂与标准化履约
            </h2>

            <p class="text-[16px] text-gray-600 leading-[1.8] mb-10">
              内置
              <strong>
                "司机课堂"提供岗前培训。严格执行"第一检测人"机制，配合
                APP 完成 360
                度车况核验与电子合同签署。通过会员等级
              </strong>
              体系，优质司机可获更高佣金奖励，实现职业化成长。
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tag, idx) in tags"
                :key="idx"
                class="px-5 py-2 bg-blue-50 text-[#006EFF] rounded-full text-[14px] font-bold"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Camera, BookOpen } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'

const tags = [
  '司机课堂',
  '360度验车',
  '电子交接',
  '会员权益',
]
</script>
