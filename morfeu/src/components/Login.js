import React from "react"
import Styles from "./Login.module.css"
import LoginImg from "../assets/logoBrancoLogin.png"

import {useState, useEffect} from 'react'
import Axios from "axios"

import { ControlAcess } from "../context/HandleControlAcess"


const Login = () => {

     const {userLog, setUserLog} = React.useContext(ControlAcess)
     

     
  //Criando o gerenciador de dados do form  
  const [userEmail, setUserEmail] = useState("")
  const [userSenha, setUserSenha] = useState("")  
  const [usuarios, setUsuarios] = useState()
  const [error, setError] = useState("")
  
  const handleSubmit =(e)=>{
    e.preventDefault()    
    setError("")
    
    const checkUser = usuarios.find(findEmail)
    function findEmail(email){
      return email.email === userEmail
   }

 if(checkUser === undefined){
   setError("Usuário não cadastrado!")
 }else if(checkUser.senha == userSenha){
    setUserLog(userEmail)
    setError("") 
    
}else{
  setError("Usuário ou senha incorreto!")
 } 
  }
  useEffect(() => {
    Axios.get("http://localhost:3000/getUsers").then((response)=>{
          setUsuarios(response.data);
        });         
    
    },[userEmail])

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
              {error && <p className='error'>{error}</p>}              
          </form>
      </div>    
  )
}
export default Login