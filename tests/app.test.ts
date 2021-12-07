import { before } from "mocha";
import request from "supertest";
import app from "../src/api/app";
import connectDb from "../src/config/db/db";
import type { Server } from "http";
import { Connection } from "typeorm";
import { expect } from "chai";

describe("api", () => {
  let server: Server, connection: Connection | undefined;

  before(async () => {
    connection = await connectDb();
  });

  after(async () => {
    await connection?.close();
  });

  beforeEach(async () => {
    server = app.listen();
  });

  afterEach((done) => {
    server.close(done);
  });

  describe("POST /users/user", () => {
    it("should return user after save", () => {
      const user = {
        firstName: "John",
        lastName: "Snow",
        email: "email@email.com" + Math.random() * 200,
        telephone: "105105105",
        address: "guava crescent",
        password: "asd;lddfasdf",
      };

      return request(server)
        .post("/users/user")
        .send(user)
        .expect(200)
        .then((response) => {
          const { firstName, lastName, email } = response.body;

          expect(firstName).to.equal(user.firstName);
          expect(lastName).to.equal(user.lastName);
          expect(email).to.equal(user.email);
        });
    });
  });
});
