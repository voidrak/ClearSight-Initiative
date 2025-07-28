<script setup>
import HeroImage from '@/../public/heroImage.webp'
</script>

<template>
  <div
    class="w-full h-[500px] md:h-[700px] text-white flex flex-col justify-center bg-cover bg-center px-4 md:px-0"
    :style="`background-image: url('${HeroImage}')`"
  >
    <div class="text-4xl md:text-8xl ml-4 md:ml-28 font-bold">
      <h1>Restoring Sight.</h1>
      <h1>Restoring</h1>
      <h1>Livelihoods.</h1>
    </div>
    <p class="max-w-2xl text-base md:text-lg ml-4 md:ml-28 mt-4">
      ClearSight Initiative provides affordable reading glasses to underserved communities across
      Ethiopia empowering people to see clearly, work confidently, and live independently.
    </p>
    <button
      class="px-6 md:px-8 w-fit py-2 ml-4 md:ml-28 mt-6 md:mt-10 bg-accentGold pointer-cursor hover:bg-yellow-500 text-white rounded"
    >
      Donate
    </button>
  </div>
</template>
