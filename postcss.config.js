// Corrige paths das fontes woff incluidas em mdi-v6
module.exports = {
  plugins: {
    'postcss-url': [
      {
        // console.log('ssss')
        filter: '**/node_modules/**',
        url: (asset) => {
          if (process.env.NODE_ENV === 'development') {
            if (asset.url.includes('.woff')) {
              return asset.absolutePath.replace(process.env.INIT_CWD, 'http://localhost:3000')
            }
          }
        }
      }
    ]
  }
}
