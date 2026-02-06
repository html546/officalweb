<template>
  <section class="py-24 bg-[#F8F9FB] font-['Noto_Sans_SC']">
    <div class="max-w-[1200px] mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-[36px] font-bold text-[#0B2747]"
        >
          代驾接驳真实场景
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-[16px] text-gray-500 mt-4"
        >
          从大板车末端接驳到长途专人直送，满足多样化出行需求。
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in cases"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          <!-- Image Area -->
          <div class="relative h-[240px] overflow-hidden">
            <ImageWithFallback
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div class="absolute top-4 left-4 bg-[#FF6B00] text-white px-3 py-1 rounded text-xs font-bold shadow-lg">
              {{ item.badge }}
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <div class="p-1.5 bg-blue-50 rounded-lg">
                <component :is="item.icon" :size="20" class="text-[#006EFF]" />
              </div>
              <h3 class="text-[18px] font-bold text-[#0B2747] group-hover:text-[#006EFF] transition-colors">
                {{ item.title }}
              </h3>
            </div>
            <p class="text-sm text-gray-500 line-clamp-3 leading-relaxed min-h-[72px]">
              {{ item.desc }}
            </p>
            
            <!-- Data Footer -->
            <div class="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-[13px] text-gray-400">
              <div class="flex items-center gap-1.5">
                <MapPin :size="14" class="text-gray-300" />
                <span>{{ item.data1 }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Gauge :size="14" class="text-gray-300" />
                <span>{{ item.data2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, Navigation, Store, MapPin, Gauge } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import { EXTERNAL_ASSETS } from '@/utils/images'

const cases = [
  {
    badge: '最后10公里接驳',
    title: '解决大板车进城难题',
    icon: Truck,
    image: EXTERNAL_ASSETS.VALET_HANDOVER,
    desc: '张先生的大板车订单抵达北京郊区物流园。因市区限行，车拖车代驾员提前抵达园区，完成第一检测人验车后，直接将车送至张先生朝阳区的地下车库。',
    data1: '接驳里程: 25km',
    data2: '车型: 奔驰 S400'
  },
  {
    badge: '长途加急',
    title: '商务行程，一夜送达',
    icon: Navigation,
    image: EXTERNAL_ASSETS.VALET_HANDOVER,
    desc: '上海李总需紧急用车去南京开会，但不想自己开长途。下单长途代驾后，司机点火即走，无任何中转停留，仅用 3.5 小时安全送达酒店楼下。',
    data1: '行驶里程: 300km',
    data2: '时效: 3.5小时'
  },
  {
    badge: 'B2B 专业调车',
    title: '跨店调拨，专业验车',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1764013290141-63b13e311906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBpbnNwZWN0aW9uJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc2OTQyMzgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: '某品牌 4S 店需将两台试驾车调往分店。车拖车代驾员凭专业素养完成外观与随车物品清点，全程 GPS 监控，杜绝了私用风险，完美交付。',
    data1: '数量: 2台',
    data2: '服务: 对公结算'
  }
]
</script>
