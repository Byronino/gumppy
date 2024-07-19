import {z} from 'zod';

export const createPeriodontogramaSchema = z.object({
    movilidad1: z.object({
      required_error: "Nombre is required",
    }),
  });