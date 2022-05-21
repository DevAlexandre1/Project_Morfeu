import styles from "./LoginPage.module.css"
import LoginImg from "../assets/logoBrancoLogin.png"
// const backImgLogin = new URL("./assets/LoginPage.jpg", import.meta.url)
//const imgLogin = new URL("../assets/HomePageButton.jpg")
const LoginPage = () => {
  return (
    <section className={styles.main_log}>
      <div >           
          <form className={styles.formLogin}>
            <div className ={styles.imgLogin}>
                <img src={LoginImg} alt="ImagemLogin" />
            </div>
              <div >
                  <label htmlFor="email">Email: </label>   
                  <input type="email" name="email" id="email" placeholder="Digite seu email" />
              </div>
              <div>
                  <label htmlFor="senha">Senha: </label>
                  <input type="password" name="senha" id="senha" placeholder="Informe sua senha"/>
              </div>
              <div >
                <input className={styles.buttonEnviar}  type="submit" value="Enviar" />
              </div>
              
          </form>
      </div>
    </section>
  )
}

export default LoginPage