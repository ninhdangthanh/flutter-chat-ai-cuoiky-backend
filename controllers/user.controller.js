import { User } from "../models/User.js";


export const login = async (req, res) => {
    try {
        let {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "BadRequest: Email and password are required" });
        }

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(400).json({ error: "BadRequest: Not find user with email = " + email });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        const isTempPasswordMatch = user.temporary_password == password && user.temporary_password_expired > Date.now();
        if (isPasswordMatch || isTempPasswordMatch) {
            // login success
            let token = sign({id: user.id});
            return res.status(200).json({
                token: token
            })
        } else {
            return res.status(400).json({ error: "BadRequest: Password not correct for email = " + email });
        }

    } catch (error) {
        return res.status(400).json({ error: "BadRequest: Error finding user" });
    }
};
