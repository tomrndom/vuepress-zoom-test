module.exports = {
  title: "Testing VuePress",  
  description: "Is medium-zoom working ok?",  
  themeConfig: {
    search: false
  },
  plugins: [
    ['@vuepress/medium-zoom', {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        background: 'rgb(30, 30, 30)',
        margin: 10,
      },
    }],
  ],
}