<script setup>
import { motion } from 'motion-v'

// Animation variants for text content
const textVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
}

// Animation variants for images
const imageVariants = {
  offscreen: {
    x: 100,
    opacity: 0,
    scale: 1,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
    },
  },
}

// Animation variants for cards/sections
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
}
</script>

<template>
  <!-- Why Vision Matters Section -->
  <motion.div
    class="py-8 md:py-16 px-4 md:px-8"
    initial="offscreen"
    whileInView="onscreen"
    :inViewOptions="{ amount: 1, once: true }"
    :variants="cardVariants"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <motion.div class="flex-1 order-2 md:order-1" :variants="textVariants">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Why Vision Matters</h2>
          <p class="text-blue-600 text-base md:text-lg mt-2">Clear vision is a basic need.</p>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed">
          Over 1 billion people globally suffer from poor vision caused by presbyopia, a condition
          easily corrected with reading glasses. In Ethiopia, this simple solution remains out of
          reach for millions.
        </p>
      </motion.div>
      <motion.div class="flex-1 order-1 md:order-2" :variants="imageVariants">
        <img
          src="/public/whyVisionImage.avif"
          alt="Person with glasses reading"
          class="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </motion.div>

  <!-- Our Solution Section -->
  <motion.div
    class="py-8 md:py-16 px-4 md:px-8 bg-gray-50"
    initial="offscreen"
    whileInView="onscreen"
    :inViewOptions="{ amount: 1, once: true }"
    :variants="cardVariants"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <motion.div class="flex-1" :variants="imageVariants">
        <img
          src="/public/OurSolutionImage.avif"
          alt="Person getting glasses fitted"
          class="w-full rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div class="flex-1" :variants="textVariants">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Our Solution</h2>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed">
          We deliver high-quality reading glasses at ultra-low cost by training local distributors,
          partnering with health systems, and using data to maximize reach. Every pair we distribute
          restores someone's ability to read, work, and thrive.
        </p>
      </motion.div>
    </div>
  </motion.div>

  <!-- Backed by D-Prize Section -->
  <motion.div
    class="py-8 md:py-16 px-4 md:px-8"
    initial="offscreen"
    whileInView="onscreen"
    :inViewOptions="{ amount: 1, once: true }"
    :variants="cardVariants"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <motion.div class="flex-1 order-2 md:order-1" :variants="textVariants">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Backed by D-Prize</h2>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          ClearSight Initiative is a validated project supported by D-Prize. We're scaling up
          through trusted partnerships and community-based models to reach more people in need.
        </p>
      </motion.div>
      <motion.div class="flex-1 order-1 md:order-2" :variants="imageVariants">
        <div class="bg-gray-100 p-6 md:p-8 rounded-lg text-center">
          <img
            src="/public/DPrizeImage.webp"
            alt="D-Prize Logo"
            class="w-24 md:w-32 mx-auto mb-6"
          />
          <p class="text-gray-700 font-medium mb-2 text-sm md:text-base">
            We seed new organizations
          </p>
          <p class="text-gray-700 font-medium mb-2 text-sm md:text-base">
            distributing proven poverty solutions,
          </p>
          <p class="text-gray-700 font-medium mb-4 text-sm md:text-base">all aiming to scale.</p>
          <p class="text-blue-600 font-medium text-sm md:text-base">Are you next?</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</template>
