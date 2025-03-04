/* eslint-disable no-undef */

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  this.trigger = (mockedMutationsList) => {
      callback(mockedMutationsList, this);
  };
});
global.MutationObserver = mutationObserverMock;


// Force mocked values to the navigator attribute
// * Forcing the language for tests that required predictable culture / language, like Date
const navigator = { language: 'en-US' };
Object.defineProperty(window, 'navigator', {
   value: navigator,
   writable: true
});
