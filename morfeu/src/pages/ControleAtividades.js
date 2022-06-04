import {useState} from 'react' 
import Footer from '../components/Footer'
import styles from './ControleAtividades.module.css'
import Task from '../components/Task'


const ControleAtividades = () => {

const [task, setTask] = useState([
  {}]);

const addTask=()=>{  
  task.length > 5 ? alert("Numero maximo de tarefas atingido!") : setTask([...task,{}]);
}


  return (
    <div  >
        <body className={styles.container}>  
            <div className={styles.btn_add_div}>
                <button className={styles.btn_addTask} onClick={addTask} type="submit">Add task</button>     
                <button className={styles.btn_addTask} onClick={addTask} type="submit">Start All</button>    
                <button className={styles.btn_addTask} onClick={addTask} type="submit">Stop All</button>    
            </div>
            <div className={styles.container_dashboard}><h1>Dashboard</h1></div>          
            <div className={styles.containerTasks}>
                {<Task tarefas={task}/> }
                
            </div>

            </body>
                <footer className={styles.footer}>
                    <Footer/>
                </footer>      
    </div>
  )
}

export default ControleAtividades