// Importaciones
import { Router } from "express";
const router = Router();
import { testFollow, saveFollow } from "../controllers/follow.js";
import { ensureAuth } from "../middlewares/auth.js";

// Definir las rutas
router.get('/test-follow', testFollow);
router.post("/follow", ensureAuth, saveFollow);

// Exportar el Router
export default router;