import { z } from "zod";

export const pruebaSchema = z.object({
    nombre: z.string({
        required_error: "Nombre is required",
    }),
    valor: z.number({
        required_error: "valor is required",
    })
})