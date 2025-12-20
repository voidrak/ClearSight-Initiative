/**
 * Sitemap Generator Utility
 * Automatically generates sitemap.xml from Vue Router routes
 * 
 * Usage:
 * 1. Run manually: node scripts/generate-sitemap.js
 * 2. Add to package.json: "generate:sitemap": "node scripts/generate-sitemap.js"
 * 3. Run before build: "prebuild": "npm run generate:sitemap"
 */

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Configuration
const SITE_URL = ' https://clearsightinitiative.org'
const OUTPUT_PATH = resolve(__dirname, '../public/sitemap.xml')

// Define your routes with metadata
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/donate-us',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/impact',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    path: '/contact-us',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  // Add more routes here as needed
  // Example for dynamic routes (news articles):
  // {
  //   path: '/news/article-slug',
  //   priority: 0.6,
  //   changefreq: 'monthly',
  //   lastmod: '2025-12-20',
  // },
]

/**
 * Generate XML sitemap
 */
function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
      .map(
        (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
      )
      .join('')}
</urlset>
`

  try {
    writeFileSync(OUTPUT_PATH, xml.trim())
    console.log('✅ Sitemap generated successfully!')
    console.log(`📍 Location: ${OUTPUT_PATH}`)
    console.log(`📊 Total URLs: ${routes.length}`)
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

// Run the generator
generateSitemap()
