/**
 * Resolves the absolute base URL for the portfolio across environments:
 * 1. Prefer VERCEL_PROJECT_PRODUCTION_URL (set on Vercel production deployments)
 * 2. Fall back to VERCEL_URL (set on Vercel preview/branch deployments)
 * 3. Fall back to local development (http://localhost:3000)
 */
export function getSiteUrl(): string {
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const rawUrl = vercelProductionUrl || vercelUrl;

  if (!rawUrl) {
    return 'http://localhost:3000';
  }

  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    return rawUrl.replace(/\/+$/, '');
  }

  const protocol = rawUrl.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${rawUrl}`.replace(/\/+$/, '');
}
