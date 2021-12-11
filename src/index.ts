import "dotenv/config";
import "reflect-metadata";
import app from "./api/app";
import { connectDb } from "./config/db/db";

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.info("Server running");
  });
});
