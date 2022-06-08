import React from "react"
import {Link} from "react-router-dom"
import styles from './NavBar.module.css'
import ImgHome from "../assets/logoBrancoLogin.png"
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
  return (
    <div>
        <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <img className={styles.img_home} src={ImgHome} alt="toHome" />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Link className={styles.links_menu} to="/">Home</Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            
            <NavDropdown  className={styles.drop_ferramentas} title="Ferramentas" id="collasible-nav-dropdown">
                <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.1"><Link  className={styles.link_ferramentas_down}  to="/ControleAtividades">Controle de Atividades</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.2">Ferramenta 2</NavDropdown.Item>
                <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.4">ferramenta 3</NavDropdown.Item>
                <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.5">ferramenta 4</NavDropdown.Item>
                <NavDropdown.Item className={styles.drop_ferramentas_down} href="#action/3.6">ferramenta 5</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">demais links</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
                
            <Nav.Link eventKey={2} href="#memes">
            
            <Link className={styles.links_menu} to="/sobre">Sobre</Link>
            <Link className={styles.links_menu} to="/login">Login</Link>
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