import styles from "./LoginPage.module.css"
import LoginImg from "../assets/logoBrancoLogin.png"
import {useState} from 'react'

const LoginPage = (alterRouterMenu) => {
  
  //Criando o gerenciador de dados do form
  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.valeu);
  }
  const handleSenha = (el) => {
    setSenha(el.target.valeu);
  }
const handleSubmit = (event) =>{
  event.preventDefault();
  console.log("enviando o formulario")
  console.log(email)
  console.log(senha)
}
  
  return (  

    
      <div className={styles.container}>         
        <section className={styles.main_log}> 
          <form className={styles.formLogin} onSubmit={handleSubmit}>
            <div className ={styles.imgLogin}>
                <img src={LoginImg} alt="ImagemLogin" />
            </div>
              <div >
                  <label htmlFor="email">Email: </label>   
                  <input type="email" name="email" id="email" placeholder="Digite seu email" onChange={handleEmail} />
              </div>
              <div>
                  <label htmlFor="senha">Senha: </label>
                  <input type="password" name="senha" id="senha" placeholder="Informe sua senha" onChange={handleSenha}/>
              </div>
              <div >
                <input onClick={alterRouterMenu} className={styles.buttonEnviar}  type="submit" value="Enviar" />
              </div>
              
          </form>
        </section>
      </div>
    
  )
}

export default LoginPage