import React, { useState, useContext, createContext } from 'react';
export const HeroContext = createContext(null);

export const HeroProvider = props => {
  const [heros, setHeros] = useState([
    {
      name: 'Superman',
      strength: 10000,
      id: 1
    },
    {
      name: 'Batman',
      strength: 100,
      id: 2
    },
    {
      name: 'Hulk',
      strength: 8000,
      id: 3
    },
    {
      name: 'Wolverine',
      strength: 200,
      id: 4
    }
  ]);

  return (
    <HeroContext.Provider value={[heros, setHeros]}>
      {props.children}
    </HeroContext.Provider>
  );
};
