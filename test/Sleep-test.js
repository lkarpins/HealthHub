import { expect } from "chai";
import Sleep from "../src/Sleep";
const sampleSleepData = require("../src/data/sample-sleep-data");

describe("Sleep", () => {
  let user1Sleep;
  let user2Sleep;
  beforeEach(() => {
    user1Sleep = new Sleep(sampleSleepData[0], sampleSleepData);
    user2Sleep = new Sleep(sampleSleepData[1], sampleSleepData);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", () => {
    expect(user1Sleep).to.be.an.instanceof(Sleep);
    expect(user2Sleep).to.be.an.instanceof(Sleep);
  });

  it("should be able to store a user id", () => {
    expect(user1Sleep.userID).to.equal(1);
    expect(user2Sleep.userID).to.equal(2);
  });

  it("should be able to store a date", () => {
    expect(user1Sleep.date).to.equal("2019/06/15");
    expect(user2Sleep.date).to.equal("2019/06/15");
  });

  it("should be able to store hours slept", () => {
    expect(user1Sleep.hoursSlept).to.equal(6.1);
    expect(user2Sleep.hoursSlept).to.equal(7);
  });

  it("should be able to store sleep quality ", () => {
    expect(user1Sleep.sleepQuality).to.equal(2.2);
    expect(user2Sleep.sleepQuality).to.equal(4.7);
  });

  it("should be able to return the average hours of sleep per day", () => {
    const avgSleepPerDay1 = user1Sleep.avgSleepPerDay();
    const avgSleepPerDay2 = user2Sleep.avgSleepPerDay();

    expect(avgSleepPerDay1).to.equal(7.8);
    expect(avgSleepPerDay2).to.equal(8);
  });

  it("should be able to return the average quality of sleep per day", () => {
    const avgSleepQualityPerDay1 = user1Sleep.avgSleepQualityPerDay();
    const avgSleepQualityPerDay2 = user2Sleep.avgSleepQualityPerDay();

    expect(avgSleepQualityPerDay1).to.equal(2.8);
    expect(avgSleepQualityPerDay2).to.equal(3.1);
  });

  it.skip("should be able to return how many hours a user slept for a specific day", () => {
    const sleptHoursPerDay = sleep.sleptHoursPerDay();
    expect(sleptHoursPerDay).to.equal();
  });

  it.skip("should be able to return the sleep quality for a specific day", () => {
    const sleepQualityPerDay = sleep.sleepQualityPerDay();
    expect(sleepQualityPerDay).to.equal();
  });

  it.skip("should be able to return how many hours slept over the course of a given week", () => {
    const sleptHoursPerDayPerWeek = sleep.sleptHoursPerDayPerWeek();
    expect(sleptHoursPerDayPerWeek).to.equal();
  });

  it.skip("should be able to return how many hours slept each day over the course of a different week", () => {
    const sleptHoursPerDayPerWeek = sleep.sleptHoursPerDayPerWeek();
    expect(sleptHoursPerDayPerWeek).to.equal();
  });

  it.skip("should be able to return their sleep quality each day over the course of a given week", () => {
    const sleepQualityPerDayPerWeek = sleep.sleepQualityPerDayPerWeek();
    expect(sleepQualityPerDayPerWeek).to.equal();
  });

  it.skip("should be able to return the quality of sleep each day over the course of a different week", () => {
    const sleptHoursPerDayPerWeek = sleep.sleptHoursPerDayPerWeek();
    expect(sleptHoursPerDayPerWeek).to.equal();
  });

  it.skip("should be able to return the average sleep quality for all users", () => {
    const avgSleepQualityAllUsers = sleep.avgSleepQualityAllUsers();
    expect(avgSleepQualityAllUsers).to.equal();
  });
});
