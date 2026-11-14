# coralca-web — Coralca株式会社 コーポレートサイト

公開URL：https://coralca.co.jp （GitHub Pages）
要件・決定事項の正本：`claude-agent` リポジトリの `Coralca/projects/website/REQUIREMENTS.md`

## 文言を直すとき（ほとんどの依頼はこれ）

1. `src/content/site.json` だけを編集する。人向けページ・AI向けタブ・`/index.md`・`/privacy.md`・`/llms.txt` はすべてここから生成される
2. `npm run build` が通ることを確認
3. `main` に commit → push すると GitHub Actions が自動で公開する（1〜2分）

## 構成

| パス | 役割 |
|---|---|
| `src/content/site.json` | 文言・会社情報・フォームURL（唯一の正本） |
| `src/lib/markdown.ts` | site.json → Markdown / llms.txt の生成 |
| `src/layouts/Base.astro` | ヘッダー・人向け／AI向けタブ・フッター |
| `src/pages/index.astro` / `privacy.astro` | 人向けページ |
| `src/pages/*.md.ts` / `llms.txt.ts` | AI向けの機械可読ファイル |
| `src/styles/global.css` | デザイントークンと全スタイル |
| `public/` | ロゴ（正式データ）・favicon・OGP画像・CNAME |
| `.github/workflows/deploy.yml` | push → build → GitHub Pages |

## デザイン規範（崩さないこと）

- 色：ロゴの濃紺 `#0b1d33` と濃淡・グレー。強調色はロゴのコーラル `#ffa07a` を1画面1箇所まで。白地の文字にコーラルを使わない（コントラスト不足）。赤・緑・黄・金は使わない
- 「AIっぽい」部品を使わない：角丸＋影のカード、同寸カードの横並び、アイコン＋見出し、グラデーション、絵文字
- 見出しは体言止め・句点なし。「圧倒的」「最適」等の修飾語・「！」を使わない
- 列挙は表（行＝項目）。課題→解決はビフォー／アフター表
- アクセシビリティ（デジタル庁デザインシステム／WCAG 2.2 AA）：本文16px・行間1.8、文字コントラスト4.5:1以上、タップ領域44px以上、`:focus-visible` を消さない、`prefers-reduced-motion` を尊重
- 顧客名・案件名・関連事業（ユナイテッドヴィラ等）・出典のない統計は載せない

## 確認方法

- `npm run dev` → http://localhost:4321/ 。PC幅とスマホ幅（375px）で横スクロールが出ないこと
- 「AI向け」タブ、`/index.md`、`/llms.txt` が site.json の変更を反映していること

## このリポジトリについて

public リポジトリ。社内資料・顧客情報・認証情報は置かない。
