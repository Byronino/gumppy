import axios from "./axios";

export const createPeriodontogramaRequest = async (periodontograma) => axios.post("/crear_periodontograma",periodontograma);