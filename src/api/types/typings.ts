export interface ReqUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  telephone: string;
  address: string;
}

export interface ReqUserUpdate {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  telephone?: string;
  address?: string;
}

export interface ReqProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ReqInventory {
  id: number;
  product_id: number;
  quantity: string;
}

export interface ReqOrder {
  items: object;
  total: number;
}

export interface ReqOrderUpdate {
  orderId: number;
  items?: object;
  total?: number;
}

export interface ReqCart {
  items: object;
  total: number;
  userId: number;
}
