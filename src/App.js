import React from 'react';
import './App.scss';

import Logo from './assets/Logo';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      <Navbar expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" color="white"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 bg-dark"
            >
              <Nav.Link href="#sobre" variant="secondary">Sobre</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#experiencias">Experiências</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
            <p>Moro em uma cidadezinha do interior de São Paulo chamada Itapeva. Aqui nasci e fui criado desde pequeno</p>
            <p>Gosto de desafios e coisas que me incentivam a aprender mais para alcançar o objetivo</p>
            <p>Busco novos aprendizados e conhecimento a cada dia, focado nos objetivos para ser o melhor de mim e conquistar aquilo que desejo.</p>
            <p>Quando não estou no trabalho procuro me distrair e fugir da rotina do dia a dia para não afetar o meu rendimento</p>
          </div>
        </div>

        <div className="container-work" id="projetos">
          <h1>Projetos que participei:</h1>

          <p>Aqui estão alguns projetos que já fiz parte na criação 🥰</p>
        
          <div className='row g-2'>
            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://minimini.site/"  target="_blank">
                <MiniminiIcon />
                
                <div className='py-3'>
                  <h5><strong>Minimini</strong></h5>
                  <p className='mb-0'>Um link único para toda sua presença online</p>
                </div>
              </a>
            </div>

            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://mupajardim.com/"  target="_blank">
                <MupaIcon />
                
                <div className='py-3'>
                  <h5><strong>Mupa</strong></h5>
                  <p className='mb-0'>Uma alternativa para se localizar no Museu Paranaense</p>
                </div>
              </a>
            </div>

            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://tipa.ai/"  target="_blank">
                <TipaIcon />
                
                <div className='py-3'>
                  <h5><strong>Tipa.ai</strong></h5>
                  <p className='mb-0'>Processamento de pagamento por Pix para criadores</p>
                </div>
              </a>
            </div>

            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://pixta.me/"  target="_blank">
                <PixtaIcon />
                
                <div className='py-3'>
                  <h5><strong>Pixta</strong></h5>
                  <p className='mb-0'>Solução de pagamentos e bilhetagem para eventos</p>
                </div>
              </a>
            </div>
          
            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://wholefestival.shop/"  target="_blank">
                <WholeIcon />
                
                <div className='py-3'>
                  <h5><strong>Whole Festival</strong></h5>
                  <p className='mb-0'>Solução de pagamentos e bilhetagem para Whole festival</p>
                </div>
              </a>
            </div>

            <div className='col-12 col-lg-4 col-sm-6'>
              <a className='py-4 btn btn-outline-secondary d-flex align-items-center flex-column' rel="noreferrer" href="https://www.zeinb.com.br/"  target="_blank">
                <ZeinbIcon />
                
                <div className='py-3'>
                  <h5><strong>Zeinb</strong></h5>
                  <p className='mb-0'>Vendas de produtos para cabelo e beleza</p>
                </div>
              </a>
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

              <p><strong>Competências</strong>: GitHub · Ruby · SQL · CSS · Bootstrap · PostgreSQL · HTML · Amazon Web Services · Ruby on Rails · Vue.js · React Native · Git · JavaScript · Mysql · Node.js</p>
              <p>desde janeiro de 2021 até o momento</p>
            </div>
          </div>
            
          <div className='two-content'>
            <HexalabIcon />
            
            <div>
              <p><strong>Empresa</strong>: HEXALAB SOLUCOES EM SOFTWARE LTDA</p>
              <p>Desenvolvendo projetos internos da Hexalab</p>

              <p><strong>Competências</strong>: GitHub · SQL · CSS · PostgreSQL · HTML · React.js · Amazon Web Services · React Native · Git · PHP · JavaScript · Mysql · Node.js</p>
              <p>de março de 2020 até janeiro de 2021</p>
            </div>
          </div>
          </div>
          
          <div className="container-contact" id="contato">
          <h1>Meus contatos:</h1>
          
          <p>Entre em contato comigo para saber mais sobre mim, agradeço desde já 🥰</p>
          
          <ul className="nav justify-content-between mt-4">
            <li className="nav-item mb-2">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://www.instagram.com/guilherme.cezarioo/"  target="_blank">Instagram</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://www.linkedin.com/in/guilherme-cezario/"  target="_blank">Linkedin</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://gitlab.com/guilhermecezario/"  target="_blank">Gitlab</a>
              </li>
              <li className="nav-item">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://github.com/guilhermecezario/"  target="_blank">Github</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5515998211270&text=Ola%20tudo%20bem%3F%20Vim%20pelo%20seu%20portfolio"  target="_blank">Whatsapp</a>
              </li>
              <li className="nav-item">
              <a className="btn btn-outline-secondary nav-link" rel="noreferrer" href="https://discord.com/users/365652552873934851"  target="_blank">Discord</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
