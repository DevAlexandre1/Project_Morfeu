import React from 'react'
import Style from './CadastrarUser.module.css'
import { useState, userEffect } from 'react'
import Axios from "axios"

const CadastrarUser = () => {

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSenha, setUserSenha] = useState("")
  const [userConfirmeSenha, setUserConfirmeSenha] =  useState("")
  const [userDepartamento, setUserDepartamento] = useState("")
  const [userNivelAcesso, setUserNivelAcesso] = useState("")
  const [userLogado, setUserLogado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()

    Axios.post("http://localhost:3000/CadastroUsuario",{
        userName:userName,
        userEmail:userEmail,
        userSenha:userSenha,
        userConfirmeSenha:userConfirmeSenha,
        userDepartamento:userDepartamento,        
        userNivelAcesso:userNivelAcesso,        
        }).then((response)=>{
        console.log(response)
      })
      //Alerta tela de usuário
      alert("Usuário gravado com sucesso!: \nUsuário: " + userName)
  }

  return (
     <div className={Style.container}>
        <h1>Cadastro de usuário</h1>
        <div className={Style.container_form}>
          <form className={Style.form} onSubmit={handleSubmit}>
              <label>
                  <span>Nome:</span>
                  <input className={Style.input_form}
                  type="text"
                  name="displayName"
                  required placeholder='Nome do usuario'
                  value={userName}
                  onChange={(e)=> setUserName(e.target.value)}  />
              </label>
              <label>
                  <span>E-mail:</span>
                  <input className={Style.input_form}
                  type="email"
                  name="email"
                  required placeholder='E-mail do usuario'
                  value={userEmail}
                  onChange={(e)=> setUserEmail(e.target.value)}  />
              </label>
              <label>
                  <span>Escolha uma Senha:</span>
                  <input className={Style.input_form_Senha}
                  type="password"
                  name="password"
                  required placeholder='Insira sua senha' 
                  value={userSenha}
                  onChange={(e)=> setUserSenha(e.target.value)}  />
              </label>
              <label>
                  <span>Confirmação de senha:</span>
                  <input 
                  type="password"
                  name="password"
                  required placeholder='Confirme sua senha'
                  value={userConfirmeSenha}
                  onChange={(e)=> setUserConfirmeSenha(e.target.value)}   />
              </label>
              <label>
                  <span>Selecione um departamento:</span>
                  <select name="Departamento" id="Departamento" value={userDepartamento}
                  onChange={(e)=> setUserDepartamento(e.target.value)} >
                    <option value="administrativo">Administrativo</option>
                    <option value="contabil">Contabilidade</option>
                    <option value="diretor">Diretoria</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="recursosHumanos">Recusrsos Humanos</option>
                    <option value="TecnologiaInformacao">Tecnologia da Informação</option>
                    <option value="recursosHumanos">Recusrsos Humanos</option>
                  </select>
              </label>
              <label>
                  <span>Nível de acesso:</span>
                  <select name="nivelAcess" id="nivelAcess" value={userNivelAcesso}
                  onChange={(e)=> setUserNivelAcesso(e.target.value)} >
                    <option value="junior">Junior</option>    
                    <option value="pleno">Pleno</option>    
                    <option value="senior">Senior</option>    
                    <option value="auxiliar">Auxiliar</option>    
                    <option value="analista">Analista</option>    
                    <option value="administrador">Administrador</option>    
                    <option value="coordenador">Coordenador</option>    
                    <option value="diretor">Diretor</option>    
                  </select>
                </label>
              <button className={Style.btn_submit} >Cadastrar</button>
          </form>
        </div>
    </div>
  )
}

export default CadastrarUser