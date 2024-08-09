import axios from "./axios";

export const getPacientesRequest = async () => axios.get("/pacientes");

export const createPacienteRequest = async (paciente) => axios.post("/pacientes", paciente);

export const updatePacienteRequest = async (paciente) =>
  axios.put(`/pacientes/${paciente._id}`, paciente);

export const deletePacienteRequest = async (id) => axios.delete(`/pacientes/${id}`);

export const getPacienteRequest = async (id) => axios.get(`/pacientes/${id}`);
