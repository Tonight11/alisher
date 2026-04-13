<script setup lang="ts">
const { t, locale, setLocale } = useI18n()

const mobileMenuOpen = ref(false)

const navItems = computed(() => [
  { key: 'about', to: '#about' },
  { key: 'advantages', to: '#advantages' },
  { key: 'specs', to: '#specs' },
  { key: 'applications', to: '#applications' },
  { key: 'technology', to: '#technology' },
  { key: 'contact', to: '#contact' }
])

async function switchLocale(code: 'en' | 'zh') {
  if (locale.value === code) return
  await setLocale(code)
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-default/95 backdrop-blur-xl">
    <UContainer class="py-5">
      <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-default/70 shadow-[0_2px_20px_rgba(15,23,42,0.04)]">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-xl font-semibold tracking-tight text-highlighted"
          :aria-label="t('header.logoAlt')"
          @click="closeMobileMenu"
        >
          Alisher
        </NuxtLink>

        <nav class="hidden items-center justify-center gap-1 lg:flex">
          <UButton
            v-for="item in navItems"
            :key="item.key"
            :to="item.to"
            variant="ghost"
            color="neutral"
            size="sm"
            class="font-medium text-toned"
          >
            {{ t(`header.nav.${item.key}`) }}
          </UButton>
        </nav>

        <div class="hidden items-center gap-2 lg:flex">
          <div class="inline-flex items-center rounded-full border border-default/80 bg-muted/40 p-1">
            <UButton
              size="xs"
              color="neutral"
              :variant="locale === 'en' ? 'solid' : 'ghost'"
              @click="switchLocale('en')"
            >
              {{ t('header.lang.en') }}
            </UButton>
            <UButton
              size="xs"
              color="neutral"
              :variant="locale === 'zh' ? 'solid' : 'ghost'"
              @click="switchLocale('zh')"
            >
              {{ t('header.lang.zh') }}
            </UButton>
          </div>

          <UButton
            to="#about"
            color="neutral"
            variant="ghost"
            size="sm"
          >
            {{ t('hero.cta.primary') }}
          </UButton>

          <UButton
            to="#contact"
            color="neutral"
            variant="solid"
            size="sm"
          >
            {{ t('header.cta') }}
          </UButton>
        </div>

        <div class="flex items-center justify-end gap-2 lg:hidden">
          <UButton
            size="xs"
            color="neutral"
            variant="ghost"
            :disabled="locale === 'en'"
            @click="switchLocale('en')"
          >
            {{ t('header.lang.en') }}
          </UButton>
          <UButton
            size="xs"
            color="neutral"
            variant="ghost"
            :disabled="locale === 'zh'"
            @click="switchLocale('zh')"
          >
            {{ t('header.lang.zh') }}
          </UButton>

          <UButton
            color="neutral"
            variant="ghost"
            :icon="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            :aria-label="mobileMenuOpen ? t('header.mobile.close') : t('header.mobile.open')"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>

      <div
        v-if="mobileMenuOpen"
        class="mt-3 space-y-2 rounded-2xl border border-default/70 bg-default px-3 py-3 shadow-sm lg:hidden"
      >
        <UButton
          v-for="item in navItems"
          :key="`mobile-${item.key}`"
          :to="item.to"
          color="neutral"
          variant="ghost"
          block
          class="justify-start"
          @click="closeMobileMenu"
        >
          {{ t(`header.nav.${item.key}`) }}
        </UButton>

        <USeparator />

        <UButton
          to="#contact"
          color="neutral"
          variant="solid"
          block
          @click="closeMobileMenu"
        >
          {{ t('header.cta') }}
        </UButton>
      </div>
    </UContainer>
  </header>
</template>
