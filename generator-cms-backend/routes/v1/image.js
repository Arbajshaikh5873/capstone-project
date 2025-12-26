import express from "express";
import { generateImage } from "../../controller/image.js";
import { auth } from "../../middleware/auth.js";
const router = express.Router();

router.post("/generate", auth, generateImage);

export default router;

// /v1/image/generate
