## Requirements prior the usage

### Angular Application

Here are the steps followed to make this work for a Angular Application:

#### Iconography Setup

1- Make sure that you have installed the NPM packages bellow:

```bash
npm i @my-lib-org/mylib @my-lib-org/mylib-core-styles @my-lib-org/mylib-angular
```

2- Load the Mylib Web Components the css file to load the icon font-family.
3- Load the Mylib Angular Module on your App Module.

Import example:

`.src/app/app.module.ts`

```javascript
import { NgModule } from '@angular/core';
...
// Load the Mylib Web Components Angular Module
import { MylibModule } from '@my-lib-org/mylib-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MylibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

`.angular-cli.json`

```JSON
// ...
  "styles": [
    // Load the `mylib-icon` font-family css load file into your angular cli configuration.
    "../node_modules/@my-lib-org/mylib-core-styles/css/mylib-icons--js-import.css",
    // ...
  ],
// ...
```
