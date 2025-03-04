import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('mylib-icon', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <mylib-icon icon="cmdEdit16" size="md"></mylib-icon>
      `,
    });
    element = await page.find('mylib-icon');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });
});
