import { Router } from 'express';

import { helloWorld } from './controller';

export const UserRouter: Router = Router();

UserRouter.get('/', helloWorld);
