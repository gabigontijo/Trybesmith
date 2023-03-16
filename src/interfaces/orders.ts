import { Request } from 'express';

export interface IOrder {
  id: number;
  userId: number;
  productsIds: []
}

export interface IToken {
  codify: {
    id: number;
    username: string;
  };
  iat: number;
  exp: number;
}

export interface CustomRequest extends Request {
  id: number;
  username: string;
}