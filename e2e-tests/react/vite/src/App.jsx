import React from 'react'
import viteLogo from '/vite.svg'

// Standard import
// import { MylibButton } from '@my-lib-org/mylib/bindings/react';

// Lazy load import
const MylibButtonLazy = React.lazy(() => import('@my-lib-org/mylib/bindings/react').then(module => ({default:module.MylibButton})))

import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + Mylib</h1>
      <div className="card">
        {/* <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
        </MylibButton> */}
        <MylibButtonLazy type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
        </MylibButtonLazy>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
