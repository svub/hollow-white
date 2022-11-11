module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import', 
  ],
  presets: [
    process.env.VUE_PLATFORM === 'web' ? '@vue/app' : {}, 
    ['@babel/env', { targets: { esmodules: true } }]
  ]
}