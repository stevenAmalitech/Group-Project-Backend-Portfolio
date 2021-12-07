import type { Request, Response } from "express";
import * as productSchemas from "../validations/product.validation";
import * as productService from "../services/product.service";

export async function addProduct(req: Request, res: Response) {
  try {
    const product = await productSchemas.addProduct.validateAsync(req.body);

    const result = await productService.addProduct(product);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}
