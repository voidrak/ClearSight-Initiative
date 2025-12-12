<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  labels: {
    type: Array,
    default: () => [
      'Pharmacies',
      'Health Centers',
      'Faith Venues',
      'Micro-entrepreneurs',
      'Teachers',
    ],
  },
  data: {
    type: Array,
    default: () => [380, 275, 220, 175, 200],
  },
})

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d')

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: props.labels,
        datasets: [
          {
            label: 'Glasses Distributed',
            data: props.data,
            backgroundColor: '#D4AF37',
            borderColor: '#D4AF37',
            borderWidth: 1,
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `Distributed: ${context.parsed.y}`
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 12,
              },
            },
            grid: {
              color: '#f3f4f6',
            },
          },
          x: {
            ticks: {
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
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
    <h3 class="text-xl font-semibold text-accentBlue mb-6">Distribution by Channel</h3>
    <div>
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>
