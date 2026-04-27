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

const looped = [...stack, ...stack, ...stack, ...stack]
</script>

<template>
  <section id="technology" class="scroll-mt-32 pt-24 pb-24 bg-[#fafafa] overflow-hidden">
    <UContainer class="reveal">
      <div class="rounded-[2.5rem] border border-neutral-200 bg-white py-16 text-center shadow-lg shadow-neutral-200/50 relative overflow-hidden">
        
        <div class="px-10 lg:px-16 mb-12">
            <div class="mb-5 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600">
               <UIcon name="i-lucide-cpu" class="h-3.5 w-3.5" />
               <span class="uppercase tracking-wider">{{ t('technology.poweredBy') }}</span>
            </div>
            <h2 class="text-4xl font-extrabold text-neutral-950">{{ t('technology.title') }}</h2>
            <p class="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">{{ t('technology.description') }}</p>
        </div>

        <div class="relative w-full flex overflow-hidden mask-edges py-2">
          <div class="flex marquee-track gap-4 shrink-0 px-2">
            <div v-for="(item, idx) in looped" :key="'row1-'+item.key+idx" class="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-[#fafafa] px-6 py-4 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-[#0b3b24]/30 transition-all duration-300 cursor-default min-w-[max-content] group">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 group-hover:border-[#0b3b24] group-hover:bg-[#0b3b24] transition-colors">
                 <UIcon :name="item.icon" class="h-5 w-5 text-neutral-800 group-hover:text-white transition-colors" />
              </div>
              <span class="font-bold text-neutral-900 text-lg tracking-tight">{{ t(`technology.stack.${item.key}`) }}</span>
            </div>
          </div>
        </div>
        
        <div class="relative w-full flex overflow-hidden mask-edges py-2 mt-4">
          <div class="flex marquee-track-reverse gap-4 shrink-0 px-2">
            <div v-for="(item, idx) in [...looped].reverse()" :key="'row2-'+item.key+idx" class="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-[#fafafa] px-6 py-4 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-[#0b3b24]/30 transition-all duration-300 cursor-default min-w-[max-content] group">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-neutral-200 group-hover:border-[#0b3b24] group-hover:bg-[#0b3b24] transition-colors">
                 <UIcon :name="item.icon" class="h-5 w-5 text-neutral-800 group-hover:text-white transition-colors" />
              </div>
              <span class="font-bold text-neutral-900 text-lg tracking-tight">{{ t(`technology.stack.${item.key}`) }}</span>
            </div>
          </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.mask-edges {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
.marquee-track-reverse {
  width: max-content;
  animation: marquee 35s linear infinite reverse;
}
</style>
