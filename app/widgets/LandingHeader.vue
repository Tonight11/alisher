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
  <header class="sticky top-0 z-50 pt-4 pb-2">
    <UContainer>
      <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200 px-6 py-4 shadow-sm">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-2xl font-extrabold tracking-tight text-neutral-950"
          :aria-label="t('header.logoAlt')"
          @click="closeMobileMenu"
        >
          Alisher
        </NuxtLink>

        <nav class="hidden items-center justify-center gap-2 lg:flex">
          <UButton
            v-for="item in navItems"
            :key="item.key"
            :to="item.to"
            variant="ghost"
            color="neutral"
            size="sm"
            class="font-bold text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
          >
            {{ t(`header.nav.${item.key}`) }}
          </UButton>
        </nav>

        <div class="hidden items-center gap-4 lg:flex">
          <div class="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-50 p-1">
            <UButton
              size="xs"
              color="neutral"
              :variant="locale === 'en' ? 'solid' : 'ghost'"
              :class="locale === 'en' ? 'bg-white shadow-sm font-bold text-neutral-900' : 'text-neutral-500 font-medium'"
              @click="switchLocale('en')"
            >
              {{ t('header.lang.en') }}
            </UButton>
            <UButton
              size="xs"
              color="neutral"
              :variant="locale === 'zh' ? 'solid' : 'ghost'"
              :class="locale === 'zh' ? 'bg-white shadow-sm font-bold text-neutral-900' : 'text-neutral-500 font-medium'"
              @click="switchLocale('zh')"
            >
              {{ t('header.lang.zh') }}
            </UButton>
          </div>

          <div class="h-6 w-px bg-neutral-200"></div>

          <UButton
            to="#contact"
            variant="solid"
            size="md"
            class="bg-[#0b3b24] text-white hover:bg-[#082a1a] font-bold rounded-lg px-5 shadow-md shadow-green-900/10"
          >
            {{ t('header.cta') }}
          </UButton>
        </div>

        <div class="flex items-center justify-end gap-2 lg:hidden">
          <UButton
            size="xs"
            color="neutral"
            variant="ghost"
            class="font-bold text-neutral-800"
            :disabled="locale === 'en'"
            @click="switchLocale('en')"
          >
            {{ t('header.lang.en') }}
          </UButton>
          <UButton
            size="xs"
            color="neutral"
            variant="ghost"
            class="font-bold text-neutral-800"
            :disabled="locale === 'zh'"
            @click="switchLocale('zh')"
          >
            {{ t('header.lang.zh') }}
          </UButton>

          <UButton
            color="neutral"
            variant="ghost"
            class="text-neutral-900 hover:bg-neutral-100"
            :icon="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            :aria-label="mobileMenuOpen ? t('header.mobile.close') : t('header.mobile.open')"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>

      <div
        v-if="mobileMenuOpen"
        class="mt-3 space-y-2 rounded-2xl border border-neutral-200 bg-white px-4 py-4 shadow-lg lg:hidden"
      >
        <UButton
          v-for="item in navItems"
          :key="`mobile-${item.key}`"
          :to="item.to"
          color="neutral"
          variant="ghost"
          block
          class="justify-start font-bold text-neutral-700 hover:text-neutral-950"
          @click="closeMobileMenu"
        >
          {{ t(`header.nav.${item.key}`) }}
        </UButton>

        <USeparator class="my-4" />

        <UButton
          to="#contact"
          variant="solid"
          block
          class="bg-[#0b3b24] text-white hover:bg-[#082a1a] font-bold py-2"
          @click="closeMobileMenu"
        >
          {{ t('header.cta') }}
        </UButton>
      </div>
    </UContainer>
  </header>
</template>
