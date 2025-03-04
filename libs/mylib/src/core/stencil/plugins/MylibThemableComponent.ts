import { getElement } from "@stencil/core";

import { THEME_SCHEME_DARK, THEME_SCHEME_LIGHT, IMylibThemableComponent, themeColorSchemeArray, THEME_SCHEME_DARK_CLASSNAME, THEME_SCHEME_LIGHT_CLASSNAME } from "$lib-mylib/src/core/types/MylibThemableComponentInterface";

interface MylibThemableComponentPlugin {
  getColorSchemeClass() : string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const registerMylibThemableComponentPlugin = (_opts = {}, target: IMylibThemableComponent): MylibThemableComponentPlugin => {
  // console.log('[registerMylibThemableComponent] (opts, target)', opts, target);
  const buildContext = function(): MylibThemableComponentPlugin {
    return {
      getColorSchemeClass: () => {
        return `mylib-theme--scheme--${this.colorScheme}`
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const { componentWillLoad } = target;

  target.componentWillLoad = function() {
    const host = getElement(target);

    // console.log('[registerMylibThemableComponent] componentWillLoad: (opts, host, this.colorScheme)', _opts, host, this.colorScheme);

    if ((!this.colorScheme) || (themeColorSchemeArray.indexOf(this.colorScheme) < 0)) {
      const closestDarkLight = host.closest(`.${THEME_SCHEME_DARK_CLASSNAME}, .${THEME_SCHEME_LIGHT_CLASSNAME}`);

      target.colorScheme = (closestDarkLight)
        ? closestDarkLight.classList.contains(THEME_SCHEME_DARK_CLASSNAME)
          ? THEME_SCHEME_DARK : THEME_SCHEME_LIGHT
        : THEME_SCHEME_LIGHT;
    }

    componentWillLoad && componentWillLoad.call(this);
  };

  return buildContext.call(target);
}
