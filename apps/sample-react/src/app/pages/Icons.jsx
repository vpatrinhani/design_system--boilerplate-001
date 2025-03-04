import React from 'react'

import { MylibIcon } from '/dist/libs/mylib/bindings/react/src'

export const PageIcons = () => {
  return (
    <div>
      <h1>Icons</h1>
      <hr/>
      <MylibIcon name="cmdSave32R" size="md" type="svg" />
      <MylibIcon name="cmdFitToWindow16"  />
    </div>
  )
}
