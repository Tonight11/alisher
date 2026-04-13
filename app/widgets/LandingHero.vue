<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="pt-10 sm:pt-14 lg:pt-20">
    <UContainer>
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p class="reveal mb-4 text-sm font-medium tracking-wide text-slate-500">
            {{ t('hero.kicker') }}
          </p>

          <h1 class="reveal reveal-delay-1 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
            {{ t('hero.title') }}
          </h1>

          <p class="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {{ t('hero.subtitle') }}
          </p>

          <div class="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <UButton
              to="#about"
              color="neutral"
              variant="solid"
              size="xl"
            >
              {{ t('hero.cta.primary') }}
            </UButton>

            <UButton
              to="#contact"
              color="neutral"
              variant="outline"
              size="xl"
            >
              {{ t('hero.cta.secondary') }}
            </UButton>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[33rem] reveal reveal-delay-2">
          <div class="hero-circle">
            <div class="hero-orbit hero-orbit-1">
              <span class="orbit-marker orbit-marker-1" />
            </div>
            <div class="hero-orbit hero-orbit-2">
              <span class="orbit-marker orbit-marker-2" />
            </div>
            <div class="hero-core">
              <UIcon name="i-lucide-rocket" class="h-20 w-20 text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.hero-circle {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 9999px;
  border: 1px solid #d4d4d8;
  background: radial-gradient(circle at 30% 20%, #fff 0%, #f2f2f2 45%, #e5e5e5 100%);
  box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.08), 0 24px 80px rgba(15, 23, 42, 0.12);
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
}

.hero-orbit {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(82, 82, 91, 0.22);
  animation: orbit-spin 28s linear infinite;
}

.hero-orbit-1 {
  inset: 9%;
}

.hero-orbit-2 {
  inset: 21%;
  animation-direction: reverse;
  animation-duration: 34s;
}

.orbit-marker {
  position: absolute;
  top: -0.28rem;
  left: calc(50% - 0.28rem);
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 9999px;
  background: #111827;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.75);
}

.orbit-marker-2 {
  width: 0.42rem;
  height: 0.42rem;
  left: calc(50% - 0.21rem);
  background: #374151;
}

.hero-core {
  position: absolute;
  inset: 35%;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  background: linear-gradient(150deg, #fff, #e8e8e8);
  box-shadow: inset 0 8px 20px rgba(0, 0, 0, 0.15);
}

.hero-dot {
  position: absolute;
  border-radius: 9999px;
  background: linear-gradient(145deg, #a1a1aa, #52525b);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
}

.hero-dot-1 {
  top: 18%;
  left: 20%;
  width: 0.95rem;
  height: 0.95rem;
}

.hero-dot-2 {
  right: 17%;
  bottom: 23%;
  width: 1.2rem;
  height: 1.2rem;
}

.hero-dot-3 {
  right: 29%;
  top: 14%;
  width: 0.75rem;
  height: 0.75rem;
}

@media (max-width: 1024px) {
  .hero-circle {
    max-width: 24rem;
    margin-inline: auto;
  }
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
