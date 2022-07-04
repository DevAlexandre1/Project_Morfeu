import { useEffect, useState} from "react"
import React from "react"
import styles from './Task.module.css'
import Axios from "axios"

//Context
import { ControlAcess } from "../context/HandleControlAcess"

const Task = (props) => {
  const {tarefas} = props;
  const {userLog, setUserLog} = React.useContext(ControlAcess)
  const {usuarioLogado, setUsuarioLogado} = React.useContext(ControlAcess) 
 

    //DADOS TAREFAS
    const [tarefa0,setTarefa0] = useState("")
    const [tarefa1,setTarefa1] = useState("")
    const [tarefa2,setTarefa2] = useState("")
    const [tarefa3,setTarefa3] = useState("")
    const [tarefa4,setTarefa4] = useState("")
    const [tarefa5,setTarefa5] = useState("")    
    const [empresa0, setEmpresa0] = useState("")
    const [empresa1, setEmpresa1] = useState("")
    const [empresa2, setEmpresa2] = useState("")
    const [empresa3, setEmpresa3] = useState("")
    const [empresa4, setEmpresa4] = useState("")
    const [empresa5, setEmpresa5] = useState("")
    const [comentario0, setComentario0] = useState("Vazio")
    const [comentario1, setComentario1] = useState("Vazio")
    const [comentario2, setComentario2] = useState("Vazio")
    const [comentario3, setComentario3] = useState("Vazio")
    const [comentario4, setComentario4] = useState("Vazio")
    const [comentario5, setComentario5] = useState("Vazio")

    //DATA TIME TAREFAS
    const [data, setData]= useState()
    const [dataAtualAmericana, setDataAtualAmericana]= useState()

    //HORA INICIO, FIM E TEMPO TOTAL DA TAREFA
    const [horaInicial0, setHoraInicial0] = useState(0)
    const [horaInicial1, setHoraInicial1] = useState(0)
    const [horaInicial2, setHoraInicial2] = useState(0)
    const [horaInicial3, setHoraInicial3] = useState(0)
    const [horaInicial4, setHoraInicial4] = useState(0)
    const [horaInicial5, setHoraInicial5] = useState(0)    
    const [horaFinal0, setHoraFinal0] = useState(0)
    const [horaFinal1, setHoraFinal1] = useState(0)
    const [horaFinal2, setHoraFinal2] = useState(0)
    const [horaFinal3, setHoraFinal3] = useState(0)
    const [horaFinal4, setHoraFinal4] = useState(0)
    const [horaFinal5, setHoraFinal5] = useState(0)
    const [timeResultado0, setTimeResultado0] = useState(0)
    const [timeResultado1, setTimeResultado1] = useState(0)
    const [timeResultado2, setTimeResultado2] = useState(0)
    const [timeResultado3, setTimeResultado3] = useState(0)
    const [timeResultado4, setTimeResultado4] = useState(0)
    const [timeResultado5, setTimeResultado5] = useState(0)
    
  
    //USE EFFECTS
    let tempoTarefa0 = 0
    useEffect(() =>{      
       tempoTarefa0 = (horaFinal0 - horaInicial0) 
       setTimeResultado0(timeResultado0 + tempoTarefa0)  
       setHoraInicial0(0)    
    }, [horaFinal0]);
    let tempoTarefa1 = 0
    useEffect(() =>{
       tempoTarefa1 = (horaFinal1 - horaInicial1) 
       setTimeResultado1(timeResultado1 + tempoTarefa1)    
       setHoraInicial1(0)  
    }, [horaFinal1]);    
    let tempoTarefa2 = 0
    useEffect(() =>{
       tempoTarefa2 = (horaFinal2 - horaInicial2) 
       setTimeResultado2(timeResultado2 + tempoTarefa2)      
       setHoraInicial2(0) 
    }, [horaFinal2]);    
    let tempoTarefa3 = 0
    useEffect(() =>{
       tempoTarefa3 = (horaFinal3 - horaInicial3) 
       setTimeResultado3(timeResultado3 + tempoTarefa3)      
       setHoraInicial3(0) 
    }, [horaFinal3]);    
    let tempoTarefa4 = 0
    useEffect(() =>{
       tempoTarefa4 = (horaFinal4 - horaInicial4) 
       setTimeResultado4(timeResultado4 + tempoTarefa4)      
       setHoraInicial4(0) 
    }, [horaFinal4]);
    let tempoTarefa5 = 0
    useEffect(() =>{
       tempoTarefa5 = (horaFinal5 - horaInicial5) 
       setTimeResultado5(timeResultado5 + tempoTarefa5)      
       setHoraInicial5(0) 
    }, [horaFinal5]);
    
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
           
      //Inicia o temporizador
      function start0() {

        //INICIANDO O CRONOMETRO DE ONDE PAROU        
        let valor = Math.floor( timeResultado0 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds
        
          setCron0(setInterval(() => { timer0(); }, tempo))
      }
      function start1() {
        let valor = Math.floor( timeResultado1 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds          
          setCron1(setInterval(() => { timer1(); }, tempo))
      }
      function start2() {
        let valor = Math.floor( timeResultado2 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds
        setCron2(setInterval(() => { timer2(); }, tempo))
      }
      function start3() {
        let valor = Math.floor( timeResultado3 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds
        setCron3(setInterval(() => { timer3(); }, tempo))
      }
      function start4() {
        let valor = Math.floor( timeResultado4 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds
        setCron4(setInterval(() => { timer4(); }, tempo))
      }
      function start5() {
        let valor = Math.floor( timeResultado5 / 1000);
        let hours = Math.floor( valor/ 3600 );
        let minutes = Math.floor( (valor % 3600) / 60 );
        let seconds = valor % 60;     
        hh = hours
        mm = minutes
        ss = seconds
        setCron5(setInterval(() => { timer5(); }, tempo))
      }

      //PARAR O CRONOMETRO
      function pause0() {          
         setCron0(clearInterval(cron0))
      }
      function pause1() {   
        setCron1(clearInterval(cron1))        
      }
      function pause2() {
      setCron2(clearInterval(cron2))
      }
      function pause3() {
      setCron3(clearInterval(cron3))
      }
      function pause4() {
        setCron4(clearInterval(cron4))
      }
      function pause5() {
        setCron5(clearInterval(cron5))
      }

      //Para o temporizador e limpa as variáveis
      function stop0() {
          clearInterval(cron0);
          hh = 0;
          mm = 0;
          ss = 0;
          setTimeResultado0(0)
          document.getElementById('cronometro0').innerText = '00:00:00';
      }
      function stop1() {
        clearInterval(cron1);
        hh = 0;
        mm = 0;
        ss = 0;
        setTimeResultado1(0)
      document.getElementById('cronometro1').innerText = '00:00:00';
      }
      function stop2() {
        clearInterval(cron2);
        hh = 0;
        mm = 0;
        ss = 0;
        setTimeResultado2(0)
        document.getElementById('cronometro2').innerText = '00:00:00';
      }
      function stop3() {
        clearInterval(cron3);
        hh = 0;
        mm = 0;
        ss = 0;
        setTimeResultado3(0)
        document.getElementById('cronometro3').innerText = '00:00:00';
      }
      function stop4() {
        clearInterval(cron4);
        hh = 0;
        mm = 0;
        ss = 0;
          setTimeResultado4(0)
          document.getElementById('cronometro4').innerText = '00:00:00';
        }
        function stop5() {
          clearInterval(cron5);
          hh = 0;
          mm = 0;
          ss = 0;
          setTimeResultado5(0)
          document.getElementById('cronometro5').innerText = '00:00:00';
        }
      
      //Faz a contagem do tempo e exibição
      function timer0() {
          ss++;     
          
          if (ss == 59) { 
              ss = 0; 
              mm++;   

              if (mm == 59) { 
                  mm = 0;
                  hh++;
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
        ss++;  
           
        if (ss == 59) { 
            ss = 0; 
            mm++;   

            if (mm == 59) { 
                mm = 0;
                hh++;
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
      ss++;   

      if (ss == 59) { 
          ss = 0; 
          mm++;   

          if (mm == 59) { 
              mm = 0;
              hh++;
          }
      }  
      //Cria uma variável com o valor tratado HH:MM:SS
      var format2 = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss); 

      //Insere o valor tratado no elemento counter
      document.getElementById('cronometro2').innerText =  format2;  

      //Retorna o valor tratado
      return format2;
     }
      function timer3() {
        ss++; 

        if (ss == 59) { 
            ss = 0; 
            mm++; 

            if (mm == 59) { 
                mm = 0;
                hh++;
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
      ss++; 

      if (ss == 59) { 
          ss = 0; 
          mm++; 

          if (mm == 59) { 
              mm = 0;
              hh++;
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
      ss++; 

      if (ss == 59) { 
          ss = 0; 
          mm++; 

          if (mm == 59) { 
              mm = 0;
              hh++;
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
    
    //Format date for americane date
    useEffect(() =>{
       setDataAtualAmericana(dataAtual.split('/').reverse().join('-'))
    }, [dataAtual]);
    
      //BTN START      
      const handleBtnIniciar =(e)=>{        
        //Stylos task active
        const taskStyle = document.querySelector("#tarefa_container")
        function btnIniciarStylo0(){
          taskStyle.childNodes[0].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar0").disabled = true
          document.querySelector("#btnParar0").disabled = false            
          document.querySelector("#btnGravar0").disabled = true
        }
        function btnIniciarStylo1(){
          taskStyle.childNodes[1].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar1").disabled = true
           document.querySelector("#btnParar1").disabled = false
           document.querySelector("#btnGravar1").disabled = true
        }
        function btnIniciarStylo2(){
          taskStyle.childNodes[2].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar2").disabled = true
           document.querySelector("#btnParar2").disabled = false
           document.querySelector("#btnGravar2").disabled = true
        }
        function btnIniciarStylo3(){
          taskStyle.childNodes[3].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar3").disabled = true
           document.querySelector("#btnParar3").disabled = false
           document.querySelector("#btnGravar3").disabled = true
        }
        function btnIniciarStylo4(){
          taskStyle.childNodes[4].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar4").disabled = true
           document.querySelector("#btnParar4").disabled = false
           document.querySelector("#btnGravar4").disabled = true
           
        }
        function btnIniciarStylo5(){
          taskStyle.childNodes[5].style.backgroundColor = "rgb(148, 245, 148)"
          document.querySelector("#btnIniciar5").disabled = true
           document.querySelector("#btnParar5").disabled = false
           document.querySelector("#btnGravar5").disabled = true
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

        const btnVerification = (e.target.id)        
              
          switch (btnVerification){                    
                    case (btnIniciar0):                           
                      let valor = getSelectValor[0]
                      let valSelect = valor.options[valor.selectedIndex].text
                      setTarefa0(valSelect)                                          
                      let valorEmp = getSelectValor[1]
                      let valSelectEmp = valorEmp.options[valorEmp.selectedIndex].text
                      setEmpresa0(valSelectEmp)                      
                      let valorCom0 = getTextAreaValor[0].value
                      setComentario0(valorCom0) 
                                            
                      setData(dataAtual)
                      setHoraInicial0(Date.now())                  
                      start0()
                      getSelectValor[0].setAttribute("disabled","")
                      getSelectValor[1].setAttribute("disabled","")
                      getTextAreaValor[0].setAttribute("disabled","")
                      btnIniciarStylo0()                                              
                    break;                  
                    case (btnIniciar1):
                       let valor1 = getSelectValor[2]
                       let valSelect1 = valor1.options[valor1.selectedIndex].text
                       setTarefa1(valSelect1)  
                       let valorEmp1 = getSelectValor[3]
                       let valSelectEmp1 = valorEmp1.options[valorEmp1.selectedIndex].text
                       setEmpresa1(valSelectEmp1)                         
                       let valorCom1 = getTextAreaValor[1].value
                       setComentario1(valorCom1)                        

                       setData(dataAtual)
                       setHoraInicial1(Date.now())
                       start1()
                       getSelectValor[2].setAttribute("disabled","")
                       getSelectValor[3].setAttribute("disabled","")
                       getTextAreaValor[1].setAttribute("disabled","")
                       btnIniciarStylo1()
                    break;        
                    case (btnIniciar2):
                      let valor2 = getSelectValor[4]
                      let valSelect2 = valor2.options[valor2.selectedIndex].text
                      setTarefa2(valSelect2)
                      let valorEmp2 = getSelectValor[5]
                      let valSelectEmp2 = valorEmp2.options[valorEmp2.selectedIndex].text
                      setEmpresa2(valSelectEmp2)
                      let valorCom2 = getTextAreaValor[2].value
                      setComentario2(valorCom2) 
                      
                      setData(dataAtual)
                      setHoraInicial2(Date.now())
                      start2()
                      getSelectValor[4].setAttribute("disabled","")
                      getSelectValor[5].setAttribute("disabled","")
                      getTextAreaValor[2].setAttribute("disabled","")
                      btnIniciarStylo2()
                    break;        
                    case (btnIniciar3):
                      let valor3 = getSelectValor[6]
                      let valSelect3 = valor3.options[valor3.selectedIndex].text
                      setTarefa3(valSelect3)
                      let valorEmp3 = getSelectValor[7]
                      let valSelectEmp3 = valorEmp3.options[valorEmp3.selectedIndex].text
                      setEmpresa3(valSelectEmp3)
                      let valorCom3 = getTextAreaValor[3].value
                      setComentario3(valorCom3) 
                      
                      setData(dataAtual)
                      setHoraInicial3(Date.now())
                      start3()
                      getSelectValor[6].setAttribute("disabled","")
                      getSelectValor[7].setAttribute("disabled","")
                      getTextAreaValor[3].setAttribute("disabled","")
                      btnIniciarStylo3()
                    break;        
                    case (btnIniciar4):
                       let valor4 = getSelectValor[8]
                       let valSelect4 = valor4.options[valor4.selectedIndex].text
                       setTarefa4(valSelect4)
                       let valorEmp4 = getSelectValor[9]
                       let valSelectEmp4 = valorEmp4.options[valorEmp4.selectedIndex].text
                       setEmpresa4(valSelectEmp4)
                       let valorCom4 = getTextAreaValor[4].value
                       setComentario4(valorCom4) 

                       setData(dataAtual)
                       setHoraInicial4(Date.now())
                       start4()
                       getSelectValor[8].setAttribute("disabled","")
                       getSelectValor[9].setAttribute("disabled","")
                       getTextAreaValor[4].setAttribute("disabled","")
                       btnIniciarStylo4()
                     break;        
                    case (btnIniciar5):
                       let valor5 = getSelectValor[10]
                       let valSelect5 = valor5.options[valor5.selectedIndex].text
                       setTarefa5(valSelect5)
                       let valorEmp5 = getSelectValor[11]
                       let valSelectEmp5 = valorEmp5.options[valorEmp5.selectedIndex].text
                       setEmpresa5(valSelectEmp5)
                       let valorCom5 = getTextAreaValor[5].value
                       setComentario5(valorCom5) 
                      
                       setData(dataAtual)
                       setHoraInicial5(Date.now())
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
            document.querySelector("#btnGravar0").disabled = false
          }
          function btnPararStylo1(){
            taskStyleParar.childNodes[1].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar1").disabled = true
            document.querySelector("#btnIniciar1").disabled = false
            document.querySelector("#btnGravar1").disabled = false
          }
          function btnPararStylo2(){
            taskStyleParar.childNodes[2].style.backgroundColor = " rgb(255, 125, 125)"
            document.querySelector("#btnParar2").disabled = true
            document.querySelector("#btnIniciar2").disabled = false
            document.querySelector("#btnGravar2").disabled = false
          }
          function btnPararStylo3(){
            taskStyleParar.childNodes[3].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar3").disabled = true
            document.querySelector("#btnIniciar3").disabled = false
            document.querySelector("#btnGravar3").disabled = false
          }
          function btnPararStylo4(){
            taskStyleParar.childNodes[4].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar4").disabled = true
            document.querySelector("#btnIniciar4").disabled = false
            document.querySelector("#btnGravar4").disabled = false
          }
          function btnPararStylo5(){
            taskStyleParar.childNodes[5].style.backgroundColor = "rgb(255, 125, 125)"
            document.querySelector("#btnParar5").disabled = true
            document.querySelector("#btnIniciar5").disabled = false
            document.querySelector("#btnGravar5").disabled = false
            
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
                    if(horaInicial0 == 0){
                      alert("Inicie a tarefa!")
                    }else{
                        setHoraFinal0(Date.now())                      
                        pause0()
                        btnPararStylo0()                      
                    }
                    break;
                    case (btnParar1):
                      if(horaInicial1 == 0){
                        alert("Inicie a tarefa!")
                      }else{ 
                        setHoraFinal1(Date.now())    
                        pause1()
                        btnPararStylo1()   
                      }                   
                    break;
                    case (btnParar2): 
                    if(horaInicial2 == 0){
                      alert("Inicie a tarefa!")
                    }else{
                      setHoraFinal2(Date.now())    
                        pause2()
                        btnPararStylo2()      
                    }                
                    break;
                    case (btnParar3): 
                    if(horaInicial3 == 0){
                      alert("Inicie a tarefa!")
                    }else{
                        setHoraFinal3(Date.now())    
                        pause3()
                        btnPararStylo3()     
                    }                 
                    break;
                    case (btnParar4): 
                    if(horaInicial4 == 0){
                      alert("Inicie a tarefa!")
                    }else{
                        setHoraFinal4(Date.now())    
                        pause4()
                        btnPararStylo4()
                    }                      
                    break;
                    case (btnParar5): 
                    if(horaInicial5 == 0){
                      alert("Inicie a tarefa!")
                    }else{
                        setHoraFinal5(Date.now())    
                        pause5()
                        btnPararStylo5()
                    }
                    break;
                    default:
                      console.log("Não passou pelo switch do pause")    
    }
  }
   //BOTAO GRAVAR 
    const handleBtnGravar =(e)=>{
      const taskStyleGravar = document.querySelector("#tarefa_container")
      function btnGravarStyle0(){
        taskStyleGravar.childNodes[0].style.backgroundColor = "rgb(253,239,193)"
        document.querySelector("#btnParar0").disabled = false
        document.querySelector("#btnIniciar0").disabled = false
      }
      function btnGravarStyle1(){
        taskStyleGravar.childNodes[1].style.backgroundColor = "rgb(253,239,193)"
        document.querySelector("#btnParar1").disabled = false
        document.querySelector("#btnIniciar1").disabled = false
      }
      function btnGravarStyle2(){
        taskStyleGravar.childNodes[2].style.backgroundColor = " rgb(253,239,193)"
        document.querySelector("#btnParar2").disabled = false
        document.querySelector("#btnIniciar2").disabled = false
      }
      function btnGravarStyle3(){
        taskStyleGravar.childNodes[3].style.backgroundColor = "rgb(253,239,193)"
        document.querySelector("#btnParar3").disabled = false
        document.querySelector("#btnIniciar3").disabled = false
      }
      function btnGravarStyle4(){
        taskStyleGravar.childNodes[4].style.backgroundColor = "rgb(253,239,193)"
        document.querySelector("#btnParar4").disabled = false
        document.querySelector("#btnIniciar4").disabled = false
      }
      function btnGravarStyle5(){
        taskStyleGravar.childNodes[5].style.backgroundColor = "rgb(253,239,193)"
        document.querySelector("#btnParar5").disabled = false
        document.querySelector("#btnIniciar5").disabled = false
      }     
    
      //Get Select task
      const getSelectValor = document.querySelectorAll("#div_task select")
      //Get TextArea task
      const getTextAreaValor = document.querySelectorAll("#div_task textarea")
         
        const btnGravar0 = "btnGravar0"
        const btnGravar1 = "btnGravar1"
        const btnGravar2 = "btnGravar2"
        const btnGravar3 = "btnGravar3"
        const btnGravar4 = "btnGravar4"
        const btnGravar5 = "btnGravar5"

        const btnVerification = (e.target.id)        
              
          switch (btnVerification){                    
                    case (btnGravar0):      
                      //SET VALOR TAREFA EMPRESA E COMENTARIO
                      if(timeResultado0 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario:usuarioLogado,
                          tarefa:tarefa0,
                          empresa:empresa0,
                          comentario:comentario0,
                          data:dataAtualAmericana,
                          tempotask:timeResultado0
                        }).then((response)=>{
                          console.log(response)
                        })
                        //Alerta tela de usuário
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa0 + "\nEmpresa: " + empresa0 + "\nComentario: " + comentario0 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado0 + " milissegundos")

                        stop0()
                        btnGravarStyle0()
                        getSelectValor[0].removeAttribute("disabled")                      
                        getSelectValor[1].removeAttribute("disabled")                        
                        getTextAreaValor[0].removeAttribute("disabled")                      
                      }
                                                    
                    break;                  
                    case (btnGravar1):
                      if(timeResultado1 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario: usuarioLogado,
                          tarefa:tarefa1,
                          empresa:empresa1,
                          comentario:comentario1,
                          data:dataAtualAmericana,
                          tempotask:timeResultado1
                        }).then((response)=>{
                          console.log(response)
                        })
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa1 + "\nEmpresa: " + empresa1 + "\nComentario: " + comentario1 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado1 + " milissegundos")
                        stop1()
                        btnGravarStyle1()
                        getSelectValor[2].removeAttribute("disabled")
                        getSelectValor[3].removeAttribute("disabled")
                        getTextAreaValor[1].removeAttribute("disabled")
                      }
                    break;        
                    case (btnGravar2):
                      if(timeResultado2 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario: usuarioLogado,
                          tarefa:tarefa2,
                          empresa:empresa2,
                          comentario:comentario2,
                          data:dataAtualAmericana,
                          tempotask:timeResultado2
                        }).then((response)=>{
                          console.log(response)
                        })
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa2 + "\nEmpresa: " + empresa2 + "\nComentario: " + comentario2 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado2 + " milissegundos")
                        stop2()
                        btnGravarStyle2()
                        getSelectValor[4].removeAttribute("disabled")
                        getSelectValor[5].removeAttribute("disabled")
                        getTextAreaValor[2].removeAttribute("disabled")
                      }
                    break;        
                    case (btnGravar3):
                      if(timeResultado3 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario: usuarioLogado,
                          tarefa:tarefa3,
                          empresa:empresa3,
                          comentario:comentario3,
                          data:dataAtualAmericana,
                          tempotask:timeResultado3           
                        }).then((response)=>{
                          console.log(response)
                        })
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa3 + "\nEmpresa: " + empresa3 + "\nComentario: " + comentario3 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado3 + " milissegundos")
                        stop3()
                        btnGravarStyle3()
                        getSelectValor[6].removeAttribute("disabled")
                        getSelectValor[7].removeAttribute("disabled")
                        getTextAreaValor[3].removeAttribute("disabled")
                      }
                    break;        
                    case (btnGravar4):
                      if(timeResultado4 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario: usuarioLogado,
                          tarefa:tarefa4,
                          empresa:empresa4,
                          comentario:comentario4,
                          data:dataAtualAmericana,
                          tempotask:timeResultado4
                        }).then((response)=>{
                          console.log(response)
                        })
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa4 + "\nEmpresa: " + empresa4 + "\nComentario: " + comentario4 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado4 + " milissegundos")
                        stop4()
                        btnGravarStyle4()
                        getSelectValor[8].removeAttribute("disabled")
                        getSelectValor[9].removeAttribute("disabled")
                        getTextAreaValor[4].removeAttribute("disabled")
                      }
                      break;        
                    case (btnGravar5):
                      if(timeResultado5 == 0){
                        alert("Tarefa sem tempo para gravar!")
                      }else{
                        Axios.post("http://localhost:3000/register",{
                          nomeUsuario: usuarioLogado,
                          tarefa:tarefa5,
                          empresa:empresa5,
                          comentario:comentario5,
                          data:dataAtualAmericana,
                          tempotask:timeResultado5
                        }).then((response)=>{
                          console.log(response)
                        })
                        alert("Tarefa gravada com Sucesso: \nTarefa: " + tarefa5 + "\nEmpresa: " + empresa5 + "\nComentario: " + comentario5 + "\nData: " + dataAtual + "\nTempo utilizado na tarefa: " + timeResultado5 + " milissegundos")
                        stop5()
                        btnGravarStyle5()  
                        getSelectValor[10].removeAttribute("disabled")
                        getSelectValor[11].removeAttribute("disabled")
                        getTextAreaValor[5].removeAttribute("disabled")
                      }                 
                    break;
                    default:
                      console.log("Case gravar não funcionou")
        }
    }
  return (
    <div id='tarefa_container'  className={styles.container_task}>        
      {tarefas.map((task, index) => {
          return (            
              <div id="div_task" key={index}  className={styles.task}>     
                  <span>Escolha a tarefa:</span>
                          <select className={styles.tarefa} name="Tarefa" id="tarefa" >

                                {/* De 01 a 19 - EFETUAR LANÇAMENTOS */}

                                <option value="tarefa1">01 - Regerar as notas no fiscal</option>
                                <option value="tarefa2">02 - Ordenar o movimento contabil</option>
                                <option value="tarefa3">03 - Lancar importar e rubricar o movimento contabil</option>
                                <option value="tarefa4">04 - Integrar os impostos fiscais</option>
                                <option value="tarefa5">05 - Calcular as provisoes do folha</option>
                                <option value="tarefa6">06 - Integrar o folha</option>
                                <option value="tarefa7">07 - Conferir as aquisicoes imobilizado</option>
                                <option value="tarefa8">08 - Calcular e Integrar o Patrimonio</option>

                                {/* De 20 a 39 - FAZER CONCILIAÇÕES */}

                                <option value="tarefa9">20 - Bancos</option>
                                <option value="tarefa10">21 - Clientes </option>
                                <option value="tarefa11">22 - Adiantamentos Ativos</option>
                                <option value="tarefa12">23 - Imobilizado</option>
                                <option value="tarefa13">24 - Fornecedores</option>
                                <option value="tarefa14">25 - Folha</option>
                                <option value="tarefa15">26 - Impostos folha</option>
                                <option value="tarefa16">27 - Impostos fiscal</option>
                                <option value="tarefa17">28 - Contas a pagar</option>
                                <option value="tarefa18">29 - Adiantamentos passivos</option>
                                <option value="tarefa19">30 - Provisoes folha</option>
                                <option value="tarefa20">31 - Capital social</option>
                                <option value="tarefa21">32 - Receitas operacionais</option>
                                <option value="tarefa21">33 - Receitas financeiras</option>
                                <option value="tarefa21">34 - Despesas</option>
                                <option value="tarefa21">35 - Custos</option>
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
                            <button id={"btnIniciar" + index} className={styles.btnIniciar} onClick={handleBtnIniciar}>Iniciar</button>
                            <button id={"btnParar" + index} className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                            <button id={"btnGravar" + index} className={styles.btnGravar} onClick={handleBtnGravar} type="submit">Gravar</button>
                        </div>
                        <p  className={styles.data}>{dataAtual}</p>                       
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