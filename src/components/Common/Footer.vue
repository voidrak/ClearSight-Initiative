<script setup></script>

<template>
  <footer class="bg-gray-100 py-8 md:py-12 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Logo and Description -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 class="text-xl font-bold mb-4">CLEARSIGHT LOGO</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Restoring sight to underserved communities in Ethiopia through affordable, quality
            reading glasses.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">QUICK LINKS</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><a href="#" class="hover:text-accentGold">Home</a></li>
            <li><a href="/about" class="hover:text-accentGold">About</a></li>
            <li><a href="/impact" class="hover:text-accentGold">Impact</a></li>
            <li><a href="/contact-us" class="hover:text-accentGold">Contact Us</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-2">
          <h4 class="font-semibold mb-4">CONTACT INFO</h4>
          <div class="space-y-3 text-sm text-gray-600">
            <!-- Address -->
            <div class="flex items-start gap-2">
              <svg
                class="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p>Ayder Sub-city,</p>
                <p>Mekelle, Ethiopia</p>
              </div>
            </div>

            <!-- Email 1 -->
            <div class="flex items-start gap-2">
              <svg
                class="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:correctingagingeyes@clearsightInitiative.org"
                class="hover:text-accentGold hover:underline break-all"
              >
                correctingagingeyes@clearsightInitiative.org
              </a>
            </div>

            <!-- Email 2 -->
            <div class="flex items-start gap-2">
              <svg
                class="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:clearSight2017@gmail.com"
                class="hover:text-accentGold hover:underline break-all"
              >
                clearSight2017@gmail.com
              </a>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-2">
              <svg
                class="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+251911037207" class="hover:text-accentGold hover:underline">
                +251 911 037 207
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold mb-4">Get In Touch</h4>
          <div class="space-y-3">
            <RouterLink
              :to="{ name: 'Contact' }"
              class="w-full py-2 px-4 border block text-center border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Partner With Us
            </RouterLink>
            <RouterLink
              :to="{ name: 'Donate' }"
              class="w-full py-2 px-4 bg-accentGold flex text-white justify-center items-center rounded text-sm hover:bg-yellow-500 transition-colors"
            >
              Donate
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-300 mt-8 pt-6 text-center">
        <p class="text-sm text-gray-600">
          © Copyright 2025. All Rights Reserved by <span class="font-semibold">ClearSight</span>
        </p>

        <p class="">
          Made By
          <a
            href="https://linktr.ee/nahomrak"
            target="_blank"
            class="font-semibold text-accentGold hover:underline"
            >RAK</a
          >
          with ❤️
        </p>
      </div>
    </div>
  </footer>
</template>
