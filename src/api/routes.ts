import type { Express } from "express";
import * as userController from "./controllers/user.controller";
import * as productController from "./controllers/product.controller";
import * as inventoryController from "./controllers/inventory.controller";
import * as orderController from "./controllers/order.controller";
import * as cartController from "./controllers/cart.controller";
import { passport } from "./passport";
import { swaggerServe, swaggerDocument } from "../config/swagger/swagger";

export function setupRoutes(app: Express) {
  app.post("/register", userController.addUser);
  app.post("/login", passport.authenticate("local"), userController.er);
  app.get("/users", userController.getUsers);
  app.get("/users/:userId", userController.getUsers);
  app.put("/users/:userId", userController.updateUser);

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

  app.post("/users/:userId/cart/checkout", orderController.checkout);

  app.put("/users/:userId/cart", cartController.addCart);
  app.get("/users/:userId/cart", cartController.getCart);
  app.delete("/users/:userId/cart", cartController.deleteCart);

  app.use("/api", swaggerServe, swaggerDocument);
}
