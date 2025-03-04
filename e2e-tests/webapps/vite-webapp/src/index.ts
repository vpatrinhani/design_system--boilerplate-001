import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import { defineCustomElements } from '@my-lib-org/mylib/loader';
defineCustomElements(window);

@customElement("reproduction-code")
export class PreviewApp extends LitElement {
  static styles = css`
    .frame {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .divider {
      border-bottom: 1px solid #4d7f91;
      margin-bottom: 1vh;
      margin-top: 1vh;
    }
  `;

  render() {
    return html`
      <div>
        <div id="parent-el" style="height: 100px; width: 700px; display: flex; justify-content:center; align-items:center">
          <span tabindex="0" id="target-2">Mylib Component in webcomponent</span>
          <mylib-tooltip
              id=" "
              label="Label:"
              text="Lorem ipsum dolor sit amet"
              variation="default"
              position="top">
          </mylib-tooltip>
        </div>
      </div>
    `;
  }
}
