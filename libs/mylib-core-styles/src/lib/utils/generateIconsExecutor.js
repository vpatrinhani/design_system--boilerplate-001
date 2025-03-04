const generateIconsEngine = require('./generateIconsPupeteer')

generateIconsEngine(
  {
    iconsPath: 'icons/baseSvgs',
    outputPath: './icons/',
    iconLibraryName: 'mylib-icons',
    debug: false
  }
)
