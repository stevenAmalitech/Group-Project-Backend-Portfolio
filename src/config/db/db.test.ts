import { connectDb } from "./db";
import { expect } from "chai";

describe("db.ts", () => {
  it("Should connect to database", async () => {
    const result = await connectDb();

    expect(result).to.be.an("object");
  });
});
