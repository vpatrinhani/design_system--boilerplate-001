import { useCallback } from 'react';

import { MylibButton, MylibIcon } from '@my-lib-org/mylib/bindings/react';

import { TestSvg } from '../components/TestSvg'

export const PageButtons = () => {
  const handleClickEvent = useCallback((e, showAlert = false) => {
    console.log(e);
    console.log(`<mylib-buton> - Clicked!`);
    if (showAlert) {
      alert(`<mylib-buton> - Clicked!`);
    }
  }, []);

  return (
    <div>
      <h1>Buttons</h1>
      <hr/>
      <ul className="reset list-demo-components">
        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="Button Label" aria-label="" variant="base" icon="" icon-position="left" size="md" disabled="false" onClickEvent={handleClickEvent}>
            </MylibButton>
          </div>
        </li>

        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="" aria-label="Go Back" variant="base" icon="cmdEdit16" icon-position="center" size="md" disabled="false" onClickEvent={handleClickEvent}>
            </MylibButton>
          </div>
        </li>

        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="Button Label" aria-label="" variant="base" icon="cmdEdit16" icon-position="left" size="md" disabled="false" onClickEvent={handleClickEvent}>
            </MylibButton>
          </div>
        </li>

        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="Button Label" aria-label="" variant="base" icon="cmdEdit16" icon-position="right" size="md" disabled="false" onClickEvent={handleClickEvent}>
            </MylibButton>
          </div>
        </li>

        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="Button Label (Disabled)" aria-label="" variant="base" icon="cmdEdit16" icon-position="right" size="md" disabled="true" onClickEvent={handleClickEvent}>
            </MylibButton>
          </div>
        </li>

        <li className="reset">
          <div className="demo-unity-comp-container">
            <MylibButton type="button" label="Button Custom SVG Icon" aria-label="" variant="base" icon-position="left" size="md" iconType="svg" onClickEvent={handleClickEvent}>
              <TestSvg slot="custom-svg-icon"/>
            </MylibButton>
          </div>
        </li>
      </ul>
    </div>
  );
};
