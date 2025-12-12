<script setup>
import { onMounted } from 'vue'
import KpiGrid from '@/components/metrics/KpiGrid.vue'
import OperationalMetricsTable from '@/components/tables/OperationalMetricsTable.vue'
import GenderPieChart from '@/components/charts/GenderPieChart.vue'
import ChannelBarChart from '@/components/charts/ChannelBarChart.vue'
import AgeDistributionChart from '@/components/charts/AgeDistributionChart.vue'
import Timeline from '@/components/Timeline/Timeline.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-16 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl sm:text-5xl font-bold text-accentBlue mb-4 border-x-8 border-accentGold px-6 w-fit mx-auto"
        >
          Impact Metrics
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Tracking our progress in delivering affordable reading glasses and transforming lives
          across Ethiopia.
        </p>
      </div>

      <!-- KPI Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-accentBlue mb-6">Key Performance Indicators</h2>
        <KpiGrid />
      </section>

      <!-- Operational Metrics Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-accentBlue mb-6">Operational Metrics</h2>
        <OperationalMetricsTable />
      </section>

      <!-- Breakdown Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-accentBlue mb-6">Distribution Breakdown</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <GenderPieChart />
          <ChannelBarChart />
        </div>
        <div class="grid grid-cols-1">
          <AgeDistributionChart />
        </div>
      </section>

      <!-- Growth Timeline Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-accentBlue mb-6">Growth Projection</h2>
        <Timeline />
      </section>

      <!-- Call to Action -->
      <section class="text-center mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-accentBlue mb-4">Help Us Reach Our Goals</h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Your support enables us to distribute more reading glasses and empower communities across
          Ethiopia. Every donation makes a measurable impact.
        </p>
        <router-link
          to="/donate-us"
          class="inline-block bg-accentGold text-white font-semibold px-8 py-3 rounded-lg hover:bg-accentGold/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Donate Now
        </router-link>
      </section>
    </div>
  </div>
</template>
