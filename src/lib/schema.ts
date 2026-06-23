/**
 * JSON-LD structured data builders (schema.org).
 * All absolute URLs derive from SITE_URL (see lib/site.ts) so they update in one
 * place when the final domain is set.
 *
 * Data is pulled from existing content (data/pricing, data/faq) — nothing invented.
 */
import { plans } from '@/data/pricing'
import { faqs } from '@/data/faq'
import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_DESCRIPTION,
  COACH_NAME,
  INSTAGRAM_URL,
  absoluteUrl,
} from '@/lib/site'

const ORG_ID = `${SITE_URL}/#organization`
const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const SERVICE_ID = `${SITE_URL}/#service`

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/images/logos/nutz-logo.png'),
  description: SITE_DESCRIPTION,
  founder: { '@id': PERSON_ID },
  sameAs: [INSTAGRAM_URL],
}

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: COACH_NAME,
  jobTitle: 'מאמן קליסטניקס ומאמן אישי',
  description:
    'מאמן קליסטניקס עם 14+ שנות ניסיון, מתחרה (מקום 3 בארץ 2022), עם רקע בספורטתרפיה ובטיפולים ידניים. מעביר תהליכי קליסטניקס אונליין 1:1.',
  worksFor: { '@id': ORG_ID },
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
  knowsAbout: ['קליסטניקס', 'אימון אישי', 'ספורטתרפיה', 'טיפולים ידניים', 'תזונה'],
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'he',
  publisher: { '@id': ORG_ID },
}

/** Global graph — Organization + Person + WebSite (rendered in root layout). */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [organization, person, website],
}

/** Service + Offers (rendered on the method/pricing page). */
export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': SERVICE_ID,
  name: 'ליווי קליסטניקס אונליין 1:1',
  serviceType: 'אימון קליסטניקס אונליין',
  description:
    'ליווי קליסטניקס אונליין 1:1 הכולל תוכנית אימון מותאמת אישית, שיעורי וידאו 1:1, ומעקב צמוד מרחוק.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'Israel' },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: absoluteUrl('/contact'),
  },
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    name: plan.title,
    description: plan.subtitle,
    price: plan.price,
    priceCurrency: 'ILS',
    url: absoluteUrl('/contact'),
    availability: 'https://schema.org/InStock',
  })),
}

/** FAQPage — all 18 Q&As (rendered on the /faq page). */
export const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/faq#faqpage`,
  inLanguage: 'he',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}
