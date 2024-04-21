import { Router } from "express";
import { createConversation, removeConversation, changeNameConversation, getConversationByUserId } from "../controllers/conversation.controller.js";

const router = Router();

router.post("/create", createConversation);
router.delete("/remove/:id", removeConversation);
router.patch("/edit", changeNameConversation);
router.get("/:userId", getConversationByUserId);


export default router;