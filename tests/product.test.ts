import request from "supertest";
import app from "../src/api/app";
import connectDb from "../src/config/db/db";
import type { Server } from "http";
import { Connection } from "typeorm";
import { expect } from "chai";
import { getProductRepository } from "../src/api/repositories/product.repository";

describe("Product", () => {
  let server: Server, connection: Connection | undefined;

  before(async () => {
    connection = await connectDb();
  });

  after(async () => {
    await connection?.close();
  });

  beforeEach(async () => {
    server = app.listen();
    // await getProductRepository().clear();
  });

  afterEach((done) => {
    server.close(done);
  });

  const product = {
    name: "sports headset",
    description:
      "wireless high-fidelity earbuds. Hands free in-line microphone",
    price: 50,
  };

  describe("POST /products/product", () => {
    it("should return product after save", () => {
      return request(server)
        .post("/products/product")
        .send(product)
        .expect(200)
        .then(({ body }) => {
          const { sku, name, price, id } = body;

          expect(sku).to.be.a("string");
          expect(name).to.be.equal(product.name);
          expect(price).to.be.equal(product.price);
          expect(id).to.be.a("number");
        });
    });

    it("should save product to database", () => {
      return request(server)
        .post("/products/product")
        .send(product)
        .expect(200)
        .then(async (res) => {
          const { id } = res.body;

          const [productFromDb] = await getProductRepository().find({
            where: { id },
          });

          expect(productFromDb.id).to.be.an("number");
          expect(productFromDb.sku).to.be.a("string");
          expect(productFromDb.name).to.equal(product.name);
          expect(productFromDb.price).to.equal(product.price);
        });
    });
  });

  describe("GET /products", () => {
    it("should return products", () => {
      return request(server).get("/products").send().expect(200);
    });
  });

  describe("/GET /products/:id", () => {
    it.only("should return specific book", async () => {
      const [productFromDb] = await getProductRepository().find({ take: 1 });
      const path = "/products/" + productFromDb.id;

     return request(server).get(path).expect(200).then(res =>{
       const {id,  price, sku} = res.body

       expect(id).to.equal(productFromDb.id)
       expect(sku).to.equal(productFromDb.sku)
       expect(price).to.equal(productFromDb.price)
     })
    });
  });
});
