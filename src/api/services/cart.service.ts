import { getCartRepository } from "../repositories/cart.repository";
import { ReqCart } from "../types/typings";

export async function addCart(batch: ReqCart) {
  try {
    const cartRepository = getCartRepository();

    const cart = cartRepository.create(batch as any);

    const saved = await cartRepository.upsert([cart as any], ["userId"]);

    return saved;
  } catch (error) {
    throw error;
  }
}
