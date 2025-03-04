## Requirements prior the usage

### React Application

Here are the steps followed to make this work for a React Application:

#### Iconography Setup

1- Make sure that you have installed the NPM packages bellow:

```bash
npm i @my-lib-org/mylib @my-lib-org/mylib-core-styles
```

2- Import the `mylib-icon` font-family css load file into your main application script initiator.

Import example:

`src/app.js`

```javascript
...
import '@my-lib-org/mylib-core-styles/css/mylib-icons--js-import.css';
```

3- Import the mylib component on your React component file, see the example below about the `mylib-button` usage:

`src/hello.js`

```javascript
import { MylibButton } from '@my-lib-org/mylib/bindings/react';

function Hello() {
  return (
    <div className="demo-unity-comp-container">
      <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
      </MylibButton>
    </div>
  )
}

export default Hello;
```
