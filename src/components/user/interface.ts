import { Optional } from "sequelize/types";

// User's attributes structure
export interface IUserAttr {
    id: number;
    email: string;
    password: string;
}

//Some attributes are optional in `User.build` and `User.create` calls
//You can set many optional atributes: 'Optional<IUserAttr, "id" | "email">'
export interface IUserCreate extends Optional<IUserAttr, "id"> { }
