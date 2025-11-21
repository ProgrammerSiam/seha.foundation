import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.seha.foundation';
  
  const routes = [
    '',
    '/why-seha',
    '/mission-vision',
    '/programs',
    '/fap',
    '/get-involved',
    '/donate',
    '/volunteer',
    '/careers',
    '/events',
    '/annual-report',
    '/gallery',
    '/resources',
    '/news',
    '/contact',
    '/impact',
    '/sitemap',
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/contact' 
      ? 'weekly' 
      : route.includes('news') || route.includes('events') 
        ? 'daily' 
        : route.includes('annual-report') 
          ? 'yearly' 
          : 'monthly',
    priority: route === '' 
      ? 1.0 
      : route === '/contact' || route === '/programs' 
        ? 0.9 
        : route.includes('news') || route.includes('events') 
          ? 0.8 
          : route === '/sitemap' 
            ? 0.5 
            : 0.7,
  }));
}