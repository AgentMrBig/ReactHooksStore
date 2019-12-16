import React from 'react';

const Hero = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Strength: {props.strength}</p>
    </div>
  );
};

export default Hero;
