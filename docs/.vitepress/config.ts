import { defineConfig } from 'vitepress'
import markdownItMermaid from 'markdown-it-mermaid'

const repoName = 'fullstack-graph'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Fullstack Knowledge Graph',
  description: 'База знаний и граф по frontend и backend технологиям',
  cleanUrls: true,
  lastUpdated: true,
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  markdown: {
    config: (md) => {
      md.use(markdownItMermaid.default)
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Граф', link: '/graph' },
      { text: 'Frontend', link: '/frontend/foundation/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'Meta', link: '/meta/add-node' }
    ],
    sidebar: {
      '/frontend/': [
        {
          text: 'Frontend',
          items: [
            { text: 'Foundation', link: '/frontend/foundation/' },
            { text: 'UI', link: '/frontend/ui/' },
            { text: 'State', link: '/frontend/state/' },
            { text: 'Forms & Validation', link: '/frontend/forms-validation/' },
            { text: 'Data', link: '/frontend/data/' },
            { text: 'Utils', link: '/frontend/utils/' },
            { text: 'Testing', link: '/frontend/testing/' },
            { text: 'Tooling', link: '/frontend/tooling/' }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Backend',
          items: [
            { text: 'Overview', link: '/backend/' },
            { text: 'Foundation', link: '/backend/foundation/' },
            { text: 'API', link: '/backend/api/' },
            { text: 'Data', link: '/backend/data/' },
            { text: 'Infrastructure', link: '/backend/infrastructure/' },
            { text: 'Testing', link: '/backend/testing/' }
          ]
        }
      ],
      '/meta/': [
        {
          text: 'Meta',
          items: [{ text: 'Как добавлять узлы', link: '/meta/add-node' }]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndrewGanzha/fullstack-graph' }
    ]
  }
})
