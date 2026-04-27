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
  <section id="applications" class="scroll-mt-32 pt-24 pb-20 reveal bg-white">
    <UContainer>
      <p class="text-sm font-bold tracking-widest text-[#0b3b24] uppercase mb-3">{{ t('applications.kicker') }}</p>
      <h2 class="max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950">{{ t('applications.title') }}</h2>
      <p class="mt-5 max-w-3xl text-xl text-neutral-600">{{ t('applications.description') }}</p>

      <div class="mt-10 flex flex-wrap items-center justify-between gap-6 border-b border-neutral-200 pb-6">
        <div class="flex flex-wrap items-center gap-3">
          <UBadge color="neutral" variant="solid" class="bg-neutral-900 text-white rounded-full px-4 py-1.5 text-sm">{{ t('applications.filters.all') }}</UBadge>
          <UBadge color="neutral" variant="soft" class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">{{ t('applications.filters.design') }}</UBadge>
          <UBadge color="neutral" variant="soft" class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">{{ t('applications.filters.product') }}</UBadge>
          <UBadge color="neutral" variant="soft" class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">{{ t('applications.filters.growth') }}</UBadge>
        </div>

        <div class="flex items-center gap-3">
          <UButton color="neutral" variant="outline" icon="i-lucide-arrow-left" class="rounded-full p-3 hover:bg-neutral-100" aria-label="Previous" @click="slide(-1)" />
          <UButton color="neutral" variant="outline" icon="i-lucide-arrow-right" class="rounded-full p-3 hover:bg-neutral-100" aria-label="Next" @click="slide(1)" />
        </div>
      </div>

      <div
        ref="slider"
        class="no-scrollbar mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6"
      >
        <article
          v-for="card in cards"
          :key="card.key"
          class="group flex flex-col min-w-[85%] snap-center md:min-w-[46%] lg:min-w-[32%] cursor-pointer overflow-hidden rounded-[2rem] border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1"
        >
          <div class="relative overflow-hidden p-2">
             <img
               :src="card.image"
               :alt="t(`applications.items.${card.key}.title`)"
               class="h-56 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105"
               loading="lazy"
             >
             <div class="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-[#0b3b24] shadow-sm">
                <UIcon name="i-lucide-bookmark" class="mr-1.5 h-3.5 w-3.5" />
                {{ t(`applications.items.${card.key}.meta`).split('·')[1]?.trim() || 'Use Case' }}
             </div>
          </div>
          <div class="flex flex-1 flex-col p-8 pt-4">
             <p class="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">{{ t(`applications.items.${card.key}.meta`).split('·')[0]?.trim() }}</p>
             <h3 class="text-2xl font-bold text-neutral-950 leading-[1.3] group-hover:text-[#0b3b24] transition-colors line-clamp-2">{{ t(`applications.items.${card.key}.title`) }}</h3>
             <p class="mt-3 text-neutral-600 leading-relaxed flex-1">{{ t(`applications.items.${card.key}.description`) }}</p>
             
             <div class="mt-6 flex items-center text-sm font-bold text-[#0b3b24] group-hover:text-[#082a1a]">
                {{ t('applications.readArticle') }}
                <UIcon name="i-lucide-arrow-right" class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
             </div>
          </div>
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
</style>
