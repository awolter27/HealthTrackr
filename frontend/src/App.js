import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

import AllergiesDelete from './pages/allergies/AllergiesDelete'
import AllergiesEdit from './pages/allergies/AllergiesEdit'
import AllergiesIndex from './pages/allergies/AllergiesIndex'
import AllergiesNew from './pages/allergies/AllergiesNew'
import AllergiesShow from './pages/allergies/AllergiesShow'

import Footer from './components/Footer';
import './styles/index.css';
import './styles/App.css';
import './styles/fonts.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;