# Development Checklist

**!Important!** - Be sure that the issue/task that you will are  working on during the "Development" phase has a comment with the tittle "Technical Solution/Definition" that contains what are the main guidelines and requirements identified by the Design System Technical Leader during the "Technical Refinement" phase. If doesn't, please contact the DS Leadership Team ASAP.

> Component Implementation References
>
> - mylib-link (libs/mylib/src/components/mylib-link)
> - mylib-file-upload (libs/mylib/src/components/mylib-file-upload)
> - mylib-command-button (libs/mylib/src/components/mylib-command-bar/src/components/mylib-command-button)

> Development Guidelines
>
> [Development Best Practices and Guidelines][dev-guidelines]

- [ ] Implementation
  - [ ] Component "shadow" must be enabled (<https://stenciljs.com/docs/styling#shadow-dom>)
  - [ ] Styling (scss, css) ([Dev Guidelines - Section: Mylib Component (libs/mylib) vs Mylib Style Core (libs/mylib-core-styles)][dev-guidelines])
    - [ ] mylib
      - Component Host Styles Only
      - No variable defined here except variable that affects the :Host definitions only
      - Only Mixins affecting the :host element
    - [ ] mylib-core-styles
      - All the component style should be defined here except :Host definitions
      - Not allowed to use pseudo elements associated to Custom Elements like ":host"
      - [ ] CSS Variables
            Example: mylib-link
      - [ ] Mixins (per sub-tree element and Color Scheme Modes)
            Example: mylib-link

  - [ ] Declarative (html, tsx, jsx)
    - [ ] Shadow Parts (If required) (Example: mylib-icon)
    - [ ] Export Shadow Parts (If required) using internally a component that has shadow parts and needs to be available

  - [ ] Imperative (TypeScript / JS)
    - [ ] Properties
      - Only declare properties attributes that impacts some feature and should/can be defined by the user
    - [ ] States (If Needed)
      - Internal variable that should trigger the Render lifecycle of the component.
    - [ ] Events (If Needed)

  - [ ] Theming / Color Scheme (If required) ([Dev Guidelines - Section: Component Light / Dark Scheme Implementration][dev-guidelines])
    - Using the Plugin "MylibThemableComponentPlugin"

  - [ ] Component Controlled/Uncontrolled attributes (If Needed) ([Dev Guidelines - Component Controlled/Uncontrolled Pattern][dev-guidelines])
    - Using the Plugin "MylibControllablePropertiesPlugin"

  - [ ] Functional Components (If applicable) ([Dev Guidelines - Functional Components][dev-guidelines])

  - [ ] Capable Form Integration (If applicable) ([Dev Guidelines - Component Form Integration][dev-guidelines])
    - Applicable only for components identified that should be able to integrate to a parent "form" element.

  - [ ] Allow Component Wrapping in the Application / Consumer Layer
    - Is desirable for the components to allow the consumer to wrap the component in an another application component allowing application abstraction strategy and also for Meta data architecture support, commonly used by Low-code / No-Code platforms.

- [ ] Quality
  - [ ] Lint Check
    - Only warning are acceptable
  - [ ] Exploratory Tests
    - Manual Tests Using Storybook (Chrome, FireFox)
    - Sample Apps Tests (React, Native)
  - [ ] Accessibility tests (_Depending on the prioritization strategy_)
    - Keyboard navigation
    - Usage of aria atributes following the WCAG guidelines
  - [ ] Responsiveness (If Needed)
    - Based on the UI/UX definitions
  - [ ] Automated Tests
    - [ ] Unit Tests (**To be Improved and discussed and have a better implementation guide**)
      - Test Coverage (60% = “acceptable”, 75% = “commendable” and 90% = “exemplary.”)
      - [ ] *.spec.ts files containing unit tests covering HTML tree structure variations based on attributes.
  - [ ] Security (If Needed)
    - XSS sanitize inputs

- [ ] Documentation
  - [ ] Storybook ([Dev Guidelines - Storybook Documentation][dev-guidelines])
    - [ ] Default Story (Overview)
    - [ ] Featurettes
    - [ ] Use Case Stories
    - [ ] Utilization Guideline (Vanilla, React)

---

[dev-guidelines]: ./Development%20Best%20Practices.md
