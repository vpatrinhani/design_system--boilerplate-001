module.exports = plop => {
  plop.setGenerator("MyLib - Component", {
    description: "New MyLib component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component? (use spaces if multi word, ex.: Button, Radio Button, etc.)",
      }
    ],
    actions: [
      {
        type: "add",
        path: "libs/mylib/src/components/mylib-{{kebabCase componentName}}/src/mylib-{{kebabCase componentName}}.tsx",
        templateFile: ".plop/lib/mylib/component/src/mylib-component--tsx.hbs"
      },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/{{kebabCase componentName}}.module.scss",
      //   templateFile: "plop/component/component-scss.txt"
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/__stories__/{{kebabCase componentName}}.stories.mdx",
      //   templateFile: "plop/general/component-stories-mdx.txt"
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/__stories__/{{kebabCase componentName}}.stories.module.scss",
      //   templateFile: "plop/general/component-stories-scss.txt"
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/__tests__/{{camelCase componentName}}-snapshot-tests.jest.js",
      //   templateFile: "plop/general/component-snapshot-tests-jest.txt"
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/__tests__/{{camelCase componentName}}-tests.jest.js",
      //   templateFile: "plop/general/component-tests-jest.txt"
      // },
      // {
      //   type: "append",
      //   path: "src/components/index.js",
      //   pattern: /(\n$)/gm,
      //   separator: "",
      //   template:
      //     'export { default as {{kebabCase componentName}} } from "./{{kebabCase componentName}}/{{kebabCase componentName}}";\n'
      // },
      // {
      //   type: "append",
      //   path: "src/published-components.js",
      //   pattern: /(\/\/ plop_marker:published-components)/g,
      //   template:
      //     '\t{{kebabCase componentName}}: "/src/components/{{kebabCase componentName}}/{{kebabCase componentName}}.jsx",'
      // }
    ]
  });
};
