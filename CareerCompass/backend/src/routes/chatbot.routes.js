import { Router } from "express";
import {
    chatbotController,
    analyzeResumeController
} from "../controllers/chatbot.controller.js";

const router = Router()

router.route("/prompt").post(chatbotController)
router.route("/analyze").post(analyzeResumeController)

export default router