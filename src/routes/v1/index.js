import { Router } from "express";

const router = Router();

router.get("/info", (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'welcome to info controller'
        }
    )
})

export default router;