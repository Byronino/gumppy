import axios from "./axios";

export const getPeriodontogramasRequest = async (id) => axios.get(`/periodontogramas/${id}`);

export const createPeriodontogramaRequest = async (periodontograma) => axios.post("/crear_periodontograma",periodontograma);

export const updatePeriodontogramaRequest = async(id,periodontograma) =>axios.put(`/periodontograma/${id}`,periodontograma)

export const get1PeriodontogramaRequest = async(id) => axios.get(`/periodontograma/${id}`)