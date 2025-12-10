<script setup>
import { ref, onMounted } from 'vue'
import { animate, stagger, inView } from 'motion-v'

const events = ref([
  {
    id: 1,
    image: '/1.webp',
    title: 'Eye Examination & Distribution',
    description: 'Community members receiving vision tests and reading glasses',
  },
  {
    id: 2,
    image: '/2.webp',
    title: 'Reading Test Session',
    description: 'Testing reading glasses with local community members',
  },
  {
    id: 3,
    image: '/3.webp',
    title: 'Teacher Receiving Glasses',
    description: 'Educator trying on reading glasses for the first time',
  },
  {
    id: 4,
    image: '/4.webp',
    title: 'Community Consultation',
    description: 'Providing guidance on proper glasses selection',
  },
  {
    id: 5,
    image: '/5.webp',
    title: 'Document Review',
    description: 'Community member testing glasses by reading documents',
  },
  {
    id: 6,
    image: '/6.webp',
    title: 'Glasses Presentation',
    description: 'Demonstrating glasses features to attendees',
  },
  {
    id: 7,
    image: '/7.webp',
    title: 'Large Community Gathering',
    description: 'Wide turnout of teachers and community members',
  },
  {
    id: 8,
    image: '/8.webp',
    title: 'Group Distribution Session',
    description: 'Community-wide glasses distribution event',
  },
  {
    id: 9,
    image: '/9.webp',
    title: 'Reading Assessment',
    description: 'Testing vision improvement with reading materials',
  },
  {
    id: 10,
    image: '/10.webp',
    title: 'Vision Testing Session',
    description: 'Conducting comprehensive eye examinations',
  },
  {
    id: 11,
    image: '/11.webp',
    title: 'Community Member Testing',
    description: 'Individual consultation and glasses fitting',
  },
  {
    id: 12,
    image: '/12.webp',
    title: 'Final Reading Test',
    description: 'Verifying reading ability with new glasses',
  },
])

onMounted(() => {
  inView(
    '.events-masonry',
    () => {
      animate(
        '.event-card',
        {
          opacity: 1,
          y: [30, 0],
          scale: [0.95, 1],
        },
        {
          delay: stagger(0.1),
          duration: 0.6,
          easing: [0.17, 0.55, 0.55, 1],
        },
      )
    },
    {
      amount: 0.2,
    },
  )
})
</script>

<template>
  <section class="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          class="text-3xl sm:text-4xl font-bold text-accentBlue mb-4 border-x-8 border-accentGold px-4 w-fit mx-auto"
        >
          Recent Events
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Documenting our recent initiative of donating reading glasses to teachers and community
          members, bringing vision and hope to those in need.
        </p>
      </div>

      <!-- Masonry Layout -->
      <div class="events-masonry">
        <div
          v-for="event in events"
          :key="event.id"
          class="event-card opacity-0 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white mb-4"
        >
          <div class="relative overflow-hidden">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <!-- Overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-accentBlue via-accentBlue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
            >
              <h3 class="text-white font-bold text-lg mb-2">{{ event.title }}</h3>
              <p class="text-white/90 text-sm">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6">
          Want to make a difference? Support our mission to provide reading glasses to those in
          need.
        </p>
        <router-link
          to="/donation"
          class="inline-block bg-accentGold text-white font-semibold px-8 py-3 rounded-lg hover:bg-accentGold/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Donate Now
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Masonry layout using CSS columns */
.events-masonry {
  column-count: 1;
  column-gap: 1rem;
}

@media (min-width: 640px) {
  .events-masonry {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .events-masonry {
    column-count: 3;
  }
}

@media (min-width: 1280px) {
  .events-masonry {
    column-count: 4;
  }
}

.events-masonry .event-card {
  break-inside: avoid;
  page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
