const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/beer_list_api/'  // Sostituisci 'NOME_REPO' con il nome del tuo repository su GitHub
    : '/'
})
