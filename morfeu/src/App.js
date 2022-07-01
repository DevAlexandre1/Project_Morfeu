import './App.css';
import React from 'react';



//Components
import MenuPrincipal from './components/MenuPrincipal';
import NavBar from './components/NavBar';


//Context
import { ControlAcess } from "./context/HandleControlAcess"

//Routers
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Pages
import CadastroUsuario from './pages/CadastroUsuario'
import Home from './pages/Home'
import Login from './pages/Login'
import Sobre from './pages/Sobre'
import Footer from './components/Footer';
import ControleAtividades from './pages/ControleAtividades';


function App() {
  const {userLog, setUserLog} = React.useContext(ControlAcess)



  return (
  
   <div className='div_app'>    
      <BrowserRouter>
         {/* Navbar */}
         <NavBar/>                 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CadastroUsuario" element={userLog ? <CadastroUsuario/> : <Navigate to="/"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sobre" element={userLog ? <Sobre/> : <Navigate to="/login"/>}/>
            <Route path="/ControleAtividades" element={userLog ? <ControleAtividades/> : <Navigate to="/login"/>}/>
        </Routes>      
      </BrowserRouter>        
   </div>
  );
}

export default App;
