import React from 'react';
import './styles.css';
import Particles from 'react-particles-js';

import particles from '../../assets/starsAnimation/particles';
import interactivity from '../../assets/starsAnimation/interactivity';

const particlesComponents = ({value}) => {
  return (
  <Particles params={{
    particles : {
      "number": {
        "value": value,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      ...particles
    },
      interactivity
  }} className="container-particles"/>
  );
}

export default particlesComponents;