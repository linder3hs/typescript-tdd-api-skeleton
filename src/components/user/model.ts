import { Model,DataTypes } from "sequelize";
import { IUserAttr, IUserCreate } from "./interface";
import { sequelize } from '../../db/connection';

class User extends Model<IUserAttr, IUserCreate> implements IUserAttr{
    // '!' means it can't be null or undefined, it's necesary when implements IUserAttr
    id!: number;
    email!: string;
    password!: string;

    public readonly createdAt! : Date;
    public readonly updatedAt! : Date;
}

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    sequelize,
    tableName: 'users'
});

export default User;