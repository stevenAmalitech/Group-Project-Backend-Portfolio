import express from "express";
import passport from "passport";
import session from "express-session";
import { setupRoutes } from "./routes";
import { connectSessionToDb } from "../config/db/db";

const app = express();

app.use(
  session({
    store: connectSessionToDb(session),
    secret: "goat",
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session())
setupRoutes(app);

export default app;
