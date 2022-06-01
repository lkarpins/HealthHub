import User from "../src/User";

class Activity {
  constructor(userID, activityAPIResponse) {
    this.userID = userID;
    this.userActivityData = this.setUserActivityData(activityAPIResponse);
    this.date = this.userActivityData[0].date;
    this.numSteps = this.userActivityData[0].numSteps;
    this.minutesActive = this.userActivityData[0].minutesActive;
    this.flightsOfStairs = this.userActivityData[0].flightsOfStairs;
    this.activityAPIResponse = activityAPIResponse;
  }

  setUserActivityData = activityAPIResponse => {
    const userActive = actvityAPIResponse.filter(userActivityData => {
      if (userActivityData.userID === this.userID) {
        return userActivityData;
      }
    });
    userActive.reverse();
    return userActive;
  };

  // -For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
  returnDailyMilesWalked = date => {
    let dailyMiles = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return Math.round(dailyMiles.numSteps * user.strideLength) / 5280;
  };

  // -For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
  returnMinutesActivePerDay = (id, date) => {};

  // -For a user, how many minutes active did they average for a given week (7 days)?
  returnAvgMinutesActivePerWeek = weekStart => {};
}
export default Activity;
