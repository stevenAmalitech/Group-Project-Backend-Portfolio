import { getProductRepository } from "../repositories/product.repository";
import { NewProduct } from "../types/typings";
import { nanoid } from "nanoid/async";

export async function addProduct(newProduct: NewProduct) {
  try {
    const productRepository = getProductRepository();

    const args = {
      ...newProduct,
      sku: await nanoid(10),
    };

    const product = productRepository.create(args);

    const saved = await productRepository.save(product);

    return saved;
  } catch (error) {
    throw error;
  }
}
