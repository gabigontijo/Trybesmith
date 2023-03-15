import { ResultSetHeader } from 'mysql2/promise';
import { ILogin } from '../interfaces/login';
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

export const getByUserName = async (login: ILogin): Promise<IUser | null> => {
  const { username } = login;
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  const [user] = result as IUser[];

  return user || null;
};
