import { defineConfig } from 'astro/config';

// 独自ドメイン公開前は SITE_BASE=/coralca-web で GitHub Pages のサブパスに出す。
// coralca.co.jp を割り当てた後は SITE_BASE を空（= "/"）にする。
export default defineConfig({
  site: 'https://coralca.co.jp',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
