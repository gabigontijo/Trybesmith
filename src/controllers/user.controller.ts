import { Request, Response } from 'express';
import { IUser } from '../interfaces/users';
import * as userService from '../services/user.service';

export const create = async (req: Request, res: Response) => {
  const product = req.body as IUser;
  const result = await userService.createUser(product);
  res.status(201).json({ token: result });
};

export default create;