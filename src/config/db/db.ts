import { createConnection, ConnectionOptions } from "typeorm";
import pg from "pg";
import connectPgSimple from "connect-pg-simple";
import { Cart } from "../../api/entities/Cart";
import { Inventory } from "../../api/entities/Inventory";
import { Order } from "../../api/entities/Order";
import { Product } from "../../api/entities/Product";
import { User } from "../../api/entities/User";

let connectionOptions: ConnectionOptions = {
  type: "postgres",

  synchronize: false,
  logging: false,

  // entities: ["src/api/entities/**/*.ts"],
  // entities: ["../../api/entities/**/*.ts)"],
  entities: [Cart, Inventory, Order, Product, User],
};

if (process.env.DATABASE_URL) {
  Object.assign(connectionOptions, {
    url: process.env.DATABASE_URL,
    extra: {
      ssl: true,
    },
  });
} else {
  Object.assign(connectionOptions, {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

console.log(connectionOptions)

export async function connectDb() {
  try {
    const connection = await createConnection(connectionOptions);
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
