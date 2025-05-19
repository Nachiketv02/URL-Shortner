import express from "express";
const router = express.Router();
import { createShortUrl, getShortUrl } from "../controllers/shortUrl.controller.js";

router.post("/create", createShortUrl);
router.get("/:id", getShortUrl);

export default router;
