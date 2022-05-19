import { expect } from "chai";
import Hydration from "../src/Hydration";
const sampleHydrationData = require("../src/data/sample-hydration-data");

describe("Hydration", () => {
  let user1Hydration;
  let user2Hydration;
  beforeEach(() => {
    user1Hydration = new Hydration(sampleHydrationData[0], sampleHydrationData);
    user2Hydration = new Hydration(sampleHydrationData[1], sampleHydrationData);
  });
  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", () => {
    expect(user1Hydration).to.be.an.instanceof(Hydration);
    expect(user2Hydration).to.be.an.instanceof(Hydration);
  });

  it("should be able to store a user id", () => {
    expect(user1Hydration.userID).to.equal(1);
    expect(user2Hydration.userID).to.equal(2);
  });

  it("should be able to store a date", () => {
    expect(user1Hydration.date).to.equal("2019/06/15");
    expect(user2Hydration.date).to.equal("2019/06/15");
  });

  it("should be able to store ounces of fluid consumed", () => {
    expect(user1Hydration.numOunces).to.equal(37);
    expect(user2Hydration.numOunces).to.equal(75);
  });

  it("should be able to return the average fluid ounces consumed per day for all time", () => {
    const avgHydrationPerDay1 = user1Hydration.returnAvgHydroPerDay();
    const avgHydrationPerDay2 = user2Hydration.returnAvgHydroPerDay();
    expect(avgHydrationPerDay1).to.equal(56.1);
    expect(avgHydrationPerDay2).to.equal(61.5);
  });

  it("should be able to return how many ounces a user consumed for a specific day", () => {
    const consumedOuncesPerDay1 = user1Hydration.returnDailyOunces(
      "2019/06/16"
    );
    const consumedOuncesPerDay2 = user2Hydration.returnDailyOunces(
      "2019/06/16"
    );
    expect(consumedOuncesPerDay1).to.equal(69);
    expect(consumedOuncesPerDay2).to.equal(91);
  });

  it("should be able to return the amount of ounces consumed each day over the course of a week", () => {
    const weeklyOuncesPerDay1 = user1Hydration.returnWeeklyOunces("2019/06/15");
    const weeklyOuncesPerDay2 = user2Hydration.returnWeeklyOunces("2019/06/15");
    expect(weeklyOuncesPerDay1).to.deep.equal([37, 69, 96, 61, 91, 50, 50]);
    expect(weeklyOuncesPerDay2).to.deep.equal([75, 91, 96, 70, 76, 71, 27]);
  });

  it("should be able to return the amount of ounces consumed each day over the course of a different week", () => {
    const weeklyOuncesPerDay1 = user1Hydration.returnWeeklyOunces("2019/06/22");
    const weeklyOuncesPerDay2 = user2Hydration.returnWeeklyOunces("2019/06/22");
    expect(weeklyOuncesPerDay1).to.deep.equal([43, 39, 61, 51, 52, 29, 57]);
    expect(weeklyOuncesPerDay2).to.deep.equal([58, 44, 33, 67, 27, 70, 56]);
  });
});
