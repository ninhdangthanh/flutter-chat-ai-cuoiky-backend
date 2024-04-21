import { Router } from "express";


import userRoutes from "./user.routes.js"
import chatRoutes from "./chat.routes.js"
import conversationRoutes from "./conversation.routes.js"


const router = Router();

// routes
router.use("/hello", async (req, res) => {
    try {
        return res.json("hello backend wallet");
    } catch (error) {}
});

router.use("/api/user", userRoutes);
router.use("/api/conversation", conversationRoutes);
router.use("/api/chat", chatRoutes);

export default router;