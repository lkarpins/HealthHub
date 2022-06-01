import { expect } from "chai";
import Activity from "../src/Activity";
const sampleActivityData = require("../src/data/sample-activity-data");

describe("Activity", () => {
  let user1Activity;
  let user2Activity;
  beforeEach(() => {
    user1Activity = new Activity(1, sampleActivityData);
    user2Activity = new Activity(2, sampleActivityData);
  });
  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of Activity", () => {
    expect(user1Activity).to.be.an.instanceof(Activity);
    expect(user2Activity).to.be.an.instanceof(Activity);
  });

  it("should be able to store a user id", () => {
    expect(user1Activity.userID).to.equal(1);
    expect(user2Activity.userID).to.equal(2);
  });

  it("should be able to store a date", () => {
    expect(user1Activity.date).to.equal("2019/06/28");
    expect(user2Activity.date).to.equal("2019/06/28");
  });

  it("should be able to store number of steps", () => {
    expect(user1Activity.numSteps).to.equal(10517);
    expect(user2Activity.numSteps).to.equal(12555);
  });

  it("should be able to store minutes active", () => {
    expect(user1Activity.minutesActive).to.equal(169);
    expect(user2Activity.minutesActive).to.equal(193);
  });

  it("should be able to store flights of stairs climbed", () => {
    expect(user1Activity.flightsOfStairs).to.equal(6);
    expect(user2Activity.flightsOfStairs).to.equal(45);
  });

  it.skip("should be able to return how many miles a user has walked based on their number of steps", () => {
    const milesWalkedPerDay1 = user1Activity.returnDailyMilesWalked("2019/06/16");
    const milesWalkedPerDay2 = user2Activity.returnDailyMilesWalked("2019/06/16");
    expect(milesWalkedPerDay1).to.equal();
    expect(milesWalkedPerDay2).to.equal();
  });

  it.skip("should be able to return how many minutes a user was active for a given day", () => {
    const minutesActivePerDay1 = user1Activity.returnMinutesActivePerDay("2019/06/16");
    const minutesActivePerDay2 = user2Activity.returnMinutesActivePerDay("2019/06/16");
    expect(minutesActivePerDay1).to.equal();
    expect(minutesActivePerDay2).to.equal();
  });

  it.skip("should be able to return the average amount of minutes a user was active for a given week", () => {
    const AverageMinutesActivePerWeek1 = user1Activity.returnAverageMinutesActivePerWeek("2019/06/16");
    const AverageMinutesActivePerWeek2 = user2Activity.returnAverageMinutesActivePerWeek("2019/06/16");
    expect(AverageMinutesActivePerWeek1).to.equal();
    expect(AverageMinutesActivePerWeek2).to.equal();
  });
// -For a user, did they reach their step goal for a given day (specified by a date)?

// -For a user, find all the days where they exceeded their step goal

// -For a user, find their all-time stair climbing record

// -For all users, what is the average number of:
// stairs climbed for a specified date
// steps taken for a specific date
// minutes active for a specific date
});