/**
 * Default SEO configuration for the ClearSight Initiative website
 * These values are used as fallbacks when route-specific meta or page-level SEO is not provided
 */
export const defaultSeoConfig = {
  title: 'ClearSight Initiative',
  description:
    'ClearSight Initiative - A nonprofit organization dedicated to improving vision care and eye health awareness in underserved communities.',
  keywords: 'vision care, eye health, nonprofit, community health, Ethiopia, eye care services',
  siteName: 'ClearSight Initiative',
  siteUrl: ' https://clearsightinitiative.org',
  ogImage: '/heroImage.webp',
  twitterHandle: '@thedprize', // TODO: Replace with your Twitter handle
}

/**
 * Organization data for Schema.org structured data
 * Used for nonprofit/organization JSON-LD markup
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'ClearSight Initiative',
  alternateName: 'ClearSight',
  url: ' https://clearsightinitiative.org',

  logo: ' https://clearsightinitiative.org/logo.png',
  description:
    'A nonprofit organization dedicated to improving vision care and eye health awareness in underserved communities.',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ET', // Ethiopia
    addressLocality: 'Mekelle',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'General Inquiries',
    email: 'correctingagingeyes@clearsightinitiative.org',
  },
  sameAs: [
    'https://et.linkedin.com/in/dr-araya-yirga-aab264126',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Ethiopia',
  },
}

/**
 * Generate full page title with site name
 * @param {string} pageTitle - The specific page title
 * @returns {string} - Full title with site name
 */
export function getFullTitle(pageTitle) {
  if (!pageTitle || pageTitle === defaultSeoConfig.title) {
    return defaultSeoConfig.title
  }
  return `${pageTitle} - ${defaultSeoConfig.siteName}`
}

/**
 * Generate canonical URL for a given path
 * @param {string} path - The route path
 * @returns {string} - Full canonical URL
 */
export function getCanonicalUrl(path) {
  // Remove trailing slash unless it's the root path
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '')
  return `${defaultSeoConfig.siteUrl}${cleanPath}`
}
