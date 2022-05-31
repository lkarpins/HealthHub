import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let user1;
  let user2;
  beforeEach(() => {
    user1 = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });
    user2 = new User({
      id: 7,
      name: "Breanne Fay",
      address: "834 Retta Knoll, Stantonland MA 71627-4121",
      email: "Dashawn28@gmail.com",
      strideLength: 2.9,
      dailyStepGoal: 8000,
      friends: [12, 27, 22, 30]
    });
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should be able to instantiate multiple users", () => {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceOf(User);
  });

  it("should be able to store a user id for multiple users", () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(7);
  });

  it("should be able to store a user name", () => {
    expect(user1.name).to.equal("Luisa Hane");
    expect(user2.name).to.equal("Breanne Fay");
  });

  it("should be able to store a user address", () => {
    expect(user1.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
  });

  it("should be able to store a user email", () => {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it("should be able to store a user stride length", () => {
    expect(user1.strideLength).to.equal(4.3);
  });

  it("should be able to store a user daily step goal", () => {
    expect(user1.dailyStepGoal).to.equal(10000);
  });

  it("should be able to store a users friends", () => {
    expect(user1.friends).to.deep.equal([16, 4, 8]);
  });

  it("should be able to return only the first name", () => {
    const firstName = user1.returnFirstName();
    expect(firstName).to.equal("Luisa");
  });
});
