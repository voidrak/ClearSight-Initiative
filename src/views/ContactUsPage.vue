<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <div class="min-h-screen w-full relative flex items-center justify-center py-8 px-2">
    <!-- Radial Gradient Background from Bottom -->
    <div
      class="absolute inset-0 z-0"
      style="background: radial-gradient(125% 125% at 50% 90%, #fff 40%, #ffc60b 100%)"
    ></div>
    <!-- Contact Card Content -->
    <div
      class="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 md:p-16"
    >
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-accentBlue mb-2">Contact Us</h1>
          <p class="text-gray-600 mb-8 break-words">
            Reach out to us using the information below. We look forward to connecting with you!
          </p>
        </div>
        <div class="flex items-start gap-4">
          <svg
            class="w-7 h-7 text-accentGold flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4"
            ></path>
          </svg>
          <div class="break-words min-w-0 flex-1">
            <span class="font-semibold text-accentBlue">Email:</span>
            <a
              href="mailto:correctingagingeyes@clearsightInitiative.org"
              class="ml-1 hover:underline text-blue-600 break-all"
              >correctingagingeyes@clearsightInitiative.org
            </a>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <svg
            class="w-7 h-7 text-accentGold flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          <div class="min-w-0 flex-1">
            <span class="font-semibold text-accentBlue">Phone:</span>
            <a href="tel:+251911037207" class="ml-1 hover:underline">+251 911 037 207</a>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <svg
            class="w-7 h-7 text-accentGold flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1117.657 16.657z"
            ></path>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
          <div class="break-words min-w-0 flex-1">
            <span class="font-semibold text-accentBlue">Address:</span>
            Ayder Sub-city, Ethiovitian Street, Mekelle, Ethiopia
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-accentBlue mb-4">Find Us</h2>
        <div class="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60295.69994258621!2d39.43741264595744!3d13.497738533966443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAyder%20Sub-city%2C%20Ethiovitian%20Street%2C%20Mekelle%2C%20Ethiopia!5e1!3m2!1sen!2set!4v1765573948910!5m2!1sen!2set"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
