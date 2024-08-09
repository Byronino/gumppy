import Paciente from "../models/paciente.model.js";

export const getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find({ user : req.user.id }).populate("user");
    res.json(pacientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPaciente = async (req, res) => {
  try {
    const { nomPac,emailPac,telPac,rutPac,fecNacPac, razaPac,descripcion} = req.body;
    const newPaciente = new Paciente({
      nomPac,
      emailPac,
      telPac,
      rutPac,
      fecNacPac,
      razaPac,
      descripcion,
      user: req.user.id,
    });
    await newPaciente.save();
    res.json(newPaciente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const deletedPaciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!deletedPaciente)
      return res.status(404).json({ message: "Paciente no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const { nomPac,emailPac,telPac,rutPac,fecNacPac, razaPac} = req.body;
    const pacienteUpdated = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      { nomPac,emailPac,telPac,rutPac,fecNacPac, razaPac,descripcion},
      { new: true }
    );
    return res.json(pacienteUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) return res.status(404).json({ message: "Paciente no encontrado" });
    return res.json(paciente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};