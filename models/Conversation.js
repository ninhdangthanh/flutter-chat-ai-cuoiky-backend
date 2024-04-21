import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Chat } from "./Chat.js";

export const Conversation = sequelize.define(
    "conversations",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

Conversation.hasMany(Chat, {
    foreignKey: "conversation_id",
    sourceKey: "id",
});
Chat.belongsTo(Conversation, {
    foreignKey: "conversation_id",
    targetId: "id",
});