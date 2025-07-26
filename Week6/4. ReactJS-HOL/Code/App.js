import React from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Application</h1>
        <Posts />
      </header>
    </div>
  );
}

export default App;