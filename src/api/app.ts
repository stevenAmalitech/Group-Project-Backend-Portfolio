import express from "express";
import passport from "passport";
import { setupRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(passport.initialize())

setupRoutes(app);

export default app;
