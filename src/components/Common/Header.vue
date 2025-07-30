<script setup>
import { ref } from 'vue'
import Logo from '../icons/Logo.vue'
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  console.log(isSidebarOpen.value)
}
</script>

<template>
  <header>
    <!-- Mobile Header -->
    <div class="md:hidden px-2 py-2 flex justify-between items-center">
      <div class="flex justify-between">
        <Logo class="w-[142px] h-[31px]" />
      </div>
      <svg
        :onclick="toggleSidebar"
        class="size-6 cursor-pointer"
        viewBox="0 0 29 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.75H29V4.375H0V0.75ZM7.25 9.8125H29V13.4375H7.25V9.8125ZM16.3125 18.875H29V22.5H16.3125V18.875Z"
          fill="#1F3C88"
        />
      </svg>

      <!--  mobile sidebar -->
      <div
        class="bg-white border-l border-accentGray absolute top-0 px-4 py-2 right-0 h-full w-screen max-w-[480px]"
        :class="{ hidden: !isSidebarOpen }"
      >
        <div class="flex justify-end">
          <svg
            :onclick="toggleSidebar"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-black size-8 cursor-pointer"
            viewBox="0 0 256 256"
          >
            <path
              d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            ></path>
          </svg>
        </div>

        <ul class="list-none flex flex-col items-center mt-16 ml-6 space-y-4 text-2xl">
          <RouterLink :to="{ name: 'Home' }"> Home</RouterLink>
          <RouterLink :to="{ name: 'About' }"> About Us</RouterLink>
          <RouterLink :to="{ name: 'Home' }"> Our Work</RouterLink>
          <RouterLink :to="{ name: 'Home' }"> Why Eyeglasses?</RouterLink>
          <RouterLink :to="{ name: 'Home' }"> Contact Us</RouterLink>
        </ul>
        <div class="ml-6 mt-32">
          <h2 class="text-accentGray font-bold">CONTACT INFO</h2>
          <p class="font-light mt-2">Ayder Sub-city,</p>
          <p class="font-light">EthioWitten Street,</p>
          <p class="font-light">Mekelle, Ethiopia</p>
        </div>
      </div>
    </div>
    <!-- Desktop Header -->
    <div class="px-4 py-6 hidden md:block">
      <div class="flex justify-between gap-x-8">
        <Logo class="w-[142px] h-[31px]" />
        <ul class="list-none flex items-center lg:space-x-8 space-x-4 text-lg">
          <RouterLink :to="{ name: 'Home' }"> Home</RouterLink>
          <RouterLink class="hover:font-semibold" :to="{ name: 'About' }"> About Us</RouterLink>
          <RouterLink class="hover:font-semibold" :to="{ name: 'Home' }"> Our Work</RouterLink>
          <RouterLink class="hover:font-semibold" :to="{ name: 'Home' }">
            Why Eyeglasses?</RouterLink
          >
          <RouterLink class="hover:font-semibold" :to="{ name: 'Home' }"> Contact Us</RouterLink>
        </ul>
        <div class="flex gap-x-2">
          <button
            class="bg-accentGold hover:bg-accentGold/80 cursor-pointer w-fit px-3 py-1 text-white rounded-md"
          >
            Donate
          </button>
          <button
            class="bg-accentBlue hover:bg-accentGold/80 cursor-pointer w-fit px-3 py-1 text-white rounded-md"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
