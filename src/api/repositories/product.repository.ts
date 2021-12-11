import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {}

export function getProductRepository() {
  return getCustomRepository(ProductRepository);
}
