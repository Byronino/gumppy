import axios from "./axios";

export const createPruebaRequest = async (prueba) => axios.post("/prueba",prueba);