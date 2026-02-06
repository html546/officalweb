<template>
  <div class="min-h-screen bg-white font-sans text-[#0B2747]">
    <!-- Hero Section -->
    <section class="relative h-[720px] overflow-hidden">
      <!-- Background Image with Navy Gradient Overlay -->
      <div class="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591768793355-74d7c80b0e17?q=80&w=2000"
          alt="Chinese truck driver with Blue CheTuoChe Logo on a professional carrier truck"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B2747] via-[#0B2747]/90 to-transparent z-10" />
      </div>

      <div class="relative z-20 max-w-[1200px] w-full mx-auto px-4 lg:px-0 pb-48 h-full flex flex-col justify-center">
        <!-- Breadcrumb Navigation - Absolute Positioned -->
        <div class="absolute top-6 left-4 lg:left-0 flex items-center gap-2 text-[14px] text-white/80">
          <button
            @click="() => setActiveId('home')"
            class="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            首页
          </button>
          <ChevronRight class="w-3.5 h-3.5 text-white/40" />
          <span class="text-white/60">汽车托运</span>
          <ChevronRight class="w-3.5 h-3.5 text-white/40" />
          <span class="text-white font-medium">价格查询</span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="max-w-2xl px-4 lg:px-0"
        >
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#006EFF] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
            <Zap :size="12" fill="currentColor" />
            2026 数字化物流升级版
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            托运价格透明 <br />
            <span class="text-[#006EFF]">
              全程数字监管
            </span>
          </h2>
          <p class="text-gray-300 text-lg font-medium leading-relaxed max-w-lg">
            车拖车整合全国 50,000+ 运力资源，通过 AI
            算法提供精准报价。拒接隐形消费，让每一公里都清晰可见。
          </p>
        </div>
      </div>

      <!-- Floating Stats -->
      <div class="absolute bottom-32 right-10 z-20 hidden lg:flex gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl min-w-[120px]"
        >
          <div class="text-2xl font-black text-white">
            {{ stat.val }}
          </div>
          <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </section>

    <!-- Main Calculator Section -->
    <section class="relative z-30 -mt-24 px-4 pb-20">
      <div class="max-w-[1200px] mx-auto">
        <div class="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
          <div class="sr-only">
            <h1>
              车拖车物流价格计算器 - 2026 托运费用查询系统
            </h1>
          </div>
          <!-- Calculator Tabs -->
          <div class="grid grid-cols-4 border-b border-gray-50">
            <button
              v-for="tab in TABS"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="`flex flex-col items-center justify-center py-8 gap-3 transition-all relative group ${
                activeTab === tab.id
                  ? 'text-[#006EFF]'
                  : 'text-gray-400 hover:text-[#0B2747]'
              }`"
            >
              <component
                :is="tab.icon"
                :size="24"
                :class="`transition-transform duration-500 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`"
              />
              <span class="text-sm font-bold tracking-tight">
                {{ tab.label }}
              </span>
              <div
                v-if="activeTab === tab.id"
                v-motion
                layoutId="active-tab-indicator"
                class="absolute bottom-0 left-0 right-0 h-1 bg-[#006EFF]"
              />
            </button>
          </div>

          <!-- Content Area -->
          <div class="p-8 lg:p-12">
            <!-- Small Carrier Calculator -->
            <div v-if="activeTab === 'small'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <label class="text-[15px] font-bold text-[#0B2747] flex items-center gap-2">
                    路线规划
                    <span class="px-2 py-0.5 bg-blue-50 text-[#006EFF] text-[10px] rounded-full">
                      里程计费
                    </span>
                  </label>
                </div>

                <div class="relative">
                  <div class="space-y-3">
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:border-[#006EFF] focus-within:bg-white transition-all">
                      <div class="w-8 h-8 rounded-full bg-[#006EFF]/10 flex items-center justify-center">
                        <MapPin
                          :size="16"
                          class="text-[#006EFF]"
                        />
                      </div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          从哪里出发 Origin
                        </div>
                        <input
                          type="text"
                          :value="fromText"
                          @focus="showAddressDropdown = true"
                          @blur="setTimeout(() => showAddressDropdown = false, 200)"
                          @input="(e: Event) => fromText = (e.target as HTMLInputElement).value"
                          placeholder="请输入出发城市"
                          class="w-full bg-transparent border-none focus:ring-0 p-0 text-[#0B2747] font-bold text-[15px] placeholder:text-gray-300"
                        />
                      </div>
                      <div
                        v-if="showAddressDropdown"
                        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-[100] p-2"
                      >
                        <div class="text-[10px] text-gray-400 font-bold px-3 py-2 uppercase">
                          常用地点 Suggestion
                        </div>
                        <button
                          v-for="city in ['北京朝阳', '上海浦东', '广州白云', '深圳南山']"
                          :key="city"
                          @click="fromText = city"
                          class="w-full text-left px-3 py-2 text-sm text-[#0B2747] hover:bg-blue-50 rounded-lg transition-colors font-medium"
                        >
                          {{ city }}
                        </button>
                      </div>
                    </div>

                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:border-[#006EFF] focus-within:bg-white transition-all">
                      <div class="w-8 h-8 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                        <Navigation
                          :size="16"
                          class="text-[#FF6B00]"
                        />
                      </div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          要运到哪里 Destination
                        </div>
                        <input
                          type="text"
                          :value="toText"
                          @input="(e: Event) => toText = (e.target as HTMLInputElement).value"
                          placeholder="请输入到达城市"
                          class="w-full bg-transparent border-none focus:ring-0 p-0 text-[#0B2747] font-bold text-[15px] placeholder:text-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    @click="handleSwapAddresses"
                    class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
                  >
                    <div
                      v-motion
                      :animate="{ rotate: isSwapping ? 180 : 0, transition: { duration: 300 } }"
                    >
                      <ArrowUpDown
                        :size="18"
                        class="text-[#006EFF]"
                      />
                    </div>
                  </button>
                </div>

                <div class="space-y-3">
                  <label class="text-[15px] font-bold text-[#0B2747]">
                    车型选择
                  </label>
                  <div class="grid grid-cols-2 gap-3">
                    <div
                      v-for="(cat, idx) in VEHICLE_CATEGORIES"
                      :key="idx"
                      class="space-y-2"
                    >
                      <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        {{ cat.title }}
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-for="type in cat.types"
                          :key="type"
                          @click="selectedVehicle = type"
                          :class="`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedVehicle === type
                              ? 'bg-[#006EFF] text-white shadow-md shadow-blue-200'
                              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
                          }`"
                        >
                          {{ type }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <ShieldCheck
                        :size="20"
                        class="text-green-600"
                      />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-[#0B2747]">
                        保险保障
                      </div>
                      <div class="text-[11px] text-gray-400">
                        太平洋｜东海保险深度承保
                      </div>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      :checked="isInsuranceActive"
                      @change="isInsuranceActive = !isInsuranceActive"
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006EFF]"></div>
                  </label>
                </div>
              </div>

              <div class="bg-[#0B2747] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#006EFF]/10 rounded-full blur-3xl" />
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-8">
                    <h3 class="text-lg font-bold">
                      费用预算
                    </h3>
                    <div class="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <Activity
                        :size="10"
                        class="text-[#006EFF]"
                      />
                      实时结算行情
                    </div>
                  </div>

                  <div class="space-y-6">
                    <div class="flex items-end justify-between border-b border-white/10 pb-6">
                      <div>
                        <div class="text-gray-400 text-xs mb-1">
                          预计运费 (Estimated Cost)
                        </div>
                        <div class="flex items-baseline gap-1">
                          <span class="text-3xl font-mono font-bold text-[#FF6B00]">
                            ¥
                          </span>
                          <span class="text-5xl font-mono font-bold text-[#FF6B00]">
                            1,850
                          </span>
                          <span class="text-gray-400 text-sm ml-2">
                            起
                          </span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-[10px] text-gray-500 font-bold line-through">
                          ¥2,100
                        </div>
                        <div class="text-[10px] text-[#006EFF] font-black uppercase">
                          Figma Make Exclusive
                        </div>
                      </div>
                    </div>

                    <div class="space-y-4 pt-2">
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          基础运输费 (860km)
                        </span>
                        <span class="font-bold">¥1,650</span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          车型加价 ({{ selectedVehicle || '轿车' }})
                        </span>
                        <span class="font-bold">¥0</span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          运输保险 (货值100万)
                        </span>
                        <span class="font-bold text-[#006EFF]">
                          额外购买
                        </span>
                      </div>
                    </div>

                    <div class="pt-8 space-y-4">
                      <Button
                        @click="showQrModal = true"
                        class="w-full h-16 bg-[#006EFF] hover:bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-900/40 group"
                      >
                        立即下单 (Book Now)
                        <ChevronRight class="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p class="text-center text-[11px] text-gray-500 px-4">
                        点击即代表您同意《车拖车运输服务协议》及《隐私政策》，本报价为参考价，最终结算以实际行程为准。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Big Carrier Calculator -->
            <div v-else-if="activeTab === 'big'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <label class="text-[15px] font-bold text-[#0B2747] flex items-center gap-2">
                    干线集运规划
                    <span class="px-2 py-0.5 bg-blue-50 text-[#006EFF] text-[10px] rounded-full">
                      大板车批量运输
                    </span>
                  </label>
                </div>

                <div class="relative">
                  <div class="space-y-3">
                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:border-[#006EFF] focus-within:bg-white transition-all">
                      <div class="w-8 h-8 rounded-full bg-[#006EFF]/10 flex items-center justify-center">
                        <MapPin :size="16" class="text-[#006EFF]" />
                      </div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          始发网点 Origin Depot
                        </div>
                        <input
                          type="text"
                          :value="fromText"
                          @input="(e: Event) => fromText = (e.target as HTMLInputElement).value"
                          placeholder="选择始发城市网点"
                          class="w-full bg-transparent border-none focus:ring-0 p-0 text-[#0B2747] font-bold text-[15px] placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group focus-within:border-[#006EFF] focus-within:bg-white transition-all">
                      <div class="w-8 h-8 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                        <Navigation :size="16" class="text-[#FF6B00]" />
                      </div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          到达网点 Destination Depot
                        </div>
                        <input
                          type="text"
                          :value="toText"
                          @input="(e: Event) => toText = (e.target as HTMLInputElement).value"
                          placeholder="选择目的城市网点"
                          class="w-full bg-transparent border-none focus:ring-0 p-0 text-[#0B2747] font-bold text-[15px] placeholder:text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <label class="text-[15px] font-bold text-[#0B2747]">
                    运输要求
                  </label>
                  <div class="grid grid-cols-2 gap-4">
                    <button class="p-4 rounded-xl border border-[#006EFF] bg-blue-50 text-left">
                      <div class="text-[#006EFF] font-bold text-sm">
                        自提自送
                      </div>
                      <div class="text-[10px] text-blue-400">
                        性价比最高，网点交付
                      </div>
                    </button>
                    <button class="p-4 rounded-xl border border-gray-100 bg-gray-50 text-left hover:border-gray-200 transition-colors">
                      <div class="text-gray-600 font-bold text-sm">
                        上门取送
                      </div>
                      <div class="text-[10px] text-gray-400">
                        省心省力，含短驳费
                      </div>
                    </button>
                  </div>
                </div>

                <div class="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <ShieldCheck :size="20" class="text-green-600" />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-[#0B2747]">
                        批量托运保险
                      </div>
                      <div class="text-[11px] text-gray-400">
                        最高保额可调，理赔无忧
                      </div>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      :checked="isInsuranceActive"
                      @change="isInsuranceActive = !isInsuranceActive"
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006EFF]"></div>
                  </label>
                </div>
              </div>

              <div class="bg-[#0B2747] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-8">
                    <h3 class="text-lg font-bold">
                      大板集运预估
                    </h3>
                    <div class="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <Clock :size="10" class="text-[#006EFF]" />
                      时效 3-5 天
                    </div>
                  </div>

                  <div class="space-y-6">
                    <div class="flex items-end justify-between border-b border-white/10 pb-6">
                      <div>
                        <div class="text-gray-400 text-xs mb-1">
                          集运优惠价 (Bulk Price)
                        </div>
                        <div class="flex items-baseline gap-1">
                          <span class="text-3xl font-mono font-bold text-[#FF6B00]">
                            ¥
                          </span>
                          <span class="text-5xl font-mono font-bold text-[#FF6B00]">
                            1,280
                          </span>
                          <span class="text-gray-400 text-sm ml-2">
                            起
                          </span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-[10px] text-green-500 font-bold">
                          比小板省 ¥570
                        </div>
                      </div>
                    </div>

                    <div class="space-y-4 pt-2">
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          干线里程费
                        </span>
                        <span class="font-bold">¥1,280</span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          中转装卸费
                        </span>
                        <span class="font-bold text-green-500">
                          免除
                        </span>
                      </div>
                    </div>

                    <div class="pt-8">
                      <Button
                        @click="showQrModal = true"
                        class="w-full h-16 bg-[#006EFF] hover:bg-blue-600 text-white rounded-2xl font-bold text-lg"
                      >
                        立即拼板下单
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Valet Calculator -->
            <div v-else-if="activeTab === 'valet'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <label class="text-[15px] font-bold text-[#0B2747] flex items-center gap-2">
                    长途代驾取送
                    <span class="px-2 py-0.5 bg-orange-50 text-[#FF6B00] text-[10px] rounded-full">
                      持证老司机
                    </span>
                  </label>
                </div>

                <div class="space-y-3">
                  <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full bg-[#006EFF]/10 flex items-center justify-center shrink-0">
                      <MapPin :size="16" class="text-[#006EFF]" />
                    </div>
                    <input
                      type="text"
                      placeholder="出发详细地址"
                      class="bg-transparent border-none focus:ring-0 p-0 w-full font-bold"
                    />
                  </div>
                  <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
                      <Navigation :size="16" class="text-[#FF6B00]" />
                    </div>
                    <input
                      type="text"
                      placeholder="送达详细地址"
                      class="bg-transparent border-none focus:ring-0 p-0 w-full font-bold"
                    />
                  </div>
                </div>

                <div class="space-y-3">
                  <label class="text-[15px] font-bold text-[#0B2747]">
                    取车时间
                  </label>
                  <div class="flex gap-2">
                    <button
                      v-for="t in ['今日', '明日', '预约']"
                      :key="t"
                      @click="selectedTimeSlot = t"
                      :class="`px-6 py-2 rounded-xl text-sm font-bold border transition-all ${selectedTimeSlot === t ? 'bg-[#0B2747] text-white border-[#0B2747]' : 'bg-white text-gray-500 border-gray-100'}`"
                    >
                      {{ t }}
                    </button>
                  </div>
                </div>

                <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div class="flex items-center gap-2 text-[#006EFF] font-bold text-sm mb-1">
                    <UserCheck :size="16" />
                    司机要求
                  </div>
                  <p class="text-[11px] text-blue-400">
                    统一派遣
                    10年以上驾龄老司机，全程记录仪监控，保障行车安全。
                  </p>
                </div>
              </div>

              <div class="bg-[#0B2747] rounded-3xl p-8 text-white relative shadow-2xl">
                <div class="space-y-6">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-bold">
                      代驾服务估价
                    </h3>
                    <div class="text-[10px] bg-[#FF6B00] px-2 py-0.5 rounded">
                      按公里+时长计费
                    </div>
                  </div>

                  <div class="border-b border-white/10 pb-6">
                    <div class="text-gray-400 text-xs mb-1">
                      预计服务费
                    </div>
                    <div class="flex items-baseline gap-1">
                      <span class="text-3xl font-mono font-bold text-[#FF6B00]">
                        ¥
                      </span>
                      <span class="text-5xl font-mono font-bold text-[#FF6B00]">
                        680
                      </span>
                      <span class="text-gray-400 text-sm ml-2">
                        起
                      </span>
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-400">
                        起步费 (含10km)
                      </span>
                      <span>¥120</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-400">
                        里程费 (预计150km)
                      </span>
                      <span>¥560</span>
                    </div>
                  </div>

                  <Button
                    @click="showQrModal = true"
                    class="w-full h-16 bg-[#FF6B00] hover:bg-[#e65a00] text-white rounded-2xl font-bold text-lg mt-4"
                  >
                    呼叫老司机
                  </Button>
                </div>
              </div>
            </div>

            <!-- Rescue Calculator -->
            <div v-else-if="activeTab === 'rescue'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <label class="text-[15px] font-bold text-[#0B2747] flex items-center gap-2">
                    道路救援申请
                    <span class="px-2 py-0.5 bg-red-50 text-red-500 text-[10px] rounded-full animate-pulse">
                      Emergency
                    </span>
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="item in rescueOptions"
                    :key="item.id"
                    @click="toggleRescueOption(item.id)"
                    :class="`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${selectedRescueOptions.includes(item.id) ? 'border-[#006EFF] bg-blue-50 text-[#006EFF]' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'}`"
                  >
                    <component :is="item.icon" :size="24" />
                    <span class="text-xs font-bold">
                      {{ item.label }}
                    </span>
                  </button>
                </div>

                <div class="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <MapPin :size="20" class="text-red-500" />
                  </div>
                  <div class="flex-1">
                    <div class="text-[10px] text-red-400 font-bold uppercase">
                      故障位置 Location
                    </div>
                    <div class="text-sm font-bold text-[#0B2747]">
                      正在定位中...
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-[#0B2747] rounded-3xl p-8 text-white relative shadow-2xl border-2 border-red-500/20">
                <div class="space-y-6">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-bold">
                      紧急救援预估
                    </h3>
                    <div class="flex items-center gap-2 text-red-500 font-black text-[10px]">
                      <div class="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                      附近有 3 辆空闲车
                    </div>
                  </div>

                  <div class="border-b border-white/10 pb-6">
                    <div class="text-gray-400 text-xs mb-1">
                      救援起步价
                    </div>
                    <div class="flex items-baseline gap-1">
                      <span class="text-3xl font-mono font-bold text-[#FF6B00]">
                        ¥
                      </span>
                      <span class="text-5xl font-mono font-bold text-[#FF6B00]">
                        280
                      </span>
                      <span class="text-gray-400 text-sm ml-2">
                        起
                      </span>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <p class="text-xs text-gray-400 leading-relaxed">
                      *
                      最终价格受现场环境（如地库、泥泞路段）、救援里程及深夜附加费影响。
                    </p>
                    <Button
                      @click="showQrModal = true"
                      class="w-full h-16 bg-[#FF6B00] hover:bg-[#e65a00] text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-900/20"
                    >
                      极速呼叫救援 (Call Rescue)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Real-time Dynamic Stream & Trust Indicators -->
    <section class="bg-[#0B2747] py-24 relative overflow-hidden">
      <!-- Abstract background shapes -->
      <div class="absolute -left-20 bottom-0 w-96 h-96 bg-[#006EFF]/5 rounded-full blur-3xl" />
      <div class="absolute right-0 top-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl" />

      <div class="max-w-[1200px] mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 text-[#006EFF] font-black text-xs uppercase tracking-[0.2em] mb-4">
              <Activity :size="14" />
              Live Network Status
            </div>
            <h2 class="text-4xl font-bold text-white mb-8">
              全国实时运单动态报告
            </h2>

            <div class="grid grid-cols-2 gap-8 mb-10">
              <div class="space-y-1">
                <div class="text-3xl font-mono font-bold text-[#FF6B00]">
                  2,842
                </div>
                <div class="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  今日活跃运单 (Today Active)
                </div>
              </div>
              <div class="space-y-1">
                <div class="text-3xl font-mono font-bold text-green-500">
                  100%
                </div>
                <div class="text-gray-400 text-xs font-bold uppercase tracking-wider">
                  平台准时率 (On-time Rate)
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-gray-400 leading-relaxed text-[15px]">
                数字化监管系统每秒更新 1,200
                次数据。从大板装车到末端交付，每一台车在全国物流网络中的位置、温度及状态均处于
                AI 实时监控中。
              </p>
            </div>
          </div>

          <!-- Right Column: Vertical Infinite Scroll List -->
          <div class="h-[450px] overflow-hidden relative group">
            <!-- Masks -->
            <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0B2747] to-transparent z-10" />
            <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0B2747] to-transparent z-10" />

            <div
              v-motion
              :animate="{ 
                y: [0, -600],
                transition: {
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }
              }"
              class="space-y-4"
            >
              <div
                v-for="(item, idx) in orderStream"
                :key="idx"
                class="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-white/10 transition-all hover:translate-x-2 cursor-default"
              >
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2 text-white font-bold text-sm">
                    <MapPin
                      :size="14"
                      class="text-gray-500"
                    />
                    {{ item.from }}
                    <ArrowRight
                      :size="12"
                      class="text-gray-600"
                    />
                    {{ item.to }}
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      :class="`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.type === '道路救援'
                          ? 'bg-orange-900/50 text-orange-200'
                          : 'bg-blue-900/50 text-blue-200'
                      }`"
                    >
                      {{ item.type }}
                    </span>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-[#FF6B00] font-mono font-bold">
                    {{ item.price }}
                  </div>
                  <div class="flex items-center gap-1 justify-end mt-1">
                    <span class="text-[10px] text-gray-500 font-medium">
                      {{ item.time }}
                    </span>
                    <CheckCircle2
                      :size="12"
                      class="text-green-500"
                    />
                    <span class="text-[10px] text-green-500 font-bold">
                      已接单
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: National GEO Route Price Index -->
    <section class="bg-white py-24">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-[#0B2747]">
            全国热门城市线路价格查询
          </h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
            按行政区划检索，覆盖全国 300+ 城市及 2800+
            区县，精准匹配专线报价。
          </p>
        </div>

        <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col min-h-[550px]">
          <!-- Zone Tabs -->
          <div class="bg-gray-50 border-b border-gray-200 flex overflow-x-auto no-scrollbar">
            <button
              v-for="zone in Object.keys(REGION_DATA)"
              :key="zone"
              @click="handleZoneChange(zone)"
              :class="`px-8 py-5 text-sm font-bold transition-all relative whitespace-nowrap ${
                activeZoneTab === zone
                  ? 'bg-white text-[#006EFF] border-t-2 border-t-[#006EFF]'
                  : 'text-gray-400 hover:text-gray-600 border-t-2 border-t-transparent'
              }`"
            >
              {{ zone }}
            </button>
          </div>

          <!-- Split-Pane Layout -->
          <div class="flex-1 grid grid-cols-12">
            <!-- Left Pane: Origin Selection -->
            <div class="col-span-12 lg:col-span-4 border-r border-gray-100 p-8 bg-white">
              <div class="flex items-center gap-2 mb-6">
                <span class="text-lg">📍</span>
                <h3 class="text-sm font-bold text-[#0B2747] uppercase tracking-wider">
                  请选择起始地 (Origin)
                </h3>
              </div>

              <div class="space-y-8">
                <!-- Level 1: Provinces -->
                <div>
                  <div class="flex flex-wrap gap-2">
                    <a
                      v-for="prov in REGION_DATA[activeZoneTab].provinces"
                      :key="prov"
                      href="#"
                      @click.prevent="selectedProvince = prov"
                      :class="`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedProvince === prov
                          ? 'bg-[#006EFF] text-white shadow-md shadow-blue-200'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`"
                    >
                      {{ prov }}
                    </a>
                  </div>
                </div>

                <!-- Level 2: Cities -->
                <div class="pt-4 border-t border-gray-50">
                  <div class="text-[11px] text-gray-400 font-black uppercase tracking-widest mb-3">
                    城市 City
                  </div>
                  <a
                    href="#"
                    class="text-sm font-bold text-[#0B2747] flex items-center gap-2 hover:text-[#006EFF] transition-colors"
                  >
                    <div class="w-1.5 h-1.5 rounded-full bg-[#006EFF]" />
                    {{ selectedProvince === '北京' || selectedProvince === '上海' || selectedProvince === '天津' || selectedProvince === '重庆'
                      ? `${selectedProvince}市 (全市)`
                      : `${selectedProvince}核心城市` }}
                  </a>
                </div>

                <!-- Level 3: Districts -->
                <div class="pt-4 border-t border-gray-50">
                  <div class="text-[11px] text-gray-400 font-black uppercase tracking-widest mb-3">
                    区县 District/County
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <a
                      v-for="dist in REGION_DATA[activeZoneTab].districts"
                      :key="dist"
                      href="#"
                      @click.prevent="selectedDistrict = dist"
                      :class="`text-left text-xs py-1 transition-all ${
                        selectedDistrict === dist
                          ? 'text-[#006EFF] font-bold underline'
                          : 'text-gray-500 hover:text-[#006EFF] hover:underline'
                      }`"
                    >
                      {{ dist }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Pane: Destination Matrix -->
            <div class="col-span-12 lg:col-span-8 p-8 bg-gray-50/30">
              <div class="flex items-center gap-2 mb-8">
                <span class="text-lg">🚀</span>
                <h3 class="text-sm font-bold text-[#0B2747] uppercase tracking-wider">
                  从 [{{ selectedProvince }}-{{ selectedDistrict }}]
                  出发，热门流向价格 (Routes)
                </h3>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                <div
                  v-for="(group, idx) in REGION_DATA[activeZoneTab].routes"
                  :key="idx"
                  class="space-y-4"
                >
                  <div
                    :class="`flex items-center gap-2 border-l-4 ${group.hot || group.seasonal ? 'border-[#FF6B00]' : 'border-[#0B2747]'} pl-3 py-1`"
                  >
                    <h4
                      :class="`font-bold ${group.hot || group.seasonal ? 'text-[#FF6B00]' : 'text-[#0B2747]'} text-[15px]`"
                    >
                      {{ group.category }}
                    </h4>
                    <span
                      v-if="group.hot || group.seasonal"
                      class="bg-orange-100 text-[#FF6B00] text-[10px] px-1.5 py-0.5 rounded font-black uppercase"
                    >
                      {{ group.hot ? 'Hot' : 'Seasonal' }}
                    </span>
                  </div>
                  <div class="flex flex-col gap-2.5">
                    <a
                      v-for="(link, i) in group.items"
                      :key="i"
                      href="#"
                      class="group flex items-center justify-between hover:translate-x-1 transition-all"
                      :title="`${selectedProvince}到${link.name}运车/托运服务`"
                    >
                      <span
                        :class="`text-[13px] text-gray-600 group-hover:text-[#006EFF] ${group.seasonal ? 'group-hover:text-[#FF6B00]' : ''}`"
                      >
                        到{{ link.name }}
                      </span>
                      <span
                        :class="`text-[11px] font-bold transition-opacity ${group.seasonal ? 'text-[#FF6B00]' : 'text-[#006EFF]'} ${link.price.includes('¥') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`"
                      >
                        ({{ link.price }})
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SEO Internal Linking Footer -->
          <div class="bg-gray-50 p-6 border-t border-gray-200">
            <div class="text-[11px] text-gray-400 font-black uppercase tracking-widest mb-4">
              更多行政区划索引 Index
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-2">
              <a
                v-for="item in provinceIndex"
                :key="item.l"
                href="#"
                class="text-[12px] text-gray-400 hover:text-[#006EFF] transition-colors font-medium"
              >
                <span class="font-bold text-gray-500 mr-1">
                  [{{ item.l }}]
                </span>
                {{ item.n }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Industry Pitfalls vs. CheTuoChe Standards -->
    <section class="bg-[#F8F9FB] py-24">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[36px] font-bold text-[#0B2747]">
            汽车托运避坑指南：拒绝隐形消费与黑中介
          </h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
            行业乱象频发，车拖车用数字化标准重塑信任，让您远离低价陷阱。
          </p>
        </div>

        <div class="space-y-12">
          <div
            v-for="(row, i) in pitfallsData"
            :key="i"
            class="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <!-- Pitfall Card -->
            <div class="bg-white p-8 rounded-2xl border-t-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <component :is="row.pitfall.icon" class="text-red-500" />
                </div>
                <div>
                  <h4 class="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                    {{ row.pitfall.title }}
                    <span class="text-[10px] bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-black uppercase tracking-wider">
                      Pitfall
                    </span>
                  </h4>
                  <p class="text-[14px] text-gray-500 leading-relaxed font-medium">
                    {{ row.pitfall.desc }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Standard Card -->
            <div class="bg-white p-8 rounded-2xl border-t-4 border-[#006EFF] shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <component :is="row.standard.icon" class="text-[#006EFF]" />
                </div>
                <div>
                  <h4 class="text-lg font-bold text-[#006EFF] mb-3 flex items-center gap-2">
                    {{ row.standard.title }}
                    <span class="text-[10px] bg-blue-100 px-1.5 py-0.5 rounded text-[#006EFF] font-black uppercase tracking-wider">
                      Standard
                    </span>
                  </h4>
                  <p class="text-[14px] text-gray-600 leading-relaxed font-bold">
                    {{ row.standard.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: FAQ -->
    <section class="bg-white py-24">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="grid grid-cols-12 gap-16">
          <!-- Left Column: Header & Support -->
          <div class="col-span-12 lg:col-span-4">
            <h2 class="text-3xl font-bold text-[#0B2747] mb-6">
              常见问题解答
            </h2>
            <p class="text-gray-500 mb-8">
              关于托运价格、时效及运输安全的详细解答。
            </p>

            <div class="bg-[#F8F9FB] rounded-xl p-6 border border-gray-100">
              <div class="w-10 h-10 rounded-full bg-[#006EFF]/10 flex items-center justify-center mb-4">
                <Headphones
                  :size="20"
                  class="text-[#006EFF]"
                />
              </div>
              <div class="text-sm text-gray-600 mb-2 font-medium">
                价格计算太复杂？联系专家人工报价
              </div>
              <div class="text-2xl font-black text-[#0B2747] mb-4">
                400-075-1117
              </div>
              <a
                href="tel:4000751117"
                class="inline-flex items-center gap-2 text-[#006EFF] font-bold hover:gap-3 transition-all"
              >
                点击拨打 (Call Us)
                <ArrowRight :size="16" />
              </a>
            </div>
          </div>

          <!-- Right Column: Accordion Items -->
          <div class="col-span-12 lg:col-span-8">
            <div class="divide-y divide-gray-100">
              <div
                v-for="(faq, i) in faqs"
                :key="i"
                class="py-6 first:pt-0 last:pb-0"
              >
                <button
                  @click="openFaq = openFaq === i ? null : i"
                  class="w-full flex items-center justify-between text-left group"
                >
                  <span
                    :class="`text-lg font-bold transition-colors ${
                      openFaq === i
                        ? 'text-[#006EFF]'
                        : 'text-[#0B2747] group-hover:text-[#006EFF]'
                    }`"
                  >
                    {{ faq.q }}
                  </span>
                  <div
                    :class="`shrink-0 transition-transform duration-300 ${
                      openFaq === i
                        ? 'rotate-180 text-[#006EFF]'
                        : 'text-gray-300'
                    }`"
                  >
                    <ChevronDown :size="24" />
                  </div>
                </button>
                <Transition
                  enter-active-class="transition-all duration-300"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-[500px] opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="max-h-[500px] opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div
                    v-if="openFaq === i"
                    class="overflow-hidden"
                  >
                    <div class="pt-4 text-gray-500 leading-relaxed text-[15px]">
                      {{ faq.a }}
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8: SEO & AI Semantic Summary Footer -->
    <article
      aria-label="Summary"
      class="bg-[#F0F7FF] py-12"
    >
      <div class="max-w-[1200px] mx-auto px-4">
        <dl class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Column 1: Definitions -->
          <div>
            <dt class="text-[15px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
              <div class="w-1.5 h-6 bg-[#006EFF] rounded-full" />
              汽车托运服务定义摘要
            </dt>
            <dd class="space-y-4 text-sm text-[#6B7280] leading-relaxed">
              <p>
                <strong class="text-[#006EFF]">
                  小板车托运（Small Flatbed）
                </strong>
                是指使用单车位救援车进行的门到门专车运输，特点是5秒接单、无中转，适合豪车及紧急需求。
              </p>
              <p>
                <strong class="text-[#006EFF]">
                  大板车托运（Car Carrier）
                </strong>
                是基于干线物流的批量运输（6-12台/车），适合长途异地搬家，价格比小板车低
                30%-50%，但需配合发车班次。
              </p>
            </dd>
          </div>

          <!-- Column 2: Pricing Facts -->
          <div>
            <dt class="text-[15px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
              <div class="w-1.5 h-6 bg-[#006EFF] rounded-full" />
              2026 运车价格与时效数据
            </dt>
            <dd class="space-y-4 text-sm text-[#6B7280] leading-relaxed">
              <div>
                <strong class="text-[#0B2747]">
                  道路救援价格：
                </strong>
                起步价
                <span class="text-[#006EFF] font-bold">
                  170元
                </span>
                （含10公里），超出按 8元/km
                计费，支持地库及事故车作业。
              </div>
              <div>
                <strong class="text-[#0B2747]">
                  代驾收费标准：
                </strong>
                起步价
                <span class="text-[#006EFF] font-bold">
                  75.6元
                </span>
                （含20公里），提供大板车末端接驳及长途专人直送服务。
              </div>
              <div>
                <strong class="text-[#0B2747]">
                  时效说明：
                </strong>
                小板车即刻出发；大板车跨省（如北京-三亚）通常需
                3-5天。
              </div>
            </dd>
          </div>

          <!-- Column 3: Coverage & Safety -->
          <div>
            <dt class="text-[15px] font-bold text-[#0B2747] mb-6 flex items-center gap-2">
              <div class="w-1.5 h-6 bg-[#006EFF] rounded-full" />
              服务范围与安全承诺
            </dt>
            <dd class="space-y-4 text-sm text-[#6B7280] leading-relaxed">
              <p>
                <strong class="text-[#0B2747]">
                  覆盖范围：
                </strong>
                车拖车运力覆盖全国
                <span class="text-[#006EFF] font-bold">
                  90%
                </span>
                以上地区，包括一线城市及下沉县乡，拥有 1000+
                集散网点。
              </p>
              <p>
                <strong class="text-[#0B2747]">
                  安全赔付：
                </strong>
                全平台订单均由
                <span class="text-[#006EFF] font-bold">
                  太平洋/东海保险
                </span>
                承保。采用"第一检测人"机制及
                GPS/北斗双模定位，实现全链路可视化追踪。
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </article>

    <!-- QR Code Modal -->
    <Dialog v-model="showQrModal">
      <DialogContent class="sm:max-w-[400px] bg-white rounded-[32px] p-10 max-w-sm w-full text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006EFF] to-[#FF6B00]" />
        <button
          @click="showQrModal = false"
          class="absolute top-6 right-6 text-gray-400 hover:text-[#0B2747] transition-colors"
        >
          <Plus class="rotate-45" :size="24" />
        </button>

        <div class="mb-8">
          <div class="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <QrCode
              :size="40"
              class="text-[#006EFF]"
            />
          </div>
          <h3 class="text-xl font-black text-[#0B2747] mb-2">
            扫码立即预约
          </h3>
          <p class="text-gray-400 text-sm">
            微信扫一扫，查看精准报价与优惠
          </p>
        </div>

        <div class="p-4 bg-gray-50 rounded-3xl mb-8 relative group">
          <div class="aspect-square bg-white rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#006EFF] transition-colors overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=500"
              alt="QR Code Placeholder"
              class="w-full h-full object-cover p-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px] group-hover:opacity-0 transition-opacity">
              <QrCode
                :size="48"
                class="text-gray-200"
              />
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-3 text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
              <Check
                :size="16"
                class="text-green-600"
              />
            </div>
            <div class="text-xs">
              <div class="font-bold text-[#0B2747]">
                新客立减 ¥50
              </div>
              <div class="text-gray-400 text-[10px]">
                首次扫码下单自动抵扣
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  ChevronDown,
  Headphones,
  Truck,
  Container,
  UserCheck,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  QrCode,
  ArrowRight,
  Clock,
  Navigation,
  CheckCircle2,
  ChevronRight,
  ArrowUpDown,
  Settings2,
  Zap,
  Check,
  AlertTriangle,
  CheckCircle,
  FileWarning,
  ShieldCheck as ShieldCheckIcon,
  Map as MapIcon,
  Plus,
  EyeOff,
  Activity,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import Dialog from '@/components/ui/Dialog.vue'
import DialogContent from '@/components/ui/DialogContent.vue'
// Calculator components are inline in the template

interface Props {
  setActiveId?: (id: string) => void
  initialTab?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialTab: 'small',
})

// All 15+ useState converted to ref()
const activeTab = ref(props.initialTab)
const isInsuranceActive = ref(true)
const showAddressDropdown = ref(false)
const fromText = ref('北京朝阳')
const toText = ref('')
const selectedVehicle = ref('')
const selectedRescueOptions = ref<string[]>([])
const selectedTimeSlot = ref('今日')
const isSwapping = ref(false)
const showQrModal = ref(false)
const activeZoneTab = ref('华北地区')
const selectedProvince = ref('北京')
const selectedDistrict = ref('朝阳区')
const openFaq = ref<number | null>(null)

const TABS = [
  { id: 'small', label: '小板车托运', icon: Truck },
  { id: 'big', label: '大板车托运', icon: Container },
  { id: 'valet', label: '代驾取送', icon: UserCheck },
  { id: 'rescue', label: '道路救援', icon: LifeBuoy },
]

const VEHICLE_CATEGORIES = [
  {
    title: '家用/乘用车 (Passenger)',
    types: ['轿车', 'SUV', '跑车', '面包车', '皮卡', '摩托车'],
  },
  {
    title: '特种/工程车 (Special Vehicles)',
    types: [
      '挖掘机 (Excavator)',
      '叉车 (Forklift)',
      '拖拉机 (Tractor)',
      '货车',
      '房车',
      '餐车',
      '电四轮',
    ],
  },
]

const rescueOptions = [
  { id: 'tow', icon: Truck, label: '拖车/背车' },
  { id: 'jump', icon: Zap, label: '搭电/换电' },
  { id: 'tire', icon: Settings2, label: '换胎/补胎' },
  { id: 'unlock', icon: ShieldCheck, label: '地库/开锁' },
]

const REGION_DATA: Record<string, any> = {
  华北地区: {
    provinces: ['北京', '天津', '河北', '山西', '内蒙古'],
    defaultProvince: '北京',
    defaultDistrict: '朝阳区',
    districts: [
      '朝阳区',
      '海淀区',
      '丰台区',
      '西城区',
      '东城区',
      '石景山区',
      '大兴区',
      '通州区',
      '顺义区',
      '昌平区',
      '房山区',
      '门头沟区',
      '怀柔区',
      '平谷区',
      '密云区',
      '延庆区',
    ],
    routes: [
      {
        category: '上海方向',
        items: [
          { name: '上海浦东', price: '¥1300起' },
          { name: '上海闵行', price: '¥1350起' },
          { name: '上海嘉定', price: '¥1280起' },
        ],
      },
      {
        category: '广东方向',
        items: [
          { name: '广州白云', price: '¥1800起' },
          { name: '深圳南山', price: '¥1900起' },
          { name: '东莞', price: '¥1750起' },
        ],
      },
      {
        category: '海南方向',
        items: [
          { name: '三亚', price: '¥2800' },
          { name: '海口', price: '¥2200' },
        ],
        hot: true,
      },
    ],
  },
  华东地区: {
    provinces: ['上海', '山东', '江苏', '浙江', '安徽', '福建', '江西'],
    defaultProvince: '上海',
    defaultDistrict: '浦东新区',
    districts: [
      '浦东新区',
      '闵行区',
      '嘉定区',
      '松江区',
      '宝山区',
      '徐汇区',
      '静安区',
      '长宁区',
      '普陀区',
      '虹口区',
      '杨浦区',
      '黄浦区',
    ],
    routes: [
      {
        category: '华北方向',
        items: [
          { name: '北京', price: '¥1300起' },
          { name: '天津', price: '¥1250起' },
          { name: '大连 (海运+陆运)', price: '¥1600起' },
        ],
      },
      {
        category: '西部方向',
        items: [
          { name: '成都', price: '¥2100' },
          { name: '重庆', price: '¥2050' },
          { name: '西安', price: '¥1800' },
        ],
      },
      {
        category: '华南方向',
        items: [
          { name: '广州', price: '¥1800' },
          { name: '深圳', price: '¥1850' },
          { name: '东莞', price: '¥1700' },
        ],
      },
    ],
  },
  华南地区: {
    provinces: ['广东', '广西', '海南'],
    defaultProvince: '广东',
    defaultDistrict: '白云区',
    districts: [
      '白云区',
      '天河区',
      '番禺区',
      '海珠区',
      '花都区',
      '越秀区',
      '黄埔区',
      '南沙区',
      '荔湾区',
    ],
    routes: [
      {
        category: '候鸟专线 (Seasonal)',
        items: [
          { name: '三亚', price: '¥2500' },
          { name: '海口', price: '¥2200' },
          { name: '哈尔滨 (避暑)', price: '¥3500' },
        ],
        seasonal: true,
      },
      {
        category: '商务干线',
        items: [
          { name: '北京', price: '¥2000' },
          { name: '上海', price: '¥1800' },
          { name: '杭州', price: '¥1750' },
        ],
      },
    ],
  },
  华中地区: {
    provinces: ['湖北', '湖南', '河南'],
    defaultProvince: '湖北',
    defaultDistrict: '武昌区',
    districts: [
      '武昌区',
      '汉口',
      '江岸区',
      '洪山区',
      '东西湖区',
      '汉阳区',
      '青山区',
      '蔡甸区',
    ],
    routes: [
      {
        category: '长途干线',
        items: [
          { name: '乌鲁木齐 (长途)', price: '¥4500' },
          { name: '拉萨 (进藏)', price: '¥5200' },
        ],
      },
      {
        category: '沿海方向',
        items: [
          { name: '宁波', price: '¥1200' },
          { name: '温州', price: '¥1300' },
          { name: '厦门', price: '¥1500' },
        ],
      },
    ],
  },
  西部地区: {
    provinces: ['四川', '重庆', '陕西', '云南', '新疆', '西藏'],
    defaultProvince: '四川',
    defaultDistrict: '武侯区',
    districts: [
      '武侯区',
      '锦江区',
      '双流区',
      '龙泉驿区',
      '青羊区',
      '金牛区',
      '成华区',
      '新都区',
    ],
    routes: [
      {
        category: '进藏特色',
        items: [
          { name: '拉萨 (318返程车)', price: '¥1800' },
          { name: '林芝', price: '¥2200' },
        ],
      },
      {
        category: '返程干线',
        items: [
          { name: '北京 (返程)', price: '¥1500' },
          { name: '上海 (返程)', price: '¥1400' },
        ],
      },
    ],
  },
}

const stats = [
  { label: '覆盖城市', val: '300+' },
  { label: '年运输量', val: '1.2M+' },
  { label: '用户好评', val: '99.8%' },
]

const orderStream = [
  { from: '北京朝阳', to: '上海浦东', type: '小板车', price: '¥1,850', time: '2分钟前' },
  { from: '广州白云', to: '北京大兴', type: '大板车', price: '¥2,100', time: '5分钟前' },
  { from: '成都高新', to: '杭州滨江', type: '代驾', price: '¥1,200', time: '8分钟前' },
  { from: '西安雁塔', to: '深圳南山', type: '小板车', price: '¥1,580', time: '10分钟前' },
  { from: '武汉江汉', to: '南京鼓楼', type: '道路救援', price: '¥850', time: '12分钟前' },
  { from: '重庆渝北', to: '苏州工业园', type: '小板车', price: '¥1,620', time: '15分钟前' },
  // Duplicated for seamless loop
  { from: '北京朝阳', to: '上海浦东', type: '小板车', price: '¥1,850', time: '2分钟前' },
  { from: '广州白云', to: '北京大兴', type: '大板车', price: '¥2,100', time: '5分钟前' },
  { from: '成都高新', to: '杭州滨江', type: '代驾', price: '¥1,200', time: '8分钟前' },
  { from: '西安雁塔', to: '深圳南山', type: '小板车', price: '¥1,580', time: '10分钟前' },
]

const provinceIndex = [
  { l: 'A', n: '安徽' },
  { l: 'B', n: '北京' },
  { l: 'C', n: '重庆' },
  { l: 'F', n: '福建' },
  { l: 'G', n: '广东/广西/贵州/甘肃' },
  { l: 'H', n: '河北/河南/湖北/湖南/海南' },
  { l: 'J', n: '江苏/吉林/江西' },
  { l: 'L', n: '辽宁' },
  { l: 'N', n: '宁夏' },
  { l: 'Q', n: '青海' },
  { l: 'S', n: '山东/山西/上海/四川/陕西' },
  { l: 'T', n: '天津' },
  { l: 'X', n: '新疆/西藏' },
  { l: 'Y', n: '云南' },
  { l: 'Z', n: '浙江' },
]

const pitfallsData = [
  {
    title: '价格陷阱 (Pricing)',
    pitfall: {
      icon: AlertTriangle,
      title: '低价诱饵，中途加价',
      desc: '黑中介先报低价吸引，车运到半路以"装卸费"、"大板转小板"为由勒索加价，不给钱不卸车。',
    },
    standard: {
      icon: CheckCircle,
      title: '一口价合同，绝无二费',
      desc: '系统精准计算里程与车型费用，下单即签订电子合同。平台承诺：报价即结算价，中途绝无任何额外收费。',
    },
  },
  {
    title: '保险猫腻 (Insurance)',
    pitfall: {
      icon: FileWarning,
      title: '口头保险，出事无赔',
      desc: '承诺有保险却无法提供保单，或只买极低额度的基础险。一旦发生剐蹭或重大事故，推诿扯皮。',
    },
    standard: {
      icon: ShieldCheckIcon,
      title: '太平洋/东海保险承保，在线理赔',
      desc: '与太平洋/东海保险深度合作，每单均可单独出具电子保单。App内支持一键报案理赔，资金安全有保障。',
    },
  },
  {
    title: '车辆安全 (Safety)',
    pitfall: {
      icon: EyeOff,
      title: '私开车，轨迹消失',
      desc: '车辆被司机私自驾驶用于办私事，里程数增加；运输途中失联，无法实时查看车辆位置。',
    },
    standard: {
      icon: MapIcon,
      title: '全程可视化，里程合同保障',
      desc: '发车/收车双重视频验车，记录里程。GPS/北斗双模定位实时追踪，任何异常停留系统自动预警。',
    },
  },
]

const faqs = [
  {
    q: '汽车托运车内可以放行李吗？',
    a: '可以。您可以放置非危险品、非贵重物品的行李（如衣服、被褥）。贵重物品请随身携带。',
  },
  {
    q: '托运一般需要几天能到？',
    a: '时效取决于距离和运输方式。小板车（专车）通常日行 800-1000公里，时效最快；大板车（集运）需配合发车班次，省内 1-2天，跨省长途（如北京至三亚）约 3-5天。',
  },
  {
    q: '运输过程中会有隐形收费吗？',
    a: '绝对不会。车拖车实行 "一口价"电子合同制。系统计算的报价包含了油费、过路费及基础保险费。除用户临时变更路线或增加行李外，中途绝无任何额外收费。',
  },
  {
    q: '新车托运会增加里程数吗？',
    a: '不会。我们采用平板车或笼车运输，车辆全程处于静止装载状态。除起终点必要的装卸移动（通常不超过 5km）外，零里程增加。',
  },
]

const handleZoneChange = (zone: string) => {
  activeZoneTab.value = zone
  const data = REGION_DATA[zone]
  selectedProvince.value = data.defaultProvince
  selectedDistrict.value = data.defaultDistrict
}

const handleSwapAddresses = () => {
  isSwapping.value = true
  setTimeout(() => {
    const temp = fromText.value
    fromText.value = toText.value
    toText.value = temp
    isSwapping.value = false
  }, 300)
}

const toggleRescueOption = (id: string) => {
  if (selectedRescueOptions.value.includes(id)) {
    selectedRescueOptions.value = selectedRescueOptions.value.filter((item) => item !== id)
  } else {
    selectedRescueOptions.value = [...selectedRescueOptions.value, id]
  }
}

// Calculator content is now inline in template

const setActiveId = (id: string) => {
  props.setActiveId?.(id)
}

// Watch for zone changes to update province/district
import { watch } from 'vue'
watch(activeZoneTab, (newZone) => {
  const data = REGION_DATA[newZone]
  selectedProvince.value = data.defaultProvince
  selectedDistrict.value = data.defaultDistrict
})
</script>
