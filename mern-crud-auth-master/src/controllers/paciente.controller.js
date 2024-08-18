import Paciente from "../models/paciente.model.js";

export const getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find({ user: req.user.id }).populate("user");
    res.json(pacientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPaciente = async (req, res) => {
  try {
    const { nomPac, apellidoPac, rutPac, nacionalidadPac, sexo,fecNacPac, comunaPac, regionPac, emailPac, telPac, nCepillados, limpiezaInterdental, colutorio, tipoCepillo, tabaco, drogas, alcohol, medicamentos, alergia, embarazo, lactancia, cardiovascular, pulmonar, nervioso, hematologico, gastrointestinal, genitourinario, endocrino, musculoEsqueletal, sistemaInmune, dermatologico, otros, observaciones } = req.body;
    const newPaciente = new Paciente({
      user: req.user.id,
      nomPac,
      apellidoPac,
      rutPac,
      nacionalidadPac,
      fecNacPac,
      sexo,
      comunaPac,
      regionPac,
      emailPac,
      telPac,

      nCepillados,
      limpiezaInterdental,
      colutorio,
      tipoCepillo,
      tabaco,
      drogas,
      alcohol,
      medicamentos,
      alergia,
      embarazo,

      lactancia,
      cardiovascular,
      pulmonar,
      nervioso,
      hematologico,
      gastrointestinal,
      genitourinario,
      endocrino,
      musculoEsqueletal,
      sistemaInmune,

      dermatologico,
      otros,
      observaciones
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
    const { nomPac, apellidoPac, rutPac, nacionalidadPac, sexo,fecNacPac, comunaPac, regionPac, emailPac, telPac, nCepillados, limpiezaInterdental, colutorio, tipoCepillo, tabaco, drogas, alcohol, medicamentos, alergia, embarazo, lactancia, cardiovascular, pulmonar, nervioso, hematologico, gastrointestinal, genitourinario, endocrino, musculoEsqueletal, sistemaInmune, dermatologico, otros, observaciones } = req.body;
    const pacienteUpdated = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      { nomPac, apellidoPac, rutPac, nacionalidadPac, sexo,fecNacPac, comunaPac, regionPac, emailPac, telPac, nCepillados, limpiezaInterdental, colutorio, tipoCepillo, tabaco, drogas, alcohol, medicamentos, alergia, embarazo, lactancia, cardiovascular, pulmonar, nervioso, hematologico, gastrointestinal, genitourinario, endocrino, musculoEsqueletal, sistemaInmune, dermatologico, otros, observaciones },
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