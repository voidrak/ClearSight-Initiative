<script setup>
import { onMounted } from 'vue'
import { animate, stagger, inView } from 'motion-v'

onMounted(() => {
  window.scrollTo(0, 0)
})

onMounted(() => {
  inView(
    '.model-cards-container',
    (element) => {
      animate(
        '.model-card',
        {
          opacity: 1,
          y: [50, 0],
        },
        {
          delay: stagger(0.3),
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        },
      )

      return () => {
        animate(
          '.model-card',
          {
            opacity: 0,
            y: 50,
          },
          {
            delay: stagger(0.1),
            duration: 0.3,
          },
        )
      }
    },
    {
      amount: 0.6,
      once: true,
    },
  )
})
</script>

<template>
  <div class="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mb-16">
    <div class="flex items-center justify-center mb-8">
      <div class="text-center px-4 sm:px-8 md:px-16 mx-auto">
        <!-- Title -->
        <h1
          class="text-3xl border-x-8 px-4 border-accentGold sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accentBlue mb-6 sm:mb-8 pb-2"
        >
          Empowering Through Vision
        </h1>

        <!-- Description -->
        <p class="xl:text-lg text-accentBlue leading-relaxed max-w-2xl mx-auto text-sm">
          ClearSight is transforming lives by providing accessible, low-cost reading glasses in
          underserved regions. We help people regain independence, improve productivity, and enhance
          daily life.
        </p>
      </div>
    </div>

    <div class="relative">
      <!-- Background Image -->
      <div class="relative h-[60vh]">
        <img
          src="/public/impact_page_hero_image.webp"
          alt="Eye examination showing ClearSight's impact"
          class="w-full h-full object-cover"
        />
        <!-- Overlay -->
      </div>

      <!-- Content Overlay -->
    </div>

    <!-- Impact Statistics Section -->
    <div class="bg-accentBlue py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-3 gap-8 mb-12 text-white max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-sm lg:text-base xl:text-lg font-medium mb-2">Glasses targeted</div>
            <div class="text-sm lg:text-base xl:text-lg font-medium">for pilot</div>
          </div>
          <div class="text-center">
            <div class="text-sm lg:text-base xl:text-lg font-medium mb-2">Tigray-focused</div>
            <div class="text-sm lg:text-base xl:text-lg font-medium">outreach</div>
          </div>
          <div class="text-center">
            <div class="text-sm lg:text-base xl:text-lg font-medium mb-2">2025 D-Prize</div>
            <div class="text-sm lg:text-base xl:text-lg font-medium">Awardee</div>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-white">
            <!-- Statistics Header -->

            <!-- Why Reading Glasses Section -->
            <div>
              <h2 class="text-2xl border-l-4 pl-2 border-accentGold sm:text-3xl font-bold mb-6">
                Why Reading Glasses?
              </h2>
              <p class="text-lg leading-relaxed">
                Presbyopia affects over 1 billion people globally. In Ethiopia, millions are
                impacted yet lack access to basic reading glasses. ClearSight delivers a simple,
                proven solution.
              </p>
            </div>
          </div>

          <!-- Right Content - Before/After Image -->
          <div class="relative">
            <img
              src="/public/impact_before_and_after.webp"
              alt="Before and after comparison showing the impact of reading glasses"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Success Stories Section -->

    <!-- Local Models Section -->
    <div class="bg-gray-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-2xl border-x-8 px-4 border-accentGold w-fit mx-auto text-center sm:text-3xl font-bold text-accentBlue mb-4"
          >
            Local Models
          </h2>
          <p class="text-lg text-accentBlue max-w-3xl mx-auto">
            We use three distribution models tailored to the communities we serve:
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto model-cards-container">
          <!-- Urban Model -->
          <div
            class="bg-accentBlue rounded-2xl p-8 text-white text-center model-card translate-y-[50px] opacity-0"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 border-2 border-dashed border-accentGold rounded-full flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-accentGold">1</span>
            </div>
            <h3 class="text-xl font-bold mb-4">Urban Model</h3>
            <p class="text-sm mb-6 leading-relaxed">
              Hub-and-spoke micro-entrepreneurs sell reading glasses locally.
            </p>
            <div class="text-4xl mb-4">🏢</div>
          </div>

          <!-- Rural Model -->
          <div
            class="bg-accentBlue rounded-2xl p-8 text-white text-center model-card translate-y-[50px] opacity-0"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 border-2 border-dashed border-accentGold rounded-full flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-accentGold">2</span>
            </div>
            <h3 class="text-xl font-bold mb-4">Rural Model</h3>
            <p class="text-sm mb-6 leading-relaxed">
              Mobile outreach and vision stations with affordable kits.
            </p>
            <div class="text-4xl mb-4">🚐</div>
          </div>

          <!-- Access Points -->
          <div
            class="bg-accentBlue rounded-2xl p-8 text-white text-center model-card translate-y-[50px] opacity-0"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 border-2 border-dashed border-accentGold rounded-full flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-accentGold">3</span>
            </div>
            <h3 class="text-xl font-bold mb-4">Access Points</h3>
            <p class="text-sm mb-6 leading-relaxed">
              Schools & community centers as permanent distribution hubs.
            </p>
            <div class="text-4xl mb-4">🏫</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
