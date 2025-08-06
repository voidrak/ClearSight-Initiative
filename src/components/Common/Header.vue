<script setup>
import { ref } from 'vue'
import { motion } from 'motion-v'
import Logo from '../icons/Logo.vue'

const isSidebarOpen = ref(false)

const navigationItems = [
  { name: 'Home', route: 'Home' },
  { name: 'About Us', route: 'About' },
  { name: 'Impact', route: 'Impact' },
  { name: 'Why Eyeglasses?', route: 'Home' },
  { name: 'Contact Us', route: 'Home' },
]

const activeLink = ref('Home') // Set default active link

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  console.log(isSidebarOpen.value)
}

const setActiveLink = (linkName) => {
  activeLink.value = linkName
}
const handleMobileLinkClick = (linkName) => {
  setActiveLink(linkName)
  toggleSidebar()
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
        class="bg-white border-l z-50 border-accentGray absolute top-0 px-4 py-2 right-0 h-full w-screen max-w-[480px]"
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
          <RouterLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="{ name: item.route }"
            @click="handleMobileLinkClick(item.name)"
          >
            {{ item.name }}
          </RouterLink>
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
          <motion.li v-for="item in navigationItems" :key="item.name" tag="li" class="relative">
            <RouterLink
              :to="{ name: item.route }"
              class="hover:font-semibold transition-all duration-200 block py-2"
              @click="setActiveLink(item.name)"
            >
              {{ item.name }}
            </RouterLink>
            <motion.div
              v-if="item.name === activeLink"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-accentGold"
              layout-id="nav-underline"
              :initial="{ scaleX: 0 }"
              :animate="{ scaleX: 1 }"
              :transition="{ duration: 0.3, ease: 'easeInOut' }"
            />
          </motion.li>
        </ul>
        <div class="flex gap-x-2">
          <RouterLink
            :to="{ name: 'Donate' }"
            class="bg-accentGold flex items-center hover:bg-accentGold/80 cursor-pointer w-fit px-3 py-1 text-white rounded-md"
          >
            Donate Us
          </RouterLink>
          <!-- <button
            class="bg-accentBlue hover:bg-accentGold/80 cursor-pointer w-fit px-3 py-1 text-white rounded-md"
          >
            Partner
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>
