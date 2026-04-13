<script setup lang="ts">
import aboutImage1 from '../assets/img/5.jpg'
import aboutImage2 from '../assets/img/1.jpg'
import aboutImage3 from '../assets/img/2.jpg'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="scroll-mt-32 pt-24 reveal">
    <UContainer>
      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <p class="text-sm font-medium uppercase tracking-wide text-slate-600">{{ t('about.kicker') }}</p>
          <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-900">{{ t('about.title') }}</h2>
          <p class="mt-4 text-lg leading-relaxed text-slate-600">{{ t('about.description') }}</p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover-lift">
              <p class="text-sm text-slate-500">{{ t('about.stats.0.label') }}</p>
              <p class="mt-1 text-2xl font-semibold text-slate-900">{{ t('about.stats.0.value') }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover-lift">
              <p class="text-sm text-slate-500">{{ t('about.stats.1.label') }}</p>
              <p class="mt-1 text-2xl font-semibold text-slate-900">{{ t('about.stats.1.value') }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p class="text-sm text-slate-400">{{ t('about.side.kicker') }}</p>
          <h3 class="mt-3 text-3xl font-semibold leading-tight">{{ t('about.side.title') }}</h3>
          <p class="mt-4 text-slate-300">{{ t('about.side.description') }}</p>

          <div class="mt-8 grid grid-cols-3 gap-3">
            <img :src="aboutImage1" alt="About visual 1" class="about-thumb">
            <img :src="aboutImage2" alt="About visual 2" class="about-thumb">
            <img :src="aboutImage3" alt="About visual 3" class="about-thumb">
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.about-thumb {
  width: 100%;
  height: 4rem;
  border-radius: 0.75rem;
  object-fit: cover;
}
</style>

