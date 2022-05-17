import { expect } from "chai";
import Sleep from "../src/Sleep";

describe("Sleep", () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep({
      userID: 1,
      date: "2019/06/15",
      hoursSlept: 6.1,
      sleepQuality: 2.2
    });
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });
});
