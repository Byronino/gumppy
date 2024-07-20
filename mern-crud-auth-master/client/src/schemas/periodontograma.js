import { z } from "zod";

export const periodontogramaSchema = z.object({
    dientes1i: z.array({
        required_Error: "Diente1i is required"
      }),
      movilidad1: z.array({
        required_error: "Nombre is required",
      }),
      dimplante1: z.array({
        required_Error:"Diente1i is required"
      }),
      san1i: z.array({
        required_Error:"Diente1i is required"
      })
})