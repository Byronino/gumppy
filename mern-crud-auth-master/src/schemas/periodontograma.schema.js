import { z } from 'zod';

export const createPeriodontogramaSchema = z.object({
  dientes1i: z.array(z.tuple([z.number(), z.boolean()])),
  movilidad1: z.array(z.number()),
  implante1: z.array(z.boolean()),
  san1i: z.array(z.tuple([z.boolean(), z.boolean(), z.boolean()])),
});