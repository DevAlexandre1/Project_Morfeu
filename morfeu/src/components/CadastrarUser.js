import React from 'react'
import Style from './CadastrarUser.module.css'

const CadastrarUser = () => {
  return (
    <div>
        <h1>Cadastro de usuário</h1>
        <form className={Style.container_form}>
            <label>
                <span>Nome:</span>
                <input
                 type="text"
                 name="displayName"
                 required placeholder='Nome do usuario'  />
             </label>
             <label>
                <span>E-mail:</span>
                <input
                 type="email"
                 name="email"
                 required placeholder='E-mail do usuario'  />
             </label>
             <label>
                <span>Senha:</span>
                <input
                 type="password"
                 name="password"
                 required placeholder='Insira sua usuario'  />
             </label>
             <label>
                <span>Confirmação de senha:</span>
                <input
                 type="password"
                 name="password"
                 required placeholder='Confirme sua usuario'  />
             </label>
             <button className='btn' >Cadastrar</button>
        </form>
        

    </div>
  )
}

export default CadastrarUser