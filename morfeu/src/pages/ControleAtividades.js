import {useState} from 'react' 
import Footer from '../components/Footer'
import styles from './ControleAtividades.module.css'
import Task from '../components/Task'
import Dashboard from '../components/Dashboard'


const ControleAtividades = () => {

  window.onbeforeunload = function(e) {
    return 'Tem a certeza que quer fechar a janela?';
 };

const [task, setTask] = useState([
  {}]);

const addTask=()=>{  
  task.length > 5 ? alert("Numero maximo de tarefas atingido!") : setTask([...task,{}]);
}


  return (
    <div  >
        <body className={styles.container}>  
            
            <div className={styles.container_dashboard}><Dashboard/></div>          
            <div className={styles.containerTasks}>
                {<Task tarefas={task}/> }                
            </div>
            <button className={styles.btn_addTask} onClick={addTask} type="submit">Add task</button>
            </body>
                <footer className={styles.footer}>
                    <Footer/>
                </footer>      
    </div>
  )
}

export default ControleAtividades