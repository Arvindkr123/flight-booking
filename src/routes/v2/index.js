import { Router } from "express";

const router = Router();

router.get("/info", (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'welcome to info controller v2'
        }
    )
})

export default router;