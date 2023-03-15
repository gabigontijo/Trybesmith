// import { ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/orders';
import connection from './connection';

// export const createProduct = async (product: NewProduct): Promise<NewProduct> => {
//   const { name, amount } = product;
//   const [result] = await connection.execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
//     [name, amount],
//   );
//   const { insertId: id } = result;
//   const newProduct: NewProduct = { id, name, amount };
//   return newProduct;
// };

export const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    group by o.id `,
  );
  return result as IOrder[];
};

export default getAll;