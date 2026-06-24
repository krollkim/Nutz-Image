import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

// All public routes. URLs derive from SITE_URL (lib/site.ts) via absoluteUrl().
const routes = [
  '/',
  '/method',
  '/results',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
