// [BEGIN] Style Rendering ------------------------------------------------------------------------------------------------------

const styles = new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const rootAppliedStyles = new WeakMap();

const supportsConstructibleStylesheets = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replace === 'function';
  // eslint-disable-next-line no-empty
  } catch (e) {}
  return false;
})();

export const getScopeId = (tagName) => 'sc-' + tagName;

export const getStyleContainerNode = (elInstance) => {
  const styleContainerNode = elInstance.shadowRoot ? elInstance.shadowRoot : elInstance.getRootNode();
  return styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
};

export const registerStyle = (scopeId, cssText, allowCS) => {
  let style = styles.get(scopeId);
  if (supportsConstructibleStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    style.replace(cssText);
  } else {
    style = cssText;
  }
  styles.set(scopeId, style);
};

export const applyStyle = (styleContainerNode, scopeId) => {
  const style = styles.get(scopeId);

  if (style) {
    if (typeof style === 'string') {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
      }
      if (!appliedStyles.has(scopeId)) {
        {
          {
            styleElm = doc.createElement('style');
            styleElm.innerHTML = style;
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
};

// [END] Style Rendering ------------------------------------------------------------------------------------------------------
