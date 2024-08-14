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
        alergia: {
            type: Boolean,
            required: false,
            default: false,
        },
        tabaco: {
            type: Boolean,
            required: false,
            default: false,
        },
        alcohol: {
            type: Boolean,
            required: false,
            default: false,
        },
        drogas: {
            type: Boolean,
            required: false,
            default: false,
        },
        nCepillados: {
            type: String,
            required: false,
        },
        cedaDental: {
            type: Boolean,
            required: false,
            default: false,
        },
        cepilloInterdental: {
            type: Boolean,
            required: false,
            default: false,
        },
        clorhexidina: {
            type: Boolean,
            required: false,
            default: false,
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Paciente", pacienteSchema);