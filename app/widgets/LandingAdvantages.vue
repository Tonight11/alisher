<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="advantages" class="scroll-mt-32 pt-24 pb-20 reveal bg-white">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="mb-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600">
          <UIcon name="i-lucide-sparkles" class="h-3.5 w-3.5" />
          <span class="uppercase tracking-wider">Why choose us</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950">{{ t('advantages.title') }}</h2>
        <p class="mt-4 text-lg text-neutral-600">{{ t('advantages.description') }}</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="i in [0,1,2,3,4,5]" :key="i" class="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
          <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b3b24]/5 text-[#0b3b24] group-hover:bg-[#0b3b24] group-hover:text-white transition-colors duration-300">
            <UIcon v-if="i === 0" name="i-lucide-zap" class="h-6 w-6" />
            <UIcon v-else-if="i === 1" name="i-lucide-search" class="h-6 w-6" />
            <UIcon v-else-if="i === 2" name="i-lucide-blocks" class="h-6 w-6" />
            <UIcon v-else-if="i === 3" name="i-lucide-globe" class="h-6 w-6" />
            <UIcon v-else-if="i === 4" name="i-lucide-smartphone" class="h-6 w-6" />
            <UIcon v-else name="i-lucide-magnet" class="h-6 w-6" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-neutral-900">{{ t(`advantages.items.${i}.title`) }}</h3>
          <p class="text-neutral-600 leading-relaxed">{{ t(`advantages.items.${i}.description`) }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

