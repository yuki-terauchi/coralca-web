// site.json から AI 向けの Markdown を生成する。
// 「AI向け」タブ・/index.md・/privacy.md・/llms.txt はすべてここを通すので、文言は site.json だけ直せばよい。
import site from '../content/site.json';

const abs = (path: string) => new URL(path, site.meta.url).toString();

export function homeMarkdown(): string {
  const s = site;
  const lines: string[] = [];
  lines.push(`# ${s.meta.siteName}`, '', `> ${s.hero.catch}`, '', s.hero.sub, '');

  lines.push(`## ${s.services.topic}`, '', s.services.heading, '');
  s.services.items.forEach((it, i) => {
    lines.push(`${i + 1}. **${it.title}** — ${it.body}`);
  });
  lines.push('');

  lines.push(`## ${s.issues.topic}`, '', s.issues.heading, '');
  lines.push(`| ${s.issues.beforeLabel} | ${s.issues.afterLabel} |`, '|---|---|');
  s.issues.items.forEach((it) => lines.push(`| ${it.before} | ${it.after} |`));
  lines.push('');

  lines.push(`## ${s.company.topic}`, '', '| 項目 | 内容 |', '|---|---|');
  s.company.rows.forEach((r) => lines.push(`| ${r.label} | ${r.value} |`));
  lines.push('');

  lines.push(`## ${s.contact.topic}`, '', `${s.contact.heading}。${s.contact.body}`, '');
  lines.push(`- お問い合わせフォーム: ${s.contact.formUrl}`);
  lines.push(`- プライバシーポリシー: ${abs('/privacy.md')}`);
  lines.push('');
  return lines.join('\n');
}

export function privacyMarkdown(): string {
  const p = site.privacy;
  const lines = [`# ${p.title}`, '', p.enacted, '', p.intro, ''];
  p.sections.forEach((sec) => lines.push(`## ${sec.heading}`, '', sec.body, ''));
  return lines.join('\n');
}

export function llmsTxt(): string {
  const s = site;
  return [
    `# ${s.meta.siteName}`,
    '',
    `> ${s.meta.description}`,
    '',
    '## Pages',
    '',
    `- [トップ（Markdown）](${abs('/index.md')}): 事業内容・解決できる課題・会社概要・お問い合わせ`,
    `- [プライバシーポリシー（Markdown）](${abs('/privacy.md')})`,
    '',
    '## Contact',
    '',
    `- [お問い合わせフォーム](${s.contact.formUrl})`,
    '',
  ].join('\n');
}
