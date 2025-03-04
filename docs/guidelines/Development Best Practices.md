# Development Best Practices and Guidelines

All items detailed on this document were based on User feedbacks, technology best practices, and past experiences. This a a living document and should be updated as soon as new learning and feedback arrives.

## Declarative vs Imperative API

We are focusing our Library to have our Components delivered on top of Declarative First API approach, It means that our users should be able to use our Components using only HTML and CSS to activate component features, style variations and composition. It doesn’t mean that we won’t provide any Javascript API for our components, the approach is more to guarantee that we won’t have any features or behavior that will be available only through the Imperative API (Javascript)

**Hipothetical Component Usage Example**

Declarative API

```html
<comp-list id="compList">
  <comp-list-item value="item-01">Item 01</comp-list-item>
  <comp-list-item value="item-02">Item 02</comp-list-item>
  <comp-list-item value="item-03">Item 03</comp-list-item>
</comp-list>
```

Imperative API

```javascript
var listElement = document.getElementById('compList');
  
listElement.items = [
  { label: "Item 01", value: "item-01"},
  { label: "Item 02", value: "item-02"},
  { label: "Item 03", value: "item-03"}
];
```

**About Declarative / Imperative programing**

![][image-1]

![][image-2]

---

## Functional Components

Functional Components helps on have a better internal reusability of some components, easie maintenance, clear code, etc.

> StencilJS reference: [https://stenciljs.com/docs/functional-components](https://stenciljs.com/docs/functional-components)

### Global functional components scope

It's very useful when you have a scenario where you need to use a component of the library internally into other components, creating a functional component wrapping this reused component helps a lot on minimizin the code duplicity.

> Global Functional Components should be living under the folder: "libs/mylib/src/components/global/internals"
> **Example:** *"libs/mylib/src/components/global/internals"*

**Example of a Global Functional Component:**

- *"libs/mylib/src/components/global/internals/IconElement.tsx"*

### Internal functional component scope

It's very useful and mostly necessary when you have a scenario where you need to break your component implementation into smaller pieces, to have a better organization of your code, make it cleanner, more readable, better separition of responsibilities, etc. Creating a functional component wrapping this component parts helps a lot on that.

> Internal Functional Components should be living under the main component folder: *"libs/mylib/src/components/[component-name]/src/internals"*
> **Example:** *"libs/mylib/src/components/mylib-button/src/internals"*

**Example of a Internal Functional Component:**

- *"libs/mylib/src/components/mylib-button/src/internals/ContentElement.tsx"*

> **Example:** *"libs/mylib/src/components/mylib-file-upload/src/internals"*

**Example of a Internal Functional Component:**

- *"libs/mylib/src/components/mylib-file-upload/src/internals/InputDisplayElement.tsx"*

---

## Mylib Component (libs/mylib) vs Mylib Style Core (libs/mylib-core-styles) packages

Implementation References:

- **mylib-link**
  - *"libs/mylib/src/components/mylib-link"*
  - *"libs/mylib-core-styles/scss/components/mylib-link"*
- **mylib-file-upload**
  - *"libs/mylib/src/components/mylib-file-upload"*
  - *"libs/mylib-core-styles/scss/components/mylib-file-upload"*
- **mylib-datepicker**
  - *"libs/mylib/src/components/mylib-datepicker"*
  - *"libs/mylib-core-styles/scss/components/mylib-datepicker"*

---

## Reusability, Extensibility and Responsibity Isolation through Component Plugin Pattern

Implementation References:

- **mylib-datepicker** (*"libs/mylib/src/components/mylib-datepicker/src/mylib-datepicker.tsx"*)
  - **MylibThemableComponentPlugin** (*"libs/mylib/src/core/stencil/plugins/MylibThemableComponent.ts"*)
- **mylib-datepicker** (“*libs/mylib/src/components/mylib-datepicker/src/mylib-datepicker.tsx"*)
  - **MylibControllablePropertiesPlugin** (*"libs/mylib/src/core/stencil/plugins/MylibControllableProperties.ts"*)
- **mylib-modal-dialog** (*"libs/mylib/src/components/mylib-modal-dialog/src/mylib-modal-dialog.tsx"*)
  - **MylibDraggableElementPlugin** (*"libs/mylib/src/core/stencil/plugins/MylibDraggableElement.ts"*)

---

## Component Light / Dark Scheme Implementration

There was create a reusable Plugin that helps on the standardization of this implementation.

Plugin: **MylibThemableComponentPlugin** (*"libs/mylib/src/core/stencil/plugins/MylibThemableComponent.ts"*)

Usage References:

- **mylib-button** (*"libs/mylib/src/components/mylib-button/src/mylib-button.tsx"*)
- **mylib-datepicker** (*"libs/mylib/src/components/mylib-datepicker/src/mylib-datepicker.tsx"*)

---

## Component Form Integration

Very important, specially for "Input" components (Ex.: "Text Fields", "Button" to submit the form, etc.) to submit the data though the HTML `form` element and you need to be sure that those input data will we serialized into the form post data.

Implementation References:

- **mylib-button**
  - *"libs/mylib/src/components/mylib-button/src/mylib-button.tsx"*
  - ***OBS.:*** *Button component has an implementation to support a Form integration, but it still not robust enough and not using a reusable approach like a Plugin pattern (Refer this pattern on this document)*

- **mylib-datepicker** (“*libs/mylib/src/components/mylib-datepicker/src/mylib-datepicker.tsx"*)

   ```javascript
   ...
   import { Attributes, renderHiddenInput } from '$lib-mylib/src/core/helpers/element';
   ...
   render() {
   ...
   // It renders a hidden input to have a better integration for form 
   submition.renderHiddenInput(false, this.el, name, valueSafe, disabled);
   ...
   ```

### References

[https://web.dev/more-capable-form-controls/][1]
[https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation][2]

---

## Storybook Documentation

Implementation References:

- **mylib-button**
  - *"libs/mylib/src/components/mylib-button/mylib-button.stories.mdx"*

### Featurettes

Implementation References:

- **mylib-button**
  - *"libs/mylib/src/components/mylib-button/mylib-button.stories.mdx"*

#### Color Scheme (Light / Dark)

Implementation References:

- **mylib-button**
  - *"libs/mylib/src/components/mylib-button/mylib-button.stories.mdx"*

### Use Case Examples

Implementation References:

- **mylib-button**
  - *"libs/mylib/src/components/mylib-button/mylib-button.stories.mdx"*

---

- **mylib-modal-dialog**
  - *"libs/mylib/src/components/mylib-modal-dialog/mylib-modal-dialog.stories.mdx"*

---

## Component Controlled/Uncontrolled Pattern

Important references to understand about this pattern:
[https://reactjs.org/docs/uncontrolled-components.html][3]
[https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/][4]

There was create a reusable Plugin that helps on the standardization of this implementation.

Plugin: **MylibControllablePropertiesPlugin** (*"libs/mylib/src/core/stencil/plugins/MylibControllableProperties.ts"*)

Usage References:

- **mylib-datepicker** (*"libs/mylib/src/components/mylib-datepicker/src/mylib-datepicker.tsx"*)
  - "value" attribute
  - "opened" attribute

- **mylib-dropdown** (*"libs/mylib/src/components/mylib-dropdown/src/mylib-dropdown.tsx"*)
  - "value" attribute
  - "opened" attribute

---

[1]: https://web.dev/more-capable-form-controls/
[2]: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation
[3]: https://reactjs.org/docs/uncontrolled-components.html
[4]: https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

[image-1]: ./assets/images/image-1600816752893.699-28a7ba16927e62756ab2823e585837de.png
[image-2]: ./assets/images/image-1600816817806.028-fca13d7da4a120c32248fa0bfef11c2c.png
