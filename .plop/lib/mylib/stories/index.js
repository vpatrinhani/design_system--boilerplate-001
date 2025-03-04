const fs = require("fs");

module.exports = plop => {
  plop.setGenerator("MyLib Stories - mdx", {
    description: "New stories files for existing component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (use spaces if multi word, ex.: Button, Radio Button, etc.)",
      }
    ],
    actions: [
      {
        type: "add",
        path: "libs/mylib/src/components/mylib-{{kebabCase componentName}}/{{kebabCase componentName}}.stories.mdx",
        templateFile: ".plop/lib/mylib/stories/mylib-component--stories--mdx.hbs"
      },
      // {
      //   type: "add",
      //   path: "src/components/{{kebabCase componentName}}/stories/{{kebabCase componentName}}.stories.scss",
      //   templateFile: "plop/general/component-stories-scss.txt"
      // }
    ]
  });
};
