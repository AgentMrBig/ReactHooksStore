import React, { useState, useEffect, useContext } from 'react';
import { HeroProvider } from './components/HeroProvider';
import HeroList from './components/HeroList';
import LoginForm from './components/LoginForm';
import ThreeContainer from './components/ThreeContainer';

import './App.css';

function App() {
  return (
    <HeroProvider>
      <div className="App">
        <ThreeContainer />
        <HeroList />
      </div>
    </HeroProvider>
  );
}

export default App;
