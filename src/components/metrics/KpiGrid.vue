<script setup>
import KpiCard from './KpiCard.vue'

const props = defineProps({
  metrics: {
    type: Array,
    default: () => [
      {
        value: '1,700',
        label: 'Adults 40+ screened',
        icon: 'users',
      },
      {
        value: '1,200',
        label: 'Reading glasses distributed (all $5 paid)',
        icon: 'glasses',
      },
      {
        value: '$14.75',
        label: 'Net donor cost per beneficiary',
        icon: 'currency',
      },
      {
        value: '58%',
        label: 'Living on <$2.15/day',
        icon: 'chart',
      },
      {
        value: '43%',
        label: 'Sustained wear rate',
        icon: 'check',
      },
      {
        value: '15%',
        label: 'Repeat purchases',
        icon: 'repeat',
      },
    ],
  },
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <KpiCard
      v-for="(metric, index) in metrics"
      :key="index"
      :value="metric.value"
      :label="metric.label"
      :icon="metric.icon"
    />
  </div>
</template>
