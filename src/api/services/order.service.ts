import { getOrderRepository } from "../repositories/order.repository";
import { ReqOrder, ReqOrderUpdate } from "../types/typings";

export async function addOrder(object: ReqOrder) {
  try {
    const orderRepository = getOrderRepository();

    const order = orderRepository.create(object as any);

    const saved = await orderRepository.save(order);

    return saved;
  } catch (error) {
    throw error;
  }
}

export async function updateOrder(newOrderFields: ReqOrderUpdate) {
  try {
    const orderRepository = getOrderRepository();

    const args = {
      ...newOrderFields,
      id: newOrderFields.orderId,
    };

    const order = orderRepository.create(args as any);

    const saved = await orderRepository.save(order);

    return saved;
  } catch (error) {
    throw error;
  }
}
