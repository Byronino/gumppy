import axios from "./axios";

export const getPeriodontogramasRequest = async (id) => axios.get(`/periodontogramas/${id}`);

export const createPeriodontogramaRequest = async (periodontograma) => axios.post("/crear_periodontograma",periodontograma);