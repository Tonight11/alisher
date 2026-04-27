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
  <section id="contact" class="scroll-mt-32 pb-24 pt-24 reveal bg-white">
    <UContainer>
      <div class="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-[#fafafa] p-3 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div class="grid gap-8 lg:grid-cols-2 items-center">
          <!-- Image Section -->
          <div class="relative h-64 lg:h-full lg:min-h-[400px] overflow-hidden rounded-[2rem]">
             <img :src="contactVisual" alt="Contact visual" class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy">
             <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <!-- Text Section -->
          <div class="flex flex-col justify-center p-6 lg:p-12 lg:pl-6">
            <div class="mb-6 inline-flex items-center self-start gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b3b24] shadow-sm border border-neutral-100">
               <UIcon name="i-lucide-mail" class="h-4 w-4" /> Connect with us
            </div>
            <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1]">{{ t('contact.title') }}</h2>
            <p class="mt-6 text-lg text-neutral-600 leading-relaxed">{{ t('contact.description') }}</p>

            <div class="mt-10 flex items-center gap-4">
              <UButton size="xl" class="bg-[#0b3b24] hover:bg-[#082a1a] text-white px-8 rounded-xl shadow-lg shadow-green-900/10 font-bold transition-transform hover:-translate-y-0.5" trailing-icon="i-lucide-arrow-right" @click="isContactsOpen = true">
                {{ t('contact.cta') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UModal v-model:open="isContactsOpen" class="bg-transparent border-transparent shadow-none ring-transparent">
      <template #content>
        <div class="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl m-4 sm:m-0 border border-neutral-100">
          <!-- Modal Header -->
          <div class="mb-8">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0b3b24]/5 text-[#0b3b24]">
               <UIcon name="i-lucide-message-square" class="h-6 w-6" />
            </div>
            <h3 class="text-3xl font-extrabold text-neutral-950">{{ t('contact.modal.title') }}</h3>
            <p class="mt-3 text-neutral-600">{{ t('contact.modal.description') }}</p>
          </div>

          <!-- Modal Body (Links) -->
          <div class="grid gap-3">
            <a
              v-for="item in contactLinks"
              :key="item.key"
              :href="item.href"
              :target="item.key === 'gmail' ? undefined : '_blank'"
              :rel="item.key === 'gmail' ? undefined : 'noopener noreferrer'"
              class="group flex items-center justify-between rounded-2xl border border-neutral-100 bg-[#fafafa] p-4 transition-all duration-300 hover:border-[#0b3b24]/20 hover:bg-white hover:shadow-md"
            >
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-600 group-hover:bg-[#0b3b24] group-hover:text-white group-hover:border-[#0b3b24] transition-colors duration-300 shadow-sm">
                   <UIcon :name="item.icon" class="h-5 w-5" />
                </div>
                <span class="font-bold text-lg text-neutral-900 group-hover:text-[#0b3b24] transition-colors">{{ t(`contact.modal.${item.key}`) }}</span>
              </div>
              <UIcon name="i-lucide-arrow-up-right" class="h-5 w-5 text-neutral-400 group-hover:text-[#0b3b24] transition-colors" />
            </a>
          </div>

          <!-- Modal Footer -->
          <div class="mt-8 pt-6 border-t border-neutral-100 flex justify-end">
             <UButton color="neutral" variant="ghost" class="font-bold text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded-xl px-6" @click="isContactsOpen = false">
               {{ t('contact.modal.close') }}
             </UButton>
          </div>
        </div>
      </template>
    </UModal>
  </section>
</template>
