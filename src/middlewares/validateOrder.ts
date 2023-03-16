import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import { secret } from './jwtConfig';
import * as modelUser from '../models/user.model';
import { IToken } from '../interfaces/orders';

export const validateOrderBody = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.every((it) => typeof it !== 'number')) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export const validationToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  const INVALID_TOKEN = 'Invalid token';
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { codify } = jwt.verify(token, secret) as IToken;
    const getUser = await modelUser.getById(codify.id);
    if (!getUser) {
      return res.status(401).json({ message: INVALID_TOKEN });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: INVALID_TOKEN });
  }
};
