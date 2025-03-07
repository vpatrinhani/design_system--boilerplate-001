type Modifier = string | boolean | undefined;
type Block = { componentName: string };

const handleModifiers = (blockElement: string, modifiers: Modifier[]) => {
  let modifier: string[] = [];
  // iterate all
  if (modifiers.length > 0) {
    modifier = modifiers
      // remove all false and empty ones
      .filter((item: string) => item && item !== '' && item.trim() !== '')
      // build modifier
      .map((_modifier_) => `${blockElement}--${_modifier_}`);
  }

  return modifier;
};

export function MODIFIER(block: Block, ...modifiers: Modifier[]): string {
  const blockElement = block.componentName;
  return [...handleModifiers(blockElement, modifiers)].join(' ');
}

export default function BEM(
  block: Block,
  element?: string,
  ...modifiers: (string | boolean | undefined)[]
): string {
  const blockElement = block.componentName + (element ? `__${element}` : '');
  return [blockElement, ...handleModifiers(blockElement, modifiers)].join(' ');
}
