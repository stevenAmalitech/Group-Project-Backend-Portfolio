import "dotenv/config";
import express from "express";
import connectDb from "./config/db/db";

const app = express();

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.info("Server running");
  });
});
