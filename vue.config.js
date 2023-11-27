// vue.config.js
module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Hollow White";
              return args;
          })
  },
  transpileDependencies: [ '@gtm-support/core', '@gtm-support/vue2-gtm' ],
}