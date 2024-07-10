import { Router } from "express";
import { createPrueba } from "../controllers/prueba.controller.js";

import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPruebaSchema } from "../schemas/prueba.Schema.js";

const router = Router();

router.post("/prueba", auth, validateSchema(createPruebaSchema), createPrueba);

export default router;