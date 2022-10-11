import React from 'react';
import './App.css';

import { motion } from "framer-motion";

import Logo from './assets/logo';

import iconGithub from './assets/github.svg';
import iconLinkedin from './assets/linkedin.svg';
import iconTwitter from './assets/twitter.svg';

// import iconNodeJs from './assets/stacks/nodejs.svg';
// import iconReactJs from './assets/stacks/reactjs.svg';
// import iconReactNative from './assets/stacks/react-native.svg';

// import Particles from './components/Particles';
// import StackCard from './components/StackCard';

import profile from './assets/profile.jpg';

import Procrastinating from './assets/Procrastinating.svg';

function App() {

return (
<>
  <nav>
    <Logo/>
    <div>
      <a href="https://github.com/guilhermecezario" target="blank">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={iconGithub}
          alt="github"
        />
      </a>
      <a href="https://twitter.com/gui_cezario" target="blank">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={iconTwitter}
          alt="twitter"
        />
      </a>
      <a href="https://www.linkedin.com/in/guilherme-cezario/" target="blank">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={iconLinkedin}
          alt="linkedin"
        />
      </a>
    </div>
  </nav>
  {/* <Particles value="500"/>
  <Particles value="250"/>
  <Particles value="75"/> */}
  <div className="container-supreme">
    <header className="container-main">
      <div>
        <h1>Guilherme Cezário</h1>
        <h2>Desenvolvedor Fullstack</h2>
        <hr />
      </div>
      <img src={Procrastinating} alt="procrastinating" />
    </header>
    <section className="container-about">
        <h2>Sobre mim:</h2>
        <div className="block-color-about">
          <img src={profile} alt="profile"/>
          <p>Formado em técnico de informática para a internet me apaixonei pelo mundo da programação assim que entrei no curso aos meus 14 anos, desde então venho me esforçando cada dia mais para ser o melhor de mim na área, atualmente estou cursando Analise e desenvolvimento de sistemas e focando meus estudos na linguagem Javascript que me interessei desde o começo.</p>
        </div>
    </section>
    <section className="container-stack-main">
      <h2>Minhas habilidades:</h2>
      <p>Essas são as minhas principais tecnologia no momento</p>
      <div className="block-stack">
        {/* <StackCard icon={iconNodeJs} text="NodeJs"/>
        <StackCard icon={iconReactJs} text="ReactJs"/>
        <StackCard icon={iconReactNative} text="React Native"/> */}
      </div>
    </section>
  </div>
</>
);
}

export default App;
