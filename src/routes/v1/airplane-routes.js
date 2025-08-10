import { Router } from "express";
import {getAirPlanesController, createAirPlaneController, getAirPlaneByIdController} from "../../controllers/airplane-controllers.js";

const router = Router();

router.post("/", createAirPlaneController)
router.get("/", getAirPlanesController)
router.get("/:id", getAirPlaneByIdController)

export default router;