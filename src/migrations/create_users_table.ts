import {DataTypes,QueryInterface,Sequelize} from 'sequelize';

const up = (queryInterface: QueryInterface) => queryInterface.createTable('users', {
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
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    }
});

const down = (queryInterface: QueryInterface) => queryInterface.dropTable('users');

export {up,down};
