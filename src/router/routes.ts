import { Application, Router } from 'express';
import { UserRouter } from '../components/user/networks';

const _routes: [string, Router][] = [['/', UserRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
