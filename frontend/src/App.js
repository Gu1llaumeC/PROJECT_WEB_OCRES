import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header text = "Bonjour Arnaud"/>
      </header>
      <Main/>
    </div>
  );
}

export default App;
