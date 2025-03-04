import { MylibButton } from '@my-lib-org/mylib/bindings/react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          React - `create-react-app`
        </h1>
      </header>
      <div style={{ padding: "64px" }}>
        <div className="demo-unity-comp-container">
          <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
          </MylibButton>
        </div>
      </div>
    </div>
  );
}

export default App;
