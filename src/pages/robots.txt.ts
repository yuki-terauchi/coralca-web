import site from '../content/site.json';

export const GET = () => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site.meta.url).href}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
