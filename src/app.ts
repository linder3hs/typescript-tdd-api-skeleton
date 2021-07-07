import express, { Application } from 'express';
import { routes } from './router/routes';

export const app: Application = express();

routes(app);
