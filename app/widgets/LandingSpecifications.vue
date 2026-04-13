<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="specs" class="scroll-mt-32 pt-24 reveal">
    <UContainer>
      <div class="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <h2 class="text-4xl font-bold text-slate-900">{{ t('specs.title') }}</h2>
        <p class="mt-3 max-w-3xl text-lg text-slate-600">{{ t('specs.description') }}</p>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div class="spec-item hover-lift">
            <p>{{ t('specs.items.0.label') }}</p>
            <h3>{{ t('specs.items.0.value') }}</h3>
          </div>
          <div class="spec-item hover-lift">
            <p>{{ t('specs.items.1.label') }}</p>
            <h3>{{ t('specs.items.1.value') }}</h3>
          </div>
          <div class="spec-item hover-lift">
            <p>{{ t('specs.items.2.label') }}</p>
            <h3>{{ t('specs.items.2.value') }}</h3>
          </div>
          <div class="spec-item hover-lift">
            <p>{{ t('specs.items.3.label') }}</p>
            <h3>{{ t('specs.items.3.value') }}</h3>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.spec-item {
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  padding: 1.1rem 1.2rem;
}

.spec-item p {
  color: #64748b;
  font-size: 0.9rem;
}

.spec-item h3 {
  margin-top: 0.35rem;
  color: #0f172a;
  font-size: 1.45rem;
  font-weight: 650;
}
</style>

