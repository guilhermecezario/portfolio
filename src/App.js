import React from 'react';
import './App.scss';

import Logo from './assets/Logo';

import MiniminiIcon from './assets/projects/Minimini';
import MupaIcon from './assets/projects/Mupa';
import PixtaIcon from './assets/projects/Pixta';
import TipaIcon from './assets/projects/Tipa';
import WholeIcon from './assets/projects/Whole';
import ZeinbIcon from './assets/projects/Zeinb';

import LocomotivaIcon from './assets/LocomotivaIcon';
import HexalabIcon from './assets/HexalabIcon';

import profile from './assets/profile.jpg';

import { MdArrowForward } from "react-icons/md";

function App() {
  return (
  <div>
    <nav className='navbar fixed-top py-0'>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Logo/>
        </a>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experiencias">Experiências</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experiencias">Contato</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container">
      <div className="container-main">
        <h1>Guilherme Cezário</h1>
        <h2>Full Stack Developer na LOCOMOTIVA.info</h2>
        <p>Um jovem apaixonado e explorador do mundo da tecnologia</p>
        
        <a href='#sobre'><strong>Ver mais sobre mim</strong> <MdArrowForward/></a>
      </div>

      <div className="container-about" id="sobre">
        <h1>Sobre mim:</h1>
        
        <div>
          <img src={profile} alt="profile" />
          
          <p>Olá meu nome é <strong>Guilherme Cezário</strong> e tenho <strong>20 anos</strong></p>
          <p>Formado em técnico de informática para a internet em 2019 me apaixonei pala programação e nunca mais me vi sem o mundo da tecnologia na minha vida</p>
          <p>Moro em uma cidadezinha do interior de São Paulo chamada Itapeva aqui nasci e fui criado desde pequeno</p>
          <p>Gosto de desafios e coisas que me incentivam a aprender mais para alcançar o objetivo</p>
          <p>Busco novos aprendizados e conhecimento a cada dia, focado nos objetivos para ser o melhor de mim e conquistar aquilo que desejo.</p>
          <p>Quando não estou no trabalho procuro me distrair e fugir da rotina do dia a dia para não afetar o meu rendimento</p>
        </div>
      </div>

      <div className="container-work" id="projetos">
        <h1>Projetos que participei:</h1>
        
        <div className='content fade-out-up'>
          <MiniminiIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>

        <div className='content'>
          <MupaIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
        
        <div className='content'>
          <TipaIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
        
        <div className='content'>
          <PixtaIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
        
        <div className='content'>
          <WholeIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
        
        <div className='content'>
          <ZeinbIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
      </div>
      
      <div className="container-experience" id="experiencias">
        <h1>Minhas experiencias:</h1>
        
        <div className='content'>
          <LocomotivaIcon />
          
          <div>
            <p><strong>Empresa</strong>: Locomotiva Tecnologia</p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>desde janeiro de 2021 até o momento</p>
          </div>
        </div>
          
        <div className='content mt-4'>
          <HexalabIcon />
          
          <div>
            <p>Empresa: <strong>Locomotiva Tecnologia</strong></p>
            <p>Criando software sob medida para clientes e desenvolvimento de projetos internos da Locomotiva;</p>

            <p><strong>Tipa.ai</strong> - processamento de pagamento por Pix para criadores</p>
            <p><strong>Pixta.me</strong> - solução de pagamentos e bilhetagem para eventos</p>

            <p><strong>Competências</strong>: Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
            <p>de março de 2020 até janeiro de 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
