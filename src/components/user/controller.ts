import { Request, Response } from 'express';
import User from './model';

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

export const users = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    return res.status(200).json({
      status: 200,
      ok: true,
      data: await User.findAll(),
    });
  } catch (error) {
    console.log(error);
  }
};
