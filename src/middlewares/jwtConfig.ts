export const secret = process.env.JWT_SECRET || 'Braga';

export const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};