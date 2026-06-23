/**
 * Central site config — single source of truth for absolute URLs and brand data.
 *
 * ⚠️ SITE_URL is a PLACEHOLDER. Replace with the final production domain on
 * deploy — every absolute URL (schema @id, sitemap, canonical, OG) derives from
 * it, so changing this one line updates them all.
 */
export const SITE_URL = 'https://www.nutz.co.il' // TODO: replace with final domain on deploy

export const SITE_NAME = 'NUTZ Calisthenics'
export const SITE_SHORT_NAME = 'NUTZ'
export const SITE_DESCRIPTION =
  'ליווי ואימון קליסטניקס אונליין 1:1 עם ליאב ברודש — שיטה אישית, מרחוק.'

export const COACH_NAME = 'ליאב ברודש'
export const CONTACT_EMAIL = 'egozcali@gmail.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/liavbrodash'
export const LOGO_PATH = '/images/logos/nutz-logo.png'

/** Build an absolute URL from a path, using the (updatable) SITE_URL. */
export function absoluteUrl(path = ''): string {
  if (!path) return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
