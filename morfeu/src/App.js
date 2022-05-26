import './App.css';

//Components


//States
import { useState } from 'react';

//Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Sobre from './pages/Sobre'
import MenuPrincipal from './components/MenuPrincipal';


function App() {
  return (
  
   <div className='div_app'> 
      <BrowserRouter>
        <MenuPrincipal/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
      
   </div>

  );
}

export default App;
