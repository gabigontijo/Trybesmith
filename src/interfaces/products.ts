export interface NewProduct {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}
export interface ProductBody {
  name: string;
  amount: string;
}