<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  labels: {
    type: Array,
    default: () => ['40-49', '50-59', '60-69', '70+'],
  },
  data: {
    type: Array,
    default: () => [504, 252, 180, 156],
  },
  percentages: {
    type: Array,
    default: () => [42, 21, 15, 13],
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
            label: 'Beneficiaries',
            data: props.data,
            backgroundColor: '#1E40AF',
            borderColor: '#1E40AF',
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
                const index = context.dataIndex
                const percentage = props.percentages[index]
                return `${context.parsed.y} beneficiaries (${percentage}%)`
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
    <h3 class="text-xl font-semibold text-accentBlue mb-6">Age Distribution</h3>
    <div>
      <canvas ref="chartRef"></canvas>
    </div>
    <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
      <div v-for="(label, index) in labels" :key="index" class="text-center">
        <p class="font-semibold text-accentBlue">{{ label }}</p>
        <p>{{ data[index] }} ({{ percentages[index] }}%)</p>
      </div>
    </div>
  </div>
</template>
