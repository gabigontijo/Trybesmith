import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

export const getAll = async (_req: Request, res: Response) => {
  const result = await orderService.getAll();
  res.status(200).json(result);
};

export default getAll;