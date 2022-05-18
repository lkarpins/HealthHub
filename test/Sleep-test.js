import { expect } from "chai";
import Sleep from "../src/Sleep";
const sampleSleepData = require("../src/data/sample-sleep-data");

describe("Sleep", () => {
  let userSleep;
  beforeEach(() => {
    userSleep = new Sleep({
      sampleSleepData[0]
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

  it("should be able to store hours slept", () => {
    expect(sleep.hoursSlept).to.equal(6.1);
  });

  it("should be able to store sleep quality ", () => {
    expect(sleep.sleepQuality).to.equal(2.2);
  });

  it.skip("should be able to return the average hours of sleep per day", () => {
    const avgSleepPerDay = sleep.avgSleepPerDay();
    expect(avgSleepPerDay).to.equal();
  });

  it.skip("should be able to return the average quality of sleep per day", () => {
    const avgSleepQualityPerDay = sleep.avgSleepQualityPerDay();
    expect(avgSleepQualityPerDay).to.equal();
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
