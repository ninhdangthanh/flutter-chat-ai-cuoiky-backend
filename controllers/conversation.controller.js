import { Conversation } from '../models/Conversation.js'
import { User } from '../models/User.js';

export const createConversation = async (req, res) => {
    try {
        let {user_id} = req.body;

        const user = await User.findOne({
            where: { id: user_id }, 
        });

        let newChatId = 1;
        
        if (user) {
            newChatId = user.latestConversation + 1;
            user.latestConversation += 1
        }

        const newConversation = {
            user_id: user_id,
            name: `Conversation ${newChatId}`
        }

        await user.save();
        let createdConversation = await Conversation.create(newConversation);
        
        return res.status(200).json(createdConversation)
    } catch (error) {
        return res.status(400).json({ error: "BadRequest: Can not create new conversation, err=" + error});
    }
}


export const removeConversation = async (req, res) => {
    try {
        const { id } = req.params; 

        const conversation = await Conversation.findByPk(id);

        if (!conversation) {
            return res.status(404).json({ message: `Conversation with ID ${id} not found` });
        }

        await conversation.destroy(); // Delete the conversation

        return res.status(200).json({ message: `Conversation with ID ${id} deleted successfully` });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}


export const changeNameConversation = async (req, res) => {
    try {
        const { id, name } = req.body; 

        const conversation = await Conversation.findByPk(id);

        if (!conversation) {
            return res.status(404).json({ message: `Conversation with ID ${id} not found` });
        }

        conversation.name = name;
        await conversation.save(); 

        return res.status(200).json({ message: `Conversation with ID ${id} update successfully` });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}


export const getConversationByUserId = async (req, res) => {
    try {
        const { userId } = req.params; 

        const conversations = await Conversation.findAll({
            where: { user_id: userId },
            order: [['id', 'ASC']],
        });

        return res.status(200).json(conversations);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}