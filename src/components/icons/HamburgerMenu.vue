<script setup>
const props = defineProps({
  class: String,
})
</script>

<template>
  <svg :class="class" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 0.75H29V4.375H0V0.75ZM7.25 9.8125H29V13.4375H7.25V9.8125ZM16.3125 18.875H29V22.5H16.3125V18.875Z"
      fill="#1F3C88"
    />
  </svg>
</template>
