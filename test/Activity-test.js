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

  it("should be an instance of Hydration", () => {
    expect(user1Activity).to.be.an.instanceof(Activity);
    expect(user2Activity).to.be.an.instanceof(Activity);
  });

});