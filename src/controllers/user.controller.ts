import { Request, Response } from 'express';
import { ILogin } from '../interfaces/login';
import { IUser } from '../interfaces/users';
import * as userService from '../services/user.service';

export const create = async (req: Request, res: Response) => {
  const product = req.body as IUser;
  const result = await userService.createUser(product);
  res.status(201).json({ token: result });
};

export const login = async (req: Request, res: Response) => {
  const lg = req.body as ILogin;
  const result = await userService.login(lg);

  return res.status(result.type).json(result.message);
};
