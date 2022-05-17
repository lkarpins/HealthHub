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

  it("should be able to store a user id", () => {
    expect(sleep.userID).to.equal(1);
  });

  it("should be able to store a date", () => {
    expect(sleep.date).to.equal("2019/06/15");
  });

  it("should be able to store hoursSlept", () => {
    expect(sleep.hoursSlept).to.equal(6.1);
  });
});
