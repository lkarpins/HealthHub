import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let user;
  beforeEach(function() {
    user = {
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    };
  });

  it("should be a function", function() {
    expect(User).to.be.a("function");
  });

  it("should be an instance of User", function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });

  it("should be able to store a user id", function() {
    const newUser = new User(user);
    expect(newUser.id).to.equal(user.id);
  });
});
