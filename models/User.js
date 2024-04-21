import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Conversation } from "./Conversation.js";

export const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true, 
        },
        latestConversation: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true,
    }
);

// User
User.hasMany(Conversation, {
    foreignKey: "user_id",
    sourceKey: "id",
});
Conversation.belongsTo(User, {
    foreignKey: "user_id",
    targetId: "id",
});