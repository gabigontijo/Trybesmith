import { ResultSetHeader } from 'mysql2/promise';
import { NewProduct } from '../interfaces/products';
import connection from './connection';

export const createProduct = async (product: NewProduct): Promise<NewProduct> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const { insertId: id } = result;
  const newProduct: NewProduct = { id, name, amount };
  return newProduct;
};

export default createProduct;