<script setup lang="ts">
import contactVisual from '../assets/img/4.jpg'

const { t } = useI18n()
const isContactsOpen = ref(false)

const contactLinks = computed(() => [
  {
    key: 'telegram',
    icon: 'i-simple-icons-telegram',
    href: 'https://t.me/your_username'
  },
  {
    key: 'whatsapp',
    icon: 'i-simple-icons-whatsapp',
    href: 'https://wa.me/77000000000'
  },
  {
    key: 'gmail',
    icon: 'i-lucide-mail',
    href: 'mailto:hello@gmail.com'
  }
])
</script>

<template>
  <section id="contact" class="scroll-mt-32 pb-20 pt-24 reveal">
    <UContainer>
      <div class="grid gap-4 rounded-2xl border border-zinc-300 bg-zinc-100 p-4 sm:p-6 lg:grid-cols-[1.05fr_1fr]">
        <img :src="contactVisual" alt="Contact visual" class="newsletter-visual hover-lift" loading="lazy">

        <div class="rounded-xl bg-zinc-200 p-6 sm:p-8">
          <h2 class="text-4xl font-bold tracking-tight text-zinc-900">{{ t('contact.title') }}</h2>
          <p class="mt-4 text-lg text-zinc-600">{{ t('contact.description') }}</p>

          <div class="mt-7">
            <UButton color="neutral" variant="solid" size="xl" @click="isContactsOpen = true">
              {{ t('contact.cta') }}
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>

    <UModal v-model:open="isContactsOpen">
      <template #content>
        <UCard class="mx-4 sm:mx-0">
          <template #header>
            <h3 class="text-xl font-semibold text-zinc-100">{{ t('contact.modal.title') }}</h3>
            <p class="mt-1 text-sm text-zinc-400">{{ t('contact.modal.description') }}</p>
          </template>

          <div class="grid gap-3">
            <a
              v-for="item in contactLinks"
              :key="item.key"
              :href="item.href"
              :target="item.key === 'gmail' ? undefined : '_blank'"
              :rel="item.key === 'gmail' ? undefined : 'noopener noreferrer'"
              class="flex items-center gap-3 rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 transition hover:bg-zinc-100"
            >
              <UIcon :name="item.icon" class="h-5 w-5" />
              <span class="font-medium">{{ t(`contact.modal.${item.key}`) }}</span>
            </a>
          </div>

          <template #footer>
            <div class="flex justify-end">
              <UButton color="neutral" variant="outline" @click="isContactsOpen = false">
                {{ t('contact.modal.close') }}
              </UButton>
            </div>
          </template>
        </UCard>
      </template>
    </UModal>
  </section>
</template>

<style scoped>
.newsletter-visual {
  min-height: 18rem;
  width: 100%;
  border-radius: 0.9rem;
  object-fit: cover;
}
</style>
