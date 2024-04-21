import { Router } from "express";
import { createChat, getChatByConversationId } from "../controllers/chat.controller.js";

const router = Router();

router.post("/create", createChat);
router.get("/:conversationId", getChatByConversationId);


export default router;