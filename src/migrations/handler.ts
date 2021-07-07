import {sequelize} from '../db/connection';
import * as usersTable from './create_users_table';

const queryInterface = sequelize.getQueryInterface();

usersTable.down(queryInterface);
usersTable.up(queryInterface);