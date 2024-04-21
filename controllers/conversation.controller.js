import { Conversation } from '../models/Conversation.js'

export const getAccountOfUser = async (req, res) => {
    try {
        // let user_id = req.user.id;
        
        // const accounts = await Account.findAll({
        //     where: {
        //         user_id: user_id
        //     }
        // });

        // // if (accounts) {
        // //     accounts.forEach(item => {
        // //         item.privateKey = ""
        // //     });
        // // }

        // return res.status(200).json(accounts)
    } catch (error) {
        return res.status(400).json({ error: "BadRequest: Can not get account of user, err=" + error});
    }
}
