<script setup></script>

<template>
  <!-- Why Vision Matters Section -->
  <div class="py-8 md:py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div class="flex-1 order-2 md:order-1">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Why Vision Matters</h2>
          <p class="text-blue-600 text-base md:text-lg mt-2">Clear vision is a basic need.</p>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed">
          Over 1 billion people globally suffer from poor vision caused by presbyopia, a condition
          easily corrected with reading glasses. In Ethiopia, this simple solution remains out of
          reach for millions.
        </p>
      </div>
      <div class="flex-1 order-1 md:order-2">
        <img
          src="/public/heroImage.webp"
          alt="Person with glasses reading"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>

  <!-- Our Solution Section -->
  <div class="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div class="flex-1">
        <img
          src="/public/OurSolutionImage.webp"
          alt="Person getting glasses fitted"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
      <div class="flex-1">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Our Solution</h2>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed">
          We deliver high-quality reading glasses at ultra-low cost by training local distributors,
          partnering with health systems, and using data to maximize reach. Every pair we distribute
          restores someone's ability to read, work, and thrive.
        </p>
      </div>
    </div>
  </div>

  <!-- Backed by D-Prize Section -->
  <div class="py-8 md:py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div class="flex-1 order-2 md:order-1">
        <div class="border-l-4 border-yellow-500 pl-4 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-accentBlue">Backed by D-Prize</h2>
        </div>
        <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          ClearSight Initiative is a validated project supported by D-Prize. We're scaling up
          through trusted partnerships and community-based models to reach more people in need.
        </p>
      </div>
      <div class="flex-1 order-1 md:order-2">
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
      </div>
    </div>
  </div>
</template>
