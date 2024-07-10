import Prueba from "../models/prueba.model.js";

export const createPrueba = async (req, res) => {
    try {
      const { nombre, valor } = req.body;
      const newPrueba = new Prueba({
        nombre,
        valor,
      });
      await newPrueba.save();
      res.json(newPrueba);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };