import { Request, Response } from 'express';
import { NewProduct } from '../interfaces/products';
import * as productService from '../services/product.service';

export const create = async (req: Request, res: Response) => {
  const product = req.body as NewProduct;
  const result = await productService.createProduct(product);
  res.status(201).json(result);
};

export const getAll = async (_req: Request, res: Response) => {
  const result = await productService.getAll();
  res.status(200).json(result);
};
