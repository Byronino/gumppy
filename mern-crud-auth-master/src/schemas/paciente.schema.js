import { z } from "zod";

export const createPacienteSchema = z.object({

  nomPac: z.string().min(1, 'El nombre del paciente es requerido'),
  apellidoPac: z.string().optional(),
  rutPac: z.string().optional(),
  nacionalidadPac: z.string().optional(),
  fecNacPac: z.string().datetime().optional(),
  sexo: z.string().min(1, 'El sexo del paciente es requerido'),

  comunaPac: z.string().optional(),
  regionPac: z.string().optional(),
  emailPac: z.string().email('El email no es válido').min(1, 'El email del paciente es requerido'),
  telPac: z.string().min(1, 'El teléfono del paciente es requerido'),

  nCepillados: z.string().optional(),
  limpiezaInterdental: z.boolean().optional(),
  colutorio: z.boolean().optional(),
  tipoCepillo: z.string().optional(),
  tabaco: z.string().optional(),
  drogas: z.string().optional(),
  alcohol: z.boolean().optional(),
  medicamentos: z.string().optional(),
  alergia: z.string().optional(),
  embarazo: z.boolean().optional(),

  lactancia: z.boolean().optional(),
  cardiovascular: z.string().optional(),
  pulmonar: z.string().optional(),
  nervioso: z.string().optional(),
  hematologico: z.string().optional(),
  gastrointestinal: z.string().optional(),
  genitourinario: z.string().optional(),
  endocrino: z.string().optional(),
  musculoEsqueletal: z.string().optional(),
  sistemaInmune: z.string().optional(),

  dermatologico: z.string().optional(),
  otros: z.string().optional(),
  observaciones: z.string().optional(),
});
