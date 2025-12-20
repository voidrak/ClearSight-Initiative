<script setup>
import { useSeo } from '@/composables/useSeo'
import { useSchema } from '@/composables/useSchema'
import { onMounted } from 'vue'
import { animate, stagger, inView } from 'motion-v'
import KpiGrid from '@/components/metrics/KpiGrid.vue'
import OperationalMetricsTable from '@/components/tables/OperationalMetricsTable.vue'
import GenderPieChart from '@/components/charts/GenderPieChart.vue'
import ChannelBarChart from '@/components/charts/ChannelBarChart.vue'
import AgeDistributionChart from '@/components/charts/AgeDistributionChart.vue'
import Timeline from '@/components/Timeline/Timeline.vue'

// Enhanced SEO for Impact page
useSeo({
  title: 'Our Impact',
  description:
    'Discover the impact of ClearSight Initiative. See how we are transforming lives through vision care services and eye health programs with measurable results.',
  keywords: 'impact, results, success stories, vision care impact, community health outcomes, metrics',
})

// Add Metric schema to highlight impact data
useSchema({
  type: 'metric',
  data: {
    name: 'ClearSight Initiative Impact Report',
    description:
      'Key metrics and results from our vision care programs in underserved communities across Ethiopia',
    metrics: [
      {
        name: 'People Screened',
        value: 5000,
        unit: 'individuals',
        description: 'Total number of people screened for vision problems',
      },
      {
        name: 'Glasses Distributed',
        value: 3200,
        unit: 'pairs',
        description: 'Reading and prescription glasses provided to community members',
      },
      {
        name: 'Communities Served',
        value: 25,
        unit: 'locations',
        description: 'Underserved communities reached with vision care services',
      },
      {
        name: 'Volunteers Engaged',
        value: 150,
        unit: 'volunteers',
        description: 'Dedicated volunteers supporting our mission',
      },
      {
        name: 'Lives Transformed',
        value: 2800,
        unit: 'individuals',
        description: 'People whose lives were improved through better vision',
      },
    ],
  },
})

onMounted(() => {
  window.scrollTo(0, 0)
})

onMounted(() => {
  inView(
    '.model-cards-container',
    (element) => {
      animate(
        '.model-card',
        {
          opacity: 1,
          y: [50, 0],
        },
        {
          delay: stagger(0.3),
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        },
      )
    },
    {
      amount: 0.6,
    },
  )
})
</script>

<template>
  <div class="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mb-16">
    <div class="flex items-center justify-center mb-8">
      <div class="text-center px-4 sm:px-8 md:px-16 mx-auto">
        <!-- Title -->
        <h1
          class="text-3xl border-x-8 px-4 border-accentGold sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accentBlue mb-6 sm:mb-8 pb-2">
          Our Impact in Numbers
        </h1>

        <!-- Description -->
        <p class="xl:text-lg text-accentBlue leading-relaxed max-w-3xl mx-auto text-sm">
          From our pilot in Tigray to teacher campaigns across Ethiopia, we've screened over 1,700
          adults and distributed 1,200 reading glasses. Our data-driven approach ensures sustainable
          impact, reaching those who need it most—where 58% live on less than $2.15 per day.
          Explore the metrics that drive our mission forward.
        </p>
      </div>
    </div>

    <!-- Operational Metrics Section -->
    <div class="bg-gray-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-2xl border-x-8 px-4 border-accentGold w-fit mx-auto text-center sm:text-3xl font-bold text-accentBlue mb-4">
            Operational Metrics
          </h2>
        </div>
        <OperationalMetricsTable />
      </div>
    </div>

    <!-- Distribution Breakdown Section -->
    <div class="bg-white py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-2xl border-x-8 px-4 border-accentGold w-fit mx-auto text-center sm:text-3xl font-bold text-accentBlue mb-4">
            Distribution Breakdown
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <GenderPieChart />
          <ChannelBarChart />
        </div>
        <div class="grid grid-cols-1">
          <AgeDistributionChart />
        </div>
      </div>
    </div>

    <!-- Growth Projection Timeline Section -->
    <div class="bg-gray-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-2xl border-x-8 px-4 border-accentGold w-fit mx-auto text-center sm:text-3xl font-bold text-accentBlue mb-4">
            Growth Projection
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our roadmap to reaching 100,000 beneficiaries by 2030
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  </div>
</template>
