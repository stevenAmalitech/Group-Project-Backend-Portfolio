import { createConnection, ConnectionOptions } from "typeorm";
import pg from "pg";
import connectPgSimple from "connect-pg-simple";
import { Cart } from "../../api/entities/Cart";
import { Inventory } from "../../api/entities/Inventory";
import { Order } from "../../api/entities/Order";
import { Product } from "../../api/entities/Product";
import { User } from "../../api/entities/User";

const options: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: ["src/api/entities/**/*.ts"],
  // entities: ["../../api/entities/**/*.ts)"],
  entities: [Cart, Inventory, Order, Product, User],
};

export async function connectDb() {
  try {
    const connection = await createConnection(options);
    console.info(`Connected to ${connection.options.database} database`);

    return connection;
  } catch (error) {
    console.error(error);
  }
}

export function connectSessionToDb(session: any) {
  const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const pgSession = connectPgSimple(session);

  return new pgSession({ pool, tableName: "user_sessions" });
}
