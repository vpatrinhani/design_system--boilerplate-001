/**
 * Method responsible for getting parentNode form element
 * @param node
 * @returns
 */
 export const getParentnodeForm = (node: ParentNode): HTMLFormElement => {
  if (node?.parentNode?.nodeName === 'FORM') {
    return node.parentNode.parentNode.querySelector('form');
  }

  if (!node) {
    return;
  }

  return getParentnodeForm(node?.parentNode);
};

/**
 *
 * @param parentFormElement
 * @param children
 */
export const injectParentnodeFormHiddenFields = (parentFormElement: HTMLElement, children: HTMLElement[]): void => {
  children.map((childElement: any) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', childElement.name);
    hiddenInput.setAttribute('value', childElement.value);

    if (childElement.checked) {
      hiddenInput.setAttribute('checked', 'true');
    }

    parentFormElement.append(hiddenInput);
  });
};

export const removeParentnodeFormHiddenFields = (parentNode: HTMLElement, radioGroupChildren: HTMLElement[]) => {
  radioGroupChildren.map((child: HTMLInputElement) => {
    const inputElement = parentNode.querySelector(`input[name="${child.name}"]`);
    inputElement.remove();
  });
};
