<script setup>
import TimelineItem from './TimelineItem.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      {
        year: '2025',
        beneficiaries: '1,200',
        netCost: '$14.75',
        fundingModel: 'Grant + user fees',
      },
      {
        year: '2026',
        beneficiaries: '10,000+',
        netCost: '<$12',
        fundingModel: 'Last Mile 32k + user fees',
      },
      {
        year: '2027',
        beneficiaries: '30,000+',
        netCost: '<$10',
        fundingModel: 'Fully self-financed stock',
      },
      {
        year: '2030',
        beneficiaries: '100,000',
        netCost: '<$8',
        fundingModel: 'Local frames + self-financing',
      },
    ],
  },
})
</script>

<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
    <!-- Desktop: Horizontal Layout -->
    <div class="hidden lg:grid lg:grid-cols-4 gap-8 relative">
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :year="item.year"
        :beneficiaries="item.beneficiaries"
        :net-cost="item.netCost"
        :funding-model="item.fundingModel"
        :is-last="index === items.length - 1"
      />
    </div>

    <!-- Mobile/Tablet: Vertical Layout -->
    <div class="lg:hidden flex flex-col items-center">
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :year="item.year"
        :beneficiaries="item.beneficiaries"
        :net-cost="item.netCost"
        :funding-model="item.fundingModel"
        :is-last="index === items.length - 1"
      />
    </div>
  </div>
</template>
