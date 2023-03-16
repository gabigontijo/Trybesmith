import jwt from 'jsonwebtoken';
import { IOrder, IToken } from '../interfaces/orders';
import * as modelOrder from '../models/order.model';
import { secret } from '../middlewares/jwtConfig';

export const create = async (productsIds: [], token: string): Promise<
{ type: number, data: { message?: string, userId?: number, productsIds?: [] } }> => {
  const { codify } = jwt.verify(token, secret) as IToken;
  const result = await modelOrder.createOrder(productsIds, codify.id);
  return { type: 201, data: result };
};

export const getAll = async (): Promise<IOrder[]> => {
  const result = await modelOrder.getAll();
  return result;
};
