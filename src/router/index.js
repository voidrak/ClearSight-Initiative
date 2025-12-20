import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from '@vueuse/head'
import HomeView from '../views/HomeView.vue'
import { defaultSeoConfig, getFullTitle, getCanonicalUrl } from '../config/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
        description:
          'ClearSight Initiative is a nonprofit organization committed to providing accessible vision care and promoting eye health awareness in underserved communities worldwide.',
        keywords: 'vision care, eye health, nonprofit, community health, eye care services, ClearSight',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        title: 'About Us',
        description:
          'Learn about ClearSight Initiative, our mission to bring sight, dignity, and opportunity to underserved communities across Ethiopia through accessible vision care.',
        keywords: 'about ClearSight, nonprofit mission, Ethiopia eye care, vision care Ethiopia',
        // Example: Add Open Graph image for this route
        ogImage: '/public/aboutUsGlasses.png',
        ogDescription:
          'Discover our mission to transform lives through vision care. ClearSight Initiative brings sight, dignity, and opportunity to underserved communities in Ethiopia.',
      },
    },
    {
      path: '/donate-us',
      name: 'Donate',
      component: () => import('../views/DonationView.vue'),
      meta: {
        title: 'Donate',
        description:
          'Support our mission to provide vision care to underserved communities. Your donation helps us bring sight and opportunity to those in need.',
        keywords: 'donate, support, nonprofit donation, help vision care, charity',
        // Example: Custom Twitter Card for donation page
        twitterCard: 'summary_large_image',
        twitterTitle: 'Help Us Restore Sight - Donate to ClearSight Initiative',
        twitterDescription:
          'Your donation transforms lives. Support vision care for underserved communities in Ethiopia.',
      },
    },
    {
      path: '/impact',
      name: 'Impact',
      component: () => import('../views/ImpactPage.vue'),
      meta: {
        title: 'Our Impact',
        description:
          'Discover the impact of ClearSight Initiative. See how we are transforming lives through vision care services and eye health programs.',
        keywords: 'impact, results, success stories, vision care impact, community health outcomes',
      },
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: () => import('../views/ContactUsPage.vue'),
      meta: {
        title: 'Contact Us',
        description:
          'Get in touch with ClearSight Initiative. Reach out for partnerships, volunteering opportunities, or to learn more about our vision care programs.',
        keywords: 'contact, get in touch, reach out, partnership, volunteer',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundPage.vue'),
      meta: {
        title: 'Page Not Found',
        description: 'The page you are looking for could not be found.',
      },
    },
  ],
})

// Global SEO fallback using router afterEach hook
router.afterEach((to) => {
  // Get SEO data from route meta or use defaults
  const title = to.meta.title || defaultSeoConfig.title
  const description = to.meta.description || defaultSeoConfig.description
  const keywords = to.meta.keywords || defaultSeoConfig.keywords

  // Get Open Graph data from route meta or use defaults
  const ogTitle = to.meta.ogTitle || getFullTitle(title)
  const ogDescription = to.meta.ogDescription || description
  const ogImage = to.meta.ogImage || defaultSeoConfig.ogImage

  // Get Twitter Card data from route meta or fall back to OG
  const twitterCard = to.meta.twitterCard || 'summary_large_image'
  const twitterTitle = to.meta.twitterTitle || ogTitle
  const twitterDescription = to.meta.twitterDescription || ogDescription
  const twitterImage = to.meta.twitterImage || ogImage

  // Build canonical URL
  const canonicalUrl = getCanonicalUrl(to.path)

  // Build meta tags array
  const metaTags = [
    // Standard meta tags
    {
      name: 'description',
      content: description,
    },
  ]

  // Add keywords if available
  if (keywords) {
    metaTags.push({
      name: 'keywords',
      content: keywords,
    })
  }

  // Open Graph meta tags
  metaTags.push(
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:site_name', content: defaultSeoConfig.siteName },
  )

  // Add OG image if available
  if (ogImage) {
    metaTags.push({ property: 'og:image', content: ogImage })
  }

  // Twitter Card meta tags
  metaTags.push(
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: twitterTitle },
    { name: 'twitter:description', content: twitterDescription },
  )

  // Add Twitter handle if configured
  if (defaultSeoConfig.twitterHandle) {
    metaTags.push({ name: 'twitter:site', content: defaultSeoConfig.twitterHandle })
  }

  // Add Twitter image if available
  if (twitterImage) {
    metaTags.push({ name: 'twitter:image', content: twitterImage })
  }

  // Build link tags for canonical URL
  const linkTags = [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ]

  // Apply SEO updates to document head
  // Note: This will be overridden if a page uses useSeo() composable
  useHead({
    title: getFullTitle(title),
    meta: metaTags,
    link: linkTags,
  })
})

export default router
