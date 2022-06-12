import React from 'react'
import Style from './Sobre.module.css'
import Footer from '../components/Footer'

const Sobre = () => {
  return (
    <div>
      <body>
        <div className={Style.container}>
          <h2>Sobre a plataforma de aplicativos FATO</h2>
            <p> Este projeto consiste em uma plataforma multifuncional, onde será implementada diversas ferramentas voltadas para automatizar ou controlar processos contábeis e demais. </p>
            <p> <strong>Informação ao desenvolvedores</strong></p>
            <p><strong>Front-end</strong></p>
            <p>React-js, HTML5 e CSS3</p>
            <p><strong>Back-end: </strong></p>
            <p> Node-js</p>
            <p>Mysql</p>
            <p> <strong>Desenvolvedor:</strong> <a href="http://https://github.com/DevAlexandre1">Alexandre TI - FATO ASSESSORIA CONTÁBIL</a></p>
            <p>Projeto iniciado em 04/2022</p>
          </div>

        </body>
        <footer >
               <Footer/>
        </footer>  
    </div>
  )
}

export default Sobre