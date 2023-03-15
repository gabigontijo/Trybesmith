export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginToken {
  username: string;
  id: number;
}

export interface ResultLogin {
  type: number;
  message: object;
}