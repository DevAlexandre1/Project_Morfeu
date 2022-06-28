import Styles from "./Login.module.css"
import LoginImg from "../assets/logoBrancoLogin.png"
import {useState} from 'react'

const Login = () => {
  
  //Criando o gerenciador de dados do form  
  const [userEmail, setUserEmail] = useState("")
  const [userSenha, setUserSenha] = useState("")
  
  const handleSubmit =(e)=>{
    console.log("LOGIN")
  }

  return (      
      <div className={Styles.container}>         
          <form className={Styles.formLogin} onSubmit={handleSubmit}>
          <div className ={Styles.imgLogin}>
                <img src={LoginImg} alt="ImagemLogin" />
            </div>              
              <label>
                  <span>E-mail:</span>
                  <input className={Styles.input_form}
                  type="email"
                  name="email"
                  required placeholder='E-mail do usuario'
                  value={userEmail}
                  onChange={(e)=> setUserEmail(e.target.value)}  />
              </label>
              <label>
                  <span>Senha:</span>
                  <input className={Styles.input_form}
                  type="password"
                  name="password"
                  required placeholder='Insira sua senha' 
                  value={userSenha}
                  onChange={(e)=> setUserSenha(e.target.value)}  />
              </label>
              <button type="submit">Entrar</button>
          </form>
      </div>    
  )
}
export default Login