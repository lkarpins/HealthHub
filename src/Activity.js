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
    const userActive = activityAPIResponse.filter(userActivityData => {
     if (userActivityData.userID === this.userID) {
      return userActivityData;
     }
    });
    userActive.reverse();
    return userActive; 
  };

  // -For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
  returnDailyMilesWalked = (date, user) => {
    let dailyMiles = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return Math.round( 
      ((dailyMiles.numSteps / (5280 / user.strideLength)) + Number.EPSILON) * 10 
    ) / 10
  };

  returnMinutesActivePerDay =  date => {
    let dailyMins = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyMins.minutesActive;
  };

  returnAvgMinutesActivePerWeek = weekStart => {
    const targetStartDate = this.userActivityData.findIndex(entry => {
       return entry.date === weekStart;
     });
     let chosenWeek = this.userActivityData
       .slice(targetStartDate, targetStartDate + 7)
       .reverse()
     let weeklyMinutesActive = {
       date: [],
       minutesActive: []
     };
      weeklyMinutesActive.date = chosenWeek.map(entry => entry.date);
      weeklyMinutesActive.minutesActive = chosenWeek.map(entry => entry.minutesActive);
      const totalWeeklyMinutesActive = weeklyMinutesActive.minutesActive.reduce((acc, mins) => {
        return acc += mins 
      }, 0)
     const averageWeeklyActiveMinutes = 
       Math.round(
         (totalWeeklyMinutesActive / weeklyMinutesActive.minutesActive.length + Number.EPSILON) * 10
       ) / 10
      return averageWeeklyActiveMinutes;
  };

  returnStatusOfDailyStepGoal = (date, user) => {
    let dailyStatus = this.userActivityData.find(entry => {
      return entry.date === date;
    });
    return dailyStatus.numSteps >= user.dailyStepGoal
  };

  // -For a user, find all the days where they exceeded their step goal
  returnDaysStepGoalExceeded = (date, user) => {
    let allTimeStatus = this.userActivityData.filter(entry => {
      if (this.returnStatusOfDailyStepGoal(date, user)) {
        return entry.date
      }
    });
    console.log(allTimeStatus)
  }
  // -For a user, find their all-time stair climbing record
  returnAllTimeStairClimbRecord = () => {};

  // -For all users, what is the average number of:
  // stairs climbed for a specified date
  // steps taken for a specific date
  // minutes active for a specific date
  returnAvgActivityDataAllUsers = date => {};
}


export default Activity;
