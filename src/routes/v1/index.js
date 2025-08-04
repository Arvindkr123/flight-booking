import { Router } from "express";
import airPlaneRoutes from "./airplane-routes.js"

const router = Router();

router.use("/airplane",  airPlaneRoutes)

router.get("/info", (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'welcome to info controller v1'
        }
    )
})

export default router;