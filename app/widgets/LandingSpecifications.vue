<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="specs" class="scroll-mt-32 pt-24 pb-20 reveal bg-white border-y border-neutral-100">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="mb-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600">
          <UIcon name="i-lucide-settings-2" class="h-3.5 w-3.5" />
          <span class="uppercase tracking-wider">Parameters</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-neutral-950">{{ t('specs.title') }}</h2>
        <p class="mt-5 text-lg text-neutral-600">{{ t('specs.description') }}</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="i in [0,1,2,3]" :key="i" class="group rounded-2xl border border-neutral-200 bg-white p-8 text-center transition-all hover:border-[#0b3b24] hover:shadow-lg hover:shadow-green-900/5 hover:-translate-y-1">
          <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 group-hover:bg-[#0b3b24] group-hover:text-white transition-colors">
             <UIcon v-if="i === 0" name="i-lucide-box" class="h-5 w-5" />
             <UIcon v-else-if="i === 1" name="i-lucide-languages" class="h-5 w-5" />
             <UIcon v-else-if="i === 2" name="i-lucide-layers" class="h-5 w-5" />
             <UIcon v-else name="i-lucide-layout" class="h-5 w-5" />
          </div>
          <p class="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">{{ t(`specs.items.${i}.label`) }}</p>
          <h3 class="text-xl font-bold text-neutral-900">{{ t(`specs.items.${i}.value`) }}</h3>
        </div>
      </div>
    </UContainer>
  </section>
</template>

