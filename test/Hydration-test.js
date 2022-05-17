import { expect } from "chai";
import Hydration from "../src/Hydration";

describe("Hydration", () => {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration({
      userID: 1,
      date: "2019/06/15",
      numOunces: 37
    });
});
    it("should be a function", () => {
      expect(Hydration).to.be.a("function");
    });

    it("should be an instance of Hydration", () => {
      expect(hydration).to.be.an.instanceof(Hydration);
    });

    it("should be able to store a user id", () => {
      expect(hydration.userID).to.equal(1);
    });

    it("should be able to store a date", () => {
      expect(hydration.date).to.equal("2019/06/15");
    });

    it("should be able to store ounces fluid consumed", () => {
      expect(hydration.numOunces).to.equal(37);
    });

    it.skip("should be able to return the average fluid ounces consumed per day for all time", () => {
      const avgHydrationPerDay = hydration.returnAvgHydrationPerDay();
      expect(avgHydrationPerDay).to.equal();
    });

    it.skip("should be able to return how many ounces a user consumed for a specific day", () => {
      const consumedOuncesPerDay = hydration.returnDailyOunces();
      expect(consumedOuncesPerDay).to.equal();
    });

    it.skip("should be able to return the amount of ounces consumed each day over the course of a week", () => {
      const weeklyOuncesPerDay = hydration.returnWeeklyOunces();
      expect(weeklyOuncesPerDay).to.equal();
    });
  });
