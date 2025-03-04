import { html } from 'lit-html';
import { customEventActionLogger } from '$root/.storybook/helpers/custom-action';
import { FormWrapperTemplate } from '$root/.storybook/helpers/lit-templates';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { scriptLoader } from '$root/.storybook/helpers/lit-script';

import { DIRECTORY } from '$lib-mylib/.storybook/constants';

import { argTypes, cssProperties } from './story-args';

export const meta = {
  title: `${DIRECTORY.INPUTS}/Button`,
  parameters: {
    badges: [BADGE.STABLE],
    controls: {
      hideNoControlsWarning: true,
    },
    cssprops: {
      ...cssProperties,
    },
  },
};

export const Template = (params) => {
  const {
    label = 'Label',
    type = 'button',
    variant = 'base',
    icon = '',
    iconPosition = 'left',
    iconSize,
    size = 'md',
    disabled = false,
    ariaLabel = '',
    colorScheme,
    className = '',
    toggled = false,
  } = params;

  const clickEventHandler = customEventActionLogger('clickEvent', (e) => ({
    clientX: e.detail.pointerEvent.clientX,
  }));

  return html`
    <mylib-button
      type="${type}"
      class="${className}"
      label="${label}"
      aria-label="${ariaLabel}"
      variant="${variant}"
      icon="${icon}"
      icon-position="${iconPosition}"
      icon-size="${iconSize}"
      size="${size}"
      ?disabled=${disabled}
      ?toggled="${toggled}"
      color-scheme="${colorScheme}"
      @clickEvent=${clickEventHandler}
    >
    </mylib-button>
  `;
};

export const templateButtonThemeSchemeDemoArgTypes = {
  variant: argTypes.variant,
};

export const TemplateButtonThemeSchemeDemo = (params) => {
  const { variant = 'base' } = params;

  const commonButtonParams = {
    variant,
  };

  const buttons = [
    Template({
      label: 'Button Label',
      ...commonButtonParams,
    }),
    Template({
      label: '',
      icon: 'cmdEdit16',
      iconPosition: 'center',
      ariaLabel: 'Go Back',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label',
      icon: 'cmdEdit16',
      iconPosition: 'left',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label',
      icon: 'cmdEdit16',
      iconPosition: 'right',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label (Disabled)',
      icon: 'cmdEdit16',
      iconPosition: 'right',
      ...commonButtonParams,
      disabled: true,
    }),
  ];

  const buttonWrappers = buttons.map(
    (buttonEl) => html`
      <li class="reset">
        <div class="demo-unity-comp-container">${buttonEl}</div>
      </li>
    `
  );

  return html`
    <ul class="reset list-demo-components">
      ${buttonWrappers}
    </ul>
  `;
};

// Sizes
export const templateButtonSizeListArgTypes = {
  variant: argTypes.variant,
};

export const TemplateButtonSizeListContainer = (params) => {
  const { variant = 'base' } = params;

  const commonButtonParams = {
    variant,
  };

  const buttons = [
    Template({
      label: 'Small',
      size: 'sm',
      icon: 'cmdEdit16',
      iconPosition: 'left',
      ...commonButtonParams,
    }),
    Template({
      label: 'Medium',
      size: 'md',
      icon: 'cmdEdit16',
      iconPosition: 'left',
      ...commonButtonParams,
    }),
    Template({
      label: 'Large',
      size: 'lg',
      icon: 'cmdEdit16',
      iconPosition: 'left',
      ...commonButtonParams,
    }),
  ];

  const buttonWrappers = buttons.map(
    (buttonEl) => html`
      <li class="reset">
        <div class="demo-unity-comp-container">${buttonEl}</div>
      </li>
    `
  );

  return html`
    <ul class="reset list-demo-components">
      ${buttonWrappers}
    </ul>
  `;
};

export const TemplateButtonFixedMinWidthListContainer = (params) => {
  const { variant = 'base' } = params;

  const commonButtonParams = {
    variant,
  };

  const buttons = [
    Template({
      label: 'Small',
      size: 'sm',
      className: 'fixed-min-width',
      ...commonButtonParams,
    }),
    Template({
      label: 'Medium',
      size: 'md',
      className: 'fixed-min-width',
      ...commonButtonParams,
    }),
    Template({
      label: 'Large',
      size: 'lg',
      className: 'fixed-min-width',
      ...commonButtonParams,
    }),
  ];

  const buttonWrappers = buttons.map(
    (buttonEl) => html`
      <li class="reset">
        <div class="demo-unity-comp-container">${buttonEl}</div>
      </li>
    `
  );

  return html`
    <style>
      .fixed-min-width {
        --mylib-button--min-width: 221px;
      }
    </style>

    <ul class="reset list-demo-components">
      ${buttonWrappers}
    </ul>
  `;
};

// Color Variants

export const templateButtonColorVariantListArgTypes = {
  variant: {
    control: false,
    table: {
      disable: true,
    },
  },
  size: argTypes.size,
};

export const TemplateButtonColorVariantListContainer = (params) => {
  const { variant = 'base', size = 'md' } = params;

  const commonButtonParams = {
    variant,
    size,
  };

  const buttons = [
    Template({
      label: 'Button Label',
      ...commonButtonParams,
    }),
    Template({
      label: '',
      icon: 'cmdEdit16',
      iconPosition: 'center',
      ariaLabel: 'Go Back',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label',
      icon: 'cmdEdit16',
      iconPosition: 'left',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label',
      icon: 'cmdEdit16',
      iconPosition: 'right',
      ...commonButtonParams,
    }),
    Template({
      label: 'Button Label (Disabled)',
      icon: 'cmdEdit16',
      iconPosition: 'right',
      ...commonButtonParams,
      disabled: true,
    }),
  ];

  const buttonWrappers = buttons.map(
    (buttonEl) => html`
      <li class="reset">
        <div class="demo-unity-comp-container">${buttonEl}</div>
      </li>
    `
  );

  return html`
    <ul class="reset list-demo-components">
      ${buttonWrappers}
    </ul>
  `;
};

// Use cases and examples
// Form Integrations

export const FormTemplate = FormWrapperTemplate;

const formTemplateContent = () => html`
  <input
    id="id--field-01"
    name="field-01"
    type="test"
    value="field 01 - Value"
  />
  <input id="id--field-02" name="field-02" type="test" />
  ${Template({
    label: 'Reset',
    variant: 'base',
    type: 'reset',
  })}
  ${Template({
    label: 'Submit',
    variant: 'base',
    type: 'submit',
  })}
`;

export const formTemplateArgs = {
  content: formTemplateContent(),
};

export const TemplateUseCase_ControlledUnControlled = (params) => {
  const {
    buttonId = 'cmd-button-toggled',
    uncontrolledMode = false,
    label = 'Label',
    type = 'button',
    variant = 'base',
    icon = '',
    iconPosition = 'left',
    size = 'md',
    disabled = false,
    ariaLabel = '',
    colorScheme,
    className = '',
    toggled = false,
    iconSize,
  } = params;

  const clickEventHandler = customEventActionLogger('clickEvent', (e) => ({
    clientX: e.detail.pointerEvent.clientX,
  }));

  let scriptTag = html``;

  if (!uncontrolledMode) {
    scriptTag = scriptLoader(`
      const buttonEl = document.getElementById('${buttonId}');

      var buttonToggledState = ${toggled};

      const setStateButtonToggled = function (value) {

        if (value === true) {
          buttonEl.setAttribute('toggled', value);
        } else  {
          buttonEl.removeAttribute('toggled');
        }

        buttonToggledState = value;
      };

      setStateButtonToggled(buttonToggledState);

      buttonEl.addEventListener('clickEvent', (e) => {
        setStateButtonToggled(!buttonToggledState);
      });
    `);
  }

  return html`
    ${scriptTag}
    <mylib-button
      id=${buttonId}
      type="${type}"
      class="${className}"
      label="${label}"
      aria-label="${ariaLabel}"
      variant="${variant}"
      icon="${icon}"
      icon-position="${iconPosition}"
      icon-size="${iconSize}"
      size="${size}"
      ?disabled=${disabled}
      color-scheme="${colorScheme}"
      ?toggled="${toggled}"
      @clickEvent=${clickEventHandler}
      ?uncontrolled-mode=${uncontrolledMode}
    ></mylib-button>
  `;
};

export const TemplateUseCase_CustomSvgIcon = (params) => {
  const {
    buttonId = 'cmd-button-toggled',
    uncontrolledMode = true,
    label = 'Label',
    type = 'button',
    variant = 'base',
    iconType = 'svg',
    iconPosition = 'left',
    size = 'md',
    disabled = false,
    ariaLabel = '',
    colorScheme,
    className = '',
  } = params;

  return html`
    <mylib-button
      id=${buttonId}
      type="${type}"
      class="${className}"
      label="${label}"
      aria-label="${ariaLabel}"
      variant="${variant}"
      icon-position="${iconPosition}"
      icon-type="${iconType}"
      size="${size}"
      ?disabled=${disabled}
      color-scheme="${colorScheme}"
      ?uncontrolled-mode=${uncontrolledMode}
    >
      <svg slot="custom-svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="3.5" y1="-1278.5" x2="45" y2="-1320" gradientTransform="matrix(1 0 0 -1 0 -1272)">
          <stop  offset="0" style="stop-color:#FFFFFF"/>
          <stop  offset="0.2323" style="stop-color:#FAFAFA"/>
          <stop  offset="0.4964" style="stop-color:#EDEDED"/>
          <stop  offset="0.775" style="stop-color:#D6D6D6"/>
          <stop  offset="1" style="stop-color:#BEBEBE"/>
        </linearGradient>
        <polygon fill="url(#SVGID_1_)" stroke="#464646" stroke-miterlimit="10" points="32.5,0.5 9.5,0.5 9.5,47.5 45.5,47.5 45.5,13.5 "/>
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="29.25" y1="-1275.75" x2="42.25" y2="-1288.75" gradientTransform="matrix(1 0 0 -1 0 -1272)">
          <stop  offset="0" style="stop-color:#FFFFFF"/>
          <stop  offset="0.2214" style="stop-color:#F8F8F8"/>
          <stop  offset="0.5415" style="stop-color:#E5E5E5"/>
          <stop  offset="0.92" style="stop-color:#C6C6C6"/>
          <stop  offset="1" style="stop-color:#BEBEBE"/>
        </linearGradient>
        <polygon fill="url(#SVGID_2_)" stroke="#464646" stroke-linejoin="round" stroke-miterlimit="10" points="32.5,0.5 32.5,13.5
          45.5,13.5 "/>
        <line fill="none" stroke="#5A5A5A" x1="15" y1="34.5" x2="40" y2="34.5"/>
        <line fill="none" stroke="#5A5A5A" x1="15" y1="28.5" x2="40" y2="28.5"/>
        <line fill="none" stroke="#5A5A5A" x1="15" y1="40.5" x2="40" y2="40.5"/>
        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="3.75" y1="0.25" x2="26.25" y2="22.75">
          <stop  offset="0" style="stop-color:#73B4C8"/>
          <stop  offset="0.1747" style="stop-color:#6AAEC3"/>
          <stop  offset="0.4567" style="stop-color:#529EB5"/>
          <stop  offset="0.8089" style="stop-color:#2C839F"/>
          <stop  offset="1" style="stop-color:#147391"/>
        </linearGradient>
        <rect x="0.5" y="3.5" fill="url(#SVGID_3_)" stroke="#464646" stroke-miterlimit="10" width="29" height="16"/>
        <path fill="#FFFFFF" d="M7,6H3v11h2v-4h2c1.7,0,3-1.3,3-3V9C10,7.3,8.7,6,7,6z M8,10c0,0.6-0.4,1-1,1H5V8h2c0.6,0,1,0.4,1,1V10z"/>
        <polygon fill="#FFFFFF" points="27,8 27,6 21,6 21,17 23,17 23,13 26,13 26,11 23,11 23,8 "/>
        <path fill="#FFFFFF" d="M15,17h-4V6h4c2.2,0,4,1.8,4,4v3C19,15.2,17.2,17,15,17z M13,15h2c1.1,0,2-0.9,2-2v-3c0-1.1-0.9-2-2-2h-2V15
          z"/>
      </svg>
    </mylib-button>
  `;
};

export const TemplateUseCase_XSButtonWithIcon = (params) => {
  const {
    buttonId = 'cmd-button-toggled',
    uncontrolledMode = true,
    label = '',
    type = 'button',
    variant = 'base',
    icon = 'cmdAlignBottom24',
    iconPosition = 'left',
    size = 'xs',
    disabled = false,
    ariaLabel = '',
    colorScheme,
    className = '',
  } = params;

  return html`
    <div>
      <mylib-button
        id=${buttonId}
        type="${type}"
        class="${className}"
        label="${label}"
        aria-label="${ariaLabel}"
        variant="${variant}"
        icon="${icon}"
        icon-position="${iconPosition}"
        size="${size}"
        ?disabled=${disabled}
        color-scheme="${colorScheme}"
        ?uncontrolled-mode=${uncontrolledMode}
      >
      </mylib-button>
      <mylib-button
        id=${buttonId}
        type="${type}"
        class="${className}"
        label="${label}"
        aria-label="${ariaLabel}"
        variant="chromeless"
        icon="cmdShow16"
        icon-position="${iconPosition}"
        size="${size}"
        ?disabled=${disabled}
        color-scheme="${colorScheme}"
        ?uncontrolled-mode=${uncontrolledMode}
      >
      </mylib-button>
    </div>
  `;
};

