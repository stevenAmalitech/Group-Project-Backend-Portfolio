import swaggerUi from "swagger-ui-express";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { mergeKeys } from "../../api/utils/mergeKeys";

let document: swaggerUi.JsonObject = {
  openapi: "3.0.3",
  info: {
    title: "Backend Portfolio",
    description: "API Documentation for Ecommerce App",
    version: "1.0.0",
    contact: {
      name: "Steven Yirenkyi",
      email: "yirenkyisteven7@gmail.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Server",
    },
  ],
};

function getSwaggerDocs(path: string): any {
  const files = readdirSync(path);

  let doc: any = {};

  files.forEach((file) => {
    const filePath = join(path, file);
    if (statSync(filePath).isDirectory()) {
      const docs = getSwaggerDocs(filePath);
      return (doc = mergeKeys(docs, doc));
    }

    const module = require(filePath).default;
    doc = mergeKeys(module, doc);
  });

  return doc;
}

document = { ...document, ...getSwaggerDocs(join(__dirname, "docs")) };

export const swaggerServe = swaggerUi.serve;

export const swaggerDocument = swaggerUi.setup(document);
