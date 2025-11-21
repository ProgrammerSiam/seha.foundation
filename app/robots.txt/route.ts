export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.seha.foundation/sitemap.xml

User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /private/`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}