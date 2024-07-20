import mongoose from "mongoose";

const periodontogramaSchema = new mongoose.Schema(
    {
      dientes1i: {
        type: Array,
        default: []
      },
      movilidad1: {
        type: Array,
        default: []
      },
      implante1: {
        type: Array,
        default: []
      },
      san1i: {
        type: Array,
        default: []
      }
    },
    {
      timestamps: true,
    }
  )

export default mongoose.model("Periodontograma", periodontogramaSchema);