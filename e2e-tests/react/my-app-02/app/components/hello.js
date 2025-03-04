'use client'

import { MylibButton } from '@my-lib-org/mylib/bindings/react';

function Hello() {
  return (
    <div className="demo-unity-comp-container">
      <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
      </MylibButton>
    </div>
  )
}

export default Hello;
