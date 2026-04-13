<script setup lang="ts">
import LandingAbout from '../widgets/LandingAbout.vue'
import LandingAdvantages from '../widgets/LandingAdvantages.vue'
import LandingApplications from '../widgets/LandingApplications.vue'
import LandingContact from '../widgets/LandingContact.vue'
import LandingFooter from '../widgets/LandingFooter.vue'
import LandingHero from '../widgets/LandingHero.vue'
import LandingSpecifications from '../widgets/LandingSpecifications.vue'
import LandingTechnology from '../widgets/LandingTechnology.vue'
</script>

<template>
  <div>
    <LandingHero />
    <LandingAbout />
    <LandingAdvantages />
    <LandingSpecifications />
    <LandingApplications />
    <LandingTechnology />
    <LandingContact />
    <LandingFooter />
  </div>
</template>
