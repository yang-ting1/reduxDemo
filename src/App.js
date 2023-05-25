import React from 'react';
import { Counter } from './components/Thunk';
import { SagaCounter } from './components/Saga';
import { ThunkCounter } from './components/RTKThunk';
import { RTKQueryCounter } from './components/RTKQuery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Thunk</h2>
        <Counter />
        <hr/>
        <h2>Saga</h2>
        <SagaCounter/>
        <hr/>
        <h2>RTK Thunk</h2>
        <ThunkCounter/>
        <hr/>
        <h2>RTK Query</h2>
        <RTKQueryCounter/>
      </header>
    </div>
  );
}

export default App;
