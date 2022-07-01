
//Criando context
import React from "react";
import { createContext, useState } from "react";

export const ControlAcess = React.createContext({})

//Provider
export const ControlAcessProvider = (props)=>{
    const [userLog, setUserLog] = useState()

    return (
        <ControlAcess.Provider value={{userLog, setUserLog}}>
         {props.children}
        </ControlAcess.Provider>
    )
}




