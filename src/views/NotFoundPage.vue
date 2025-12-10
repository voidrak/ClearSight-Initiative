<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { animate } from 'motion-v'

const router = useRouter()

onMounted(() => {
  window.scrollTo(0, 0)

  // Animate the 404 number
  animate(
    '.error-number',
    {
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: [10, 0],
    },
    {
      duration: 0.8,
      easing: [0.17, 0.55, 0.55, 1],
    },
  )

  // Animate the content
  animate(
    '.error-content',
    {
      opacity: [0, 1],
      y: [30, 0],
    },
    {
      duration: 0.8,
      delay: 0.3,
      easing: [0.17, 0.55, 0.55, 1],
    },
  )

  // Animate the glasses icon
  animate(
    '.glasses-icon',
    {
      rotate: [0, -10, 10, -5, 5, 0],
    },
    {
      duration: 2,
      delay: 1,
      easing: 'ease-in-out',
    },
  )
})

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 px-4 py-16"
  >
    <div class="max-w-2xl w-full text-center">
      <!-- Animated 404 Number -->
      <div class="error-number opacity-0 mb-8">
        <div class="relative inline-block">
          <h1 class="text-[12rem] sm:text-[16rem] font-bold text-accentBlue/10 leading-none">
            404
          </h1>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="glasses-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-32 h-32 sm:w-40 sm:h-40 text-accentGold"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path
                  d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v58.08A44,44,0,0,0,145.68,152H110.32A44,44,0,0,0,40,130.08V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,87.81,4h32.38A44,44,0,0,0,232,164V72A32,32,0,0,0,200,40ZM68,192a28,28,0,1,1,28-28A28,28,0,0,1,68,192Zm120,0a28,28,0,1,1,28-28A28,28,0,0,1,188,192Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Content -->
      <div class="error-content opacity-0">
        <h2 class="text-3xl sm:text-4xl font-bold text-accentBlue mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you've lost your way! The page you're looking for doesn't exist or has been
          moved.
        </p>

        <!-- Suggested Links -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
          <router-link
            to="/"
            class="flex items-center justify-center gap-2 px-6 py-3 bg-accentBlue text-white font-semibold rounded-lg hover:bg-accentBlue/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path
                d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68Z"
              />
            </svg>
            Go Home
          </router-link>

          <button
            @click="goBack"
            class="flex items-center justify-center gap-2 px-6 py-3 bg-accentGold text-white font-semibold rounded-lg hover:bg-accentGold/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path
                d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
              />
            </svg>
            Go Back
          </button>
        </div>

        <!-- Quick Links -->
        <div class="pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-500 mb-4">Or explore these pages:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/about"
              class="text-accentBlue hover:text-accentGold transition-colors duration-300 font-medium"
            >
              About Us
            </router-link>
            <router-link
              to="/impact"
              class="text-accentBlue hover:text-accentGold transition-colors duration-300 font-medium"
            >
              Our Impact
            </router-link>
            <router-link
              to="/donate-us"
              class="text-accentBlue hover:text-accentGold transition-colors duration-300 font-medium"
            >
              Donate
            </router-link>
            <router-link
              to="/contact-us"
              class="text-accentBlue hover:text-accentGold transition-colors duration-300 font-medium"
            >
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional animations and effects */
.glasses-icon {
  transform-origin: center center;
}

/* Floating animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.glasses-icon {
  animation: float 3s ease-in-out infinite;
}
</style>
