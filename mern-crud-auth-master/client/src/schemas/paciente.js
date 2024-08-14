import { z } from "zod";

export const pacienteSchema = z.object({
  nomPac: z.string().min(1, 'El nombre del paciente es requerido'),
  emailPac: z.string().email('El email no es válido').min(1, 'El email del paciente es requerido'),
  telPac: z.string().min(1, 'El teléfono del paciente es requerido'),
  rutPac: z.string().min(1, 'El RUT del paciente es requerido'),
  fecNacPac: z.string().datetime().optional(),
  razaPac: z.string().optional(),
  descripcion: z.string().optional(),
  alergia: z.boolean().optional(),
  tabaco: z.boolean().optional(),
  alcohol: z.boolean().optional(),
  drogas: z.boolean().optional(),
  nCepillados: z.string().optional(),
  cedaDental: z.boolean().optional(),
  cepilloIntendental: z.boolean().optional(),
  clorhexidina: z.boolean().optional()
});