import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbsend.com';

  const staticPages = [
    '',
    '/about',
    '/solutions',
    '/technology',
    '/security',
    '/partners',
    '/investors',
    '/insights',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}