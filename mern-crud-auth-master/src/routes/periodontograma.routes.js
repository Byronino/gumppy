import { Router } from "express";
import { createPeriodontograma } from "../controllers/periodontograma.controller.js";

import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPeriodontogramaSchema } from "../schemas/periodontograma.schema.js";

const router = Router();

router.post("/crear_periodontograma", auth,validateSchema(createPeriodontogramaSchema), createPeriodontograma);

export default router;