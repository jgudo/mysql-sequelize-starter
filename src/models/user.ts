import { DataTypes, Model, Optional } from 'sequelize';
import Database from '../config/db';

// Database connection instance
let DBInstance = new Database().database;

export interface IUserAttributes {
    id: string;
    name: string;
    lastname: string;
    age: number;
}

/*
    We have to declare the IUserCreationAttributes to
    tell Sequelize and TypeScript that the property id,
    in this case, is optional to be passed at creation time
*/
interface IUserCreationAttributes extends Optional<IUserAttributes, 'id'> { }

interface IUserInstance
    extends Model<IUserAttributes, IUserCreationAttributes>,
    IUserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
{ }

// Sequelize Model
export const User = DBInstance.define<IUserInstance>(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            autoIncrement: false,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    timestamps: false
}
);