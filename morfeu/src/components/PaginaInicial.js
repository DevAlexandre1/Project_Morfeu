import styles from "./PaginaInicial.module.css"

import ImgHome from "../assets/logoBrancoLogin.png"

const PaginaInicial = ({alterRouter}) => {
  return (
    <div className={styles.container}>       
            <header className={styles.header_container}>
                <img className={styles.img_home} src={ImgHome} alt="" />
                <nav className={styles.nav_menu}>
                    <a  className={styles.links_menu} href="">Site</a>
                    <a  className={styles.links_menu} href="">Sistemas</a>
                    <a  className={styles.links_menu} href="">Ferramentas</a>
                    <a  className={styles.links_menu} href="">Suporte</a>
                    <a  className={styles.links_menu} href="">Chat</a>                  
                </nav>
                <button onClick={alterRouter} className={styles.button_login} >Login</button>
            </header>       
            <body className={styles.bodyInicial}>
              
            </body>
     </div>
  )
}

export default PaginaInicial