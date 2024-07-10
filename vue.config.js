const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#0A87C9',
            'link-color': '#0A87C9',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
