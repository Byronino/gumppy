import { z } from "zod";

export const pruebaSchema = z.object({
    movilidad1: z.object({
        required_error: "Movilidad1 is required",
    }),
})