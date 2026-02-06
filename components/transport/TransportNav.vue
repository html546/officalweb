<template>
  <nav class="sticky top-[80px] z-40 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-sm h-[60px] flex items-center">
    <div class="max-w-[1200px] mx-auto w-full px-4 flex justify-center gap-12 h-full">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="handleNavClick(item.id)"
        class="group relative h-full flex items-center text-[16px] font-medium text-[#6B7280] hover:text-[#006EFF] active:text-[#004BB5] active:scale-98 active:opacity-80 transition-all duration-300 cursor-pointer whitespace-nowrap"
      >
        {{ item.label }}
        <!-- No persistent underline or background per stateless requirement -->
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { id: "section-daban", label: "大板车托运" },
  { id: "section-xiaoban", label: "小板车托运" },
  { id: "section-daijia", label: "代驾接驳" },
  { id: "section-jiuyuan", label: "道路救援" },
]

const handleNavClick = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 140 // 80px (header) + 60px (this nav)
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}
</script>
