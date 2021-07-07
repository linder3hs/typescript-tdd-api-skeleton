import { Router } from 'express';

import { helloWorld, users } from './controller';

export const UserRouter: Router = Router();

UserRouter.get('/', helloWorld);
UserRouter.route('/users').get(users);
