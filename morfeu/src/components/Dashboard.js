import React from 'react'
import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react'

const Dashboard = () => {

  const [dataInicial, setDataInicial] = useState("*")
  const [dataFinal, setDataFinal] = useState("*")
  const [changeEmpresa, setChangeEmpresa] = useState("*")
  const [changeTarefa, setChangeTarefa] = useState("*")




  return (
    <div>
        <div className={styles.container}>
          <div className={styles.container_filtros}>
            <form>
              <label>
                <span>
                  <h3>Filtros</h3>
            <ul>
              <li>Data inicial</li>
                  <input type="text" />
              <li>Data final</li>
                  <input type="text" />
              <li>Empresa</li>
                  <input type="text" />
              <li>Tarefa</li>          
                  <input type="text" />
            </ul>
               </span>
              </label>
            </form>
            <p>Filtrar apenas se o usuario requerer</p>
            
          </div>
          <div className={styles.container_dashboard_principal}>
              <p>Dashboard principal</p>
          </div>
          <div className={styles.container_dashboard_sec}>
              <p>Dashboard secundario</p>
          </div>
          <div className={styles.container_dashboard_ter}>
              <p>Dashboard terciario</p>
          </div>

        </div>
        
    </div>
  )
}

export default Dashboard