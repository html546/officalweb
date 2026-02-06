<template>
  <footer class="py-20 bg-[#0B2747] text-white border-t border-white/5">
    <div class="container mx-auto max-w-[1200px] px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10 opacity-70">
        <div class="text-[14px] leading-relaxed max-w-[600px]">
          <div class="font-bold mb-4 flex items-center gap-2">
            <Globe class="w-4 h-4" /> 数字化服务愿景
          </div>
          车拖车致力于通过数字化手段重塑汽车物流生态。司机端旨在为全国板车司机、代驾人员及救援团队提供公平、高效、透明的接单环境，构建行业领先的数字化运力保障体系。
        </div>
        <div class="flex gap-10 text-[12px]">
          <div class="flex flex-col items-center gap-2">
            <div class="bg-white p-2 rounded-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://chetuoche.com/driver"
                alt="QR"
                class="w-20 h-20"
              />
            </div>
            <span class="font-bold">
              扫码下载司机端
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Globe } from 'lucide-vue-next'
</script>
