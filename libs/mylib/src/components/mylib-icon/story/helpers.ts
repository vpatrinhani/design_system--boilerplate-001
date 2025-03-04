import { html } from 'lit-html';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { iconNamesArray, iconNamesSvgArray } from "@my-lib-org/mylib-core-styles/src/types/_icons";

import { DIRECTORY } from '$lib-mylib/.storybook/constants';

import { cssProperties } from './story-args';

export const meta = {
  title: `${DIRECTORY.BASICS}/Iconography`,
  parameters:{
    badges: [BADGE.STABLE],
    controls: {
      hideNoControlsWarning: true,
    },
    cssprops: {
      ...cssProperties,
    },
  }
};

export const Template = ({ name, size, type = 'font' }) => {
  return html`
    <mylib-icon name="${name}" size="${size}" type="${type}"></mylib-icon>
  `;
};

const TemplateIconListItem = (params) => {
  const { name, size, type } = params;

  const iconName = name;
  const iconSize = size ?? 'md';
  const iconTag = html`<mylib-icon name="${iconName}" size="${iconSize}" type="${type}"></mylib-icon>`;

  return html`
    <div class="icon-list-item">
      <div class="item-content">${iconTag}</div>
      <div class="item-label">${iconName}</div>
    </div>
  `;
};

export const TemplateIconList = (params) => {
  const { size } = params;

  const sortedIcons = iconNamesArray.sort((a, b) => {
    const aName = a.substring(3, a.length)
    const bName = b.substring(3, b.length)

    return aName.localeCompare(bName)
  })

  const htmlIcons = sortedIcons.map(
    (iconName) => TemplateIconListItem({
      name: iconName,
      size: size,
      type: 'font'
    }),
  );

  return html`
    <div class="icon-list">
      ${htmlIcons}
    </div>
  `;
};

export const TemplateSvgList = (params) => {
  const { size } = params;

  const htmlIcons = iconNamesSvgArray.map(
    (iconName) => TemplateIconListItem({
      name: iconName,
      size: size,
      type: 'svg'
    }),
  );

  return html`
    <div class="icon-list">
      ${htmlIcons}
    </div>
  `;
};

export const TemplateCustomIconFont = (params) => {
  const { name, size } = params;

  const style = html`
    <style>
      .custom-font-icon::part(mylib-icon) {
        font-family: 'Material Icons';
      }
    </style>
  `;

  return html`
    ${style}
    <label>Using Google Material Design Icon font family:</label>
    <br/>
    <mylib-icon class="custom-font-icon" name="${name}" size="${size}"></mylib-icon>
  `;
};

export const TemplateCustomColor = () => {

  const style = html`
    <style>
      .align-container {
        justify-content: flex-start;
      }

      .override {
        --mylib-icon--color: green;
      }
    </style>
  `;

  return html`
    ${style}
    <div class="align-container">
      <h4>Using custom color:</h4>
      <p> It is possible to ovewrite the variables colors like in global scope using the root selector:</p>
      <code>
        :root {
          --mylib-icon--color: blue;
          --mylib-icon--color--light-scheme: purple;
          --mylib-icon--color--dark-scheme: red;
        }
      </code>
      <p>You could also provide a class and override the value:</p>
      <mylib-icon class="override" name="cmdApply10" size="md"></mylib-icon>
    </div>
    <br/>
  `;
};

export const TemplateSVG = (params) => {
  const { size } = params;

  return html`
    <mylib-icon size="${size}" type="svg">
      <svg slot="svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
    </mylib-icon>
  `;
};

