import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
  res.status(200).send({ status: 200, ok: true, data: 'Hello World!' });
};
