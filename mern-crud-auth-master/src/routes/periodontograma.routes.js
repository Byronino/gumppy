import { Router } from "express";
import { createPeriodontograma, getPeriodontograma, get1Periodontograma, updatePeriodontograma } from "../controllers/periodontograma.controller.js";

import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPeriodontogramaSchema } from "../schemas/periodontograma.schema.js";

const router = Router();

router.get("/periodontogramas/:pacienteId", auth, getPeriodontograma);
router.post("/crear_periodontograma", auth,validateSchema(createPeriodontogramaSchema), createPeriodontograma);
router.get("/periodontograma/:id", auth, get1Periodontograma);
router.put("/periodontograma/:id", auth, updatePeriodontograma);

export default router;