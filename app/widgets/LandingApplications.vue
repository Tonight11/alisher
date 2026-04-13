<script setup lang="ts">
import appImage1 from '../assets/img/1.jpg'
import appImage2 from '../assets/img/2.jpg'
import appImage3 from '../assets/img/3.jpg'

const { t } = useI18n()

const slider = ref<HTMLElement | null>(null)
const cards = [
  { key: 0, image: appImage1 },
  { key: 1, image: appImage2 },
  { key: 2, image: appImage3 }
]

function slide(direction: 1 | -1) {
  if (!slider.value) return
  const width = slider.value.clientWidth
  slider.value.scrollBy({ left: direction * Math.max(width * 0.86, 280), behavior: 'smooth' })
}
</script>

<template>
  <section id="applications" class="scroll-mt-32 pt-24 reveal">
    <UContainer>
      <p class="text-sm font-medium text-slate-500">{{ t('applications.kicker') }}</p>
      <h2 class="mt-3 max-w-4xl text-5xl font-bold tracking-tight text-slate-900">{{ t('applications.title') }}</h2>
      <p class="mt-3 max-w-3xl text-xl text-slate-600">{{ t('applications.description') }}</p>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-3">
          <UBadge color="neutral" variant="soft">{{ t('applications.filters.all') }}</UBadge>
          <UBadge color="neutral" variant="subtle">{{ t('applications.filters.design') }}</UBadge>
          <UBadge color="neutral" variant="subtle">{{ t('applications.filters.product') }}</UBadge>
          <UBadge color="neutral" variant="subtle">{{ t('applications.filters.growth') }}</UBadge>
        </div>

        <div class="flex items-center gap-2">
          <UButton color="neutral" variant="outline" icon="i-lucide-arrow-left" aria-label="Previous" @click="slide(-1)" />
          <UButton color="neutral" variant="outline" icon="i-lucide-arrow-right" aria-label="Next" @click="slide(1)" />
        </div>
      </div>

      <div
        ref="slider"
        class="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        <article
          v-for="card in cards"
          :key="card.key"
          class="blog-card hover-lift min-w-[85%] snap-center md:min-w-[46%] lg:min-w-[32%]"
        >
          <img
            :src="card.image"
            :alt="t(`applications.items.${card.key}.title`)"
            class="blog-image"
            loading="lazy"
          >
          <p class="blog-meta">{{ t(`applications.items.${card.key}.meta`) }}</p>
          <h3>{{ t(`applications.items.${card.key}.title`) }}</h3>
          <p class="blog-copy">{{ t(`applications.items.${card.key}.description`) }}</p>
        </article>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.blog-card {
  border: 1px solid #d4d4d8;
  border-radius: 1rem;
  background: #f5f5f5;
  padding: 1rem;
}

.blog-image {
  width: 100%;
  border-radius: 0.75rem;
  height: 11rem;
  object-fit: cover;
}

.blog-meta {
  margin-top: 1rem;
  color: #52525b;
  font-size: 0.9rem;
}

.blog-card h3 {
  margin-top: 0.45rem;
  color: #18181b;
  font-size: 1.45rem;
  line-height: 1.25;
  font-weight: 650;
}

.blog-copy {
  margin-top: 0.6rem;
  color: #52525b;
  font-size: 1.02rem;
  line-height: 1.6;
}
</style>
