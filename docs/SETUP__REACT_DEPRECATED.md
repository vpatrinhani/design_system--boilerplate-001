## Requirements prior the usage (DEPRECATED)

### React Application

Here are the steps followed to make this work for a React Application:

1- Make sure that you have installed the NPM packages bellow:

```bash
npm i @my-lib-org/mylib @my-lib-org/mylib-core-styles
```

2- Setup your Bundler / Build process to copy the font-family, SVG Icon and the css contained the classess needed to render the icons into the components.
You can see below an example of configuration to make this work into a React Application, using a custom Webpack script for that.

- Required packages to be installed:

```bash
npm i -D webpack-cli@4.6.0 copy-webpack-plugin@6.3.2 clean-webpack-plugin@4.0.0-alpha.0
```

- Create a webpack script into some folder on the root dir of your project with the content below:

```js
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '../<path_to_the_root_dir_of_the_project>');

const modulePaths = {
  MylibCoreStyles: path.join(ROOT_DIR, 'node_modules/@my-lib-org/mylib-core-styles'),
};

const PUBLIC_DIR = path.join(ROOT_DIR, 'public'); // this should be a output path where your index.html will gonna be referencing to load the css file.
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'libs/mylib-core-styles'); // this should be a output path where your index.html will gonna be referencing to load the css file.

module.exports = {
  entry: path.join(__dirname, 'index.js'), // This is only a dumb empty entry file.
  output: {
    path: OUTPUT_DIR,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(modulePaths.MylibCoreStyles, 'css'),
          to: path.join(OUTPUT_DIR, 'css'),
        },
        {
          from: path.join(modulePaths.MylibCoreStyles, 'fonts'),
          to: path.join(PUBLIC_DIR, 'fonts'),
        },
      ],
    }),
  ],
};
```

- Create a NPM script on your package.json file to run the webpack script created on the previous step.

```json
"build:pre-build": "webpack --config ./<path_to_your_file>/webpack.config.js"
```

Remeber to add/run this script before publish/build/run your React App.

3- You need to import the css class that loads the font-family and contains de proper classes to render the icons

- You can add a simple "link" tag in the "head" section of your "index.html" file:

```html
<link rel="stylesheet" href="%PUBLIC_URL%/libs/mylib-core-styles/css/__obsolete/mylib-icons--all.css">
```

Obs.: the path "libs/mylib-core-styles/mylib-icons.css" can be different depending of your bundling / webpack configuration.

4- Import the mylib-icon component itnor your js/jsx/ts/tsx file that you are using some component that needs to render the icons, 
this import will register the "mylib-icon" web component into the DOM enabling the browser to know and render the "mylib-icon" element tag.

Example of the import:

```js
import '@my-lib-org/mylib/bindings/react';
```
