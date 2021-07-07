import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
  res.status(200).send({ status: 200, ok: true, data: 'Hello World!' });
};

export const sumNumbers = (req: Request, res: Response): void => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.reduce((i, currentValue) => {
    return currentValue + i;
  }, 0);

  res.status(200).json({ status: 200, ok: true, data: numbers });
};
