import { createConnection, ConnectionOptions } from "typeorm";

const options: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/api/entities/**/*.ts"],
};

export default async function connectDb() {
  try {
    const connection = await createConnection(options);
    console.info(`Connected to ${connection.options.database} database`);

    return connection;
  } catch (error) {
    console.error(error);
  }
}
