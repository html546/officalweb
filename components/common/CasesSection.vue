<template>
  <Section bg="gray">
    <Container>
      <!-- Section Header -->
      <SectionHeader
        :title="title"
        :subtitle="subtitle"
        container-class="mb-16"
      />

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Type A Cards (Service Scenarios) -->
        <template v-if="cardType === 'typeA'">
          <div
            v-for="(item, index) in items"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <!-- Image Area -->
            <div class="relative h-[240px] overflow-hidden">
              <ImageWithFallback
                :src="(item as CaseItemTypeA).image"
                :alt="(item as CaseItemTypeA).title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div :class="['absolute top-4 left-4 px-3 py-1 rounded text-xs font-bold shadow-lg', badgeClass]">
                {{ (item as CaseItemTypeA).badge }}
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <div :class="['p-1.5 rounded-lg', iconBgClass]">
                  <component :is="(item as CaseItemTypeA).icon" :size="20" :class="iconColorClass" />
                </div>
                <h3 :class="['text-[18px] font-bold text-[#0B2747] transition-colors', titleHoverClass]">
                  {{ (item as CaseItemTypeA).title }}
                </h3>
              </div>
              <p class="text-sm text-gray-500 line-clamp-3 leading-relaxed min-h-[72px]">
                {{ (item as CaseItemTypeA).desc }}
              </p>
              
              <!-- Data Footer -->
              <div class="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-[13px] text-gray-400">
                <div class="flex items-center gap-1.5">
                  <MapPin :size="14" class="text-gray-300" />
                  <span>{{ (item as CaseItemTypeA).data1 }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <Gauge :size="14" class="text-gray-300" />
                  <span>{{ (item as CaseItemTypeA).data2 }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Type B Cards (Route Cases) -->
        <template v-else>
          <div
            v-for="(item, index) in items"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
            class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
          >
            <!-- Image Area -->
            <div class="relative h-[240px] overflow-hidden">
              <ImageWithFallback
                :src="(item as CaseItemTypeB).image"
                :alt="(item as CaseItemTypeB).title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div class="absolute top-4 left-4">
                <span :class="['backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm', tagClass]">
                  {{ (item as CaseItemTypeB).tag }}
                </span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-lg font-bold text-[#0B2747]">{{ (item as CaseItemTypeB).from }}</span>
                <ArrowRight :size="16" class="text-gray-400" />
                <span class="text-lg font-bold text-[#0B2747]">{{ (item as CaseItemTypeB).to }}</span>
              </div>
              
              <h3 class="text-base font-bold text-[#0B2747] mb-3 leading-tight">
                {{ (item as CaseItemTypeB).title }}
              </h3>
              
              <p class="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                {{ (item as CaseItemTypeB).desc }}
              </p>

              <!-- Footer Data -->
              <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs text-gray-400 font-medium">
                  {{ (item as CaseItemTypeB).footer }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MapPin, Gauge, ArrowRight } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import type { CaseItemTypeA, CaseItemTypeB, ThemeColor } from '@/types'

/**
 * 通用案例展示区块组件
 * 
 * @component CasesSection
 * @description
 * 统一的服务案例展示组件，支持两种卡片类型：
 * - TypeA: 服务场景案例（带图标、徽章、双数据指标）
 * - TypeB: 路线案例（起点终点、分类标签、单数据指标）
 * 
 * @example
 * TypeA 案例（服务场景）：
 * <CasesSection
 *   title="代驾接驳真实场景"
 *   card-type="typeA"
 *   theme="blue"
 *   :items="cases"
 * />
 * 
 * TypeB 案例（路线展示）：
 * <CasesSection
 *   title="真实运输案例"
 *   card-type="typeB"
 *   theme="blue"
 *   :items="cases"
 * />
 */

interface Props {
  /**
   * 区块标题
   */
  title: string
  /**
   * 区块副标题
   */
  subtitle?: string
  /**
   * 案例数据列表
   */
  items: (CaseItemTypeA | CaseItemTypeB)[]
  /**
   * 卡片类型
   * @default 'typeA'
   */
  cardType?: 'typeA' | 'typeB'
  /**
   * 主题颜色（仅用于 TypeA）
   * @default 'blue'
   */
  theme?: ThemeColor
}

const props = withDefaults(defineProps<Props>(), {
  cardType: 'typeA',
  theme: 'blue'
})

/**
 * 徽章样式（TypeA）
 */
const badgeClass = computed(() => {
  const colors = {
    blue: 'bg-[#006EFF] text-white',
    orange: 'bg-[#FF6B00] text-white',
    green: 'bg-[#10B981] text-white'
  }
  return colors[props.theme]
})

/**
 * 图标背景样式（TypeA）
 */
const iconBgClass = computed(() => {
  const colors = {
    blue: 'bg-blue-50',
    orange: 'bg-orange-50',
    green: 'bg-green-50'
  }
  return colors[props.theme]
})

/**
 * 图标颜色样式（TypeA）
 */
const iconColorClass = computed(() => {
  const colors = {
    blue: 'text-[#006EFF]',
    orange: 'text-[#FF6B00]',
    green: 'text-[#10B981]'
  }
  return colors[props.theme]
})

/**
 * 标题悬浮颜色（TypeA）
 */
const titleHoverClass = computed(() => {
  const colors = {
    blue: 'group-hover:text-[#006EFF]',
    orange: 'group-hover:text-[#FF6B00]',
    green: 'group-hover:text-[#10B981]'
  }
  return colors[props.theme]
})

/**
 * 标签样式（TypeB）
 */
const tagClass = computed(() => {
  const colors = {
    blue: 'bg-white/90 text-[#006EFF]',
    orange: 'bg-white/90 text-[#FF6B00]',
    green: 'bg-white/90 text-[#10B981]'
  }
  return colors[props.theme]
})
</script>
