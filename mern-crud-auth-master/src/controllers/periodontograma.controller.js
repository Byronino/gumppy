import Periodontograma from "../models/periodontograma.model.js";

export const createPeriodontograma = async (req, res) => {
  try {
    const { dientes1i, movilidad1, implante1, san1i } = req.body;
    const newPeriodontograma = new Periodontograma({
      dientes1i,
      movilidad1,
      implante1,
      san1i,
    });
    await newPeriodontograma.save();
    res.json(newPeriodontograma);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};