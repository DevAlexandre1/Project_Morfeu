
//Criando context
import { createContext, useState } from "react";

export const HandleControlAcess = createContext()

//Provider
export const HandleControlAcessProvider = ({children})=>{
    const [userLog, setUserLog] = useState()

    return (
        <HandleControlAcess.Provider value={{userLog, setUserLog}}>{children}</HandleControlAcess.Provider>
    )
}




