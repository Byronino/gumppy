import { createContext, useContext, useState } from "react";

import { createPruebaRequest } from "../api/pruebas";

const PruebaContext = createContext();

export const usePrueba = () => {
    const context = useContext(PruebaContext);
    if (!context) throw new Error("usePrueba must be used within a TaskProvider")
    return context
}

export function PruebaProvider({ children }){
    const [prueba, setPrueba] = useState([]);

    const createPrueba = async(prueba) =>{
        try{
            const res = await createPruebaRequest(prueba);
            console.log(res.data)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <PruebaContext.Provider
          value={{
            prueba,
            createPrueba,
          }}
        >
          {children}
        </PruebaContext.Provider>
      );
}