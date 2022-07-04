
//Criando context
import React from "react";
import { createContext, useState } from "react";

export const ControlAcess = React.createContext({})

//Provider
export const ControlAcessProvider = (props)=>{
    const [userLog, setUserLog] = useState()
    const [usuarioLogado, setUsuarioLogado] = useState()

    return (
        <ControlAcess.Provider value={
            {userLog, setUserLog,
                usuarioLogado,setUsuarioLogado}}>
         {props.children}
        </ControlAcess.Provider>
    )
}




