import type { Request, Response } from "express";
import * as inventoryService from "../services/inventory.service";
import * as itemSchema from "../validations/item.validation";

export async function addInventory(req: Request, res: Response) {
  try {
    const inventory = await itemSchema.addInventory(req.body);

    const result = await inventoryService.addInventory(inventory);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}
