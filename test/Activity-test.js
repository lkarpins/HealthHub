import { expect } from "chai";
import Activity from "../src/Activity";
const sampleActivityData = require("../src/data/sample-activity-data");

describe("Activity", () => {
  let user1Activity;
  let user2Activity;
  beforeEach(() => {
    user1Activity = new Hydration(1, sampleActivityData);
    user2Activity = new Hydration(2, sampleActivityData);
  });
  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });