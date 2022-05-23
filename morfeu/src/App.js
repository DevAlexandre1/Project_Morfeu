import './App.css';
import LoginPage from "./components/LoginPage"
import PaginaInicial from './components/PaginaInicial';



function App() {
  return (
   
   <div className='div_app'> 
      <header className='header_app'>
        { <PaginaInicial/> }
      </header>
      
      <main className='main_app'>
        {/* <LoginPage/>  */}
          
      </main>
      
      <footer className='footer_app'>

      </footer>
       
   </div>

  );
}

export default App;
