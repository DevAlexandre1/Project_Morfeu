import styles from './MenuPrincipal.module.css'
import {Link} from "react-router-dom"
import ImgHome from "../assets/logoBrancoLogin.png"

const MenuPrincipal = () => {
  return (
    <div className={styles.container}>       
            <header className={styles.header_container}>
                <img className={styles.img_home} src={ImgHome} alt="" />
                <nav className={styles.nav_menu}>
                  <Link className={styles.links_menu} to="/">Home</Link> 
                  <Link className={styles.links_menu} to="/Login">Login</Link> 
                  <Link className={styles.links_menu} to="/Sobre">Sobre</Link>
                </nav>              
            </header>       
            <body className={styles.bodyInicial}>
              
            </body>
     </div>
  )
}

export default MenuPrincipal