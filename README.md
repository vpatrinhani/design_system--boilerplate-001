# Web Components Library

<!-- [Theming Guide]() -->

[Contributing Guide](./docs/CONTRIBUTING.md)

## Quick start

#### 1) Install

Install the component library using NPM:

1. Check first if your machine is configured to access our private NPM Repository on Artifactory using the setup guidelines below:

For your npm command line client to work with Artifactory, you first need to set the default npm registry with an Artifactory npm repository using the following command:

```bash
npm config set @my-lib-org:registry https://your-registry-url/
```

There are two ways to authenticate your npm client against Artifactory: using the npm login command or using basic authentication.

Using npm login
Run the following command in your npm client. When prompted, provide your Artifactory login credentials:

```bash
npm login
```

Using basic authentication

Alternatively, you can paste the following into the ~/.npmrc file (in Windows %USERPROFILE%/.npmrc):

```bash
_auth = anonymous:<PASSWORD> (converted to base 64)
email = youremail@email.com
always-auth = true
```

> Preferable approach
>
> Using basic authentication, you also need to paste the following into the ~/.npmrc file (in Windows %USERPROFILE%/.npmrc) or in the .npmrc file on the root folder of your project:

```bash
@my-lib-org:registry=https://your-registry-url/
//your-registry-url/:_password=<BASE64_PASSWORD>
//your-registry-url/:username=anonymous
//your-registry-url/:email=youremail@email.com
//your-registry-url/:always-auth=true
```

```bash
npm install @my-lib-org/mylib
```

#### 2) Adding the components to your Project

[Setup - React](./docs/SETUP__REACT.md)

[Setup - Angular](./docs/SETUP__ANGULAR.md)
[Setup - Angular Form Wrapper](./docs/SETUP__ANGULAR_FORM_WRAPPER.md)

[Setup - Vanilla HTML (HTML5 Boilerplate)](./docs/SETUP__VANILLA.md)

<!-- [Utilization - React](#UTILIZATION_REACT)

[Utilization - Vanilla HTML & Javascript](#UTILIZATION_VANILLA) -->

## Supporting older browsers

Material Web uses modern browser features that are natively supported in the latest versions of Chrome, Safari, Firefox, and Edge. IE11 and some older versions of other browsers are also supported, but they require additional build steps and polyfills.

<table>
  <thead>
    <tr>
      <th><i>Feature</i></th>
      <th><img src="docs/assets/images/chrome.png" width="20px" height="20px"><br>Chrome</th>
      <th><img src="docs/assets/images/safari.png" width="20px" height="20px"><br>Safari</th>
      <th><img src="docs/assets/images/firefox.png" width="20px" height="20px"><br>Firefox</th>
      <th><img src="docs/assets/images/edge.png" width="20px" height="20px"><br>Edge</th>
      <th><img src="docs/assets/images/ie.png" width="20px" height="20px"><br>IE11</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td class="ie11"><img src="docs/assets/images/orange-check.png" width="20px" height="20px"class="check" alt="Polyfill"> <a href="#web-components">*</a></td>
    </tr>
  <tr>
      <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">Modules</a></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td class="ie11"><img src="docs/assets/images/orange-check.png" width="20px" height="20px"class="check" alt="Transform"> <a href="#modules">*</a></td>
    </tr>
  <tr>
      <td><a href="https://developers.google.com/web/shows/ttt/series-2/es2015">ES2015</a></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td><img src="docs/assets/images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
      <td class="ie11"><img src="docs/assets/images/orange-check.png" width="20px" height="20px"class="check" alt="Transpile"> <a href="#es2015">*</a></td>
    </tr>
  </tbody>
</table>

#### Web Components

To support Web Components in IE11 and other older browsers, install the [Web Components Polyfills](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs):

```bash
npm install @webcomponents/webcomponentsjs
```

And include the `webcomponents-loader.js` script in your HTML, which detects when polyfills are needed and loads them automatically:

```html
<!-- Add support for Web Components to IE11. -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```
<!--  -->
