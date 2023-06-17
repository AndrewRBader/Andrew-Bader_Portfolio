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
        <p>Andrew's Software Engineering Portfolio</p>
      </header>
    </div>
  );
}

export default App;
