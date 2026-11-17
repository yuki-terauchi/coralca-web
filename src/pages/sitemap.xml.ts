import site from '../content/site.json';

const pages = ['/', '/privacy/'];
const urls = pages.map((path) => `  <url><loc>${new URL(path, site.meta.url).href}</loc></url>`);

export const GET = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
