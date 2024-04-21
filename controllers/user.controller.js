import { User } from "../models/User.js";


export const createUser = async (req, res) => {
    try {
        let {email} = req.body;

        if (!email) {
            return res.status(400).json({ error: "BadRequest: Email is required" });
        }

        const newUser = {
            email: email,
            latestConversation: 0
        }

        let created_user = await User.create(newUser);
        
        return res.status(201).json({message: "User created"});
    } catch (error) {
        return res.status(400).json({ error: "BadRequest: Error when create new user" });
    }
};
