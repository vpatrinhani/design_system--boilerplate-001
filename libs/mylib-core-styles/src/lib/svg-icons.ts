import { importMap } from '../../icons/svg-icons-mapping'

export function decodeBase64SourceText(sourceText: string) {
  const [, base64Code] = sourceText.split('base64,');
  if (!base64Code) {
    return '';
  }

  // eslint-disable-next-line
  return atob(base64Code)
}

export const serlializedSvg = (name: string) => {
  if(!importMap[name]) return
  
  return decodeBase64SourceText(importMap[name])
} 
