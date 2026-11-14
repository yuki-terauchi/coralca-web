import { privacyMarkdown } from '../lib/markdown';
export const GET = () =>
  new Response(privacyMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
