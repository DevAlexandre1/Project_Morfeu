import styles from './MenuPrincipal.module.css'
import {Link} from "react-router-dom"
import ImgHome from "../assets/logoBrancoLogin.png"

const MenuPrincipal = () => {
  return (
    <div className={styles.container}>       
            <header className={styles.header_container}>
                <img className={styles.img_home} src={ImgHome} alt="toHome" />
                <nav className={styles.nav_menu}>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>Ferramentas<ul>
                        <li><Link className={styles.links_menu} to="/">Home</Link>  </li>
                        <li><Link className={styles.links_menu} to="/Sobre">Sobre</Link></li>
                        <li><Link className={styles.links_menu} to="/Sobre">Sobre</Link></li>
                        </ul>
                    </li>
                    <li></li>
                                        
                      
                    <Link className={styles.links_menu} to="/Sobre">Sobre</Link>
                  </ul>
                </nav>              
            </header>       
           
     </div>
  )
}

export default MenuPrincipal