import Periodontograma from "../models/periodontograma.model.js";

export const createPeriodontograma = async (req, res) => {
    try {
      const { movilidad1 } = req.body;
      const newPeriodontograma = new Periodontograma({
        movilidad1,
      });
      await newPeriodontograma.save();
      res.json(newPeriodontograma);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };