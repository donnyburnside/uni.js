module.exports = {
  plugins: [
    require('postcss-nested'),
    require('autoprefixer')({ browsers: ['last 2 versions', '> 5%'] })
  ]
}