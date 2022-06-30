import { createContext, useContext } from "react";
import { HandleControlAcess } from "../context/HandleControlTaskContext";

export const useControlAcess =() =>{
    const context = createContext(HandleControlAcess);

    if(!context){
        console.log("Context não encotrado")
    }
    return context;
};
