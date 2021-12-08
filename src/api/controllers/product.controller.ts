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

export async function getProduct(req: Request, res: Response) {
  try {
    const id = +req.params.id;
    if (!Number.isInteger(id)) return res.status(400).send("invalid id");

    const result = await productService.getProduct(id);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);

    res.status(400).send(error);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = +req.params.id;
    if (!Number.isInteger(id)) return res.status(400).send("invalid id");

    const newProductFields = await productSchemas.updateProduct(req.query);

    const result = await productService.updateProduct(id, newProductFields);
    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = +req.params.id;
    if (!Number.isInteger(id)) return res.status(400).send("invalid id");

    const result = await productService.deleteProduct(id);

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const result = await productService.getAllProducts();

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
