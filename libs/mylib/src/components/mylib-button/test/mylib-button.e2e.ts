import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('mylib-button', () => {
  let page: E2EPage;
  let element: E2EElement;
  let clickableButtonElement: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <mylib-button label="My Button"></mylib-button>
      `,
    });
    element = await page.find('mylib-button');
    clickableButtonElement = await page.find('mylib-button >>> button');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('triggers a clickEvent when the button is clicked', async () => {
    // arrange
    const spy = await element.spyOnEvent('clickEvent');

    // act
    clickableButtonElement.click();
    await page.waitForChanges();

    // assert
    expect(spy).toHaveReceivedEvent();
  });
});
