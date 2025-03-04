export const printHelloWorld = () => {
  console.log('printHelloWorld');
};

export const applyMixin = (Class: any, mixin: any) => {
  Object.assign(Class.prototypes, mixin);
};

export const sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  },
};
