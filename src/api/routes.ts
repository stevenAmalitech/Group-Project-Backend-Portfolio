import type { Express } from "express";
import * as userController from "./controllers/user.controller";
import * as productController from "./controllers/product.controller";
import * as inventoryController from "./controllers/inventory.controller";

export function setupRoutes(app: Express) {
  app.post("/users/user", userController.addUser);

  app.get("/products", productController.getAllProducts);
  app.get("/products/:id", productController.getProduct);
  app.put("/products/:id", productController.updateProduct);
  app.post("/products/product", productController.addProduct);
  app.delete("/products/:id", productController.deleteProduct);

  app.post("/inventory", inventoryController.addInventory);
}
