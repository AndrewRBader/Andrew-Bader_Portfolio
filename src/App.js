import React from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Footer />
    </div>
  );
}

export default App;
