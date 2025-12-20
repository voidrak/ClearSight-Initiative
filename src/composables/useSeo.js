import { useHead } from '@vueuse/head'
import { defaultSeoConfig, getFullTitle, getCanonicalUrl } from '../config/seo'

/**
 * Composable for managing SEO meta tags including Open Graph and Twitter Cards
 * When called in a component, this OVERRIDES the router-level SEO defaults
 * 
 * @param {Object} seoData - SEO configuration object
 * @param {string} seoData.title - Page title (will be suffixed with site name)
 * @param {string} seoData.description - Meta description
 * @param {string} seoData.keywords - Meta keywords (comma-separated)
 * @param {string} seoData.canonical - Canonical URL (optional, auto-generated if not provided)
 * @param {string} seoData.ogTitle - Open Graph title (falls back to title)
 * @param {string} seoData.ogDescription - Open Graph description (falls back to description)
 * @param {string} seoData.ogImage - Open Graph image URL (falls back to default)
 * @param {string} seoData.twitterCard - Twitter card type (summary or summary_large_image)
 * @param {string} seoData.twitterTitle - Twitter title (falls back to ogTitle)
 * @param {string} seoData.twitterDescription - Twitter description (falls back to ogDescription)
 * @param {string} seoData.twitterImage - Twitter image URL (falls back to ogImage)
 */
export function useSeo(seoData = {}) {
  const {
    title = defaultSeoConfig.title,
    description = defaultSeoConfig.description,
    keywords = defaultSeoConfig.keywords,
    canonical = '',
    // Open Graph
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
    // Twitter Cards
    twitterCard = 'summary_large_image',
    twitterTitle = '',
    twitterDescription = '',
    twitterImage = '',
  } = seoData

  // Build full title
  const fullTitle = getFullTitle(title)

  // Fallback logic for Open Graph
  const finalOgTitle = ogTitle || fullTitle
  const finalOgDescription = ogDescription || description
  const finalOgImage = ogImage || defaultSeoConfig.ogImage

  // Fallback logic for Twitter Cards (Twitter falls back to OG)
  const finalTwitterTitle = twitterTitle || finalOgTitle
  const finalTwitterDescription = twitterDescription || finalOgDescription
  const finalTwitterImage = twitterImage || finalOgImage

  // Build meta tags array
  const metaTags = [
    // Standard meta tags
    {
      name: 'description',
      content: description,
    },
  ]

  // Add keywords if provided
  if (keywords) {
    metaTags.push({
      name: 'keywords',
      content: keywords,
    })
  }

  // Open Graph meta tags
  metaTags.push(
    { property: 'og:title', content: finalOgTitle },
    { property: 'og:description', content: finalOgDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: defaultSeoConfig.siteName },
  )

  // Add OG image if available
  if (finalOgImage) {
    metaTags.push({ property: 'og:image', content: finalOgImage })
  }

  // Add OG URL (canonical)
  if (canonical) {
    metaTags.push({ property: 'og:url', content: canonical })
  }

  // Twitter Card meta tags
  metaTags.push(
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: finalTwitterTitle },
    { name: 'twitter:description', content: finalTwitterDescription },
  )

  // Add Twitter handle if configured
  if (defaultSeoConfig.twitterHandle) {
    metaTags.push({ name: 'twitter:site', content: defaultSeoConfig.twitterHandle })
  }

  // Add Twitter image if available
  if (finalTwitterImage) {
    metaTags.push({ name: 'twitter:image', content: finalTwitterImage })
  }

  // Build link tags
  const linkTags = []

  // Add canonical URL if provided
  if (canonical) {
    linkTags.push({
      rel: 'canonical',
      href: canonical,
    })
  }

  useHead({
    title: fullTitle,
    meta: metaTags,
    link: linkTags,
  })
}
