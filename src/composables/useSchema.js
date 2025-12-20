import { useHead } from '@vueuse/head'
import { organizationSchema, defaultSeoConfig } from '../config/seo'

/**
 * Composable for managing Schema.org structured data (JSON-LD)
 * Injects JSON-LD scripts into the document head for enhanced SEO
 *
 * @param {Object} schemaData - Schema configuration object
 * @param {string} schemaData.type - Schema type: 'organization', 'article', or 'metric'
 * @param {Object} schemaData.data - Schema-specific data (overrides defaults)
 */
export function useSchema(schemaData = {}) {
  const { type = 'organization', data = {} } = schemaData

  let schema = null

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema(data)
      break
    case 'article':
      schema = generateArticleSchema(data)
      break
    case 'metric':
      schema = generateMetricSchema(data)
      break
    default:
      console.warn(`Unknown schema type: ${type}`)
      return
  }

  if (schema) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schema),
        },
      ],
    })
  }
}

/**
 * Generate Organization / Nonprofit schema
 * @param {Object} overrides - Custom organization data
 * @returns {Object} - Organization JSON-LD
 */
function generateOrganizationSchema(overrides = {}) {
  return {
    ...organizationSchema,
    ...overrides,
    // Ensure @context and @type are always present
    '@context': 'https://schema.org',
    '@type': overrides['@type'] || 'NGO',
  }
}

/**
 * Generate WebPage / Article schema
 * @param {Object} data - Article data
 * @param {string} data.headline - Article title
 * @param {string} data.description - Article description
 * @param {string} data.url - Article URL
 * @param {string} data.datePublished - ISO 8601 date string
 * @param {string} data.dateModified - ISO 8601 date string
 * @param {string} data.author - Author name
 * @param {string} data.image - Article image URL
 * @returns {Object} - Article JSON-LD
 */
function generateArticleSchema(data = {}) {
  const {
    headline = defaultSeoConfig.title,
    description = defaultSeoConfig.description,
    url = defaultSeoConfig.siteUrl,
    datePublished = new Date().toISOString(),
    dateModified = new Date().toISOString(),
    author = defaultSeoConfig.siteName,
    image = defaultSeoConfig.ogImage,
  } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
      url: organizationSchema.url,
    },
    publisher: {
      '@type': 'Organization',
      name: organizationSchema.name,
      logo: {
        '@type': 'ImageObject',
        url: organizationSchema.logo,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

/**
 * Generate custom Metric / Impact schema
 * Uses schema.org with custom properties to highlight nonprofit impact
 * @param {Object} data - Metric data
 * @param {string} data.name - Metric name
 * @param {string} data.description - Metric description
 * @param {Array} data.metrics - Array of metric objects
 * @returns {Object} - Custom metric JSON-LD
 */
function generateMetricSchema(data = {}) {
  const {
    name = 'Impact Metrics',
    description = 'Key results and impact metrics from our vision care programs',
    metrics = [],
  } = data

  // Build achievement items from metrics
  const achievements = metrics.map((metric) => ({
    '@type': 'QuantitativeValue',
    name: metric.name || 'Metric',
    value: metric.value || 0,
    unitText: metric.unit || '',
    description: metric.description || '',
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Report',
    name,
    description,
    about: {
      '@type': 'Thing',
      name: 'Vision Care Impact',
      description: 'Impact of vision care programs in underserved communities',
    },
    publisher: {
      '@type': 'Organization',
      name: organizationSchema.name,
      url: organizationSchema.url,
    },
    datePublished: new Date().toISOString(),
    // Custom property to highlight key metrics
    mainEntity: achievements.length > 0 ? achievements : undefined,
  }
}
