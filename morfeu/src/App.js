import './App.css';

//Components
import MenuPrincipal from './components/MenuPrincipal';
import NavBar from './components/NavBar';


//Context
//import { HandleControlAcess } from './context/HandleControlAcess';

//Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import CadastroUsuario from './pages/CadastroUsuario'
import Home from './pages/Home'
import Login from './pages/Login'
import Sobre from './pages/Sobre'
import Footer from './components/Footer';
import ControleAtividades from './pages/ControleAtividades';


function App() {
  return (
  
   <div className='div_app'>    
      <BrowserRouter>
         {/* Navbar */}
         <NavBar/>                 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/ControleAtividades" element={<ControleAtividades/>}/>
        </Routes>      
      </BrowserRouter>        
   </div>
  );
}

export default App;
