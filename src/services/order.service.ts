// import connection from '../models/connection';
import { IOrder } from '../interfaces/orders';
import * as modelOrder from '../models/order.model';

// export const createProduct = async (product: NewProduct): Promise<NewProduct> => {
//   const result = await modelProduct.createProduct(product);
//   return result;
// };

export const getAll = async (): Promise<IOrder[]> => {
  const result = await modelOrder.getAll();
  return result;
};

export default getAll;