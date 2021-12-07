import type { Request, Response } from "express";
import * as userService from "../services/user.service";
import * as userSchema from "../validations/user.validation";

export async function addUser(req: Request, res: Response) {
  try {
    const userDetails = await userSchema.addUser.validateAsync(req.body);

    const result = await userService.addUser(userDetails);

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
