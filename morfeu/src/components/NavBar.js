import React from "react"
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'
import ImgHome from "../assets/logoBrancoLogin.png"

//Bootstrap
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Context
import { ControlAcess } from "../context/HandleControlAcess"



const NavBar = () => {
    const {userLog, setUserLog} = React.useContext(ControlAcess)

    const {usuarioLogado, setUsuarioLogado} = React.useContext(ControlAcess) 
  

  return (
    <div>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Link className={styles.links_menu} to="/">
          <img className={styles.img_home} src={ImgHome} alt="toHome" />   
          </Link>     
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              {/* <Link className={styles.links_menu} to="/">Home</Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}            
        
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {userLog && (               
              <NavDropdown  className={styles.drop_ferramentas} title="Ferramentas" id="collasible-nav-dropdown">
                  <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.1"><Link  className={styles.link_ferramentas_down}  to="/ControleAtividades">Controle de Atividades</Link></NavDropdown.Item>
                  <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.2">Lista de tarefas</NavDropdown.Item>
                  <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.4">ferramenta 3</NavDropdown.Item>
                  <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.5">ferramenta 4</NavDropdown.Item>
                  <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.6">ferramenta 5</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">demais links</NavDropdown.Item>
              </NavDropdown>
              )} 
              </Nav>              
              <Nav>                  
              <Nav.Link eventKey={2} href="#memes">
              {userLog === "alexandre@fato.com.br" && (
                <Link className={styles.links_menu} to="/sobre">Sobre</Link>
              )} 
              {!userLog && (                
                  <Link className={styles.links_menu} to="/login">Login</Link>                
              )} 
              {userLog === "alexandre@fato.com.br" &&(                  
                  <Link className={styles.links_menu} to="/CadastroUsuario">Registro</Link>
              )}
              {usuarioLogado && (
                  <Link className={styles.userName} title="Clique para alterar sua senha!" to="/AlterarSenha"><i>Bem-vindo(a):</i>  {usuarioLogado}</Link>                 
              )}
              </Nav.Link>
              </Nav>
              
          </Navbar.Collapse>
          </Container>
          </Navbar>
        </header>
    </div>
  )
}

export default NavBar