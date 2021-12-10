import type { Request, Response } from "express";
import { cartSchemas } from "../validation";
import * as cartService from "../services/cart.service";

export async function addCart(req: Request, res: Response) {
  try {
    if (!req.query.items) throw { status: 422, message: "items required" };

    req.query.items = JSON.parse(req.query.items as string);
    const cart = await cartSchemas.addCart({ ...req.query, ...req.params });

    const result = await cartService.addCart(cart);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function getCart(req: Request, res: Response) {
  try {
    const userId = +req.params.userId;
    if (!Number.isInteger(userId))
      return res.status(400).send("invalid userId");

    const result = await cartService.getCart(userId);

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteCart(req: Request, res: Response) {
  try {
    const userId = +req.params.userId;
    if (!Number.isInteger(userId))
      return res.status(400).send("invalid userId");

    const result = await cartService.deleteCart(userId);

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
