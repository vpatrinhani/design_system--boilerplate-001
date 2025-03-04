import { h, Prop, Element, Host, State, Component } from '@stencil/core';
import cx from 'classnames';

import { IMylibThemableComponent, ThemeColorSchemes } from '$lib-mylib/src/core/types/MylibThemableComponentInterface';
import { registerMylibThemableComponentPlugin } from '$lib-mylib/src/core/stencil/plugins/MylibThemableComponent';

import { CssClassMap } from '$lib-mylib/src/utils';
import iconsMap from '@my-lib-org/mylib-core-styles/icons/icons-map--font.json';

import { serlializedSvg } from '@my-lib-org/mylib-core-styles/src/lib/svg-icons'
@Component({
  tag: 'mylib-icon',
  styleUrl: './scss/mylib-icon.scss',
  shadow: true,
})
export class Icon implements IMylibThemableComponent {
  @Element() el!: HTMLMylibIconElement;

  @Prop() name: string;
  @Prop() size: string;
  @Prop() type: 'font' | 'svg' = 'font';

  @State() colorScheme: ThemeColorSchemes;

  private mylibThemablePlugin = registerMylibThemableComponentPlugin({}, this);

  private getIconPartMap(): CssClassMap {
    const { type, size } = this;

    return {
      // OBSOLETE: mylib-icon is obsolete, use mylib-icon--content instead
      'mylib-icon': true,
      // OBSOLETE: `icon-size--${size}` is obsolete, use `mylib-icon__size--${size}` instead
      [`icon-size--${size}`]: true,
      // OBSOLETE: icon--color is obsolete, use mylib-icon__content instead
      'icon--color': true,
      'mylib-icon__svg--content': (type === 'svg'),
      'mylib-icon__content': (type === 'font'),
      [`mylib-icon__size--${size}`]: true,
    };
  }

  private getIconContentClassMap(): CssClassMap {
    const { type, size } = this;

    return {
      'mylib-icon__content': (type === 'font'),
      'mylib-icon__svg--content': (type === 'svg'),
      [`mylib-icon__size--${size}`]: true,
    };
  }

  private getHostClassMap(): CssClassMap {
    const { size, mylibThemablePlugin } = this;

    return {
      [mylibThemablePlugin.getColorSchemeClass()]: true,
      [`mylib-icon__size--${size}`]: true,
    };
  }

  private getIconCodeStr() {
    const { name } = this;

    if (!name) return null;

    const iconCode = iconsMap.icons[name];

    if (!iconCode) {
      return name;
    }

    return `&#x${iconCode};`;
  }

  private renderIcon() {
    const { type}  = this;

    const iconPartMap = {
      ...this.getIconPartMap(),
    };

    const iconContentClassMap = {
      ...this.getIconContentClassMap(),
    };

    if (type === 'font') {
      return <span part={cx(iconPartMap)} class={cx(iconContentClassMap)} innerHTML={this.getIconCodeStr()} data-icon-name={this.name} data-icon-type={this.type}></span>;
    } else {
      const svgElement = serlializedSvg(this.name);

      return (
        <div part={cx(iconPartMap)} class={cx(iconContentClassMap)} innerHTML={svgElement} data-icon-name={this.name} data-icon-type={this.type}>
          <slot name="svg"></slot>
        </div>
      );
    }
  }

  render() {
    const { name } = this;

    if (name && name.trim().length <= 0) {
      return null;
    }

    return (
      <Host class={this.getHostClassMap()}>
        {this.renderIcon()}
      </Host>
    );
  }
}
