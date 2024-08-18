import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
    {
        //informacion
        nomPac: {
            type: String,
            required: true,
        },
        apellidoPac: {
            type: String,
            required: true,
        },
        rutPac: {
            type: String,
            required: true,
            unique: true,
        },
        nacionalidadPac: {
            type: String,
            required: true,
        },
        fecNacPac: {
            type: Date,
            required: true,
        },
        sexo:{
            type:String,
            required:true,
        },
        comunaPac: {
            type: String,
            required: true,
        },
        regionPac: {
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
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },

        //higiene
        nCepillados: {
            type: String,
            required: false,
        },
        limpiezaInterdental: {
            type: Boolean,
            required: false,
            default: false,
        },
        colutorio: {
            type: Boolean,
            required: false,
            default: false,
        },
        tipoCepillo:{
            type: String,
            required: false,
        },
        
        //habitos
        tabaco: {
            type: String,
            required: false,
        },
        drogas: {
            type: String,
            required: false,
        },
        alcohol: {
            type: Boolean,
            required: false,
            default: false,
        },
        //otros
        medicamentos: {
            type: String,
            required: false,
        },
        alergia: {
            type: String,
            required: false,
        },
        embarazo:{
            type: Boolean,
            required: false,
            default: false,
        },
        lactancia:{
            type: Boolean,
            required: false,
            default: false,
        },
        //patologias
        cardiovascular: {
            type: String,
            required: false,
        },
        pulmonar: {
            type: String,
            required: false,
        },
        nervioso: {
            type: String,
            required: false,
        },
        hematologico: {
            type: String,
            required: false,
        },
        gastrointestinal: {
            type: String,
            required: false,
        },
        genitourinario: {
            type: String,
            required: false,
        },
        endocrino: {
            type: String,
            required: false,
        },
        musculoEsqueletal: {
            type: String,
            required: false,
        },
        sistemaInmune: {
            type: String,
            required: false,
        },
        dermatologico: {
            type: String,
            required: false,
        },
        otros: {
            type: String,
            required: false,
        },
        observaciones: {
            type: String,
            required:false,
        },




    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Paciente", pacienteSchema);