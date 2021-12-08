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
