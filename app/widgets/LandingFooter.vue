<script setup lang="ts">
const { t } = useI18n()

const logos = ['Dockzone', 'Neobase', 'Synapse', 'Nuxtship']
const looped = [...logos, ...logos]
</script>

<template>
  <footer class="pt-16 reveal">
    <div class="bg-black text-zinc-200">
      <UContainer class="py-12">
        <div class="flex flex-wrap items-center justify-between gap-6 text-sm">
          <ul class="flex flex-wrap items-center gap-6">
            <li>{{ t('footer.product.about') }}</li>
            <li>{{ t('footer.product.advantages') }}</li>
            <li>{{ t('footer.product.specs') }}</li>
            <li>{{ t('header.nav.contact') }}</li>
          </ul>
          <ul class="flex items-center gap-6">
            <li>Instagram</li>
            <li>X / Twitter</li>
          </ul>
        </div>

        <div class="py-16 text-center">
          <p class="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Alisher
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
          <p>{{ t('footer.contact.email') }}</p>
          <p>{{ t('footer.copy') }}</p>
        </div>
      </UContainer>
    </div>
  </footer>
</template>
