import mongoose from "mongoose";

const pruebaSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required:true
        },
        valor:{
            type: Number,
            required:true
        }
    },
    {
        timeStamps: true,
    }
)

export default mongoose.model("Prueba", pruebaSchema);