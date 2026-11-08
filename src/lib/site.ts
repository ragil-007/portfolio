/**
 * Canonical site URL configuration.
 *
 * Permanent production canonical URL: https://ragilkp.online
 * Local development URL: http://localhost:3000
 *
 * Note: Vercel deployment URLs (VERCEL_URL, VERCEL_PROJECT_PRODUCTION_URL) are
 * intentionally NOT used as canonical or sitemap URLs to prevent search engine
 * indexing errors on Google Search Console.
 */
export const CANONICAL_SITE_URL = 'https://ragilkp.online';
export const LOCAL_DEV_URL = 'http://localhost:3000';

export function getSiteUrl(): string {
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_SITE_URL || LOCAL_DEV_URL;
  }
  return CANONICAL_SITE_URL;
}
