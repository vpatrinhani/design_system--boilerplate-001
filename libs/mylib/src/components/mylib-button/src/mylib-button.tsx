/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, h, Prop, Event, Element, EventEmitter, Host } from '@stencil/core';

import { CssClassMap, inheritAttributes } from '$lib-mylib/src/utils';

import { IMylibThemableComponent, ThemeColorSchemes } from '$lib-mylib/src/core/types/MylibThemableComponentInterface';
import { registerMylibThemableComponentPlugin } from '$lib-mylib/src/core/stencil/plugins/MylibThemableComponent';

import { ButtonIconPositions, ButtonSizes, ButtonTypes, ButtonVariants, ButtonIconSizes } from './_types';

import { ContentElement } from './internals/ContentElement';

@Component({
  tag: 'mylib-button',
  styleUrl: './scss/mylib-button.scss',
  shadow: true,
})
export class Button implements IMylibThemableComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el!: HTMLMylibButtonElement;

  /**
   * Custom event for when the button is clicked.
   */
  @Event() clickEvent: EventEmitter;

  /**
   * The button's text label.
   */
  @Prop() label = '';

  /**
   * The type of the button.
   */
  @Prop() type: ButtonTypes = 'button';

  /**
   * The style variant of the button.
   */
  @Prop() variant: ButtonVariants = 'base';

  /**
   * The size of the button.
   */
  @Prop() size: ButtonSizes = 'md';

  /**
   * The icon name to include in the button.
   */
  @Prop() icon = '';

  /**
   * The icon type to include in the button.
   */
  @Prop() iconType = '';

  /**
   * The position to align the icon to, relative to the button label.
   */
  @Prop() iconPosition: ButtonIconPositions = 'left';

  /**
   * The size of the icon contained in the button
   */
  @Prop() iconSize: ButtonIconSizes = 'md';


  /**
   * If true, the button is disabled.
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * The current button color scheme (light/dark).
   */
  @Prop({ mutable: true }) colorScheme: ThemeColorSchemes;

  /**
   * Sets the button state as pressed/active.
   */
  @Prop({ reflect: true }) toggled = false;

  private mylibThemablePlugin = registerMylibThemableComponentPlugin({}, this);

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  private handleClick(event: UIEvent) {
    // TODO maybe move to another place so it can be reused
    if (this.el.shadowRoot && (this.type === 'submit' || this.type === 'reset')) {
      const form = this.el.closest('form');
      if (form) {
        event.preventDefault();
        const fakeActionButton = document.createElement('button');
        fakeActionButton.type = this.type;
        fakeActionButton.style.display = 'none';
        form.appendChild(fakeActionButton);
        fakeActionButton.click();
        fakeActionButton.remove();
      }
    }

    this.clickEvent.emit({ pointerEvent: event });
  }

  private getCssClassMap(): CssClassMap {
    const { size, variant, disabled, toggled } = this;

    return {
      [`button-size--${size}`]: true,
      [variant]: true,
      'disabled': disabled,
      toggled: toggled,
    };
  }

  render() {
    const { label, icon, type, iconPosition, iconSize, iconType, disabled, handleClick, inheritedAttributes, mylibThemablePlugin, toggled } = this;

    const attrs = { type };

    const shadowClassMap = {
      [mylibThemablePlugin.getColorSchemeClass()]: true,
    };

    const hostClassMap = {
      'disabled': disabled,
      ...shadowClassMap,
    };

    const classMap = {
      ...this.getCssClassMap(),
    };

    return (
      <Host aria-disabled={disabled ? 'true' : null} role="button" class={hostClassMap}  aria-pressed={toggled}>
        <button part='mylib-button__button' {...attrs} class={classMap} disabled={disabled} onClick={handleClick.bind(this)} {...inheritedAttributes}>
          <ContentElement label={label} icon={icon} iconPosition={iconPosition} iconSize={iconSize} iconType={iconType}>
            <slot slot="icon--svg" name="custom-svg-icon" />
          </ContentElement>
        </button>
      </Host>
    );
  }
}
