import { createContext, useContext, useState } from "react";
import {
  createPacienteRequest,
  deletePacienteRequest,
  getPacientesRequest,
  getPacienteRequest,
  updatePacienteRequest,
} from "../api/pacientes";

const PacienteContext = createContext();

export const usePacientes = () => {
  const context = useContext(PacienteContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function PacienteProvider({ children }) {
  const [pacientes, setPacientes] = useState([]);

  const getPacientes = async () => {
    const res = await getPacientesRequest();
    setPacientes(res.data);
  };

  const deletePaciente = async (id) => {
    try {
      const res = await deletePacienteRequest(id);
      if (res.status === 204) setPacientes(pacientes.filter((paciente) => paciente._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createPaciente = async (paciente) => {
    try {
      const res = await createPacienteRequest(paciente);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPaciente = async (id) => {
    try {
      const res = await getPacienteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePaciente = async (id, paciente) => {
    try {
      await updatePacienteRequest(id, paciente);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PacienteContext.Provider
      value={{
        pacientes,
        getPacientes,
        deletePaciente,
        createPaciente,
        getPaciente,
        updatePaciente,
      }}
    >
      {children}
    </PacienteContext.Provider>
  );
}