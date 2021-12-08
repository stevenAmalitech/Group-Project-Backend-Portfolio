import type { Express } from "express";
import * as userController from "./controllers/user.controller";
import * as productController from "./controllers/product.controller";
import * as inventoryController from "./controllers/inventory.controller";
import * as orderController from "./controllers/order.controller";
import * as cartController from "./controllers/cart.controller";

export function setupRoutes(app: Express) {
  app.post("/users/user", userController.addUser);

  app.get("/products", productController.getAllProducts);
  app.get("/products/:id", productController.getProduct);
  app.put("/products/:id", productController.updateProduct);
  app.post("/products/product", productController.addProduct);
  app.delete("/products/:id", productController.deleteProduct);

  app.post("/inventory", inventoryController.addInventory);

  app.post("/users/:userId/orders/order", orderController.addOrder);
  app.put("/users/:userId/orders/:orderId", orderController.updateOrder);
  app.get("/users/:userId/orders/:orderId", orderController.getOrders);
  app.get("/users/:userId/orders", orderController.getOrders);
  app.delete("/users/:userId/orders/:orderId", orderController.deleteOrder);
  app.delete("/users/:userId/orders", orderController.deleteOrder);

  app.put("/users/:userId/cart", cartController.addCart);
}
