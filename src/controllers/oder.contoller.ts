import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

export const getAll = async (_req: Request, res: Response) => {
  const result = await orderService.getAll();
  res.status(200).json(result);
};

export const create = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { authorization } = req.headers;
  const token = authorization as string;
  const result = await orderService.create(productsIds, token);
  if (result.type !== 201) {
    return res.status(result.type).json({ message: result.data.message });
  }
  return res.status(result.type).json(result.data);
};
