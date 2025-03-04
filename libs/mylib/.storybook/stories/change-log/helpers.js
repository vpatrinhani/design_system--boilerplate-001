export const formatMarkdown = (markdown) => {
  return markdown
    .replace(/^(.*)[#] Changelog(.*)$/gm, "");
};
