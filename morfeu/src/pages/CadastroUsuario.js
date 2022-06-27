import React from 'react'
import CadastrarUser from '../components/CadastrarUser'
import Style from './CadastroUsuario.module.css'
import Rodape from '../components/Footer'

const CadastroUsuario = () => {
  return (
       <div >
            <div className={Style.container_registro}>
                <CadastrarUser/>
             </div>
             <footer>
               <Rodape/>
             </footer>
        </div>
   
  )
}

export default CadastroUsuario