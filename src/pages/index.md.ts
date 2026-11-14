import { homeMarkdown } from '../lib/markdown';
export const GET = () =>
  new Response(homeMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
