import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/users';
import connection from './connection';

export const createUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;
  const newProduct: IUser = { id, username, vocation, level, password };
  return newProduct;
};

export default createUser;