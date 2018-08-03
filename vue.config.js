module.export = {
}
if (process.env.NODE_ENV === 'production') {
  // module.exports = {
  //   chainWebpack: config => {
  //     config.entry('app').add('index').end()
  //     config.plugins.delete('html').end()
  //   }
  // }
}
