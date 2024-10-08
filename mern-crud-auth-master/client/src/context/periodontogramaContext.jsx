import { createContext, useContext, useState } from "react";

import {
  createPeriodontogramaRequest,
  getPeriodontogramasRequest
} from "../api/periodontograma";
const PeriodontogramaContext = createContext();

export const usePeriodontograma = () => {
  const context = useContext(PeriodontogramaContext);
  if (!context) throw new Error("usePeriodontograma must be used within a TaskProvider")
  return context
}

export function PeriodontogramaProvider({ children }) {
  const [periodontograma, setPeriodontograma] = useState([]);

const getPeriodontogramas = async(pacienteId)=>{
  const res = await getPeriodontogramasRequest(pacienteId)
  setPeriodontograma(res.data)
}

  const createPeriodontograma = async (periodontograma) => {
    try {
      const res = await createPeriodontogramaRequest(periodontograma);
      console.log(res.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <PeriodontogramaContext.Provider
      value={{
        periodontograma,
        getPeriodontogramas,
        createPeriodontograma,
      }}
    >
      {children}
    </PeriodontogramaContext.Provider>
  );
}