// import connection from '../models/connection';
import * as modelProduct from '../models/product.model';
import { NewProduct } from '../interfaces/products';

export const createProduct = async (product: NewProduct): Promise<NewProduct> => {
  const result = await modelProduct.createProduct(product);
  return result;
};

export const getAll = async (): Promise<NewProduct[]> => {
  const result = await modelProduct.getAll();
  return result;
};
