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
    <div class="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-16">
      <h1 class="text-3xl md:text-4xl font-bold text-accentBlue mb-2">Contact Us</h1>
      <p class="text-gray-600 mb-8">
        Reach out to us using the information below. We look forward to connecting with you!
      </p>
      <div class="space-y-8">
        <div class="flex items-center gap-4">
          <svg
            class="w-7 h-7 text-accentGold"
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
          <div>
            <span class="font-semibold text-accentBlue">Email:</span>
            <a
              href="mailto:restoringvision@clearsightinitiative.org"
              class="ml-1 hover:underline text-blue-600"
              >restoringvision@clearsightinitiative.org</a
            >
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            class="w-7 h-7 text-accentGold"
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
          <div>
            <span class="font-semibold text-accentBlue">Phone:</span>
            <a href="tel:+251911037207" class="ml-1 hover:underline">+251 911 037 207</a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            class="w-7 h-7 text-accentGold"
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
          <div>
            <span class="font-semibold text-accentBlue">Address:</span>
            Ayder Sub-city, Ethiovitian Street, Mekelle, Ethiopia
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
