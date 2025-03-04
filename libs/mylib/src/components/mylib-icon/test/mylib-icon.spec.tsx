import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../src/mylib-icon';

describe('mylib-icon', () => {
  it('renders a Icon', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<mylib-icon icon="cmdEdit16" size="md"></mylib-icon>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <mylib-icon class="mylib-icon__size--md mylib-theme--scheme--light" icon="cmdEdit16" size="md">
        <mock:shadow-root>
          <span class="mylib-icon__content mylib-icon__size--md" data-icon-type="font" part="mylib-icon icon-size--md icon--color mylib-icon__content mylib-icon__size--md"></span>
        </mock:shadow-root>
      </mylib-icon>
    `);
  });
});
