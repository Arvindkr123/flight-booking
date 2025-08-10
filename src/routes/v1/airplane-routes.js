import { Router } from "express";
import {getAirPlanesController, createAirPlaneController, getAirPlaneByIdController,deleteAirPlaneByIdController} from "../../controllers/airplane-controllers.js";

const router = Router();

router.post("/", createAirPlaneController)
router.get("/", getAirPlanesController)
router.get("/:id", getAirPlaneByIdController)
router.delete("/:id", deleteAirPlaneByIdController)

export default router;