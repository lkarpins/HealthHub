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

});