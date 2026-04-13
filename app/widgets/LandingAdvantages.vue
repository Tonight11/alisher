<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="advantages" class="scroll-mt-32 pt-24 reveal">
    <UContainer>
      <h2 class="text-5xl font-bold tracking-tight text-slate-900">{{ t('advantages.title') }}</h2>
      <p class="mt-3 max-w-3xl text-xl text-slate-600">{{ t('advantages.description') }}</p>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.0.title') }}</h3>
          <p>{{ t('advantages.items.0.description') }}</p>
        </div>
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.1.title') }}</h3>
          <p>{{ t('advantages.items.1.description') }}</p>
        </div>
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.2.title') }}</h3>
          <p>{{ t('advantages.items.2.description') }}</p>
        </div>
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.3.title') }}</h3>
          <p>{{ t('advantages.items.3.description') }}</p>
        </div>
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.4.title') }}</h3>
          <p>{{ t('advantages.items.4.description') }}</p>
        </div>
        <div class="adv-card hover-lift">
          <h3>{{ t('advantages.items.5.title') }}</h3>
          <p>{{ t('advantages.items.5.description') }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.adv-card {
  border: 1px solid rgba(51, 65, 85, 0.35);
  background: linear-gradient(160deg, #0f172a 0%, #111827 100%);
  border-radius: 0.9rem;
  padding: 1.6rem;
}

.adv-card h3 {
  font-size: 1.55rem;
  line-height: 1.2;
  color: #f8fafc;
  font-weight: 600;
}

.adv-card p {
  margin-top: 0.75rem;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.6;
}
</style>

