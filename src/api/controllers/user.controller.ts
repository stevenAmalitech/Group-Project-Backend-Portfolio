import type { Request, Response } from "express";
import * as userService from "../services/user.service";
import { userSchemas } from "../validation";

export async function addUser(req: Request, res: Response) {
  try {
    const userDetails = await userSchemas.addUser(req.body);

    const result = await userService.addUser(userDetails);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}

export async function er(req: Request, res: Response) {
  res.send(req.user);
}

export async function getUsers(req: Request, res: Response) {
  try {
    const { userId } = req.params;

    if (typeof userId !== "undefined")
      if (!Number.isInteger(+userId)) return res.status(400).send("invalid id");

    const result = await userService.getUsers(+userId);

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const user = await userSchemas.updateUser({ ...req.params, ...req.query });

    const result = await userService.updateUser(user);

    res.send(result);
  } catch (error: any) {
    if (error.status) return res.status(error.status).send(error.message);
    if (error.isJoi) return res.status(422).send(error.message);

    res.status(400).send(error);
  }
}
