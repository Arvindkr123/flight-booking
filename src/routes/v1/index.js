import { Router } from "express";
import airPlaneRoutes from "./airplane-routes.js"
import cityRoutes from "./city-routes.js"
import { validateCreateRequest } from './../../middlewares/airplane-middleware.js';
import { validateCreateRequestCity } from "../../middlewares/city-middleware.js";

const router = Router();

router.use("/airplane", validateCreateRequest, airPlaneRoutes)
router.use("/cities",validateCreateRequestCity, cityRoutes)

router.get("/info", (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'welcome to info controller v1'
        }
    )
})

export default router;