import mongoose from "mongoose";

const periodontogramaSchema = new mongoose.Schema(
    {
        movilidad1:{
            type: [{ type: Number }],
            required:true
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Periodontograma", periodontogramaSchema);