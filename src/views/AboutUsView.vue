<script setup></script>

<template>
  <!-- Hero Section -->
  <div class="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center">
      <div class="mb-8">
        <div class="flex items-center gap-x-4 justify-center">
          <div class="w-3 h-22 bg-accentGold mb-4"></div>
          <h1 class="text-4xl md:text-8xl font-bold w-fit text-accentBlue mb-4">Who We Are</h1>
          <div class="w-3 h-22 bg-accentGold mb-4"></div>
        </div>
        <p class="text-accentBlue text-lg md:text-xl max-w-3xl mx-auto">
          Bringing sight, dignity, and opportunity to underserved <br />
          communities across Ethiopia.
        </p>
      </div>

      <!-- Glasses Image -->
      <div class="flex justify-center">
        <img
          src="/public/aboutUsGlasses.png"
          alt="Reading glasses"
          class="w-96 md:w-[500px] lg:w-[600px] object-contain"
        />
      </div>
    </div>
  </div>

  <!-- Our Mission Section -->
  <div class="py-8 md:py-16 px-4 md:px-8 bg-accentBlue">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div class="flex-1 order-2 md:order-2">
        <div class="border-l-4 border-accentGold pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-white">Our Mission</h2>
        </div>
        <p class="text-white text-base md:text-lg max-w-[425px] leading-relaxed mb-4">
          To eliminate avoidable vision impairment in underserved communities through simple,
          scalable access to reading glasses.
        </p>
      </div>
      <div class="flex-1 order-1 md:order-1">
        <img
          src="/public/missionImage.png"
          alt="Community outreach"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>

  <!-- Our Story Section -->
  <div class="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-4xl font-bold text-accentBlue mb-8">
          <span class="text-accentGold">|</span> Our Story <span class="text-accentGold">|</span>
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <!-- Timeline Line -->
        <div class="hidden md:block absolute top-2 left-0 right-0 h-0.5 bg-accentBlue z-0"></div>

        <!-- Pilot Launched -->
        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div
            class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative"
          >
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div
            class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]"
          >
            Pilot Launched
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Started in Tigray region</p>
        </div>

        <!-- Founded -->
        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div
            class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative"
          >
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div
            class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]"
          >
            Founded
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Inspired by vision need in Ethiopia</p>
        </div>

        <!-- Validated by D-Prize -->
        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div
            class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative"
          >
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div
            class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]"
          >
            Validated by D-Prize
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Recognition and support</p>
        </div>

        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div
            class="w-8 h-8 bg-accentGold rounded-full mb-4 border-4 border-yellow-300 shadow-lg relative"
          >
            <div class="absolute inset-1 bg-accentGold rounded-full"></div>
          </div>
          <div
            class="bg-accentGold text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]"
          >
            Current
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Scaling with partners and impact</p>
        </div>

        <!-- Current -->
      </div>
    </div>
  </div>
</template>
