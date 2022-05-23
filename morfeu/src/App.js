import './App.css';
import LoginPage from "./components/LoginPage"
import PaginaInicial from './components/PaginaInicial';
import { useState } from 'react';
import PaginaInicialBody from './components/PaginaInicialBody';


const router = [
  {id: 1, name: "inicial"},
  {id: 2, name: "login" },
  {id: 3, name: "menu" }
];


function App() {
  const [naveRouter, setNaveRouter] = useState(router[0].name);

  //Pagina de login
  const alterRouter =() =>{
    setNaveRouter(router[1].name)
  }

  //Pagina de Menu
  const alterRouterMenu =() =>{
    setNaveRouter(router[2].name)
  } 


  return (
   
   <div className='div_app'> 
      <PaginaInicial/>
      {router === "inicial" && <PaginaInicial alterRouter={alterRouter}/>} 
      {router === "login" && <LoginPage alterRouterMenu={alterRouterMenu}/>} 
      {router === "menu" && <PaginaInicialBody alterRouter={alterRouter}/>} 
   </div>

  );
}

export default App;
