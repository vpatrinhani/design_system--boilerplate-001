export const buttonTypesArray = ['submit', 'reset', 'button'] as const;

export type ButtonTypes = (typeof buttonTypesArray)[number];

export const buttonVariantsArray = [
  'base',
  'accent-high-contrast',
  'accent-mid-contrast',
  'positive',
  'accent-positive',
  'caution',
  'accent-caution',
  'negative',
  'accent-negative',
  'accent-marketing',
  'chromeless',
  'custom',
  'chromeless-colorless',
] as const;

export type ButtonVariants = (typeof buttonVariantsArray)[number];

export const buttonSizesArray = ['xs', 'sm', 'md', 'lg'] as const;

export type ButtonSizes = (typeof buttonSizesArray)[number];

export const buttonIconPositionsArray = ['left', 'center', 'right'] as const;

export type ButtonIconPositions = (typeof buttonIconPositionsArray)[number];

export const buttonIconSizesArray = ['xs', 'sm', 'md', 'lg'] as const;

export type ButtonIconSizes = (typeof buttonSizesArray)[number];
