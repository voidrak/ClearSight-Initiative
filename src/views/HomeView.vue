<script setup>
import HeroSection from '@/components/HomePage/HeroSection.vue'
import StatSection from '@/components/HomePage/StatSection.vue'
import AboutUsSection from '@/components/HomePage/AboutUsSection.vue'
import TestimonialSection from '@/components/HomePage/TestimonialSection.vue'
import EventsSection from '@/components/HomePage/EventsSection.vue'
import InvolvedSection from '@/components/HomePage/InvolvedSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <main>
    <HeroSection />
    <StatSection />
    <AboutUsSection />
    <TestimonialSection />
    <EventsSection />
    <InvolvedSection />
  </main>
</template>
