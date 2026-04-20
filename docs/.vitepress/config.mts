import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Apeiraco Arch-Repo",
  description: "Apeiraco Arch Linux Repository",
  cleanUrls: true,
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      preserveSymlinks: true
    },
    plugins: [
      {
        name: 'replace-md-links',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.md')) {
            return code
              .replace(/\]\(LICENSE\)/g, '](license.md)')
              .replace(/href="LICENSE"/g, 'href="license.md"')
          }
        }
      }
    ]
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/apeiraco/arch-repo' }
    ],
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/apeiraco/arch-repo' }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh' },
          { text: 'GitHub', link: 'https://github.com/apeiraco/arch-repo' }
        ]
      }
    }
  }
})
