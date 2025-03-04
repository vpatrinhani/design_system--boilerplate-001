export const i18nPlural = (value: number, i18nKey: { one: string, many: string }): string => {
  return value === 1 ? i18nKey.one : i18nKey.many;
}

export const i18nFormatStringTemplate = (strTemplate: string, data: unknown): string => {
  const regPattern = /\$\(([^)]+)?\)/g;

  return strTemplate.replace(regPattern, function(_$1, $2) { return data[$2] || ''; });
}
