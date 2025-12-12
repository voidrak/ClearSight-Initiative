<script setup>
const props = defineProps({
  year: {
    type: [String, Number],
    required: true,
  },
  beneficiaries: {
    type: String,
    required: true,
  },
  netCost: {
    type: String,
    required: true,
  },
  fundingModel: {
    type: String,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="relative flex flex-col items-center">
    <!-- Timeline Dot -->
    <div class="relative z-10">
      <div
        class="w-16 h-16 bg-accentGold rounded-full flex items-center justify-center shadow-lg border-4 border-white"
      >
        <span class="text-white font-bold text-sm">{{ year }}</span>
      </div>
    </div>

    <!-- Connecting Line (Desktop) -->
    <div
      v-if="!isLast"
      class="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-accentGold to-accentBlue"
      style="transform: translateY(-50%)"
    ></div>

    <!-- Content Card -->
    <div
      class="mt-6 bg-white rounded-xl shadow-md p-6 w-full max-w-xs border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div class="space-y-3">
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Beneficiaries</p>
          <p class="text-2xl font-bold text-accentBlue">{{ beneficiaries }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Net Cost</p>
          <p class="text-xl font-semibold text-accentGold">{{ netCost }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Funding Model</p>
          <p class="text-sm text-gray-700 leading-relaxed">{{ fundingModel }}</p>
        </div>
      </div>
    </div>

    <!-- Connecting Line (Mobile) -->
    <div
      v-if="!isLast"
      class="lg:hidden w-0.5 h-12 bg-gradient-to-b from-accentGold to-accentBlue my-4"
    ></div>
  </div>
</template>
