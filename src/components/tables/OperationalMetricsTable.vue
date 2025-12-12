<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { metric: 'Service delivery points active', result: '7 (0% attrition)' },
      { metric: 'People trained to screen & distribute', result: '10' },
      { metric: '% trained meeting competency standards', result: '80%' },
      { metric: 'Glasses distributed (paid vs free)', result: '100% paid' },
      { metric: 'Stockouts of any diopter', result: '1 site × 5 days' },
    ],
  },
})

const sortKey = ref('metric')
const sortOrder = ref('asc')

const sortedData = computed(() => {
  const data = [...props.data]
  return data.sort((a, b) => {
    let aVal = a[sortKey.value]
    let bVal = b[sortKey.value]

    if (sortOrder.value === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })
})

const sort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const downloadMetrics = () => {
  // Download PDF from public folder
  const link = document.createElement('a')
  link.href = '/ClearSight Initiative Monitoring Metrics Report.pdf'
  link.download = 'ClearSight Initiative Monitoring Metrics Report.pdf'
  link.click()
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <!-- Desktop Table -->
    <div class="hidden md:block overflow-x-auto">
      <table class="w-full">
        <thead class="bg-accentBlue text-white">
          <tr>
            <th
              class="px-6 py-4 text-left text-sm font-semibold cursor-pointer hover:bg-accentBlue/90 transition-colors"
              @click="sort('metric')"
            >
              <div class="flex items-center gap-2">
                Metric
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                  :class="{
                    'rotate-180': sortKey === 'metric' && sortOrder === 'desc',
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </th>
            <th
              class="px-6 py-4 text-left text-sm font-semibold cursor-pointer hover:bg-accentBlue/90 transition-colors"
              @click="sort('result')"
            >
              <div class="flex items-center gap-2">
                Result
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                  :class="{
                    'rotate-180': sortKey === 'result' && sortOrder === 'desc',
                  }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(row, index) in sortedData"
            :key="index"
            class="hover:bg-gray-50 transition-colors"
          >
            <td class="px-6 py-4 text-sm text-gray-900">{{ row.metric }}</td>
            <td class="px-6 py-4 text-sm font-semibold text-accentBlue">{{ row.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Stacked Layout -->
    <div class="md:hidden divide-y divide-gray-200">
      <div v-for="(row, index) in sortedData" :key="index" class="p-4 hover:bg-gray-50">
        <div class="text-sm font-semibold text-gray-900 mb-2">{{ row.metric }}</div>
        <div class="text-lg font-bold text-accentBlue">{{ row.result }}</div>
      </div>
    </div>

    <!-- Footnote -->
    <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <p class="text-xs text-gray-600 italic">
        All data from Tigray pilot + Dec 2025 teacher campaign. Full report available as
        downloadable Excel.
      </p>
    </div>
  </div>

  <!-- Download Button -->
  <div class="mt-6 text-center">
    <button
      @click="downloadMetrics"
      class="inline-flex items-center gap-2 cursor-pointer bg-accentGold text-white font-semibold px-6 py-3 rounded-lg hover:bg-accentGold/90 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      Download Full Monitoring Metrics
      <span class="text-lg">→</span>
    </button>
  </div>
</template>
