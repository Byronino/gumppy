import Periodontograma from "../models/periodontograma.model.js";

export const getPeriodontograma = async (req, res) => {
  try {
    const pacienteId = req.params.pacienteId;
    const periodontogramas = await Periodontograma.find({ patient: pacienteId })
    res.json(periodontogramas)
  }
  catch (error) {
    return res.status(500).json({ message: error.message });

  }
}


export const createPeriodontograma = async (req, res) => {
  try {
    const {
      patient,
      dientes1i,
      dientes1d,
      dientes2i,
      dientes2d,

      movilidad1,
      movilidad2,
      movilidad3,
      movilidad4,

      implante1,
      implante2,
      implante3,
      implante4,

      furca1i,
      furca1d,
      furca2i,
      furca2d,
      furca3i,
      furca3d,
      furca4i,
      furca4d,

      san1i,
      san1d,
      san2i,
      san2d,
      san3i,
      san3d,
      san4i,
      san4d,

      placa1i,
      placa1d,
      placa2i,
      placa2d,
      placa3i,
      placa3d,
      placa4i,
      placa4d,

      mar1i,
      mar1d,
      mar2i,
      mar2d,
      mar3i,
      mar3d,
      mar4i,
      mar4d,

      prof1i,
      prof1d,
      prof2i,
      prof2d,
      prof3i,
      prof3d,
      prof4i,
      prof4d,

      diff1i,
      diff1d,
      diff2i,
      diff2d,
      diff3i,
      diff3d,
      diff4i,
      diff4d,

      car1i, car1d, car2i, car2d, car3i, car3d, car4i, car4d,
      res1i, res1d, res2i, res2d, res3i, res3d, res4i, res4d,
      sup1i, sup1d, sup2i, sup2d, sup3i, sup3d, sup4i, sup4d,


    } = req.body;
    const newPeriodontograma = new Periodontograma({
      patient,
      dientes1i,
      dientes1d,
      dientes2i,
      dientes2d,

      movilidad1,
      movilidad2,
      movilidad3,
      movilidad4,

      implante1,
      implante2,
      implante3,
      implante4,

      furca1i,
      furca1d,
      furca2i,
      furca2d,
      furca3i,
      furca3d,
      furca4i,
      furca4d,

      san1i,
      san1d,
      san2i,
      san2d,
      san3i,
      san3d,
      san4i,
      san4d,

      placa1i,
      placa1d,
      placa2i,
      placa2d,
      placa3i,
      placa3d,
      placa4i,
      placa4d,

      mar1i,
      mar1d,
      mar2i,
      mar2d,
      mar3i,
      mar3d,
      mar4i,
      mar4d,

      prof1i,
      prof1d,
      prof2i,
      prof2d,
      prof3i,
      prof3d,
      prof4i,
      prof4d,

      diff1i,
      diff1d,
      diff2i,
      diff2d,
      diff3i,
      diff3d,
      diff4i,
      diff4d,
      car1i, car1d, car2i, car2d, car3i, car3d, car4i, car4d,
      res1i, res1d, res2i, res2d, res3i, res3d, res4i, res4d,
      sup1i, sup1d, sup2i, sup2d, sup3i, sup3d, sup4i, sup4d,


    });
    await newPeriodontograma.save();
    res.json(newPeriodontograma);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePeriodontograma = async (req, res) => {
  try {
    const { patient,
      dientes1i,
      dientes1d,
      dientes2i,
      dientes2d,

      movilidad1,
      movilidad2,
      movilidad3,
      movilidad4,

      implante1,
      implante2,
      implante3,
      implante4,

      furca1i,
      furca1d,
      furca2i,
      furca2d,
      furca3i,
      furca3d,
      furca4i,
      furca4d,

      san1i,
      san1d,
      san2i,
      san2d,
      san3i,
      san3d,
      san4i,
      san4d,

      placa1i,
      placa1d,
      placa2i,
      placa2d,
      placa3i,
      placa3d,
      placa4i,
      placa4d,

      mar1i,
      mar1d,
      mar2i,
      mar2d,
      mar3i,
      mar3d,
      mar4i,
      mar4d,

      prof1i,
      prof1d,
      prof2i,
      prof2d,
      prof3i,
      prof3d,
      prof4i,
      prof4d,

      diff1i,
      diff1d,
      diff2i,
      diff2d,
      diff3i,
      diff3d,
      diff4i,
      diff4d,
      car1i, car1d, car2i, car2d, car3i, car3d, car4i, car4d,
      res1i, res1d, res2i, res2d, res3i, res3d, res4i, res4d,
      sup1i, sup1d, sup2i, sup2d, sup3i, sup3d, sup4i, sup4d,

    } = req.body
    const periodontogramaUpdated = Periodontograma.findOneAndUpdate(
      { _id: req.params.id },
      {
        patient,
        dientes1i, dientes1d, dientes2i, dientes2d,
        movilidad1, movilidad2, movilidad3, movilidad4,
        implante1, implante2, implante3, implante4,
        furca1i, furca1d, furca2i, furca2d, furca3i, furca3d, furca4i, furca4d,
        san1i, san1d, san2i, san2d, san3i, san3d, san4i, san4d,
        placa1i, placa1d, placa2i, placa2d, placa3i, placa3d, placa4i, placa4d,
        mar1i, mar1d, mar2i, mar2d, mar3i, mar3d, mar4i, mar4d,
        prof1i, prof1d, prof2i, prof2d, prof3i, prof3d, prof4i, prof4d,
        diff1i, diff1d, diff2i, diff2d, diff3i, diff3d, diff4i, diff4d,
        car1i, car1d, car2i, car2d, car3i, car3d, car4i, car4d,
        res1i, res1d, res2i, res2d, res3i, res3d, res4i, res4d,
        sup1i, sup1d, sup2i, sup2d, sup3i, sup3d, sup4i, sup4d,
      },
      { new: true }
    )
    return res.json(periodontogramaUpdated)

  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const get1Periodontograma = async (req, res) => {
  try {
    const periodontograma = await Periodontograma.findById(req.params.id)
    if (!periodontograma) return res.status(404).json({ message: "Periodontograma no encontrado" });
    return res.json(periodontograma)
  }
  catch (error) {
    return res.status(500).json({ message: error.message });

  }
}