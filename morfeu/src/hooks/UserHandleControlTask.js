import { createContext, useContext } from "react";
import { HandleControlTaskContext } from "../context/HandleControlTaskContext";

export const UseHandleControl =() =>{
    const context = createContext(HandleControlTaskContext);

    if(!context){
        console.log("Context não encotrado")
    }
    return context;
};





