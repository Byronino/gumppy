import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
    {
        nomPac: {
            type: String,
            required: true,
        },
        emailPac: {
            type: String,
            required: true,
            unique: true,
        },
        telPac: {
            type: String,
            required: true,
        },
        rutPac: {
            type: String,
            required: true,
            unique: true,
        },
        fecNacPac: {
            type: Date,
            required: true,
        },
        razaPac:{
            type: String,
            required: false,
            default: '',
        },
        descripcion: {
            type: String,
          },

        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Paciente", pacienteSchema);