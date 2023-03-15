import { Request, Response } from 'express';
import { NewProduct } from '../interfaces/products';
import * as productService from '../services/product.service';

export const create = async (req: Request, res: Response) => {
  const product = req.body as NewProduct;
  const result = await productService.createProduct(product);
  res.status(201).json(result);
};

export default create;