import React from 'react'
import style from './Dashboard.module.css'
import { useEffect, useState } from 'react'

const Dashboard = () => {

  const [dataInicial, setDataInicial] = useState("*")
  const [dataFinal, setDataFinal] = useState("*")
  const [changeEmpresa, setChangeEmpresa] = useState("*")
  const [changeTarefa, setChangeTarefa] = useState("*")




  return (
    <div>
      <div>
        <div>
          <form>
            <label>
              <span>
                <input type="text" />
              </span>
            </label>
          </form>
        </div>
        <h3>Filtros</h3>
        <ul>
          <li>Data inicial</li>
          <li>Data final</li>
          <li>Empresa</li>
          <li>Tarefa</li>          
        </ul>
        <h3>Lembrar de colocar padrao dashboard sem filtro, filtrar apenas se o usuario requerer</h3>
        
      </div>
      <h3>Iniciando a construção do dashboard 06/07</h3> </div>
  )
}

export default Dashboard