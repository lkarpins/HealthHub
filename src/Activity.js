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

  // -For a user, did they reach their step goal for a given day (specified by a date)?

  returnStatusOfDailyStepGoal = date => {
    let dailyStatus = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    if (this.numSteps >= user.dailyStepGoal) {
      return true;
    }
    return dailyStatus;
  };

  // -For a user, find all the days where they exceeded their step goal
  returnDaysStepGoalExceeded = () => {};

  // -For a user, find their all-time stair climbing record
  returnAllTimeStairClimbRecord = () => {};

  // -For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
  returnAvgActivityDataAllUsers = date => {};
}
export default Activity;
