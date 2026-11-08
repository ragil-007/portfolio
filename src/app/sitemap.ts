import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl.replace(/\/+$/, '')}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
