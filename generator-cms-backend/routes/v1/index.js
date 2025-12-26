import express from "express";
import authRouter from "./auth.js";
import imageRouter from "./image.js";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/image", imageRouter);

export default router;
