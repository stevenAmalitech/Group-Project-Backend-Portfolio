import { getInventoryRepository } from "../repositories/inventory.repository";
import { ReqInventory } from "../types/typings";

export async function addInventory(batch: ReqInventory) {
  try {
    const inventoryRepository = getInventoryRepository();

    const inventory = inventoryRepository.create(batch as any);

    const saved = await inventoryRepository.save(inventory);

    return saved;
  } catch (error) {
    throw error;
  }
}
