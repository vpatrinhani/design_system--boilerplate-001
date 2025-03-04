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
    - [ ] Shadow Parts (If Needed) (Example: mylib-icon)
    - [ ] Export Shadow Parts (If Needed) using internally a component that has shadow parts and needs to be available

  - [ ] Imperative (TypeScript / JS)
    - [ ] Properties
      - Only declare properties attributes that impacts some feature and should/can be defined by the user
    - [ ] States (If Needed)
      - Internal variable that should trigger the Render lifecycle of the component.
    - [ ] Events

  - [ ] Component Controlled/Uncontrolled attributes (If Needed)
    - Using the Plugin "MylibControllablePropertiesPlugin"

  - [ ] Capable Form Integration (If needed)
    - Applicable only for components identified that should be able to integrate to a parent "form" element.

  - [ ] **NEW (04/19/2023)** Allow Component Wrapping in the Application / Consumer Layer
    - Is desirable for the components to allow the consumer to wrap the component in an another application component allowing application abstraction strategy and also for Meta data architecture support, commonly used by Low-code / No-Code platforms.

- [ ] Quality
  - [ ] Lint Check
    - Only wanaring are acceptable
  - [ ] Exploratory Tests
    - Manual Tests Using Storybook (Chrome, FireFox)
    - Sample Apps Tests (React, Native)
  - [ ] Responsiveness (If Needed)
    - Based on the UI/UX definitions
  - [ ] Security (If Needed)
    - XSS sanitize inputs

- [ ] Documentation
  - [ ] Storybook
    - [ ] Default Story (Overview)
    - [ ] Featurettes
