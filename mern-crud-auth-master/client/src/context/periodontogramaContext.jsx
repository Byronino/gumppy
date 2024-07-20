import { createContext, useContext, useState } from "react";

import { createPeriodontogramaRequest } from "../api/periodontograma";
const PeriodontogramaContext = createContext();

export const usePeriodontograma = () => {
    const context = useContext(PeriodontogramaContext);
    if (!context) throw new Error("usePeriodontograma must be used within a TaskProvider")
    return context
}

export function PeriodontogramaProvider({ children }){
    const [periodontograma, setPeriodontograma] = useState([]);

    const createPeriodontograma = async(periodontograma) =>{
        try{
            const res = await createPeriodontogramaRequest(periodontograma);
            console.log(res.data)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <PeriodontogramaContext.Provider
          value={{
            periodontograma,
            createPeriodontograma,
          }}
        >
          {children}
        </PeriodontogramaContext.Provider>
      );
}