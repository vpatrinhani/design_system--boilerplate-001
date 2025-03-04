## Requirements prior the usage

### HTML5 Application

> Based on HTML5 Boilerplate v8.0.0 | MIT License | <https://html5boilerplate.com/>

Here are the steps followed to make this work for a React Application:

1- Make sure that you have installed the NPM packages bellow:

```bash
npm i @my-lib-org/mylib @my-lib-org/mylib-core-styles
```

2- Copy the folder 'fonts' from the '@my-lib-org/mylib-core-styles' package to the root folder of the project.

3- Create a vendor js file to load the mylib stylesheets:

**"js/vendor/mylib-head-styles.js"**

```javascript
import '@my-lib-org/mylib-core-styles/css/__obsolete/mylib-icons--all.css';
```

4- Add a load 'script' tag on 'index.html' 'head' section for the vendor styles js file:

```html
<script src="js/vendor/mylib-head-styles.js"></script>
```

5- Create a vendor js to load the mylib components dependencies:

**"js/vendor/mylib.js"**

```javascript
// Import specific components
// import '@my-lib-org/mylib/dist/components/mylib-button.js';

// OR

// Import all components
import '@my-lib-org/mylib/dist/components';
```

6- Add a load 'script' tag on 'index.html' 'body' section for the vendor components js file:

```html
<script src="js/vendor/mylib.js"></script>
```
