import type { Request, Response } from "express";
import { orderSchemas } from "../validation";
import * as orderService from "../services/order.service";

export async function addOrder(req: Request, res: Response) {
  try {
    const order = await orderSchemas.addOrder({
      ...req.body,
      ...req.params,
    });

    const result = await orderService.addOrder(order);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const order = await orderSchemas.updateOrder({
      ...req.body,
      ...req.params,
    });

    const result = await orderService.updateOrder(order);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function getOrders(req: Request, res: Response) {
  try {
    const order = await orderSchemas.getOrder(req.params);

    const result = await orderService.getOrders(order);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    const order = await orderSchemas.deleteOrder(req.params);

    const result = await orderService.deleteOrder(order);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function checkout(req: Request, res: Response) {
  try {
    const order = await orderSchemas.checkout({ ...req.params, ...req.body });

    const result = await orderService.checkout(order);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}
