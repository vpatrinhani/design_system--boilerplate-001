## Requirements prior the usage

### Vue Application

Here are the steps followed to make this work for a Vue Application:

#### Iconography Setup

1- Make sure that you have installed the NPM packages bellow:

```bash
npm i @my-lib-org/mylib @my-lib-org/mylib-core-styles
```

2- Import the `mylib-icon` font-family css load file into your main application script initiator.

Import example:

`src/main.ts`

```javascript
...
import { defineCustomElements } from '@my-lib-org/mylib/loader';
defineCustomElements(window);

import '@my-lib-org/mylib-core-styles/css/mylib-icons--js-import.css';

createApp(App).mount('#app')
```

`vite.config.js`

```javascript
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
  plugins: [
    vue({
      template:{
        compilerOptions:{
          isCustomElement:(tag)=>tag.startsWith('mylib-')
        }
      }
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```
