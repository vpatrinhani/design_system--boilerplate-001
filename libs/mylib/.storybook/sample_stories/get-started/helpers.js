export const formatMarkdown = (markdown) => {
  let result = markdown;

  console.log('[markdown] ==============>', markdown);

  const h1 = /^# (.*$)/gim;
  const h1ComponentReplace = '<div class="mylib-storybook-header"><h1>$1</h1><p class="mylib-storybook-header_summary">Managed by DI SW T&amp;I</p></div>'

  result = result.replace(h1, h1ComponentReplace)

  return result;
};
