import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import Inventory from "../entities/Inventory";

@EntityRepository(Inventory)
class InventoryRepository extends Repository<Inventory> {}

export function getInventoryRepository() {
 return getCustomRepository(InventoryRepository);
}
