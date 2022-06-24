import React from 'react'
import CadastrarUser from '../components/CadastrarUser'
import Style from './CadastroUsuario.module.css'

const CadastroUsuario = () => {
  return (
       <div >
            <div className={Style.container_registro}>
                <CadastrarUser/>
             </div>
        </div>
   
  )
}

export default CadastroUsuario