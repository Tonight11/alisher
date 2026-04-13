<script setup lang="ts">
const { t } = useI18n()

const stack = [
  { icon: 'i-simple-icons-nuxtdotjs', key: 'nuxt' },
  { icon: 'i-simple-icons-vuedotjs', key: 'vue' },
  { icon: 'i-simple-icons-tailwindcss', key: 'tailwind' },
  { icon: 'i-simple-icons-typescript', key: 'typescript' },
  { icon: 'i-simple-icons-icloud', key: 'cloud' },
  { icon: 'i-lucide-search', key: 'seo' }
]

const looped = [...stack, ...stack]
</script>

<template>
  <section id="technology" class="scroll-mt-32 pt-24 reveal">
    <UContainer>
      <div class="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <h2 class="text-4xl font-bold text-slate-900">{{ t('technology.title') }}</h2>
        <p class="mt-3 max-w-3xl text-lg text-slate-600">{{ t('technology.description') }}</p>

        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in stack" :key="item.key" class="tech-chip hover-lift">
            <UIcon :name="item.icon" class="h-5 w-5 text-slate-800" />
            <span>{{ t(`technology.stack.${item.key}`) }}</span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.tech-chip {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.8rem;
  background: #f8fafc;
  padding: 0.85rem 1rem;
  color: #0f172a;
  font-weight: 500;
}
</style>
