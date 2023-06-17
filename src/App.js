import React from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <h1 className="text-3xl font-bold underline">
        Andrew's Software Engineering Portfolio
      </h1>
    </div>
  );
}

export default App;
