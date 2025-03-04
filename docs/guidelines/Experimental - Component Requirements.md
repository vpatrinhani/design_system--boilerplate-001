# Development Checklist

> Component Implementation References
>
> - mylib-link (libs/mylib/src/components/mylib-link)
> - mylib-file-upload (libs/mylib/src/components/mylib-file-upload)
> - mylib-command-button (libs/mylib/src/components/mylib-command-bar/src/components/mylib-command-button)

> Development Guidelines
>
> [Development Best Practices](./Development\ Best\ Practices.md)

- [ ] Implementation
  - [ ] Component "shadow" must be enabled (<https://stenciljs.com/docs/styling#shadow-dom>)
  - [ ] Styling (scss, css)
    - [ ] Theming / Color Scheme (If Needed)
      - Using the Plugin "MylibThemableComponentPlugin"
    - [ ] swwwc

  - [ ] Declarative (html, tsx, jsx)

  - [ ] Imperative (TypeScript / JS)
    - [ ] Properties
      - Only declare properties attributes that impacts some feature and should/can be defined by the user
    - [ ] States (If Needed)
      - Internal variable that should trigger the Render lifecycle of the component.
    - [ ] Events

- [ ] Quality
  - [ ] Lint Check
    - Only wanaring are acceptable
  - [ ] Exploratory Tests
    - Manual Tests Using Storybook (Chrome, FireFox)
  - [ ] Security (If Needed)
    - XSS sanitize inputs

- [ ] Documentation
  - [ ] Storybook
    - [ ] Default Story (Overview)
