import { getCartRepository } from "../repositories/cart.repository";
import { ReqCart } from "../types/typings";

export async function addCart(batch: ReqCart) {
  try {
    const cartRepository = getCartRepository();

    const cart = cartRepository.create(batch as any);

    await cartRepository.upsert([cart as any], ["userId"]);

    return await cartRepository.find({ where: { userId: batch.userId } });
  } catch (error) {
    throw error;
  }
}

export async function getCart(userId: number) {
  try {
    return await getCartRepository().find({ where: { userId } });
  } catch (error) {
    throw error;
  }
}

export async function deleteCart(userId: number) {
  try {
    const result = await addCart({ items: [], total: 0, userId });

    return result;
  } catch (error) {
    throw error;
  }
}
