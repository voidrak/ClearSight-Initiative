<script setup>
import HeroSection from '@/components/HomePage/HeroSection.vue'
import StatSection from '@/components/HomePage/StatSection.vue'
import AboutUsSection from '@/components/HomePage/AboutUsSection.vue'
import TestimonialSection from '@/components/HomePage/TestimonialSection.vue'
import EventsSection from '@/components/HomePage/EventsSection.vue'
import InvolvedSection from '@/components/HomePage/InvolvedSection.vue'
import { useSeo } from '@/composables/useSeo'
import { useSchema } from '@/composables/useSchema'
import { onMounted } from 'vue'

// Configure SEO for Home page with Open Graph and Twitter Cards (OVERRIDES route meta)
useSeo({
  title: 'Home',
  description:
    'ClearSight Initiative is a nonprofit organization committed to providing accessible vision care and promoting eye health awareness in underserved communities worldwide.',
  keywords: 'vision care, eye health, nonprofit, community health, eye care services, ClearSight',
  // Open Graph tags for social media sharing
  ogTitle: 'ClearSight Initiative - Transforming Lives Through Vision Care',
  ogDescription:
    'Join us in bringing sight, dignity, and opportunity to underserved communities across Ethiopia. Together, we can restore vision and change lives.',
  ogImage: '/OurSolutionImage.avif', // Hero image for social sharing
  // Twitter Card customization
  twitterCard: 'summary_large_image',
  twitterTitle: 'ClearSight Initiative - Vision Care for All',
  twitterDescription:
    'Nonprofit organization providing accessible vision care and eye health awareness in underserved communities.',
  twitterImage: '/whyVisionImage.avif', // Alternative image for Twitter
  // canonical URL is auto-generated from route path
})

// Add Organization schema for nonprofit SEO
useSchema({
  type: 'organization',
  data: {
    // Uses defaults from organizationSchema, can override specific fields here
    // Example override:
    // name: 'ClearSight Initiative - Custom Name',
  },
})

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
