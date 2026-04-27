<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="pt-16 reveal bg-[#fafafa]">
    <div class="bg-neutral-950 text-neutral-300 rounded-t-[3rem] mx-2 sm:mx-4 overflow-hidden">
      <UContainer class="py-16">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center border-b border-neutral-800 pb-12">
           <div class="max-w-md">
              <p class="text-4xl font-extrabold tracking-tight text-white mb-4">
                Alisher
              </p>
              <p class="text-neutral-400 text-lg">{{ t('footer.tagline') }}</p>
           </div>
           
           <div class="flex flex-wrap lg:justify-end gap-10 sm:gap-16">
              <div>
                 <p class="text-white font-bold mb-4 uppercase tracking-wider text-sm">{{ t('footer.productTitle') }}</p>
                 <ul class="space-y-3 font-medium text-neutral-400 hover:[&>li]:text-white [&>li]:cursor-pointer [&>li]:transition-colors">
                   <li>{{ t('footer.product.about') }}</li>
                   <li>{{ t('footer.product.advantages') }}</li>
                   <li>{{ t('footer.product.specs') }}</li>
                 </ul>
              </div>
              <div>
                 <p class="text-white font-bold mb-4 uppercase tracking-wider text-sm">{{ t('footer.contactTitle') }}</p>
                 <ul class="space-y-3 font-medium text-neutral-400 hover:[&>li]:text-white [&>li]:cursor-pointer [&>li]:transition-colors">
                   <li>{{ t('footer.contact.location') }}</li>
                   <li>{{ t('header.nav.contact') }}</li>
                 </ul>
              </div>
           </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-neutral-500 font-medium">
          <p>{{ t('footer.copy') }}</p>
          <div class="flex items-center gap-6 hover:[&>p]:text-white [&>p]:cursor-pointer [&>p]:transition-colors">
             <p>Instagram</p>
             <p>X / Twitter</p>
             <p>LinkedIn</p>
          </div>
        </div>
      </UContainer>
    </div>
  </footer>
</template>
