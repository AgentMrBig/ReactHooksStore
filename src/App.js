import React, { useState, useEffect, useContext } from 'react';
import { HeroProvider } from './components/HeroProvider';
import HeroList from './components/HeroList';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  return (
    <HeroProvider>
      <div className="App">
        <HeroList />
      </div>
    </HeroProvider>
  );
}

export default App;
