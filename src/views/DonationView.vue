<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="mt-16 sm:mt-20 md:mt-24 min-[1170px]:mt-28 pb-32">
    <div
      class="flex flex-col min-[1170px]:flex-row relative justify-between pb-24 sm:pb-32 md:pb-40 min-[1170px]:pb-48 px-4 sm:px-8 md:px-16 min-[1170px]:px-0"
    >
      <!-- Hero Text Section -->
      <div
        class="flex-1 text-white z-10 min-[1170px]:ml-48 min-[1170px]:mb-0 text-center min-[1170px]:text-left"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-5xl min-[1170px]:text-6xl 2xl:text-7xl font-bold mb-4 min-[1170px]:mb-6 leading-tight"
        >
          <span class="text-accentBlue">Restore Sight.</span><br />
          <span class="text-accentBlue">Change Lives.</span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-accentBlue mb-6 min-[1170px]:mb-8 max-w-md mx-auto min-[1170px]:mx-0"
        >
          Just $3 can provide a pair of life-changing reading glasses to someone in need.
        </p>
      </div>

      <!-- Donation Card Section -->
      <div class="flex-1 max-w-sm mx-auto min-[1170px]:mx-0 min-[1170px]:mr-48 z-10 w-full">
        <div class="bg-accentBlue rounded-2xl p-4 sm:p-6 shadow-2xl">
          <!-- Header with Image -->
          <div class="relative mb-3">
            <img
              src="/public/eye-exam-image.webp"
              alt="Eye examination"
              class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-lg"
            />
            <div
              class="absolute bottom-0 left-0 right-0 bg-accentBlue bg-opacity-90 text-white p-2 sm:p-3 rounded-b-lg"
            >
              <h3 class="font-bold text-base sm:text-lg border-l-4 border-accentGold pl-2 sm:pl-3">
                Where Your Donation Goes
              </h3>
            </div>
          </div>

          <!-- Donation Breakdown -->
          <div class="space-y-2 sm:space-y-3 text-white">
            <div class="flex justify-between items-center">
              <span class="text-xs sm:text-sm">$3 = One pair of reading glasses</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs sm:text-sm">$30 = One village served</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs sm:text-sm">$50 = One local agent trained</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs sm:text-sm">$150 = Mobile screening event for a school</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Image -->
      <div
        class="absolute bottom-0 left-0 right-0 h-[40%] sm:h-[50%] md:h-[55%] lg:h-[70%] z-0 bg-cover bg-center lg:-bottom-14 2xl:-bottom-32"
        style="background-image: url('/public/donation-hero-bg.webp')"
      ></div>
    </div>

    <!-- Bank Transfer Details Section -->
    <div class="bg-gray-50 py-12 sm:py-16 xl:mt-28 md:py-20 px-4 sm:px-8 md:px-16">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span class="text-accentGold">|</span> Bank Transfer Details
            <span class="text-accentGold">|</span>
          </h2>
          <p class="text-base sm:text-lg text-accentBlue underline">
            You can donate directly through one of our local bank accounts:
          </p>
        </div>

        <!-- Bank Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <!-- Commercial Bank of Ethiopia -->
          <div class="bg-accentBlue rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <h3 class="font-bold text-lg sm:text-xl mb-3">Commercial Bank of Ethiopia</h3>
            <div class="space-y-1 sm:space-y-2">
              <p class="text-sm sm:text-base">Account Number: 1000012221057</p>
              <p class="text-sm sm:text-base">SWIFT Code: CBETETAA</p>
            </div>
          </div>

          <!-- Dashen Bank -->
          <!-- <div class="bg-accentBlue rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <h3 class="font-bold text-lg sm:text-xl mb-3">Dashen Bank</h3>
            <div class="space-y-1 sm:space-y-2">
              <p class="text-sm sm:text-base">Account Number: 2000345678901</p>
              <p class="text-sm sm:text-base">SWIFT Code: DASHETAA</p>
            </div>
          </div> -->

          <!-- Lion Bank -->
          <div class="bg-accentBlue rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <h3 class="font-bold text-lg sm:text-xl mb-3">Lion Bank</h3>
            <div class="space-y-1 sm:space-y-2">
              <p class="text-sm sm:text-base">Account Number: 778400003561</p>
              <p class="text-sm sm:text-base">SWIFT Code: LIBSETAA</p>
            </div>
          </div>

          <!-- Bank of Abyssinia -->
          <!-- <div class="bg-accentBlue rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <h3 class="font-bold text-lg sm:text-xl mb-3">Bank of Abyssinia</h3>
            <div class="space-y-1 sm:space-y-2">
              <p class="text-sm sm:text-base">Account Number: 4000987654321</p>
              <p class="text-sm sm:text-base">SWIFT Code: ABOCETAA</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
