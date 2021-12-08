export interface ReqUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  telephone: string;
  address: string;
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
  userId: number;
  items: object;
  total: number;
}

export interface ReqOrderUpdate extends ReqOrder {
  orderId: number
}
