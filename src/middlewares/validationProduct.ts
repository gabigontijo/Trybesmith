import { Request, Response, NextFunction } from 'express';
import { ProductBody } from '../interfaces/products';

export const validateName = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as ProductBody;
  const { name } = product;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof (name) !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export const validateAmount = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as ProductBody;
  const { amount } = product;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  if (typeof (amount) !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};
