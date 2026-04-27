<script setup lang="ts">
import aboutImage1 from '../assets/img/5.jpg'
import aboutImage2 from '../assets/img/1.jpg'
import aboutImage3 from '../assets/img/2.jpg'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="scroll-mt-32 pt-24 pb-20 reveal bg-[#fafafa]">
    <UContainer>
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <!-- Left Side -->
        <div class="rounded-3xl border border-neutral-200 bg-white p-10 lg:p-14 shadow-sm">
          <div class="mb-5 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600">
            <UIcon name="i-lucide-info" class="h-3.5 w-3.5" />
            <span class="uppercase tracking-wider">{{ t('about.kicker') }}</span>
          </div>
          <h2 class="text-4xl font-extrabold tracking-tight text-neutral-950">{{ t('about.title') }}</h2>
          <p class="mt-5 text-lg leading-relaxed text-neutral-600">{{ t('about.description') }}</p>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-neutral-100 bg-[#fafafa] p-6 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-md">
              <p class="text-sm font-medium text-neutral-500">{{ t('about.stats.0.label') }}</p>
              <p class="mt-2 text-4xl font-extrabold text-neutral-900">{{ t('about.stats.0.value') }}</p>
            </div>
            <div class="rounded-2xl border border-neutral-100 bg-[#fafafa] p-6 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-md">
              <p class="text-sm font-medium text-neutral-500">{{ t('about.stats.1.label') }}</p>
              <p class="mt-2 text-4xl font-extrabold text-neutral-900">{{ t('about.stats.1.value') }}</p>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="rounded-3xl bg-[#0b3b24] p-10 lg:p-12 text-white shadow-xl shadow-green-950/10">
          <p class="text-sm font-bold tracking-widest text-green-200 uppercase">{{ t('about.side.kicker') }}</p>
          <h3 class="mt-4 text-3xl font-bold leading-tight">{{ t('about.side.title') }}</h3>
          <p class="mt-5 text-lg text-green-50/80 leading-relaxed">{{ t('about.side.description') }}</p>

          <div class="mt-10 grid grid-cols-3 gap-4">
            <img :src="aboutImage1" alt="About visual 1" class="h-20 w-full rounded-2xl object-cover border-2 border-white/10 hover:border-white/30 transition-colors">
            <img :src="aboutImage2" alt="About visual 2" class="h-20 w-full rounded-2xl object-cover border-2 border-white/10 hover:border-white/30 transition-colors">
            <img :src="aboutImage3" alt="About visual 3" class="h-20 w-full rounded-2xl object-cover border-2 border-white/10 hover:border-white/30 transition-colors">
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

