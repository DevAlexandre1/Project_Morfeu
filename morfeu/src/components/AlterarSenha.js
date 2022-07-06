import React from "react"
import Styles from "./AlterarSenha.module.css"
import LoginImg from "../assets/logoBrancoLogin.png"
import {useState, useEffect} from 'react'


//import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router-dom"
import Axios from "axios"

//Navegação de paginas
import { useNavigate } from "react-router-dom"

//Context
import { ControlAcess } from "../context/HandleControlAcess"

//import {useHistory} from "react-router-dom"

const AlterarSenha = () => {
    //Contexts
     const {userLog, setUserLog} = React.useContext(ControlAcess)
     const {usuarioLogado, setUsuarioLogado} = React.useContext(ControlAcess)
     const { usuarioSenha, setUsuarioSenha} = React. useContext(ControlAcess)
     
     const navigate = useNavigate()    

  //Criando o gerenciador de dados do form  
  const [userSenhaAntiga, setUserSenhaAntiga] = useState("")  
  const [userNovaSenha, setUserNovaSenha] = useState("")  
  const [userConfirmeNovaSenha, setUserConfirmeNovaSenha] = useState("")  

  const [userEmail, setUserEmail] = useState("")
  const [userSenha, setUserSenha] = useState("") 
  const [usuarios, setUsuarios] = useState()
  const [error, setError] = useState("")
  
  const handleSubmit =(e)=>{
    e.preventDefault()    
    setError("")
    
    //console.log(usuarioLogado)
    //console.log(userNovaSenha)
   
    
    if(userSenhaAntiga !== usuarioSenha){
      setError("Senha antiga incorreta")
    }else if(userNovaSenha === usuarioSenha){
      setError("Escolha uma senha diferente da senha antiga")

    }else if(userNovaSenha !== userConfirmeNovaSenha){
      setError("Nova senha e confirmação de senha são diferentes")
    }else{
      Axios.put("http://localhost:3000/changepassword",{
        usuarioLogado: usuarioLogado,
        userNovaSenha:userNovaSenha
        }).then((response)=>{
            
      })
      alert("Senha alterada com sucesso!")
      navigate("/")  

    }

    
  //   function findSenha(senha){
  //     return senha.senha === userSenha             
  //  }

   
   
  //  if(checkUser === undefined){
  //    setError("Usuário não cadastrado!")
  //   }else if(checkUser.senha == userSenha){
  //     setUserLog(userEmail)
  //     setUsuarioLogado(checkUser.nome)
  //     setError("")  
  //     navigate("/")      
  //   }else{
  //     setError("Usuário ou senha incorreto!")
  //   } 

}  
 const ChangeCancel =()=>{
      navigate("/")
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
              <span>Senha antiga:</span>
                  <input className={Styles.input_form}
                  type="password"
                  name="password"
                  required placeholder='Senha antiga' 
                  value={userSenhaAntiga}
                  onChange={(e)=> setUserSenhaAntiga(e.target.value)}  />
              </label>
              <label>
                  <span>Informe nova senha:</span>
                  <input className={Styles.input_form}
                  type="password"
                  name="passwordsenha"
                  required placeholder='Insira sua senha' 
                  value={userNovaSenha}
                  onChange={(e)=> setUserNovaSenha(e.target.value)}  />
              </label>   
              <label>
                  <span>Confirmar nova senha:</span>
                  <input className={Styles.input_form}
                  type="password"
                  name="passwordconfirm"
                  required placeholder='Confirme a sua senha' 
                  value={userConfirmeNovaSenha}
                  onChange={(e)=> setUserConfirmeNovaSenha(e.target.value)}  />
              </label>              
                <div className={Styles.btn_div}>    
                  <button className={Styles.btn_alterar}type="submit">Alterar</button>
                  <button className={Styles.btn_cancel} onClick={ChangeCancel}>Cancelar</button>
              </div> 
              {error && <p className='error'>{error}</p>}              
          </form>
      </div>    
  )
}
export default AlterarSenha