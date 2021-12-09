import { getOrderRepository } from "../repositories/order.repository";
import { ReqCart, ReqOrder, ReqOrderUpdate } from "../types/typings";

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

export async function getOrders(fields: GetOrdersArgs) {
  try {
    const { userId, orderId } = fields;
    const where = orderId ? { id: orderId, userId } : { userId };

    return await getOrderRepository().find({ where });
  } catch (error) {
    throw error;
  }
}

interface GetOrdersArgs {
  orderId?: number;
  userId: number;
}

export async function deleteOrder(fields: GetOrdersArgs) {
  try {
    const { userId, orderId } = fields;
    const filter = orderId ? { id: orderId, userId } : { userId };

    await getOrderRepository().delete(filter as any);

    return await getOrderRepository().find({ where: { userId } });
  } catch (error) {
    throw error;
  }
}

export async function checkout(object: ReqCart) {
  try {
    const orderRepository = getOrderRepository();

    const order = orderRepository.create(object as any);

    const saved = await orderRepository.save(order);

    return saved;
  } catch (error) {
    throw error;
  }
}
