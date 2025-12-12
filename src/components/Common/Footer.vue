<script setup></script>

<template>
  <footer class="bg-gray-100 py-8 md:py-12 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div>
          <h4 class="font-semibold mb-4">CONTACT INFO</h4>
          <div class="space-y-1 text-sm text-gray-600">
            <p>Ayda Sub-city, Ethiovitian</p>
            <p>Street, Mekelle, Ethiopia</p>
            <a
              href="mailto:correctingagingeyes@clearsightInitiative.org
"
              class="ml-1 hover:underline hover:text-blue-600 block"
              >mail: correctingagingeyes
            </a>
            <p>+251 911 037 207</p>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold mb-4">Get In Touch</h4>
          <div class="space-y-3">
            <RouterLink
              :to="{ name: 'Contact' }"
              class="w-full py-2 px-4 border block text-center border-gray-300 rounded text-sm hover:bg-gray-50"
            >
              Partner With Us
            </RouterLink>
            <RouterLink
              :to="{ name: 'Donate' }"
              class="w-full py-2 px-4 bg-accentGold flex text-white justify-center items-center rounded text-sm hover:bg-yellow-500"
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
