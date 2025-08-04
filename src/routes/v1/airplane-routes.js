import { Router } from "express";
import { createAirPlaneController } from "../../controllers/airplane-controllers.js";

const router = Router();

router.post("/", createAirPlaneController)

export default router;