import { expect } from "chai";
import User from "../src/User";
import Hydration from "../src/Hydration";


describe("Hydration", () => {
  let user, hydration;
  beforeEach(() => {
    user = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });

    hydration = new Hydration({

    })
});
    it("should be a function", () => {
      expect(Hydration).to.be.a("function");
    });

    it("should be an instance of Hydration", () => {
      expect(hydration).to.be.an.instanceof(Hydration);
    });
    //
    // it("should be able to store a user id", () => {
    //   expect(hydration.id).to.equal(user.id);
    // });
  });
