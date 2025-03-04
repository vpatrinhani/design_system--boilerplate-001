export function BEMClass(componentName) {
  return ({ element, state, modifier }) => {
    let className = componentName;
    if (element) className = `${className}_${element}`;
    if (state) className = `${className}--${state}`;
    if (modifier) className = `${className}--${modifier}`;
    return className;
  };
}
