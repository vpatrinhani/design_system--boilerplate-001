import { ComponentInterface } from "@stencil/core";

export const THEME_SCHEME_LIGHT = 'light';
export const THEME_SCHEME_DARK = 'dark';
export const THEME_SCHEME_LIGHT_CLASSNAME = 'mylib-theme--scheme--light';
export const THEME_SCHEME_DARK_CLASSNAME = 'mylib-theme--scheme--dark';

export const themeColorSchemeArray = [THEME_SCHEME_LIGHT, THEME_SCHEME_DARK] as const;

export type ThemeColorSchemes = typeof themeColorSchemeArray[number];

export interface IMylibThemableComponent extends ComponentInterface {
  colorScheme: ThemeColorSchemes;
}
