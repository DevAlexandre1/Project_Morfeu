import React from "react"
import {Link} from "react-router-dom"
import styles from './MenuPrincipal.module.css'
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
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Controle de atividades</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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