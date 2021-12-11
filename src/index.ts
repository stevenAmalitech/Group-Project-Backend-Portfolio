import "dotenv/config";
import app from "./api/app";
import { connectDb } from "./config/db/db";

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.info("Server running");
  });
});
