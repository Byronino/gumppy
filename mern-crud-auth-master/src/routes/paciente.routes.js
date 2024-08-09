import { Router } from "express";
import {
  createPaciente,
  deletePaciente,
  getPaciente,
  getPacientes,
  updatePaciente,
} from "../controllers/paciente.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPacienteSchema } from "../schemas/paciente.schema.js";

const router = Router();

router.get("/pacientes", auth, getPacientes);

router.post("/pacientes", auth, validateSchema(createPacienteSchema), createPaciente);

router.get("/pacientes/:id", auth, getPaciente);

router.put("/pacientes/:id", auth, updatePaciente);

router.delete("/pacientes/:id", auth, deletePaciente);

export default router;