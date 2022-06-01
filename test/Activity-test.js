import { expect } from "chai";
import Activity from "../src/Activity";
import User from "../src/User";
const sampleActivityData = require("../src/data/sample-activity-data");

describe("Activity", () => {
  let user1Activity;
  let user2Activity;
  let user1;
  let user2;
  beforeEach(() => {
    user1Activity = new Activity(1, sampleActivityData);
    user2Activity = new Activity(2, sampleActivityData);
    user1 = new User ({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });
    user2 = new User ({
      id:  2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [9, 18, 24, 19]
    });
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

  it("should be able to return how many miles a user has walked based on their number of steps", () => {
    const milesWalkedPerDay1 = user1Activity.returnDailyMilesWalked("2019/06/16", user1);
    const milesWalkedPerDay2 = user2Activity.returnDailyMilesWalked("2019/06/16", user2);
    expect(milesWalkedPerDay1).to.equal(5.4);
    expect(milesWalkedPerDay2).to.equal(3.5);
  });

  it("should be able to return how many minutes a user was active for a given day", () => {
    const minutesActivePerDay1 = user1Activity.returnMinutesActivePerDay("2019/06/16");
    const minutesActivePerDay2 = user2Activity.returnMinutesActivePerDay("2019/06/16");
    expect(minutesActivePerDay1).to.equal(175);
    expect(minutesActivePerDay2).to.equal(220);
  });

  it("should be able to return the average amount of minutes a user was active for a given week", () => {
    const avgMinutesActivePerWeek1 = user1Activity.returnAvgMinutesActivePerWeek("2019/06/22");
    const avgMinutesActivePerWeek2 = user2Activity.returnAvgMinutesActivePerWeek("2019/06/22");
    expect(avgMinutesActivePerWeek1).to.equal(168.1);
    expect(avgMinutesActivePerWeek2).to.equal(154.4);
  });

  it("should be able to determine if a user reached their step goal for a given day", () => {
    const determinedStepGoalReachedPerDay1 = user1Activity.returnStatusOfDailyStepGoal("2019/06/16", user1);
    const determinedStepGoalReachedPerDay2 = user2Activity.returnStatusOfDailyStepGoal("2019/06/16", user2);
    expect(determinedStepGoalReachedPerDay1).to.equal(false);
    expect(determinedStepGoalReachedPerDay2).to.equal(false);
  });

  it.skip("should be able to find the days where a user exceeded their step goal", () => {
    const determinedStepGoalExceededPerDay1 = user1Activity.returnDaysStepGoalExceeded("2019/06/16");
    const determinedStepGoalExceededPerDay2 = user2Activity.returnDaysStepGoalExceeded("2019/06/16");
    expect(determinedStepGoalExceededPerDay1).to.equal();
    expect(determinedStepGoalExceededPerDay2).to.equal();
  });

  it.skip("should be able to find all time stair climbing record for a given user", () => {
    const allTimeStairClimbRecord1 = user1Activity.returnAllTimeStairClimbRecord();
    const allTimeStairClimbRecord2 = user2Activity.returnAllTimeStairClimbRecord();
    expect(allTimeStairClimbRecord1).to.equal();
    expect(allTimeStairClimbRecord2).to.equal();
  });

  it.skip("should be able to find average number of stairs climbed for all user's on a given day", () => {
    const avgStairsClimbedPerDay1 = user1Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    const avgStairsClimbedPerDay2 = user2Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    expect(avgStairsClimbedPerDay1).to.equal();
    expect(avgStairsClimbedPerDay2).to.equal();
  });

  it.skip("should be able to find average steps taken for all user's on a given day", () => {
    const avgStepsTakenPerDay1 = user1Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    const avgStepsTakenPerDay2 = user2Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    expect(avgStepsTakenPerDay1).to.equal();
    expect(avgStepsTakenPerDay2).to.equal();
  });

  it.skip("should be able to find average minutes active for all user's on a given day", () => {
    const avgMinutesActivePerDay1 = user1Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    const avgMinutesActivePerDay2 = user2Activity.returnAverageActivityDataAllUsers("2019/06/16", property);
    expect(avgMinutesActivePerDay1).to.equal();
    expect(avgMinutesActivePerDay2).to.equal();
  });
});