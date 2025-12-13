<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

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
        <img src="/public/aboutUsGlasses.png" alt="Reading glasses"
          class="w-96 md:w-[500px] lg:w-[600px] object-contain" />
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
        <img src="/public/whyVisionImage.avif" alt="Community outreach" class="w-full rounded-lg shadow-lg" />
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
          <div class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative">
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]">
            Pilot Launched
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Started in Tigray region</p>
        </div>

        <!-- Founded -->
        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative">
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]">
            Founded
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Inspired by vision need in Ethiopia</p>
        </div>

        <!-- Validated by D-Prize -->
        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div class="w-8 h-8 bg-accentBlue rounded-full mb-4 border-4 border-blue-300 shadow-lg relative">
            <div class="absolute inset-1 bg-accentBlue rounded-full"></div>
          </div>
          <div class="bg-accentBlue text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]">
            Validated by D-Prize
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Recognition and support</p>
        </div>

        <div class="flex flex-col items-center text-center flex-1 relative z-10">
          <div class="w-8 h-8 bg-accentGold rounded-full mb-4 border-4 border-yellow-300 shadow-lg relative">
            <div class="absolute inset-1 bg-accentGold rounded-full"></div>
          </div>
          <div class="bg-accentGold text-white px-6 py-3 rounded-full text-sm font-medium mb-3 min-w-[140px]">
            Current
          </div>
          <p class="text-gray-700 text-sm max-w-[140px]">Scaling with partners and impact</p>
        </div>
      </div>

      <!-- Team Section -->
      <div class="py-10 mt-24 md:py-16 px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl md:text-4xl font-bold text-accentBlue mb-4">
              <span class="text-accentGold">|</span> The ClearSight Team
              <span class="text-accentGold">|</span>
            </h2>
            <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              ClearSight is led by a multidisciplinary founding team combining clinical leadership,
              public health expertise, community trust, and financial governance.
            </p>
          </div>

          <!-- Team Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Dr. Araya Yirga Asgedom -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-accentGold/50 transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/public/Araya.jpg" alt="Dr. Araya Yirga Asgedom" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-accentBlue mb-1">
                    Dr. Araya Yirga Asgedom, MD
                  </h3>
                  <p class="text-accentGold font-semibold text-sm md:text-base">
                    Founder & Executive Lead
                  </p>
                </div>
              </div>
              <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                Internist and public health leader with 14+ years' experience. Former Director of
                Regional Public Health Services, where he mobilized over USD 1 million for
                post-conflict health system recovery in Tigray. Leads ClearSight's strategy,
                partnerships, and impact evaluation.
              </p>
            </div>

            <!-- Mr. Assefa Berhe -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl 
hover:shadow-accentGold/50  transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/public/Assefa.jpg" alt="Mr. Assefa Berhe" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-accentBlue mb-1">
                    Mr. Assefa Berhe, MA
                  </h3>
                  <p class="text-accentGold font-semibold text-sm md:text-base">
                    Community & Education Lead
                  </p>
                </div>
              </div>
              <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                Veteran educator with 30+ years of experience and former head of the Tigray Regional
                Teachers' Association. Nationally recognized author and recipient of Ethiopia's
                Lifetime Teaching Award (2004). Anchors community engagement and trust.
              </p>
            </div>

            <!-- Mr. Mulu Tekie -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl 
hover:shadow-accentGold/50  transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/public/Mulu.jpg" alt="Mr. Mulu Tekie" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-accentBlue mb-1">
                    Mr. Mulu Tekie, BA, MA
                  </h3>
                  <p class="text-accentGold font-semibold text-sm md:text-base">
                    Programs Director
                  </p>
                </div>
              </div>
              <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                Eye-care and public health specialist with expertise in Ophthalmic Nursing and
                Public Health M&E. Program Director at Moms for Moms (NGO). Oversees screening
                quality, training, and monitoring systems.
              </p>
            </div>

            <!-- Dr. Bereket Zeray -->
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl 
hover:shadow-accentGold/50  transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/public/Bereket.jpg" alt="Dr. Bereket Zeray" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-accentBlue mb-1">
                    Dr. Bereket Zeray, PhD
                  </h3>
                  <p class="text-accentGold font-semibold text-sm md:text-base">
                    Finance & Governance Advisor
                  </p>
                </div>
              </div>
              <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                Professor of Accounting and Financial Management, peer-reviewed author, and advisor
                to the Tigray Regional Development Bank. Provides financial oversight and
                sustainability modeling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action Section -->
  <div class="bg-accentBlue py-12 px-4 md:px-0 mt-8">
    <div class="max-w-4xl mx-auto flex flex-col items-center">
      <div class="flex w-full justify-between items-center mb-6">
        <div class="h-18 w-4 bg-accentGold hidden md:block"></div>
        <h2 class="text-white text-3xl md:text-5xl font-extrabold text-center flex-1">
          Join our mission to restore<br class="hidden md:block" />
          sight across Ethiopia.
        </h2>
        <div class="h-18 w-4 bg-accentGold hidden md:block"></div>
      </div>
      <div class="flex flex-col gap-3 w-full max-w-md mx-auto">
        <RouterLink :to="{ name: 'Donate' }"
          class="cursor-pointer text-center bg-accentGold text-accentBlue font-semibold text-lg py-2 rounded-md w-full transition hover:bg-yellow-400">
          Donate
        </RouterLink>
        <RouterLink :to="{ name: 'Contact' }"
          class="cursor-pointer text-center border border-white text-white font-medium text-lg py-2 rounded-md w-full transition hover:bg-white hover:text-accentBlue">
          Partner With Us
        </RouterLink>
      </div>
    </div>
  </div>
</template>
