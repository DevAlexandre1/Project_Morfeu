import './App.css';

//Components
import MenuPrincipal from './components/MenuPrincipal';
import NavBar from './components/NavBar';



//States
// import { useState } from 'react';

//Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Sobre from './pages/Sobre'
import Footer from './components/Footer';


function App() {
  return (
  
   <div className='div_app'> 
      <BrowserRouter>
         {/* Navbar */}
         <NavBar/>
                 
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
