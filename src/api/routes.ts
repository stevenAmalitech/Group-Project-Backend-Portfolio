import type { Express } from "express";
import * as userController from "./controllers/user.controller";

export function setupRoutes(app: Express) {
  app.post("/users/user", userController.addUser);
}
