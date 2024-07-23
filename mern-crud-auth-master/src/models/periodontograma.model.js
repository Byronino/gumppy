import mongoose from "mongoose";

const periodontogramaSchema = new mongoose.Schema(
    {
      //DIENTES
      dientes1i: {
        type: Array,
        default: []
      },
      dientes1d: {
        type: Array,
        default: []
      },
      dientes2i: {
        type: Array,
        default: []
      },
      dientes2d: {
        type: Array,
        default: []
      },
      //MOVILIDAD---------------------------------
      movilidad1: {
        type: Array,
        default: []
      },
      movilidad2: {
        type: Array,
        default: []
      },
      movilidad3: {
        type: Array,
        default: []
      },
      movilidad4: {
        type: Array,
        default: []
      },
      //IMPLANTES------------------------------------
      implante1: {
        type: Array,
        default: []
      },
      implante2: {
        type: Array,
        default: []
      },
      implante3: {
        type: Array,
        default: []
      },
      implante4: {
        type: Array,
        default: []
      },
      //FURCA-----------------------------
      furca1i: {
        type: Array,
        default: []
      },
      furca1d: {
        type: Array,
        default: []
      },
      furca2i: {
        type: Array,
        default: []
      },
      furca2d: {
        type: Array,
        default: []
      },
      furca3i: {
        type: Array,
        default: []
      },
      furca3d: {
        type: Array,
        default: []
      },
      furca4i: {
        type: Array,
        default: []
      },
      furca4d: {
        type: Array,
        default: []
      },
      //SANGRADO----------------------
      san1i: {
        type: Array,
        default: []
      },
      san1d: {
        type: Array,
        default: []
      },
      san2i: {
        type: Array,
        default: []
      },
      san2d: {
        type: Array,
        default: []
      },
      san3i: {
        type: Array,
        default: []
      },
      san3d: {
        type: Array,
        default: []
      },
      san4i: {
        type: Array,
        default: []
      },
      san4d: {
        type: Array,
        default: []
      },
      //PLACA-----------------------
      placa1i: {
        type: Array,
        default: []
      },
      placa1d: {
        type: Array,
        default: []
      },
      placa2i: {
        type: Array,
        default: []
      },
      placa2d: {
        type: Array,
        default: []
      },
      placa3i: {
        type: Array,
        default: []
      },
      placa3d: {
        type: Array,
        default: []
      },
      placa4i: {
        type: Array,
        default: []
      },
      placa4d: {
        type: Array,
        default: []
      },
      //MARGEN GINGIVAL---------------------
      mar1i: {
        type: Array,
        default: []
      },
      mar1d: {
        type: Array,
        default: []
      },
      mar2i: {
        type: Array,
        default: []
      },
      mar2d: {
        type: Array,
        default: []
      },
      mar3i: {
        type: Array,
        default: []
      },
      mar3d: {
        type: Array,
        default: []
      },
      mar4i: {
        type: Array,
        default: []
      },
      mar4d: {
        type: Array,
        default: []
      },
      //PROFUNDIDAD AL SONDAJE
      prof1i: {
        type: Array,
        default: []
      },
      prof1d: {
        type: Array,
        default: []
      },
      prof2i: {
        type: Array,
        default: []
      },
      prof2d: {
        type: Array,
        default: []
      },
      prof3i: {
        type: Array,
        default: []
      },
      prof3d: {
        type: Array,
        default: []
      },
      prof4i: {
        type: Array,
        default: []
      },
      prof4d: {
        type: Array,
        default: []
      },
      //NIC O DIFF
      diff1i: {
        type: Array,
        default: []
      },
      diff1d: {
        type: Array,
        default: []
      },
      diff2i: {
        type: Array,
        default: []
      },
      diff2d: {
        type: Array,
        default: []
      },
      diff3i: {
        type: Array,
        default: []
      },
      diff3d: {
        type: Array,
        default: []
      },
      diff4i: {
        type: Array,
        default: []
      },
      diff4d: {
        type: Array,
        default: []
      },
    },
    {
      timestamps: true,
    }
  )

export default mongoose.model("Periodontograma", periodontogramaSchema);