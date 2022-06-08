import { useState} from "react"
import styles from './Task.module.css'



const Task = (props) => {
  const {tarefas} = props;
  
    //BOTOES
  const [btnIniciar, setBtnIniciar] = useState(true);
  const [btnParar, setBtnParar] = useState(true);
  const [btnGravar, setBtnGravar] = useState(true);
  
    //DADOS TAREFAS
    const [tarefa0,setTarefa0] = useState()
    const [tarefa1,setTarefa1] = useState()
    const [tarefa2,setTarefa2] = useState()
    const [tarefa3,setTarefa3] = useState()
    const [tarefa4,setTarefa4] = useState()
    const [tarefa5,setTarefa5] = useState()
    
    const [empresa0, setEmpresa0] = useState()
    const [empresa1, setEmpresa1] = useState()
    const [empresa2, setEmpresa2] = useState()
    const [empresa3, setEmpresa3] = useState()
    const [empresa4, setEmpresa4] = useState()
    const [empresa5, setEmpresa5] = useState()

    const [comentario0, setComentario0] = useState()
    const [comentario1, setComentario1] = useState()
    const [comentario2, setComentario2] = useState()
    const [comentario3, setComentario3] = useState()
    const [comentario4, setComentario4] = useState()
    const [comentario5, setComentario5] = useState()

      //DATA TIME TAREFAS
    const [data, setData]= useState()

   
    const [horaInicial0, setHoraInicial0] = useState()
    const [horaInicial1, setHoraInicial1] = useState()
    const [horaInicial2, setHoraInicial2] = useState()
    const [horaInicial3, setHoraInicial3] = useState()
    const [horaInicial4, setHoraInicial4] = useState()
    const [horaInicial5, setHoraInicial5] = useState()
    
    const [horaFinal0, setHoraFinal0] = useState()
    const [horaFinal1, setHoraFinal1] = useState()
    const [horaFinal2, setHoraFinal2] = useState()
    const [horaFinal3, setHoraFinal3] = useState()
    const [horaFinal4, setHoraFinal4] = useState()
    const [horaFinal5, setHoraFinal5] = useState()

    const [timeTarefa0, setTimeTarefa0] = useState()
    const [timeTarefa1, setTimeTarefa1] = useState()
    const [timeTarefa2, setTimeTarefa2] = useState()
    const [timeTarefa3, setTimeTarefa3] = useState()
    const [timeTarefa4, setTimeTarefa4] = useState()
    const [timeTarefa5, setTimeTarefa5] = useState()

 
      //CRONOMETRO
      
      var hh = 0;
      var mm = 0;
      var ss = 0;
      
      var tempo = 1000;//Quantos milésimos valem 1 segundo?
      const [cron0, setCron0] = useState(0)
      const [cron1, setCron1] = useState(0)
      const [cron2, setCron2] = useState(0)
      const [cron3, setCron3] = useState(0)
      const [cron4, setCron4] = useState(0)
      const [cron5, setCron5] = useState(0)
      
      //VARIAVEIS TEMPORARIAS
      const [cronTemp0, setCronTemp0] = useState(0)
      const [cronTemp1, setCronTemp1] = useState(0)
      const [cronTemp2, setCronTemp2] = useState(0)
      const [cronTemp3, setCronTemp3] = useState(0)
      const [cronTemp4, setCronTemp4] = useState(0)
      const [cronTemp5, setCronTemp5] = useState(0)

      
      //Inicia o temporizador
      function start0() {
        //INICIANDO O CRONOMETRO COM O TEMPO ANTES DE PARAR
        //TROCAR A VARIÁVEL TIME PELO SEGUNDOS ENTRE INICIO E PARADA
        var hours = Math.floor( cronTemp0 / 3600 );
        var minutes = Math.floor( (cronTemp0 % 3600) / 60 );
        var seconds = cronTemp0 % 60;
                 
        hh = hours
        mm = minutes
        ss = seconds
          

          setCron0(setInterval(() => { timer0(); }, tempo))
      }
      function start1() {
          
          setCron1(setInterval(() => { timer1(); }, tempo))

      }
      function start2() {
        
        setCron2(setInterval(() => { timer2(); }, tempo))
      }
      function start3() {
        
        setCron3(setInterval(() => { timer3(); }, tempo))
      }
      function start4() {
        
        setCron4(setInterval(() => { timer4(); }, tempo))
      }
      function start5() {
        
        setCron5(setInterval(() => { timer5(); }, tempo))
      }

      //Para o temporizador mas não limpa as variáveis
      function pause0() {
        console.log("Chamei o parar")
          // clearInterval(cron0);
          // setCronTemp0(timer0)
          console.log()
          
          setCron0(clearInterval(cron0))
          
      
      }
      function pause1() {      
        // clearInterval(cron1);
        setCron1(clearInterval(cron1))        
      }
      function pause2() {
      // clearInterval(cron2);
      setCron2(clearInterval(cron2))
      }
      function pause3() {
      // clearInterval(cron3);
      setCron3(clearInterval(cron3))
      }
      function pause4() {
        // clearInterval(cron4);
        setCron4(clearInterval(cron4))
      }
      function pause5() {
        // clearInterval(cron5);
        setCron5(clearInterval(cron5))
      }

      
      //Para o temporizador e limpa as variáveis
      function stop() {
          clearInterval(cron0);
          hh = 0;
          mm = 0;
          ss = 0;
      
          document.getElementById('cronometro0').innerText = '00:00:00';
      }
      
      //Faz a contagem do tempo e exibição
      function timer0() {
          ss++; //Incrementa +1 na variável ss
      
          if (ss == 59) { //Verifica se deu 59 segundos
              ss = 0; //Volta os segundos para 0
              mm++; //Adiciona +1 na variável mm
      
              if (mm == 59) { //Verifica se deu 59 minutos
                  mm = 0;//Volta os minutos para 0
                  hh++;//Adiciona +1 na variável hora
              }
          }
          
      
          //Cria uma variável com o valor tratado HH:MM:SS
          var format0 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
          
          //Insere o valor tratado no elemento counter
          document.getElementById('cronometro0').innerText = format0;
      
          //Retorna o valor tratado
          
          return format0;
      }
      function timer1() {
        ss++; //Incrementa +1 na variável ss
    
        if (ss == 59) { //Verifica se deu 59 segundos
            ss = 0; //Volta os segundos para 0
            mm++; //Adiciona +1 na variável mm
    
            if (mm == 59) { //Verifica se deu 59 minutos
                mm = 0;//Volta os minutos para 0
                hh++;//Adiciona +1 na variável hora
            }
        }
    
        //Cria uma variável com o valor tratado HH:MM:SS
        var format1 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        
        //Insere o valor tratado no elemento counter
        document.getElementById('cronometro1').innerText = format1;
    
        //Retorna o valor tratado
        return format1;
    }
    function timer2() {
      ss++; //Incrementa +1 na variável ss
  
      if (ss == 59) { //Verifica se deu 59 segundos
          ss = 0; //Volta os segundos para 0
          mm++; //Adiciona +1 na variável mm
  
          if (mm == 59) { //Verifica se deu 59 minutos
              mm = 0;//Volta os minutos para 0
              hh++;//Adiciona +1 na variável hora
          }
      }
  
      //Cria uma variável com o valor tratado HH:MM:SS
      var format2 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
      
      //Insere o valor tratado no elemento counter
      document.getElementById('cronometro2').innerText = format2;
  
      //Retorna o valor tratado
      return format2;
     }
      function timer3() {
        ss++; //Incrementa +1 na variável ss

        if (ss == 59) { //Verifica se deu 59 segundos
            ss = 0; //Volta os segundos para 0
            mm++; //Adiciona +1 na variável mm

            if (mm == 59) { //Verifica se deu 59 minutos
                mm = 0;//Volta os minutos para 0
                hh++;//Adiciona +1 na variável hora
            }
        }

        //Cria uma variável com o valor tratado HH:MM:SS
        var format3 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        
        //Insere o valor tratado no elemento counter
        document.getElementById('cronometro3').innerText = format3;

        //Retorna o valor tratado
        return format3;
    }
    function timer4() {
      ss++; //Incrementa +1 na variável ss

      if (ss == 59) { //Verifica se deu 59 segundos
          ss = 0; //Volta os segundos para 0
          mm++; //Adiciona +1 na variável mm

          if (mm == 59) { //Verifica se deu 59 minutos
              mm = 0;//Volta os minutos para 0
              hh++;//Adiciona +1 na variável hora
          }
      }

      //Cria uma variável com o valor tratado HH:MM:SS
      var format4 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
      
      //Insere o valor tratado no elemento counter
      document.getElementById('cronometro4').innerText = format4;

      //Retorna o valor tratado
      return format4;
    }
    function timer5() {
      ss++; //Incrementa +1 na variável ss

      if (ss == 59) { //Verifica se deu 59 segundos
          ss = 0; //Volta os segundos para 0
          mm++; //Adiciona +1 na variável mm

          if (mm == 59) { //Verifica se deu 59 minutos
              mm = 0;//Volta os minutos para 0
              hh++;//Adiciona +1 na variável hora
          }
      }

      //Cria uma variável com o valor tratado HH:MM:SS
      var format5 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
      
      //Insere o valor tratado no elemento counter
      document.getElementById('cronometro5').innerText = format5;

      //Retorna o valor tratado
      return format5;
    }
     //DATA ATUAL
    const dataAtual = new Date().toLocaleDateString()

    //   //HORA ATUAL
    // const horaInicio = new Date().toLocaleTimeString()
    const horaAtual = Date.now()
    
    
      //BTN START
      const handleIniciar =(e)=>{

         //#### VERIFICAR QUANTIDADE DE TAREFAS 
        // const quantidadeTarefas = document.querySelectorAll("#tarefa_container div")
        // const qtdTask = quantidadeTarefas.length  
      
        
        //Stylos task active
        const taskStyle = document.querySelector("#tarefa_container")
        function btnIniciarStylo0(){
          taskStyle.childNodes[0].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar0").disabled = true
          document.querySelector("#btnParar0").disabled = false
        }
        function btnIniciarStylo1(){
          taskStyle.childNodes[1].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar1").disabled = true
           document.querySelector("#btnParar1").disabled = false
        }
        function btnIniciarStylo2(){
          taskStyle.childNodes[2].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar2").disabled = true
           document.querySelector("#btnParar2").disabled = false
        }
        function btnIniciarStylo3(){
          taskStyle.childNodes[3].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar3").disabled = true
           document.querySelector("#btnParar3").disabled = false
        }
        function btnIniciarStylo4(){
          taskStyle.childNodes[4].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar4").disabled = true
           document.querySelector("#btnParar4").disabled = false
        }
        function btnIniciarStylo5(){
          taskStyle.childNodes[5].style.backgroundColor = "rgb(218, 253, 218)"
          document.querySelector("#btnIniciar5").disabled = true
           document.querySelector("#btnParar5").disabled = false
        }
        
        //Get Select task
        const getSelectValor = document.querySelectorAll("#div_task select")
        //Get TextArea task
        const getTextAreaValor = document.querySelectorAll("#div_task textarea")
        
       
        const btnIniciar0 = "btnIniciar0"
        const btnIniciar1 = "btnIniciar1"
        const btnIniciar2 = "btnIniciar2"
        const btnIniciar3 = "btnIniciar3"
        const btnIniciar4 = "btnIniciar4"
        const btnIniciar5 = "btnIniciar5"
        
        //teste
        // const cronometro = document.querySelector("#cronometro0")
        // cronometro.innerHTML = "oii"

        const btnVerification = (e.target.id)        
      
          switch (btnVerification){
                    
                    case (btnIniciar0): 
                                     
                      let valor = getSelectValor[0]
                      let valSelect = valor.options[valor.selectedIndex].text
                      setTarefa0(valSelect)
                      console.log(tarefa0)
                      
                      let valorEmp = getSelectValor[1]
                      let valSelectEmp = valorEmp.options[valorEmp.selectedIndex].text
                      setEmpresa0(valSelectEmp)
                      console.log(empresa0)    

                      let valorCom0 = getTextAreaValor[0].value
                      setComentario0(valorCom0) 
                      console.log(comentario0)   

                      
                      setData(dataAtual)
                      console.log(data)

                      setHoraInicial0(horaAtual)                      
                      console.log(horaInicial0)
                      start0()
                      getSelectValor[0].setAttribute("disabled","")
                      getSelectValor[1].setAttribute("disabled","")
                      getTextAreaValor[0].setAttribute("disabled","")
                      btnIniciarStylo0()
                      
                    break;
        
                    case (btnIniciar1):
                       //Set val task
                       let valor1 = getSelectValor[2]
                       let valSelect1 = valor1.options[valor1.selectedIndex].text
                       setTarefa1(valSelect1)
                       console.log(tarefa1)
 
                       //Set val empresa
                       let valorEmp1 = getSelectValor[3]
                       let valSelectEmp1 = valorEmp1.options[valorEmp1.selectedIndex].text
                       setEmpresa1(valSelectEmp1)
                       console.log(empresa1)   

                       let valorCom1 = getTextAreaValor[1].value
                       setComentario1(valorCom1) 
                       console.log(comentario1)   

                       setData(dataAtual)
                       console.log(data)
                       start1()
                       getSelectValor[2].setAttribute("disabled","")
                       getSelectValor[3].setAttribute("disabled","")
                       getTextAreaValor[1].setAttribute("disabled","")
                       btnIniciarStylo1()
                    break;
        
                    case (btnIniciar2):
                        //Set val task
                      let valor2 = getSelectValor[4]
                      let valSelect2 = valor2.options[valor2.selectedIndex].text
                      setTarefa2(valSelect2)
                      console.log(tarefa2)

                      //Set val empresa
                      let valorEmp2 = getSelectValor[5]
                      let valSelectEmp2 = valorEmp2.options[valorEmp2.selectedIndex].text
                      setEmpresa2(valSelectEmp2)
                      console.log(empresa2) 
                      
                      let valorCom2 = getTextAreaValor[2].value
                      setComentario2(valorCom2) 
                      console.log(comentario2)   

                      setData(dataAtual)
                      console.log(data)
                      start2()
                      getSelectValor[4].setAttribute("disabled","")
                      getSelectValor[5].setAttribute("disabled","")
                      getTextAreaValor[2].setAttribute("disabled","")
                      btnIniciarStylo2()
                    break;
        
                    case (btnIniciar3):
                        //Set val task
                      let valor3 = getSelectValor[6]
                      let valSelect3 = valor3.options[valor3.selectedIndex].text
                      setTarefa3(valSelect3)
                      console.log(tarefa3)

                      //Set val empresa
                      let valorEmp3 = getSelectValor[7]
                      let valSelectEmp3 = valorEmp3.options[valorEmp3.selectedIndex].text
                      setEmpresa3(valSelectEmp3)
                      console.log(empresa3)   

                      let valorCom3 = getTextAreaValor[3].value
                      setComentario3(valorCom3) 
                      console.log(comentario3)   

                      setData(dataAtual)
                      console.log(data)
                      start3()
                      getSelectValor[6].setAttribute("disabled","")
                      getSelectValor[7].setAttribute("disabled","")
                      getTextAreaValor[3].setAttribute("disabled","")
                      btnIniciarStylo3()

                    break;
        
                    case (btnIniciar4):
                       //Set val task
                       let valor4 = getSelectValor[8]
                       let valSelect4 = valor4.options[valor4.selectedIndex].text
                       setTarefa4(valSelect4)
                       console.log(tarefa4)
 
                       //Set val empresa
                       let valorEmp4 = getSelectValor[9]
                       let valSelectEmp4 = valorEmp4.options[valorEmp4.selectedIndex].text
                       setEmpresa4(valSelectEmp4)
                       console.log(empresa4)  
                       
                       let valorCom4 = getTextAreaValor[4].value
                       setComentario4(valorCom4) 
                       console.log(comentario4)   

                       setData(dataAtual)
                       console.log(data)
                       start4()
                       getSelectValor[8].setAttribute("disabled","")
                       getSelectValor[9].setAttribute("disabled","")
                       getTextAreaValor[4].setAttribute("disabled","")
                       btnIniciarStylo4()
                     break;
        
                    case (btnIniciar5):
                       //Set val task
                       let valor5 = getSelectValor[10]
                       let valSelect5 = valor5.options[valor5.selectedIndex].text
                       setTarefa5(valSelect5)
                       console.log(tarefa5)
 
                       //Set val empresa
                       let valorEmp5 = getSelectValor[11]
                       let valSelectEmp5 = valorEmp5.options[valorEmp5.selectedIndex].text
                       setEmpresa5(valSelectEmp5)
                       console.log(empresa5) 
                       
                       let valorCom5 = getTextAreaValor[0].value
                       setComentario5(valorCom5) 
                       console.log(comentario5)   
                       
                       setData(dataAtual)
                       console.log(data)
                       start5()
                       getSelectValor[10].setAttribute("disabled","")
                       getSelectValor[11].setAttribute("disabled","")
                       getTextAreaValor[5].setAttribute("disabled","")
                       btnIniciarStylo5()
                       
                    break;
                    default:
                      console.log("Case não funcionou")
        }
        
    }
   
      //BOTAO PARAR
    const handleBtnParar =(e)=>{
           
          const taskStyleParar = document.querySelector("#tarefa_container")
          function btnPararStylo0(){
            taskStyleParar.childNodes[0].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar0").disabled = true
            document.querySelector("#btnIniciar0").disabled = false
          }
          function btnPararStylo1(){
            taskStyleParar.childNodes[1].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar1").disabled = true
            document.querySelector("#btnIniciar1").disabled = false
          }
          function btnPararStylo2(){
            taskStyleParar.childNodes[2].style.backgroundColor = " rgb(255, 125, 125)"
            document.querySelector("#btnParar2").disabled = true
            document.querySelector("#btnIniciar2").disabled = false
          }
          function btnPararStylo3(){
            taskStyleParar.childNodes[3].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar3").disabled = true
            document.querySelector("#btnIniciar3").disabled = false
          }
          function btnPararStylo4(){
            taskStyleParar.childNodes[4].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar4").disabled = true
            document.querySelector("#btnIniciar4").disabled = false
          }
          function btnPararStylo5(){
            taskStyleParar.childNodes[5].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar5").disabled = true
            document.querySelector("#btnIniciar5").disabled = false
          }
     
    
       
        const btnParar0 = "btnParar0"
        const btnParar1 = "btnParar1"
        const btnParar2 = "btnParar2"
        const btnParar3 = "btnParar3"
        const btnParar4 = "btnParar4"
        const btnParar5 = "btnParar5"
      
      
     
        const btnVerification = (e.target.id)        
      
          switch (btnVerification){
                    
                    case (btnParar0): 
                        console.log("Entrou no case")
                        pause0()
                        btnPararStylo0()
                        // setHoraFinal0(horaAtual)
                        // setCronTemp0(horaFinal0 - horaInicial0)

                        // console.log(horaFinal0)
                        // console.log(horaInicial0)
                        // console.log(cronTemp0)
                      
                    break;
                    case (btnParar1): 
                        console.log("Entrou no case")
                        pause1()
                        btnPararStylo1()
                      
                    break;
                    case (btnParar2): 
                        console.log("Entrou no case")
                        pause2()
                        btnPararStylo2()
                      
                    break;
                    case (btnParar3): 
                        console.log("Entrou no case")
                        pause3()
                        btnPararStylo3()
                      
                    break;
                    case (btnParar4): 
                        console.log("Entrou no case")
                        pause4()
                        btnPararStylo4()
                      
                    break;
                    case (btnParar5): 
                        console.log("Entrou no case")
                        pause5()
                        btnPararStylo5()
                      
                    break;

                    default:
                      console.log("Não passou pelo switch do pause")
    
    }
  }
       //BOTAO GRAVAR 
    const handleBtnGravar =(e)=>{
        setBtnGravar(!btnGravar)
        
        console.log("Iniciou?",btnIniciar)
        console.log("Parou?",btnParar)
        console.log("Gravou?",btnGravar)
    }

  
  
  return (
    <div id='tarefa_container'  className={styles.container_task}>        
      {tarefas.map((task, index) => {
          return (            
              <div id="div_task" key={index}  className={styles.task}>     
                  <span>Escolha a tarefa:</span>
                          <select className={styles.tarefa} name="Tarefa" id="tarefa" >
                                <option value="tarefa1">01 - Baixa do movimento financeiro</option>
                                <option value="tarefa2">02 - Conciliação Bancári</option>
                                <option value="tarefa3">03 - Conciliação do folha</option>
                                <option value="tarefa4">04 - Conciliação de fornecedores</option>
                                <option value="tarefa5">05 - Conciliação de clientes</option>
                                <option value="tarefa6">06 - Obrigações acessóriasTarefa6</option>
                          </select>
                        <span>Selecione a empresa:</span>
                        <select className={styles.empresa} name="Empresas" id="empresa" >
                            <option value="empresa1">01 - Dell</option>
                            <option value="empresa2">02 - Coca Cola</option>
                            <option value="empresa3">03 - Google</option>
                            <option value="empresa4">04 - Mc Donaltds</option>
                            <option value="empresa5">05 - Tesla</option>
                            <option value="empresa6">06 - Amazon</option>
                        </select>
                        <span>Comentario:</span>
                        <textarea className={styles.comentario} name="comentario" id="comentario" cols="17" rows="2" ></textarea>
                        <div className={styles.container_btn}>
                            <button id={"btnIniciar" + index} className={styles.btnIniciar} onClick={handleIniciar} >Iniciar</button>
                            <button id={"btnParar" + index} className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                            <button id={"btnGravar" + index} className={styles.btnGravar} onClick={handleBtnGravar} type="submit" d>Gravar</button>
                        </div>
                        <p  className={styles.data}>{dataAtual}</p>
                        {/* <h1 id={"cronometro" + index}>00:00:00</h1> */}
                        <div className={styles.container_cronometro}>
                            <h2 id={"cronometro" + index}>00:00:00</h2>
                        </div>
                        
                        
                        
              </div>
              
          );
          
      })}
      
    </div>
  );
}
export default Task