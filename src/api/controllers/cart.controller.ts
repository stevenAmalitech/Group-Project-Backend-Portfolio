import type { Request, Response } from "express";
import { cartSchemas } from "../validation";
import * as cartService from "../services/cart.service";

export async function addCart(req: Request, res: Response) {
  try {
    const cart = await cartSchemas.addCart({ ...req.body, ...req.params });

    const result = await cartService.addCart(cart);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}
