const { description } = require('../../package')

module.exports = {
  base: '/XenonText/documentation/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'XenonText',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#80B3FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: 'https://cdn.materialdesignicons.com/5.6.55/css/materialdesignicons.min.css', rel: 'stylesheet'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Usage',
        link: '/usage/',
      },
      {
        text: 'Development',
        link: '/development/',
      },
      {
        text: 'Changelog',
        link: '/changelog/',
      },
      {
        text: 'Release',
        link: 'https://cdlab-sit.github.io/XenonText/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/cdlab-sit/XenonText',
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
