<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  labels: {
    type: Array,
    default: () => ['Female', 'Male'],
  },
  data: {
    type: Array,
    default: () => [612, 588],
  },
})

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d')

    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            backgroundColor: ['#D4AF37', '#1E40AF'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0)
                const value = context.parsed
                const percentage = ((value / total) * 100).toFixed(0)
                return `${context.label}: ${value} (${percentage}%)`
              },
            },
          },
        },
      },
    })
  }
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
    <h3 class="text-xl font-semibold text-accentBlue mb-6">Gender Distribution</h3>
    <div class="max-w-md mx-auto">
      <canvas ref="chartRef"></canvas>
    </div>
    <div class="mt-6 text-center text-sm text-gray-600">
      <p>Female: <span class="font-semibold text-accentGold">612 (51%)</span></p>
      <p>Male: <span class="font-semibold text-accentBlue">588 (49%)</span></p>
    </div>
  </div>
</template>
