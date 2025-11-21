import { MetadataRoute } from 'next';

export async function GET() {
  const baseUrl = 'https://www.seha.foundation';
  
  // Define all the pages with their priorities and change frequencies
  const pages: Array<{ path: string; priority: number; changefreq: string }> = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/mission-vision', priority: 0.9, changefreq: 'monthly' },
    { path: '/why-seha', priority: 0.9, changefreq: 'monthly' },
    { path: '/programs', priority: 0.9, changefreq: 'weekly' },
    { path: '/fap', priority: 0.9, changefreq: 'weekly' },
    { path: '/get-involved', priority: 0.8, changefreq: 'monthly' },
    { path: '/donate', priority: 0.8, changefreq: 'monthly' },
    { path: '/volunteer', priority: 0.8, changefreq: 'monthly' },
    { path: '/events', priority: 0.7, changefreq: 'weekly' },
    { path: '/news', priority: 0.7, changefreq: 'daily' },
    { path: '/gallery', priority: 0.6, changefreq: 'monthly' },
    { path: '/resources', priority: 0.6, changefreq: 'monthly' },
    { path: '/careers', priority: 0.6, changefreq: 'monthly' },
    { path: '/annual-report', priority: 0.6, changefreq: 'yearly' },
    { path: '/impact', priority: 0.7, changefreq: 'monthly' },
    { path: '/contact', priority: 0.7, changefreq: 'yearly' },
    { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },
  ];

  const sitemapEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}