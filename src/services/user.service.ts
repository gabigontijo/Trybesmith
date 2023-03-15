import jwt from 'jsonwebtoken';
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

export default createUser;
