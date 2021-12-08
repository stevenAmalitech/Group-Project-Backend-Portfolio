import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import Order from "../entities/Orders";

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {}

export function getOrderRepository() {
  return getCustomRepository(OrderRepository);
}
