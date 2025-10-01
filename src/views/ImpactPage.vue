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
    },
    {
      amount: 0.6,
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
        <div class="grid grid-cols-3 gap-8 mb-18 text-black max-w-2xl mx-auto">
          <div class="text-center bg-accentGold group p-4 rounded-lg">
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium mb-2">
              Glasses targeted
            </div>
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium">
              for pilot
            </div>
          </div>
          <div class="text-center bg-accentGold group p-4 rounded-lg">
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium mb-2">
              Tigray-focused
            </div>
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium">
              outreach
            </div>
          </div>
          <div class="text-center bg-accentGold group p-4 rounded-lg">
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium mb-2">
              2025 D-Prize
            </div>
            <div class="text-sm lg:text-base xl:text-lg group-hover:font-bold font-medium">
              Awardee
            </div>
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
    <div class="py-16 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-2xl border-x-8 px-4 border-accentGold w-fit mx-auto text-center sm:text-3xl font-bold text-accentBlue mb-4"
          >
            Success Stories
          </h2>
          <p class="text-lg text-accentBlue max-w-3xl mx-auto">
            Hear directly from the people whose lives have been transformed by ClearSight's reading
            glasses.
          </p>
        </div>
        <!-- Video 3 - Watch Repair Guy -->
        <div class="md:col-span-2 max-w-sm mx-auto mb-12">
          <div class="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-4">
            <div class="aspect-[9/16] w-full">
              <video
                class="w-full h-full object-cover"
                controls
                poster="https://res.cloudinary.com/dqxy77qks/image/upload/v1759304801/8922b68a-9ae2-4fd6-8ff8-2e5c057b49a5.png"
              >
                <source
                  src="https://res.cloudinary.com/dqxy77qks/video/upload/v1759304775/video_2025-10-01_10-44-58_y2qsvl.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p class="text-center font-bold text-gray-700 text-sm md:text-base">
            "Watch repair technician returns to his craft after receiving reading glasses from
            ClearSight"
          </p>
        </div>

        <!-- Two TikTok Videos Side by Side -->
        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Video 1 -->
          <div>
            <div class="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-4">
              <div class="aspect-[9/16] w-full">
                <video
                  class="w-full h-full object-cover"
                  controls
                  poster="https://res.cloudinary.com/dqxy77qks/image/upload/v1759294244/video-temp1_iffl6f.png"
                >
                  <source
                    src="https://res.cloudinary.com/dqxy77qks/video/upload/v1759293242/WhatsApp_Video_2025-09-30_at_19.22.52_8e78cbc9_bcs43q.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p class="text-center text-gray-700 text-sm md:text-base">
              Community members share their experience with ClearSight reading glasses
            </p>
          </div>

          <!-- Video 2 -->
          <div>
            <div class="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-4">
              <div class="aspect-[9/16] w-full">
                <video
                  class="w-full h-full object-cover"
                  controls
                  poster="https://res.cloudinary.com/dqxy77qks/image/upload/v1759294244/video-temp2_viqfjf.png"
                >
                  <source
                    src="https://res.cloudinary.com/dqxy77qks/video/upload/v1759293244/WhatsApp_Video_2025-09-30_at_19.23.07_852bda54_qv8un3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p class="text-center text-gray-700 text-sm md:text-base">
              Local artisan receives reading glasses from ClearSight
            </p>
          </div>
        </div>
      </div>
    </div>

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
            <div class="text-4xl flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white size-10"
                viewBox="0 0 256 256"
              >
                <path
                  d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z"
                ></path>
              </svg>
            </div>
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
            <div class="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white size-10"
                viewBox="0 0 256 256"
              >
                <path
                  d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56ZM231.5,87.71A19.62,19.62,0,0,0,212,72H44a20,20,0,0,0-8.38,38.16l.13,0,50.75,22.35-21,79.72A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.4-16.52l-21-79.72,50.75-22.35.13,0A19.64,19.64,0,0,0,231.5,87.71Zm-17.8,7.9-56.93,25.06a8,8,0,0,0-4.51,9.36L175.13,217a7,7,0,0,0,.49,1.35,4,4,0,0,1-5,5.45,4,4,0,0,1-2.25-2.07,6.31,6.31,0,0,0-.34-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.31,6.31,0,0,0-.34.63,4,4,0,0,1-2.25,2.07,4,4,0,0,1-5-5.45,7,7,0,0,0,.49-1.35L103.74,130a8,8,0,0,0-4.51-9.36L42.3,95.61A4,4,0,0,1,44,88H212a4,4,0,0,1,1.73,7.61Z"
                ></path>
              </svg>
            </div>
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
            <div class="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white size-10"
                viewBox="0 0 256 256"
              >
                <path
                  d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
