import { Router } from "express";
import { createCityController } from "../../controllers/city-controllers.js";

const router = Router();

router.post("/", createCityController)
export default router;