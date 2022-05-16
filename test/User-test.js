import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let user;
  beforeEach(function() {
    user = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });
  });

  it("should be a function", function() {
    expect(User).to.be.a("function");
  });

  it("should be an instance of User", function() {
    expect(user).to.be.an.instanceof(User);
  });

  it("should be able to store a user id", function() {
    expect(user.id).to.equal(1);
  });

  it("should be able to store a user name", function() {
    expect(user.name).to.equal("Luisa Hane");
  });
});
