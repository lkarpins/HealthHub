import { expect } from "chai";
import Hydration from "../src/Hydration";
const sampleHydrationData = require("../src/data/sample-hydration-data");

describe("Hydration", () => {
  let userHydration;
  beforeEach(() => {
    userHydration = new Hydration(sampleHydrationData[0]);
  });
  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", () => {
    expect(userHydration).to.be.an.instanceof(Hydration);
  });

  it("should be able to store a user id", () => {
    expect(userHydration.userID).to.equal(1);
  });

  it("should be able to store a date", () => {
    expect(userHydration.date).to.equal("2019/06/15");
  });

  it("should be able to store ounces of fluid consumed", () => {
    expect(userHydration.numOunces).to.equal(37);
  });

  it.skip("should be able to return the average fluid ounces consumed per day for all time", () => {
    const avgHydrationPerDay = userHydration.returnAvgHydrationPerDay();
    expect(avgHydrationPerDay).to.equal();
  });

  it.skip("should be able to return how many ounces a user consumed for a specific day", () => {
    const consumedOuncesPerDay = userHydration.returnDailyOunces();
    expect(consumedOuncesPerDay).to.equal();
  });

  it.skip("should be able to return the amount of ounces consumed each day over the course of a week", () => {
    const weeklyOuncesPerDay = userHydration.returnWeeklyOunces();
    expect(weeklyOuncesPerDay).to.equal();
  });
});
