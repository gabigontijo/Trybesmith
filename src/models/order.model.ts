// import { ResultSetHeader } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/orders';
import connection from './connection';

export const createOrder = async (productsIds: [], id: number): Promise<
{ userId: number, productsIds: [] }> => {
  const [order] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [id],
  );
  const { insertId: orderId } = order;
  console.log('orderId+++++++++++++++++++++++++++++', orderId);
  productsIds.map(async (p) => connection.execute(
    'UPDATE Trybesmith.products  SET order_id = ? WHERE id = ?',
    [orderId, p],
  ));
  const result = { userId: id, productsIds };

  return result;
};

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
