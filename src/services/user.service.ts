import jwt from 'jsonwebtoken';
import { ILogin, ILoginToken, ResultLogin } from '../interfaces/login';
import { IToken, IUser } from '../interfaces/users';
import { config, secret } from '../middlewares/jwtConfig';
import * as modelUser from '../models/user.model';

export const createUser = async (product: IUser): Promise<string> => {
  const result = await modelUser.createUser(product);
  const { id, username, vocation, level } = result;
  const codify: IToken = { id, username, vocation, level };
  const token = jwt.sign({ codify }, secret, config);
  return token;
};

export const login = async (lg: ILogin): Promise<ResultLogin> => {
  const { username, password } = lg;
  const data = await modelUser.getByUserName(lg);
  if (data === null || data.password !== password) {
    return { type: 401, message: { message: 'Username or password invalid' } };
  }
  const codify: ILoginToken = { id: data.id, username };
  const token = jwt.sign({ codify }, secret, config);
  return { type: 200, message: { token } };
};
