import React from 'react'
import Style from './CadastrarUser.module.css'

const CadastrarUser = () => {
  return (
     <div className={Style.container}>
        <h1>Cadastro de usuário</h1>
      <div className={Style.container_form}>
        <form className={Style.form}>
            <label>
                <span>Nome:</span>
                <input className={Style.input_form}
                 type="text"
                 name="displayName"
                 required placeholder='Nome do usuario'  />
             </label>
             <label>
                <span>E-mail:</span>
                <input className={Style.input_form}
                 type="email"
                 name="email"
                 required placeholder='E-mail do usuario'  />
             </label>
             <label>
                <span>Escolha uma Senha:</span>
                <input className={Style.input_form_Senha}
                 type="password"
                 name="password"
                 required placeholder='Insira sua senha'  />
             </label>
             <label>
                <span>Confirmação de senha:</span>
                <input 
                 type="password"
                 name="password"
                 required placeholder='Confirme sua senha'  />
             </label>
             <label>
                <span>Selecione um departamento:</span>
                <select name="Departamento" id="Departamento">
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
                <select name="nivelAcess" id="nivelAcess">
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