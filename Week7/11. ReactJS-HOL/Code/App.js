import React from 'react';
import Counter from './Counter';
import WelcomeButton from './WelcomeButton';
import SyntheticEvent from './SyntheticEvent';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <Counter />
      <WelcomeButton />
      <SyntheticEvent />
      <CurrencyConverter />
    </div>
  );
}

export default App;