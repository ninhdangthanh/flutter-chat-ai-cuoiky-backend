import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Chat = sequelize.define(
    "chats",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);