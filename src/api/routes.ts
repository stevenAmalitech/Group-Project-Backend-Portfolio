import type { Express } from "express";
import * as userController from "./controllers/user.controller";
import * as productController from "./controllers/product.controller";

export function setupRoutes(app: Express) {
  app.post("/users/user", userController.addUser);

  app.post("/products/product", productController.addProduct);
}
