import { Router } from "express";

const router = Router();

router.get("/info", (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'welcome to info controller v1'
        }
    )
})

export default router;