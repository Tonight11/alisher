<script setup lang="ts">
const { t } = useI18n()

const heroRef = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(heroRef)

const cardTransform = computed(() => {
  if (isOutside.value) return 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  
  const x = (elementX.value / elementWidth.value - 0.5) * 15 // Max 7.5 deg tilt
  const y = -(elementY.value / elementHeight.value - 0.5) * 15
  
  return `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`
})
</script>

<template>
  <section ref="heroRef" class="pt-12 sm:pt-20 lg:pt-24 pb-12 overflow-hidden bg-[#fafafa] relative">
    
    <!-- Animated background blob -->
    <div class="absolute top-0 right-0 -mr-32 -mt-32 h-[600px] w-[600px] rounded-full bg-[#a3ff74]/20 blur-3xl opacity-60 mix-blend-multiply pointer-events-none animate-[spin-slow_20s_linear_infinite]" />

    <UContainer class="relative z-10">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div class="max-w-2xl">
          <!-- Pill tag -->
          <div class="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-neutral-800 shadow-sm transition-transform hover:scale-105">
            <UIcon name="i-lucide-arrow-right" class="h-3.5 w-3.5" />
            <span class="uppercase tracking-wider">{{ t('hero.kicker') }}</span>
          </div>

          <h1 class="reveal reveal-delay-1 text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            {{ t('hero.title') }}
          </h1>

          <p class="reveal reveal-delay-2 mt-6 text-xl leading-relaxed text-neutral-600">
            {{ t('hero.subtitle') }}
          </p>

          <div class="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <UButton
              to="#about"
              size="xl"
              class="bg-[#0b3b24] text-white hover:bg-[#082a1a] px-8 rounded-lg shadow-xl shadow-green-900/10 font-semibold transition-all hover:scale-105"
            >
              {{ t('hero.cta.primary') }}
            </UButton>

            <UButton
              to="#contact"
              variant="outline"
              size="xl"
              color="neutral"
              class="px-8 rounded-lg border-2 border-neutral-300 font-semibold text-whtie hover:text-black hover:bg-neutral-50 hover:border-neutral-400 transition-all hover:scale-105"
            >
              {{ t('hero.cta.secondary') }}
            </UButton>
          </div>
          
          <div class="reveal reveal-delay-3 mt-12 pt-8 flex items-center gap-4 border-t border-neutral-200/60">
             <UAvatar src="https://i.pravatar.cc/100?img=33" size="lg" class="ring-2 ring-white shadow-md" />
             <div>
                <p class="text-sm font-bold text-neutral-900">High client to account manager ratio</p>
                <p class="text-xs text-neutral-500 mt-0.5">Tested & Proven Framework</p>
             </div>
          </div>
        </div>

        <!-- Right Side UI Cards Mockup -->
        <div class="relative mx-auto w-full max-w-lg lg:max-w-none reveal reveal-delay-2 hidden md:block">
            <div 
               class="relative h-[550px] w-full transition-transform duration-700 ease-out"
               :style="{ transform: cardTransform }"
            >
                <!-- Card 1 -->
                <div class="absolute top-0 right-10 w-64 rounded-3xl bg-[#a3ff74] p-6 shadow-2xl shadow-green-900/10 transform rotate-2 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 z-30" style="transform-style: preserve-3d; transform: translateZ(30px) rotate(2deg);">
                    <div class="flex items-center justify-between mb-6">
                        <div class="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center">
                            <UIcon name="i-lucide-bar-chart-2" class="h-5 w-5 text-black" />
                        </div>
                        <div class="bg-black/5 rounded-full px-2 py-1 text-xs font-bold text-black flex items-center gap-1">
                            <UIcon name="i-lucide-arrow-up-right" class="h-3 w-3" /> 23.1%
                        </div>
                    </div>
                    <div class="mb-2">
                        <p class="text-lg font-bold text-black">Performance</p>
                        <p class="text-xs font-medium text-black/60">Last week</p>
                    </div>
                    <div class="flex items-end gap-2 h-24 mt-6">
                        <div class="w-full bg-black/10 rounded-t-md h-1/3 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        <div class="w-full bg-black/10 rounded-t-md h-1/2 animate-[pulse_3s_ease-in-out_0.5s_infinite]"></div>
                        <div class="w-full bg-black/10 rounded-t-md h-3/4 animate-[pulse_3s_ease-in-out_1s_infinite]"></div>
                        <div class="w-full bg-[#0b3b24] rounded-t-md h-full relative overflow-hidden shadow-lg transform -translate-y-1">
                           <div class="absolute inset-0 opacity-20" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px);"></div>
                        </div>
                        <div class="w-full bg-black/10 rounded-t-md h-2/3 animate-[pulse_3s_ease-in-out_1.5s_infinite]"></div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="absolute top-16 -left-4 w-72 rounded-3xl bg-[#e0dfff] p-6 shadow-xl shadow-indigo-900/10 transform -rotate-2 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 z-10" style="transform-style: preserve-3d; transform: translateZ(10px) rotate(-2deg);">
                     <div class="flex items-center gap-3 mb-4">
                        <div class="h-10 w-10 rounded-full bg-black flex items-center justify-center shadow-inner">
                            <UIcon name="i-lucide-zap" class="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p class="text-xs font-medium text-black/60">Automation</p>
                            <p class="text-lg font-bold text-black leading-tight">Quick start</p>
                        </div>
                    </div>
                    <p class="text-sm text-black/70 font-medium mb-6 leading-snug">Essential rules for pausing, starting, and scaling resources.</p>
                    <div class="flex gap-2">
                        <div class="bg-black/5 rounded-lg px-3 py-1.5 text-xs font-bold text-black flex items-center gap-1.5 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                            <UIcon name="i-lucide-check-circle" class="h-3 w-3" /> 3 rules
                        </div>
                        <div class="bg-black/5 rounded-lg px-3 py-1.5 text-xs font-bold text-black flex items-center gap-1.5 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                            <UIcon name="i-lucide-copy" class="h-3 w-3" /> 1,253 clones
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="absolute top-64 left-10 w-[340px] rounded-3xl bg-[#0b3b24] p-6 shadow-2xl shadow-green-950/20 z-20 hover:-translate-y-4 transition-all duration-500" style="transform-style: preserve-3d; transform: translateZ(50px);">
                    <p class="text-lg font-bold text-white">52 campaigns</p>
                    <p class="text-xs font-medium text-white/60 mb-4">Last 7 days</p>
                    <div class="flex gap-2 mb-6">
                        <div class="border border-white/20 rounded-md px-2 py-1 text-xs text-white flex items-center gap-1 cursor-pointer hover:bg-white/10 transition-colors">
                            Active <UIcon name="i-lucide-x" class="h-3 w-3 opacity-50" />
                        </div>
                        <div class="border border-white/20 rounded-md px-2 py-1 text-xs text-white flex items-center gap-1 cursor-pointer hover:bg-white/10 transition-colors">
                            ROI > 150% <UIcon name="i-lucide-x" class="h-3 w-3 opacity-50" />
                        </div>
                        <div class="border border-white/20 rounded-md px-2 py-1 text-xs text-white flex items-center justify-center ml-auto cursor-pointer hover:bg-white/10 transition-colors">
                            <UIcon name="i-lucide-filter" class="h-3 w-3" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="bg-white rounded-xl p-3 flex items-center gap-3 transform transition-transform hover:scale-[1.02] cursor-pointer">
                            <div class="h-8 w-8 rounded-full bg-[#a3ff74]/20 flex items-center justify-center text-[#4da81b]">
                                <UIcon name="i-lucide-target" class="h-4 w-4" />
                            </div>
                            <div class="flex-1">
                                <p class="text-xs font-bold text-black">Acquisition</p>
                                <p class="text-[9px] text-black/50">12 active sets</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-bold text-black">$1,421.34</p>
                            </div>
                        </div>
                        <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 transform transition-transform hover:scale-[1.02] cursor-pointer">
                            <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <UIcon name="i-lucide-users" class="h-4 w-4" />
                            </div>
                            <div class="flex-1">
                                <p class="text-xs font-bold text-white">Retargeting</p>
                                <p class="text-[9px] text-white/50">4 active sets</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-bold text-white">$24.05</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
