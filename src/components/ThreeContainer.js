import React, { Component } from 'react';
import * as THREE from 'three';
import MyThree from './MyThree';

require('three');

const ThreeContainer = () => {
  return (
    <div id="three-container">
      <canvas></canvas>
    </div>
  );
};

export default ThreeContainer;
