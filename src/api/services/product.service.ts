import { getProductRepository } from "../repositories/product.repository";
import { ReqProduct } from "../types/typings";
import { nanoid } from "nanoid/async";

export async function addProduct(newProduct: ReqProduct) {
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

export async function getProduct(id: number) {
  try {
    const [product] = await getProductRepository().find({ where: { id } });

    return product;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(id: number, newProductFields: ReqProduct) {
  try {
    const result = await getProductRepository().update(id, newProductFields);

    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(id: number) {
  try {
    const result = await getProductRepository().delete(id);

    console.log(result);
    
    return result;
  } catch (error) {
    throw error;
  }
}
