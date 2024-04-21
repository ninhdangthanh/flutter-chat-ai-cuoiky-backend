import { Chat } from '../models/Chat.js';

export const createChat = async (req, res) => {
    try {
        let {conversation_id, text, of_bot} = req.body;

        const newChat = {
            conversation_id: conversation_id,
            text: text,
            ofBot: of_bot
        }

        let createdChat = await Chat.create(newChat);
        
        return res.status(200).json(createdChat)
    } catch (error) {
        return res.status(400).json({ error: "BadRequest: Can not create chat, err=" + error});
    }
}

export const getChatByConversationId = async (req, res) => {
    try {
        const { conversationId } = req.params; 

        const chats = await Chat.findAll({
            where: { conversation_id: conversationId },
            order: [['id', 'ASC']],
        });

        return res.status(200).json(chats);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}