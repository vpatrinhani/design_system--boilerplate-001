import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../src/mylib-button';

describe('mylib-button', () => {
  it('renders a button without icon', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button label="My Button"></mylib-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders a button with icon positioned on left', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button icon="left_arrow" icon-position="left" label="My Button"></mylib-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders a button with icon positioned on center', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button icon="left_arrow" icon-position="center"></mylib-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders a button with icon positioned on right', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button icon="right_arrow" icon-position="right" label="My Button"></mylib-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders a button with the disabled state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button label="My Button" disabled></mylib-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('triggers a clickEvent when the button is clicked', async () => {
    // arrange
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button label="My Button"></mylib-button>`,
    });

    const _callback = jest.fn();
    page.doc.addEventListener('clickEvent', _callback);
    await page.waitForChanges();

    // act
    const myButton = page.root?.shadowRoot?.querySelector('button');

    myButton?.click();

    // assert
    expect(_callback).toHaveBeenCalled();
  });

  // TODO: Still need to figure out a weay to simulate a click on a disabled button as the user does.
  it.skip("cannot click on button if it's disabled", async () => {
    // arrange
    const page = await newSpecPage({
      components: [Button],
      html: `<mylib-button label="My Button" disabled></mylib-button>`,
    });

    const _callback = jest.fn();
    page.doc.addEventListener('clickEvent', _callback);
    await page.waitForChanges();

    // act
    page.root?.querySelector('button')?.click();

    // assert
    expect(_callback).toHaveBeenCalledTimes(0);
  });
});
