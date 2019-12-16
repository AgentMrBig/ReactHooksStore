import React, { useState, useContext } from 'react';
import Hero from './Hero';

import { HeroContext } from './HeroProvider';

const HeroList = () => {
  const [heros, setHeros] = useContext(HeroContext);

  return (
    <div>
      <h1>Hero List</h1>
      {heros.map(hero => (
        <Hero key={hero.id} name={hero.name} strength={hero.strength} />
      ))}
    </div>
  );
};

export default HeroList;
